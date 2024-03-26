'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
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
var r1_Joining = _r1_t9.Joining;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Mosaic-NotDef', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7, _r271_t8, _r271_tag9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_UPM = _r271_t1.UPM;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_alias = _r271_t5.alias;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('.null', null, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.setWidth(0);
            r276_currentGlyph.glyphRank = 9998;
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('space', ' ', function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            var r280_df = r271_DivFrame(r271_para.diversityI);
            r280_currentGlyph.setWidth(r280_df.width);
            return void 0;
        });
        r271_alias('nbsp', 160, 'space');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('markDemoBaseSpace', 57358, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            var r284_df = r271_DivFrame(1);
            r284_currentGlyph.setWidth(r284_df.width);
            r284_currentGlyph.include(r284_df.markSet.plus());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('markBaseSpace', 57357, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_df = r271_DivFrame(r271_para.diversityI);
            r289_currentGlyph.setWidth(r289_df.width);
            r289_currentGlyph.include(r289_df.markSet.e());
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('sp1', null, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            var r294_df = r271_DivFrame(1);
            r294_currentGlyph.setWidth(r294_df.width);
            return void 0;
        });
        r271_alias('enquad', 8192, 'sp1');
        r271_alias('ensp', 8194, 'sp1');
        r271_alias('brailleBlank', 10240, 'sp1');
        r271_alias('figureSpace', 8199, 'sp1');
        r271_alias('punctuationSpace', 8200, 'sp1');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('zwsp', 8203, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.setWidth(0);
            return void 0;
        });
        r271_alias('nonmarkingreturn', 13, 'zwsp');
        r271_alias('wj', 8288, 'zwsp');
        r271_alias('funcApp', 8289, 'zwsp');
        r271_alias('invisibleTimes', 8290, 'zwsp');
        r271_alias('invisibleSeparator', 8291, 'zwsp');
        r271_alias('invisiblePlus', 8292, 'zwsp');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cgj', 847, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            r302_currentGlyph.setWidth(0);
            r1_Joining.set(r302_currentGlyph, r1_Joining.Classes.Mid);
            return void 0;
        });
        var r271_FractionEmSp = function (r304_name, r304_code, r304_d) {
            var _r304_t0, _r304_t1;
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r304_name, r304_code, function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_df = r271_DivFrame(r271_para.diversityII < 1 ? 2 / r304_d : 1);
                r307_currentGlyph.setWidth(r307_df.width);
                return void 0;
            });
        };
        r271_FractionEmSp('threePerEmSp', 8196, 3);
        r271_FractionEmSp('fourPerEmsp', 8197, 4);
        r271_FractionEmSp('sixPerEmsp', 8198, 6);
        r271_FractionEmSp('thinSp', 8201, 6);
        r271_FractionEmSp('hairSp', 8202, 12);
        r271_FractionEmSp('mediumSp', 8287, 4.5);
        r271_alias('nnbsp', 8239, 'thinSp');
        return function () {
            var r311_FMosaicWide, r311_MosaicNameSuffix, r311_MosaicWidth, r311_MosaicWidthScalar, _r311_t3, _r311_t5, _r311_t6, _r311_tag7;
            var r311_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r271_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r271_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r311_t0 = r311_WidthKinds;
            var _r311_t1 = _r311_t0.length;
            var _r311_t2 = 0;
            var _r311_t4 = _r311_t2 < _r311_t1;
            while (_r311_t4) {
                _r311_t3 = _r311_t0[_r311_t2];
                r311_FMosaicWide = _r311_t3[0];
                r311_MosaicNameSuffix = _r311_t3[1];
                r311_MosaicWidth = _r311_t3[2];
                r311_MosaicWidthScalar = _r311_t3[3];
                (function () {
                    var r314_MosaicDesiredWidth = r271_WideWidth1;
                    var r314_MosaicMiddle = r311_MosaicWidth / 2;
                    var r314_MosaicUnitWidth = r311_MosaicWidth / r311_MosaicWidthScalar;
                    var r314_MangleUnicode = function (r315_unicode, r315__desiredOverride) {
                        var _r315_t0, _r315_t1;
                        return r311_MosaicWidth === (r315__desiredOverride || r314_MosaicDesiredWidth) ? r315_unicode : void 0;
                    };
                    var r314_MangleName = function (r316_name) {
                        var _r316_t0, _r316_t1;
                        return r316_name + r311_MosaicNameSuffix;
                    };
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r314_MangleName('emsp'), r314_MangleUnicode(8195), function () {
                        var _r319_t1;
                        var _r319_t0 = this;
                        var r319_currentGlyph = _r319_t0;
                        r319_currentGlyph.setWidth(r271_para.isQuasiProportional && r311_MosaicWidthScalar > 1 ? r271_UPM : r311_MosaicWidth);
                        return void 0;
                    });
                    return r271_alias(r314_MangleName('emquad'), r314_MangleUnicode(8193), r314_MangleName('emsp'));
                }());
                _r311_t5 = _r311_t2 = _r311_t2 + 1;
                _r311_t4 = _r311_t2 < _r311_t1;
            }
            return _r311_t5;
        }();
    });
    return void 0;
});
