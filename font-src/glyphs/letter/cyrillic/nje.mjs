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
var r1_DependentSelector = _r1_t9.DependentSelector;
var r1_CvDecompose = _r1_t9.CvDecompose;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Nje', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_slabType, r271_Yeri, _r271_t11, _r271_t14, _r271_t15, _r271_t16, _r271_t17, _r271_tag18, _r271_t19, _r271_tag20;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_O = _r271_t1.O;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared'].resolve();
        var r271_CreateDependentComposite = _r271_t6.CreateDependentComposite;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Cyrillic-Yeri'].resolve();
        var r271_CyrlYeriUprightShape = _r271_t8.CyrlYeriUprightShape;
        var r271_CyrlYeriRoundShape = _r271_t8.CyrlYeriRoundShape;
        var r271_CyrlYeriCursiveShape = _r271_t8.CyrlYeriCursiveShape;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABTOPLEFT$5sIl4 = 1;
        var r271_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 = 2;
        var r271_xn$SLABTAILEDCYRILLIC$5sIl7 = 3;
        var r271_xn$SLABALL$5sIl = 4;
        var r271_LeftHalf = function (r277_slabType, r277_df, r277_top) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t0, _r279_t2;
                var _r279_t1 = this;
                var r279_currentGlyph = _r279_t1;
                r279_currentGlyph.include(r271_VBar.l(r277_df.leftSB, 0, r277_top, r277_df.mvs));
                r279_currentGlyph.include(r271_HBar.m(r277_df.leftSB, r277_df.middle, r277_top / 2));
                var r279_sf = r271_SerifFrame.fromDf(r277_df, r277_top, 0).slice(0, 1);
                r279_currentGlyph.include((_r279_t0 = r277_slabType, _r279_t0 === r271_xn$SLABNONE$5sIl ? function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    return void 0;
                } : _r279_t0 === r271_xn$SLABTOPLEFT$5sIl4 ? r279_sf.lt.outer : _r279_t0 === r271_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457 ? function () {
                    var _r305_t1;
                    var _r305_t0 = this;
                    var r305_currentGlyph = _r305_t0;
                    r305_currentGlyph.include(r279_sf.lt.outer, true, true);
                    r305_currentGlyph.include(r279_sf.rb.outer);
                    return void 0;
                } : _r279_t0 === r271_xn$SLABTAILEDCYRILLIC$5sIl7 ? r279_sf.enoughSpaceForFullSerifs ? function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r279_sf.lt.full, true, true);
                    r295_currentGlyph.include(r279_sf.rt.full);
                    r295_currentGlyph.include(r279_sf.lb.full);
                    return void 0;
                } : function () {
                    var _r300_t1;
                    var _r300_t0 = this;
                    var r300_currentGlyph = _r300_t0;
                    r300_currentGlyph.include(r279_sf.lt.outer, true, true);
                    r300_currentGlyph.include(r279_sf.rt.outer);
                    r300_currentGlyph.include(r279_sf.lb.outer);
                    return void 0;
                } : _r279_t0 === r271_xn$SLABALL$5sIl ? r279_sf.enoughSpaceForFullSerifs ? function () {
                    var _r284_t1;
                    var _r284_t0 = this;
                    var r284_currentGlyph = _r284_t0;
                    r284_currentGlyph.include(r279_sf.lt.full, true, true);
                    r284_currentGlyph.include(r279_sf.rt.full);
                    r284_currentGlyph.include(r279_sf.lb.full);
                    r284_currentGlyph.include(r279_sf.rb.inner);
                    return void 0;
                } : function () {
                    var _r290_t1;
                    var _r290_t0 = this;
                    var r290_currentGlyph = _r290_t0;
                    r290_currentGlyph.include(r279_sf.lt.outer, true, true);
                    r290_currentGlyph.include(r279_sf.rt.outer);
                    r290_currentGlyph.include(r279_sf.lb.outer);
                    return void 0;
                } : void 0));
                return void 0;
            };
        };
        var r271_RightHalf = function (r310_Yeri, r310_df, r310_top) {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                r312_currentGlyph.include(r310_Yeri(r310_top, new r271_xn$NamedParameterPair$2Lrc9b('left', r310_df.middle - r310_df.mvs / 2 * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r310_df.rightSB - r271_O), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r310_df.mvs)));
                r312_currentGlyph.ejectTagged('serifYeriLT');
                r312_currentGlyph.ejectTagged('serifYeriLB');
                return void 0;
            };
        };
        var r271_NjeReduction = { 'serifed': 'serifedExceptBottomRight' };
        var r271_LeftHalfConfig = {
            'serifless': [r271_xn$SLABNONE$5sIl],
            'topLeftSerifed': [r271_xn$SLABTOPLEFT$5sIl4],
            'topLeftBottomRightSerifed': [r271_xn$SLABTOPLEFTBOTTOMRIGHT$5sIl457],
            'serifed': [r271_xn$SLABALL$5sIl],
            'serifedExceptBottomRight': [r271_xn$SLABTAILEDCYRILLIC$5sIl7]
        };
        var _r271_t9 = Object.entries(r271_LeftHalfConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_slabType = _r271_t11[1][0];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Nje/leftHalf.' + r271_suffix, null, function () {
                    var _r324_t1;
                    var _r324_t0 = this;
                    var r324_currentGlyph = _r324_t0;
                    var r324_df = r271_DivFrame(r271_para.diversityM, 3);
                    r324_currentGlyph.include(r324_df.markSet.capital());
                    r324_currentGlyph.setWidth(r324_df.width);
                    r324_currentGlyph.include(r271_LeftHalf(r271_slabType, r324_df, r271_CAP));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/nje/leftHalf.' + r271_suffix, null, function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    var r330_df = r271_DivFrame(r271_para.diversityM, 3);
                    r330_currentGlyph.include(r330_df.markSet.e());
                    r330_currentGlyph.setWidth(r330_df.width);
                    r330_currentGlyph.include(r271_LeftHalf(r271_slabType, r330_df, r271_XH));
                    return void 0;
                });
            }());
        }
        var r271_YerConfig = {
            'corner': [r271_CyrlYeriUprightShape],
            'round': [r271_CyrlYeriRoundShape],
            'cursive': [r271_CyrlYeriCursiveShape]
        };
        var _r271_t12 = Object.entries(r271_YerConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_Yeri = _r271_t14[1][0];
            _r271_t14[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Nje/rightHalf.' + r271_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    var r339_df = r271_DivFrame(r271_para.diversityM, 3);
                    r339_currentGlyph.include(r339_df.markSet.capital());
                    r339_currentGlyph.setWidth(r339_df.width);
                    r339_currentGlyph.include(r271_RightHalf(r271_Yeri, r339_df, r271_CAP));
                    r1_DependentSelector.set(r339_currentGlyph, r271_Yeri === r271_CyrlYeriUprightShape ? 'full' : 'reduced');
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/nje/rightHalf.' + r271_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    var r345_df = r271_DivFrame(r271_para.diversityM, 3);
                    r345_currentGlyph.include(r345_df.markSet.e());
                    r345_currentGlyph.setWidth(r345_df.width);
                    r345_currentGlyph.include(r271_RightHalf(r271_Yeri, r345_df, r271_XH));
                    r1_DependentSelector.set(r345_currentGlyph, r271_Yeri === r271_CyrlYeriUprightShape ? 'full' : 'reduced');
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('cyrl/Nje/leftHalf/full', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Nje/leftHalf'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/Nje/leftHalf'));
        r271_xn$selectvariant$7Hrq('cyrl/nje/leftHalf/full', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/nje/leftHalf'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/nje/leftHalf'));
        r271_xn$selectvariant$7Hrq('cyrl/Nje/leftHalf/reduced', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Nje/leftHalf/reduced'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/Nje/leftHalf'));
        r271_xn$selectvariant$7Hrq('cyrl/nje/leftHalf/reduced', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/nje/leftHalf/reduced'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/nje/leftHalf'));
        r271_xn$selectvariant$7Hrq('cyrl/Nje/rightHalf');
        r271_xn$selectvariant$7Hrq('cyrl/nje/rightHalf');
        r271_CreateDependentComposite('cyrl/Nje', 1034, 'cyrl/Nje/rightHalf', {
            'full': 'cyrl/Nje/leftHalf/full',
            'reduced': 'cyrl/Nje/leftHalf/reduced'
        });
        return r271_CreateDependentComposite('cyrl/nje', 1114, 'cyrl/nje/rightHalf', {
            'full': 'cyrl/nje/leftHalf/full',
            'reduced': 'cyrl/nje/leftHalf/reduced'
        });
    });
    return void 0;
});
