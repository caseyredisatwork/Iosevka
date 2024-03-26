'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
import * as _s0_t2 from '../../support/geometry/transform.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_getGrTree = _r1_t9.getGrTree;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
var _r1_t10 = _s0_t1;
var r1_AnyCv = _r1_t10.AnyCv;
var r1_DotlessOrNot = _r1_t10.DotlessOrNot;
var r1_CvDecompose = _r1_t10.CvDecompose;
var r1_MathSansSerif = _r1_t10.MathSansSerif;
var _r1_t11 = _s0_t1;
var r1_NumeratorForm = _r1_t11.NumeratorForm;
var r1_DenominatorForm = _r1_t11.DenominatorForm;
var _r1_t12 = _s0_t2;
var r1_Transform = _r1_t12.Transform;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r271_block, _r271_t4, _r271_t6;
    var _r271_t3 = this;
    var _r271_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r271_t1 = _r271_t0.length;
    var _r271_t2 = 0;
    var _r271_t5 = _r271_t2 < _r271_t1;
    while (_r271_t5) {
        _r271_t6 = (r271_block = _r271_t0[_r271_t2], r271_block(_r271_t3), _r271_t2 = _r271_t2 + 1);
        _r271_t5 = _r271_t2 < _r271_t1;
    }
    return _r271_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r275_xn$Capture_Ext$2Lrc2b) {
    var _r275_t0, _r275_t1;
    r275_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r275_xn$Capture_Ext$2Lrc2b, 'Autobuild-Transformed-Shared', function (r276_xn$Capture$2Lrc8, r276_xn$ExportCapture$2Lrc4b) {
        var _r276_t6, _r276_t7;
        var _r276_t0 = r276_xn$Capture$2Lrc8;
        var r276_xn$createAndSaveGlyphImpl$2Lrc3c = _r276_t0['$createAndSaveGlyphImpl$'];
        var r276_xn$NamedParameterPair$2Lrc9b = _r276_t0['$NamedParameterPair$'];
        var r276_xn$assignUnicodeImpl$2Lrc8b = _r276_t0['$assignUnicodeImpl$'];
        var r276_xn$execState$2Lrc0b = _r276_t0['$execState$'];
        var r276_DivFrame = _r276_t0.DivFrame;
        var _r276_t1 = r276_xn$Capture$2Lrc8.Metrics;
        var r276_CAP = _r276_t1.CAP;
        var r276_Descender = _r276_t1.Descender;
        var r276_Scale = _r276_t1.Scale;
        var r276_Translate = _r276_t1.Translate;
        var r276_AccentStackOffset = _r276_t1.AccentStackOffset;
        var _r276_t2 = r276_xn$Capture$2Lrc8.SpiroFns;
        var _r276_t3 = r276_xn$Capture$2Lrc8.BooleFns;
        var _r276_t4 = r276_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r276_Ungizmo = _r276_t4.Ungizmo;
        var r276_Regizmo = _r276_t4.Regizmo;
        var _r276_t5 = r276_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r276_xn$queryglyph$1aao = _r276_t5['query-glyph'];
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'wrapName': r276_wrapName };
        });
        var r276_wrapName = function (r281_groupID, r281_baseName) {
            var _r281_t0, _r281_t1;
            return '' + r281_groupID + '{' + r281_baseName + '}';
        };
        var r276_suggestName = function (r282__name) {
            var r282_j, _r282_t0, _r282_t1;
            var r282_name = r282__name;
            if (r276_xn$queryglyph$1aao(r282_name)) {
                r282_j = 2;
                while (r276_xn$queryglyph$1aao(r282_name + r282_j))
                    r282_j = r282_j + 1;
                r282_name = r282_name + r282_j;
            }
            return r282_name;
        };
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'suggestMappedName': r276_suggestMappedName };
        });
        var r276_suggestMappedName = function (r285_map, r285_key, r285_name) {
            var _r285_t0, _r285_t1;
            if (r285_map[r285_key])
                return r285_map[r285_key];
            var r285_amended = r276_suggestName(r285_name);
            r285_map[r285_key] = r285_amended;
            return r285_amended;
        };
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r287_t0, _r287_t1;
            return { 'extendRelatedGlyphs': r276_extendRelatedGlyphs };
        });
        var r276_extendRelatedGlyphs = function (r288_groupID, r288_records) {
            var r288_record, r288_srcName, r288_dstName, r288_tree, r288_gr, r288_origSrcName, r288_relSrcName, r288_origDstName, r288_relDstName, r288_relatedRecord, _r288_t3, _r288_t4, _r288_t5, _r288_t6, _r288_t7, _r288_t8;
            var r288_relatedRecords = [];
            var r288_relSets = [];
            var r288_targetNameMap = {};
            var _r288_t0 = r288_records;
            var _r288_t1 = _r288_t0.length;
            var _r288_t2 = 0;
            while (_r288_t2 < _r288_t1) {
                r288_record = _r288_t0[_r288_t2];
                r288_srcName = r288_record[1];
                r288_dstName = r276_wrapName(r288_groupID, r288_srcName);
                r276_suggestMappedName(r288_targetNameMap, r288_srcName, r288_dstName);
                r288_tree = r1_getGrTree(r288_srcName, [
                    r1_DotlessOrNot,
                    r1_AnyCv
                ], r276_xn$queryglyph$1aao);
                _r288_t3 = r288_tree;
                _r288_t4 = _r288_t3.length;
                _r288_t5 = 0;
                while (_r288_t5 < _r288_t4) {
                    _r288_t6 = _r288_t3[_r288_t5];
                    r288_gr = _r288_t6[0];
                    r288_origSrcName = _r288_t6[1];
                    r288_relSrcName = _r288_t6[2];
                    if (r276_xn$queryglyph$1aao(r288_relSrcName)) {
                        r288_origDstName = r276_suggestMappedName(r288_targetNameMap, r288_origSrcName, r276_wrapName(r288_groupID, r288_origSrcName));
                        r288_relDstName = r276_suggestMappedName(r288_targetNameMap, r288_relSrcName, r276_wrapName(r288_groupID, r288_relSrcName));
                        r288_relatedRecord = r288_record.slice(0);
                        r288_relatedRecord[0] = null;
                        r288_relatedRecord[1] = r288_relSrcName;
                        r288_relatedRecord[2] = true;
                        r288_relatedRecords.push(r288_relatedRecord);
                        r288_relSets.push([
                            r288_gr,
                            r288_origDstName,
                            r288_relDstName
                        ]);
                    }
                    _r288_t5 = _r288_t5 + 1;
                }
                _r288_t2 = _r288_t2 + 1;
            }
            return [
                r288_records.concat(r288_relatedRecords),
                r288_relSets,
                r288_targetNameMap
            ];
        };
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r294_t0, _r294_t1;
            return { 'link-relations': r276_xn$linkrelations$5sIl };
        });
        var r276_xn$linkrelations$5sIl = function (r295_relSets) {
            var r295_gr, r295_origDstName, r295_relDstName, _r295_t3, _r295_t4, _r295_t5, _r295_t7;
            var r295_rs = new r1_Set();
            var _r295_t0 = r295_relSets;
            var _r295_t1 = _r295_t0.length;
            var _r295_t2 = 0;
            var _r295_t6 = _r295_t2 < _r295_t1;
            while (_r295_t6) {
                _r295_t7 = (_r295_t3 = _r295_t0[_r295_t2], r295_gr = _r295_t3[0], r295_origDstName = _r295_t3[1], r295_relDstName = _r295_t3[2], r276_xn$queryglyph$1aao(r295_origDstName) ? (r295_gr.set(r276_xn$queryglyph$1aao(r295_origDstName), r295_relDstName), r276_xn$queryglyph$1aao(r295_relDstName) ? r276_xn$queryglyph$1aao(r295_origDstName).tryBecomeMirrorOf(r276_xn$queryglyph$1aao(r295_relDstName), r295_rs) : void 0) : void 0, _r295_t2 = _r295_t2 + 1);
                _r295_t6 = _r295_t2 < _r295_t1;
            }
            return _r295_t7;
        };
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r299_t0, _r299_t1;
            return { 'ToSuperscript': r276_ToSuperscript };
        });
        var r276_ToSuperscript = function (r300_div) {
            var _r300_t0, _r300_t1;
            return function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                var r302_df = r276_DivFrame(r302_df);
                r302_currentGlyph.include(r276_Ungizmo(), true);
                r302_currentGlyph.include(r276_Translate(-r302_df.middle, -r276_CAP), true);
                r302_currentGlyph.include(r276_Scale(r276_ToSuperscript.crowdAdjScale), true);
                r302_currentGlyph.include(r276_Translate(r302_df.middle, r276_CAP + r276_AccentStackOffset / 2), true);
                r302_currentGlyph.include(r276_Regizmo(), true);
                return void 0;
            };
        };
        r276_ToSuperscript.crowd = 3.5;
        r276_ToSuperscript.crowdAdjScale = 0.7;
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r309_t0, _r309_t1;
            return { 'ToSubscript': r276_ToSubscript };
        });
        var r276_ToSubscript = function (r310_div) {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                var r312_df = r276_DivFrame(r312_df);
                r312_currentGlyph.include(r276_Ungizmo(), true);
                r312_currentGlyph.include(r276_Translate(-r312_df.middle, 0), true);
                r312_currentGlyph.include(r276_Scale(r276_ToSubscript.crowdAdjScale), true);
                r312_currentGlyph.include(r276_Translate(r312_df.middle, r276_Descender / 2), true);
                r312_currentGlyph.include(r276_Regizmo(), true);
                return void 0;
            };
        };
        r276_ToSubscript.crowd = 3.5;
        return r276_ToSubscript.crowdAdjScale = 0.7;
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r320_xn$Capture_Ext$2Lrc2b) {
    var _r320_t0, _r320_t1;
    r320_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r320_xn$Capture_Ext$2Lrc2b, 'Autobuild-Transformed', function (r321_xn$Capture$2Lrc8, r321_xn$ExportCapture$2Lrc4b) {
        var _r321_t12, _r321_t13, _r321_t14, _r321_tag15, _r321_t16, _r321_tag17, _r321_t18, _r321_tag19, _r321_t20, _r321_tag21, _r321_t22, _r321_tag23;
        var _r321_t0 = r321_xn$Capture$2Lrc8;
        var r321_xn$createAndSaveGlyphImpl$2Lrc3c = _r321_t0['$createAndSaveGlyphImpl$'];
        var r321_xn$NamedParameterPair$2Lrc9b = _r321_t0['$NamedParameterPair$'];
        var r321_xn$assignUnicodeImpl$2Lrc8b = _r321_t0['$assignUnicodeImpl$'];
        var r321_xn$execState$2Lrc0b = _r321_t0['$execState$'];
        var r321_para = _r321_t0.para;
        var r321_AS_BASE = _r321_t0.AS_BASE;
        var r321_ALSO_METRICS = _r321_t0.ALSO_METRICS;
        var _r321_t1 = r321_xn$Capture$2Lrc8.Metrics;
        var r321_CAP = _r321_t1.CAP;
        var r321_XH = _r321_t1.XH;
        var r321_Descender = _r321_t1.Descender;
        var r321_Scale = _r321_t1.Scale;
        var r321_Translate = _r321_t1.Translate;
        var r321_GlobalTransform = _r321_t1.GlobalTransform;
        var r321_O = _r321_t1.O;
        var _r321_t2 = r321_xn$Capture$2Lrc8.SpiroFns;
        var _r321_t3 = r321_xn$Capture$2Lrc8.BooleFns;
        var _r321_t4 = r321_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r321_Ungizmo = _r321_t4.Ungizmo;
        var r321_Regizmo = _r321_t4.Regizmo;
        var r321_ScaleAround = _r321_t4.ScaleAround;
        var _r321_t5 = r321_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r321_xn$referglyph$1aao = _r321_t5['refer-glyph'];
        var r321_xn$queryglyph$1aao = _r321_t5['query-glyph'];
        var _r321_t6 = r321_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r321_Fork = _r321_t6.Fork;
        var r321_Miniature = _r321_t6.Miniature;
        var _r321_t7 = r321_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r321_markMiddle = _r321_t7.markMiddle;
        var _r321_t8 = r321_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r321_aboveMarkBot = _r321_t8.aboveMarkBot;
        var r321_aboveMarkMid = _r321_t8.aboveMarkMid;
        var r321_aboveMarkTop = _r321_t8.aboveMarkTop;
        var _r321_t9 = r321_xn$Capture$2Lrc8['Mark-Below'].resolve();
        var r321_belowMarkBot = _r321_t9.belowMarkBot;
        var r321_belowMarkMid = _r321_t9.belowMarkMid;
        var r321_belowMarkTop = _r321_t9.belowMarkTop;
        var _r321_t10 = r321_xn$Capture$2Lrc8['Autobuild-Transformed-Shared'].resolve();
        var r321_extendRelatedGlyphs = _r321_t10.extendRelatedGlyphs;
        var r321_xn$linkrelations$5sIl = _r321_t10['link-relations'];
        var _r321_t11 = r321_xn$Capture$2Lrc8['Autobuild-Transformed-Shared'].resolve();
        var r321_ToSuperscript = _r321_t11.ToSuperscript;
        var r321_ToSubscript = _r321_t11.ToSubscript;
        (function () {
            var _r331_t0, _r331_tag1;
            var r331_createSuperscripts = function (r332_prefix, r332_gr, r332__records) {
                var r332_unicode, r332_glyphid, r332_fRelated, _r332_t4, _r332_t5, _r332_t6;
                var _r332_t0 = r321_extendRelatedGlyphs(r332_prefix, r332__records);
                var r332_records = _r332_t0[0];
                var r332_relSets = _r332_t0[1];
                var r332_targetNameMap = _r332_t0[2];
                var r332_pendingGlyphs = r332_records.map(function (r333_record) {
                    var _r333_t0, _r333_t1;
                    return r333_record[1];
                });
                var r332_miniatureFont = r321_Miniature(r332_pendingGlyphs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_ToSuperscript.crowd), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_ToSuperscript.crowdAdjScale), new r321_xn$NamedParameterPair$2Lrc9b('mono', true), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 0.75));
                var _r332_t1 = r332_records;
                var _r332_t2 = _r332_t1.length;
                var _r332_t3 = 0;
                while (_r332_t3 < _r332_t2) {
                    _r332_t4 = _r332_t1[_r332_t3];
                    r332_unicode = _r332_t4[0];
                    r332_glyphid = _r332_t4[1];
                    r332_fRelated = _r332_t4[2];
                    if (!r321_xn$queryglyph$1aao(r332_targetNameMap[r332_glyphid])) {
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r332_targetNameMap[r332_glyphid], r332_unicode, function () {
                            var _r341_t1;
                            var _r341_t0 = this;
                            var r341_currentGlyph = _r341_t0;
                            if (!r332_miniatureFont.queryByName(r332_glyphid))
                                throw new Error('Cannot find glyph ' + r332_glyphid);
                            var r341_middle = r332_miniatureFont.queryByName(r332_glyphid).advanceWidth / 2;
                            r341_currentGlyph.include(r332_miniatureFont.queryByName(r332_glyphid), r321_AS_BASE, r321_ALSO_METRICS);
                            r341_currentGlyph.include(r321_ToSuperscript());
                            r1_IsSuperscript.set(r341_currentGlyph);
                            return void 0;
                        });
                        if (!r332_fRelated && r332_gr)
                            r332_gr.set(r321_xn$queryglyph$1aao(r332_glyphid), r332_targetNameMap[r332_glyphid]);
                    }
                    _r332_t3 = _r332_t3 + 1;
                }
                r321_xn$linkrelations$5sIl(r332_relSets);
                return [
                    r332_targetNameMap,
                    r332_records
                ];
            };
            r331_createSuperscripts('sup', null, [
                [
                    170,
                    'aSbRsbUnderlineBelow'
                ],
                [
                    186,
                    'oSbRsbUnderlineBelow'
                ],
                [
                    8304,
                    'zero.lnum'
                ],
                [
                    185,
                    'one.lnum'
                ],
                [
                    178,
                    'two.lnum'
                ],
                [
                    179,
                    'three.lnum'
                ],
                [
                    8308,
                    'four.lnum'
                ],
                [
                    8309,
                    'five.lnum'
                ],
                [
                    8310,
                    'six.lnum'
                ],
                [
                    8311,
                    'seven.lnum'
                ],
                [
                    8312,
                    'eight.lnum'
                ],
                [
                    8313,
                    'nine.lnum'
                ],
                [
                    688,
                    'h'
                ],
                [
                    689,
                    'hHookTop'
                ],
                [
                    690,
                    'j'
                ],
                [
                    691,
                    'r'
                ],
                [
                    692,
                    'turnr'
                ],
                [
                    693,
                    'rTurnRTail'
                ],
                [
                    694,
                    'invSmcpR'
                ],
                [
                    695,
                    'w'
                ],
                [
                    696,
                    'y'
                ],
                [
                    704,
                    'smallGlottalStop'
                ],
                [
                    705,
                    'smallRevGlottalStop'
                ],
                [
                    736,
                    'latn/gamma'
                ],
                [
                    737,
                    'l'
                ],
                [
                    738,
                    's'
                ],
                [
                    739,
                    'x'
                ],
                [
                    740,
                    'revGlottalStop'
                ],
                [
                    8305,
                    'i'
                ],
                [
                    8319,
                    'n'
                ],
                [
                    7491,
                    'a'
                ],
                [
                    7492,
                    'turna'
                ],
                [
                    7493,
                    'scripta'
                ],
                [
                    7494,
                    'turnae'
                ],
                [
                    7495,
                    'b'
                ],
                [
                    7496,
                    'd'
                ],
                [
                    7497,
                    'e'
                ],
                [
                    7498,
                    'turne'
                ],
                [
                    7499,
                    'latn/epsilon'
                ],
                [
                    7500,
                    'turnepsilon'
                ],
                [
                    7501,
                    'g'
                ],
                [
                    7502,
                    'turni'
                ],
                [
                    7503,
                    'k'
                ],
                [
                    7504,
                    'm'
                ],
                [
                    7505,
                    'eng'
                ],
                [
                    7506,
                    'o'
                ],
                [
                    7507,
                    'turnc'
                ],
                [
                    7508,
                    'oupperhalf'
                ],
                [
                    7509,
                    'olowerhalf'
                ],
                [
                    7510,
                    'p'
                ],
                [
                    7511,
                    't'
                ],
                [
                    7512,
                    'u'
                ],
                [
                    7513,
                    'uSideways'
                ],
                [
                    7514,
                    'turnm'
                ],
                [
                    7515,
                    'v'
                ],
                [
                    7516,
                    'latinAyin'
                ],
                [
                    7517,
                    'grek/beta'
                ],
                [
                    7518,
                    'grek/gamma'
                ],
                [
                    7519,
                    'grek/delta'
                ],
                [
                    7520,
                    'grek/phi'
                ],
                [
                    7521,
                    'grek/chi'
                ],
                [
                    7544,
                    'cyrl/en'
                ],
                [
                    7579,
                    'turnscripta'
                ],
                [
                    7580,
                    'c'
                ],
                [
                    7581,
                    'cCurlyTail'
                ],
                [
                    7582,
                    'eth'
                ],
                [
                    7583,
                    'latn/epsilonRev'
                ],
                [
                    7584,
                    'f'
                ],
                [
                    7585,
                    'dotlessjBar'
                ],
                [
                    7586,
                    'gScript'
                ],
                [
                    7587,
                    'turnh'
                ],
                [
                    7588,
                    'iBarOver'
                ],
                [
                    7589,
                    'latn/iota'
                ],
                [
                    7590,
                    'smcpI'
                ],
                [
                    7591,
                    'smcpIBarOver'
                ],
                [
                    7592,
                    'jCurlyTail'
                ],
                [
                    7595,
                    'smcpL'
                ],
                [
                    7593,
                    'lRTail'
                ],
                [
                    7594,
                    'lPalatalHook'
                ],
                [
                    7596,
                    'mLTail'
                ],
                [
                    7597,
                    'turnmLeg'
                ],
                [
                    7598,
                    'nLTail'
                ],
                [
                    7599,
                    'nHookBottom'
                ],
                [
                    7600,
                    'smcpN'
                ],
                [
                    7601,
                    'obar'
                ],
                [
                    7602,
                    'latn/phi'
                ],
                [
                    7603,
                    'sRTail'
                ],
                [
                    7604,
                    'esh'
                ],
                [
                    7605,
                    'tLTail'
                ],
                [
                    7606,
                    'uLongBarOver'
                ],
                [
                    7607,
                    'latn/upsilon'
                ],
                [
                    7608,
                    'smcpU'
                ],
                [
                    7609,
                    'vHookTop'
                ],
                [
                    7610,
                    'turnv'
                ],
                [
                    7612,
                    'zRTailBR'
                ],
                [
                    7613,
                    'zCurlyTail'
                ],
                [
                    7614,
                    'ezh'
                ],
                [
                    7615,
                    'grek/theta'
                ],
                [
                    7611,
                    'z'
                ],
                [
                    7468,
                    'A'
                ],
                [
                    7470,
                    'B'
                ],
                [
                    7471,
                    'BBar'
                ],
                [
                    7472,
                    'D'
                ],
                [
                    7473,
                    'E'
                ],
                [
                    7474,
                    'revE'
                ],
                [
                    7475,
                    'G'
                ],
                [
                    7476,
                    'H'
                ],
                [
                    7477,
                    'I'
                ],
                [
                    7478,
                    'J'
                ],
                [
                    7479,
                    'K'
                ],
                [
                    7480,
                    'L'
                ],
                [
                    7481,
                    'M'
                ],
                [
                    7482,
                    'N'
                ],
                [
                    7483,
                    'cyrl/I'
                ],
                [
                    7484,
                    'O'
                ],
                [
                    7485,
                    'OU'
                ],
                [
                    7486,
                    'P'
                ],
                [
                    7487,
                    'R'
                ],
                [
                    7488,
                    'T'
                ],
                [
                    7489,
                    'U'
                ],
                [
                    7490,
                    'W'
                ],
                [
                    11389,
                    'V'
                ],
                [
                    8314,
                    'plus'
                ],
                [
                    8315,
                    'minus'
                ],
                [
                    8316,
                    'equal'
                ],
                [
                    8317,
                    'parenLeft'
                ],
                [
                    8318,
                    'parenRight'
                ],
                [
                    42652,
                    'cyrl/yer'
                ],
                [
                    42653,
                    'cyrl/yeri'
                ],
                [
                    42754,
                    'subst'
                ],
                [
                    42755,
                    'substBarNoRise'
                ],
                [
                    42756,
                    'supst'
                ],
                [
                    42757,
                    'supstBarNoRise'
                ],
                [
                    42779,
                    'arrowUp.NWID'
                ],
                [
                    42780,
                    'arrowDown.NWID'
                ],
                [
                    42781,
                    'alveolarclick'
                ],
                [
                    42782,
                    'alveolarpercussive'
                ],
                [
                    42994,
                    'C'
                ],
                [
                    42995,
                    'F'
                ],
                [
                    42996,
                    'Q'
                ],
                [
                    43000,
                    'smcpHStroke'
                ],
                [
                    43001,
                    'oe'
                ],
                [
                    43868,
                    'heng'
                ],
                [
                    43870,
                    'lTildeOver'
                ],
                [
                    43881,
                    'turnw'
                ],
                [
                    67503,
                    'tRTail'
                ],
                [
                    67467,
                    'dHookBottom'
                ],
                [
                    67493,
                    'q'
                ],
                [
                    67474,
                    'smcpG'
                ],
                [
                    67507,
                    'glottalStopBar'
                ],
                [
                    67477,
                    'hBar'
                ],
                [
                    67479,
                    'hHookTopLTail'
                ],
                [
                    67504,
                    'vHookRight'
                ],
                [
                    67497,
                    'rFlap'
                ],
                [
                    67496,
                    'rRTail'
                ],
                [
                    67514,
                    'sCurlyTail'
                ],
                [
                    67460,
                    'smcpB'
                ],
                [
                    67498,
                    'smcpR'
                ],
                [
                    67478,
                    'smcpH'
                ],
                [
                    67508,
                    'revGlottalStopBar'
                ],
                [
                    67483,
                    'lBelt'
                ],
                [
                    67486,
                    'lyogh'
                ],
                [
                    67485,
                    'lBeltRTail'
                ],
                [
                    67487,
                    'lyoghRTail'
                ],
                [
                    67489,
                    'turnyBelt'
                ],
                [
                    67484,
                    'smcpLBelt'
                ],
                [
                    67488,
                    'turny'
                ],
                [
                    67494,
                    'turnrLongLeg'
                ],
                [
                    67495,
                    'rTurnLongLetRTail'
                ],
                [
                    67456,
                    'smcpAA'
                ],
                [
                    67461,
                    'bHookTop'
                ],
                [
                    67468,
                    'dHookTop'
                ],
                [
                    67469,
                    'dHookTopBottom'
                ],
                [
                    67480,
                    'dotlessjBarHookTop'
                ],
                [
                    67475,
                    'gScriptHookTop'
                ],
                [
                    67476,
                    'smcpGHookTop'
                ],
                [
                    67509,
                    'bullEye'
                ],
                [
                    67510,
                    'dentalclick'
                ],
                [
                    67512,
                    'palatoalveolarclick'
                ],
                [
                    67513,
                    'retroflexClickHook'
                ],
                [
                    67511,
                    'alveolarlateralclick'
                ],
                [
                    67506,
                    'smcpY'
                ],
                [
                    67492,
                    'closeomega'
                ],
                [
                    67490,
                    'oSlash'
                ],
                [
                    67470,
                    'eRev'
                ],
                [
                    67473,
                    'ramshorn'
                ],
                [
                    67471,
                    'closeturnepsilon'
                ],
                [
                    67459,
                    'ae'
                ],
                [
                    67491,
                    'smcpOE'
                ],
                [
                    67457,
                    'triangleColon'
                ],
                [
                    67458,
                    'halfTriangleColon'
                ],
                [
                    122928,
                    'cyrl/a'
                ],
                [
                    122929,
                    'cyrl/be'
                ],
                [
                    122930,
                    'cyrl/ve'
                ],
                [
                    122931,
                    'cyrl/ghe'
                ],
                [
                    122932,
                    'cyrl/de'
                ],
                [
                    122933,
                    'cyrl/ie'
                ],
                [
                    122934,
                    'cyrl/zhe'
                ],
                [
                    122935,
                    'cyrl/ze'
                ],
                [
                    122936,
                    'cyrl/i'
                ],
                [
                    122937,
                    'cyrl/ka'
                ],
                [
                    122938,
                    'cyrl/el'
                ],
                [
                    122939,
                    'cyrl/em'
                ],
                [
                    122940,
                    'cyrl/o'
                ],
                [
                    122941,
                    'cyrl/pe'
                ],
                [
                    122942,
                    'cyrl/er'
                ],
                [
                    122943,
                    'cyrl/es'
                ],
                [
                    122944,
                    'cyrl/te'
                ],
                [
                    122945,
                    'cyrl/u'
                ],
                [
                    122946,
                    'cyrl/ef'
                ],
                [
                    122947,
                    'cyrl/ha'
                ],
                [
                    122948,
                    'cyrl/tse'
                ],
                [
                    122949,
                    'cyrl/che'
                ],
                [
                    122950,
                    'cyrl/sha'
                ],
                [
                    122951,
                    'cyrl/yery'
                ],
                [
                    122952,
                    'cyrl/e'
                ],
                [
                    122953,
                    'cyrl/yu'
                ],
                [
                    122954,
                    'cyrl/dzze'
                ],
                [
                    122955,
                    'cyrl/schwa'
                ],
                [
                    122956,
                    'cyrl/Ukrainiani'
                ],
                [
                    122957,
                    'cyrl/je'
                ],
                [
                    122958,
                    'cyrl/oe'
                ],
                [
                    122959,
                    'cyrl/ue'
                ],
                [
                    122960,
                    'cyrl/palochka'
                ],
                [
                    122987,
                    'cyrl/the'
                ],
                [
                    122988,
                    'cyrl/yeryBack'
                ],
                [
                    122989,
                    'cyrl/KazakhShortu'
                ],
                [
                    null,
                    'S'
                ]
            ]);
            r331_createSuperscripts('numerator', r1_NumeratorForm, [
                [
                    null,
                    'zero.onum'
                ],
                [
                    null,
                    'one.onum'
                ],
                [
                    null,
                    'two.onum'
                ],
                [
                    null,
                    'three.onum'
                ],
                [
                    null,
                    'four.onum'
                ],
                [
                    null,
                    'five.onum'
                ],
                [
                    null,
                    'six.onum'
                ],
                [
                    null,
                    'seven.onum'
                ],
                [
                    null,
                    'eight.onum'
                ],
                [
                    null,
                    'nine.onum'
                ],
                [
                    null,
                    'zero.lnum'
                ],
                [
                    null,
                    'one.lnum'
                ],
                [
                    null,
                    'two.lnum'
                ],
                [
                    null,
                    'three.lnum'
                ],
                [
                    null,
                    'four.lnum'
                ],
                [
                    null,
                    'five.lnum'
                ],
                [
                    null,
                    'six.lnum'
                ],
                [
                    null,
                    'seven.lnum'
                ],
                [
                    null,
                    'eight.lnum'
                ],
                [
                    null,
                    'nine.lnum'
                ]
            ]);
            return function () {
                var _r345_t0 = r331_createSuperscripts('sup', null, [[
                        null,
                        'AE/AHalf'
                    ]]);
                var r345_tnmAHalf = _r345_t0[0];
                var r345_jobsAHalf = _r345_t0[1];
                var _r345_t1 = r331_createSuperscripts('sup', null, [[
                        null,
                        'AE/EHalf'
                    ]]);
                var r345_tnmEHalf = _r345_t1[0];
                var r345_jobsEHalf = _r345_t1[1];
                return r321_xn$createAndSaveGlyphImpl$2Lrc3c('sup{AE}', 7469, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r321_xn$referglyph$1aao(r345_tnmAHalf['AE/AHalf']), r321_AS_BASE, r321_ALSO_METRICS);
                    r348_currentGlyph.include(r321_xn$referglyph$1aao(r345_tnmEHalf['AE/EHalf']));
                    r1_CvDecompose.set(r348_currentGlyph, [
                        r345_tnmAHalf['AE/AHalf'],
                        r345_tnmEHalf['AE/EHalf']
                    ]);
                    return void 0;
                });
            }();
        }());
        (function () {
            var r352_createSubscripts = function (r353_prefix, r353_gr, r353__records) {
                var r353_unicode, r353_glyphid, r353_fRelated, _r353_t4, _r353_t5, _r353_t6;
                var _r353_t0 = r321_extendRelatedGlyphs(r353_prefix, r353__records);
                var r353_records = _r353_t0[0];
                var r353_relSets = _r353_t0[1];
                var r353_targetNameMap = _r353_t0[2];
                var r353_pendingGlyphs = r353_records.map(function (r354_record) {
                    var _r354_t0, _r354_t1;
                    return r354_record[1];
                });
                var r353_miniatureFont = r321_Miniature(r353_pendingGlyphs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_ToSubscript.crowd), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_ToSubscript.crowdAdjScale), new r321_xn$NamedParameterPair$2Lrc9b('mono', true), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 0.75));
                var _r353_t1 = r353_records;
                var _r353_t2 = _r353_t1.length;
                var _r353_t3 = 0;
                while (_r353_t3 < _r353_t2) {
                    _r353_t4 = _r353_t1[_r353_t3];
                    r353_unicode = _r353_t4[0];
                    r353_glyphid = _r353_t4[1];
                    r353_fRelated = _r353_t4[2];
                    if (!r321_xn$queryglyph$1aao(r353_targetNameMap[r353_glyphid])) {
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r353_targetNameMap[r353_glyphid], r353_unicode, function () {
                            var _r362_t1;
                            var _r362_t0 = this;
                            var r362_currentGlyph = _r362_t0;
                            var r362_middle = r353_miniatureFont.queryByName(r353_glyphid).advanceWidth / 2;
                            r362_currentGlyph.include(r353_miniatureFont.queryByName(r353_glyphid), r321_AS_BASE, r321_ALSO_METRICS);
                            r362_currentGlyph.include(r321_ToSubscript());
                            r1_IsSubscript.set(r362_currentGlyph);
                            return void 0;
                        });
                        if (!r353_fRelated && r353_gr)
                            r353_gr.set(r321_xn$queryglyph$1aao(r353_glyphid), r353_targetNameMap[r353_glyphid]);
                    }
                    _r353_t3 = _r353_t3 + 1;
                }
                return r321_xn$linkrelations$5sIl(r353_relSets);
            };
            r352_createSubscripts('sub', null, [
                [
                    8320,
                    'zero.lnum'
                ],
                [
                    8321,
                    'one.lnum'
                ],
                [
                    8322,
                    'two.lnum'
                ],
                [
                    8323,
                    'three.lnum'
                ],
                [
                    8324,
                    'four.lnum'
                ],
                [
                    8325,
                    'five.lnum'
                ],
                [
                    8326,
                    'six.lnum'
                ],
                [
                    8327,
                    'seven.lnum'
                ],
                [
                    8328,
                    'eight.lnum'
                ],
                [
                    8329,
                    'nine.lnum'
                ],
                [
                    8336,
                    'a'
                ],
                [
                    8337,
                    'e'
                ],
                [
                    8338,
                    'o'
                ],
                [
                    8339,
                    'x'
                ],
                [
                    8340,
                    'turne'
                ],
                [
                    8341,
                    'h'
                ],
                [
                    8342,
                    'k'
                ],
                [
                    8343,
                    'l'
                ],
                [
                    8344,
                    'm'
                ],
                [
                    8345,
                    'n'
                ],
                [
                    8346,
                    'p'
                ],
                [
                    8347,
                    's'
                ],
                [
                    8348,
                    't'
                ],
                [
                    7522,
                    'i'
                ],
                [
                    7523,
                    'r'
                ],
                [
                    7524,
                    'u'
                ],
                [
                    7525,
                    'v'
                ],
                [
                    7526,
                    'grek/beta'
                ],
                [
                    7527,
                    'grek/gamma'
                ],
                [
                    7528,
                    'grek/rho'
                ],
                [
                    7529,
                    'grek/phi'
                ],
                [
                    7530,
                    'grek/chi'
                ],
                [
                    11388,
                    'j'
                ],
                [
                    8330,
                    'plus'
                ],
                [
                    8331,
                    'minus'
                ],
                [
                    8332,
                    'equal'
                ],
                [
                    8333,
                    'parenLeft'
                ],
                [
                    8334,
                    'parenRight'
                ],
                [
                    42752,
                    'subst'
                ],
                [
                    42753,
                    'substBarNoRise'
                ],
                [
                    42758,
                    'supst'
                ],
                [
                    42759,
                    'supstBarNoRise'
                ],
                [
                    42783,
                    'alveolarpercussive'
                ],
                [
                    122961,
                    'cyrl/a'
                ],
                [
                    122962,
                    'cyrl/be'
                ],
                [
                    122963,
                    'cyrl/ve'
                ],
                [
                    122964,
                    'cyrl/ghe'
                ],
                [
                    122965,
                    'cyrl/de'
                ],
                [
                    122966,
                    'cyrl/ie'
                ],
                [
                    122967,
                    'cyrl/zhe'
                ],
                [
                    122968,
                    'cyrl/ze'
                ],
                [
                    122969,
                    'cyrl/i'
                ],
                [
                    122970,
                    'cyrl/ka'
                ],
                [
                    122971,
                    'cyrl/el'
                ],
                [
                    122972,
                    'cyrl/o'
                ],
                [
                    122973,
                    'cyrl/pe'
                ],
                [
                    122974,
                    'cyrl/es'
                ],
                [
                    122975,
                    'cyrl/u'
                ],
                [
                    122976,
                    'cyrl/ef'
                ],
                [
                    122977,
                    'cyrl/ha'
                ],
                [
                    122978,
                    'cyrl/tse'
                ],
                [
                    122979,
                    'cyrl/che'
                ],
                [
                    122980,
                    'cyrl/sha'
                ],
                [
                    122981,
                    'cyrl/yer'
                ],
                [
                    122982,
                    'cyrl/yery'
                ],
                [
                    122983,
                    'cyrl/ge'
                ],
                [
                    122984,
                    'cyrl/Ukrainiani'
                ],
                [
                    122985,
                    'cyrl/dze'
                ],
                [
                    122986,
                    'cyrl/dzhe'
                ]
            ]);
            return r352_createSubscripts('denominator', r1_DenominatorForm, [
                [
                    null,
                    'zero.onum'
                ],
                [
                    null,
                    'one.onum'
                ],
                [
                    null,
                    'two.onum'
                ],
                [
                    null,
                    'three.onum'
                ],
                [
                    null,
                    'four.onum'
                ],
                [
                    null,
                    'five.onum'
                ],
                [
                    null,
                    'six.onum'
                ],
                [
                    null,
                    'seven.onum'
                ],
                [
                    null,
                    'eight.onum'
                ],
                [
                    null,
                    'nine.onum'
                ],
                [
                    null,
                    'zero.lnum'
                ],
                [
                    null,
                    'one.lnum'
                ],
                [
                    null,
                    'two.lnum'
                ],
                [
                    null,
                    'three.lnum'
                ],
                [
                    null,
                    'four.lnum'
                ],
                [
                    null,
                    'five.lnum'
                ],
                [
                    null,
                    'six.lnum'
                ],
                [
                    null,
                    'seven.lnum'
                ],
                [
                    null,
                    'eight.lnum'
                ],
                [
                    null,
                    'nine.lnum'
                ]
            ]);
        }());
        (function () {
            var r366_createMedievalCombs = function (r367_defaultLow, r367_defaultHigh, r367__records) {
                var r367_unicode, r367_glyphid, _r367_t4, _r367_t5, _r367_t6;
                var _r367_t0 = r321_extendRelatedGlyphs('medievalAbove', r367__records);
                var r367_records = _r367_t0[0];
                var r367_relSets = _r367_t0[1];
                var r367_targetNameMap = _r367_t0[2];
                var r367_pendingGlyphs = r367_records.map(function (r368_record) {
                    var _r368_t0, _r368_t1;
                    return r368_record[1];
                });
                var r367_miniatureFont = r321_Miniature(r367_pendingGlyphs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', 7), new r321_xn$NamedParameterPair$2Lrc9b('scale', 0.4), new r321_xn$NamedParameterPair$2Lrc9b('mono', true), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1));
                var _r367_t1 = r367_records;
                var _r367_t2 = _r367_t1.length;
                var _r367_t3 = 0;
                while (_r367_t3 < _r367_t2) {
                    _r367_t4 = _r367_t1[_r367_t3];
                    r367_unicode = _r367_t4[0];
                    r367_glyphid = _r367_t4[1];
                    if (!r321_xn$queryglyph$1aao(r367_targetNameMap[r367_glyphid]))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r367_targetNameMap[r367_glyphid], r367_unicode, function () {
                            var _r376_t1;
                            var _r376_t0 = this;
                            var r376_currentGlyph = _r376_t0;
                            r376_currentGlyph.setWidth(0);
                            var r376_derived = r367_miniatureFont.queryByName(r367_glyphid);
                            var r376_low = r367_defaultLow;
                            var r376_high = r367_defaultHigh;
                            if (r376_derived && r376_derived.baseAnchors.above && r376_derived.baseAnchors.below) {
                                r376_low = r376_derived.baseAnchors.below.y;
                                r376_high = r376_derived.baseAnchors.above.y;
                            }
                            var r376_middle = r376_derived.advanceWidth / 2;
                            r376_currentGlyph.include(r376_derived);
                            r376_currentGlyph.include(r321_Ungizmo());
                            r376_currentGlyph.include(r321_Translate(-r376_middle, -r376_low));
                            r376_currentGlyph.include(r321_Scale(0.4));
                            r376_currentGlyph.include(r321_Translate(r321_markMiddle, r321_aboveMarkBot));
                            r376_currentGlyph.include(r321_Regizmo());
                            var r376_markHeight = 0.4 * (r376_high - r376_low) + 0 * (r321_aboveMarkTop - r321_aboveMarkBot);
                            r376_currentGlyph.setMarkAnchor('above', r321_markMiddle, r321_XH, r321_markMiddle, r321_aboveMarkBot + r376_markHeight);
                            r376_currentGlyph.setBaseAnchor('aboveBraceL', r321_markMiddle, r321_aboveMarkBot + r376_markHeight / 2);
                            r376_currentGlyph.setBaseAnchor('aboveBraceR', r321_markMiddle, r321_aboveMarkBot + r376_markHeight / 2);
                            return void 0;
                        });
                    _r367_t3 = _r367_t3 + 1;
                }
                return r321_xn$linkrelations$5sIl(r367_relSets);
            };
            r366_createMedievalCombs(0, r321_XH, [
                [
                    867,
                    'a'
                ],
                [
                    868,
                    'e'
                ],
                [
                    870,
                    'o'
                ],
                [
                    871,
                    'u'
                ],
                [
                    872,
                    'c'
                ],
                [
                    873,
                    'd'
                ],
                [
                    874,
                    'h'
                ],
                [
                    875,
                    'm'
                ],
                [
                    876,
                    'r'
                ],
                [
                    878,
                    'v'
                ],
                [
                    879,
                    'x'
                ],
                [
                    7636,
                    'ae'
                ],
                [
                    7637,
                    'ao'
                ],
                [
                    7643,
                    'smcpG'
                ],
                [
                    7646,
                    'smcpL'
                ],
                [
                    7647,
                    'smcpM'
                ],
                [
                    7648,
                    'n'
                ],
                [
                    7649,
                    'smcpN'
                ],
                [
                    7650,
                    'smcpR'
                ],
                [
                    7651,
                    'rRotunda'
                ],
                [
                    7652,
                    's'
                ],
                [
                    7654,
                    'z'
                ],
                [
                    7655,
                    'scripta'
                ],
                [
                    7658,
                    'turne'
                ],
                [
                    7661,
                    'oWithLightCentralizationStroke'
                ],
                [
                    7664,
                    'uWithLightCentralizationStroke'
                ],
                [
                    7665,
                    'w'
                ],
                [
                    8432,
                    'asterisk/slashBot'
                ],
                [
                    11745,
                    'cyrl/ve'
                ],
                [
                    11746,
                    'cyrl/ghe'
                ],
                [
                    11747,
                    'cyrl/de'
                ],
                [
                    11748,
                    'cyrl/zhe'
                ],
                [
                    11749,
                    'cyrl/ze'
                ],
                [
                    11750,
                    'cyrl/ka'
                ],
                [
                    11751,
                    'cyrl/el'
                ],
                [
                    11752,
                    'cyrl/em'
                ],
                [
                    11753,
                    'cyrl/en'
                ],
                [
                    11754,
                    'cyrl/o'
                ],
                [
                    11755,
                    'cyrl/pe'
                ],
                [
                    11757,
                    'cyrl/es'
                ],
                [
                    11758,
                    'cyrl/te'
                ],
                [
                    11759,
                    'cyrl/ha'
                ],
                [
                    11760,
                    'cyrl/tse'
                ],
                [
                    11761,
                    'cyrl/che'
                ],
                [
                    11762,
                    'cyrl/sha'
                ],
                [
                    11763,
                    'cyrl/shcha'
                ],
                [
                    11764,
                    'cyrl/fita'
                ],
                [
                    11765,
                    'cyrl/este'
                ],
                [
                    11766,
                    'cyrl/a'
                ],
                [
                    11767,
                    'cyrl/ie'
                ],
                [
                    11768,
                    'cyrl/djerv'
                ],
                [
                    11769,
                    'cyrl/uk'
                ],
                [
                    11771,
                    'cyrl/yu'
                ],
                [
                    11772,
                    'cyrl/aIotified'
                ],
                [
                    11773,
                    'cyrl/smallYus'
                ],
                [
                    11774,
                    'cyrl/bigYus'
                ],
                [
                    11775,
                    'cyrl/bigYusIotified'
                ],
                [
                    42612,
                    'cyrl/ye'
                ],
                [
                    42613,
                    'cyrl/i'
                ],
                [
                    42619,
                    'cyrl/omega'
                ],
                [
                    42655,
                    'cyrl/eIotified'
                ]
            ]);
            r366_createMedievalCombs(0, r321_CAP, [
                [
                    869,
                    'i'
                ],
                [
                    877,
                    't'
                ],
                [
                    6854,
                    'numberSign'
                ],
                [
                    7640,
                    'dInsular'
                ],
                [
                    7641,
                    'eth'
                ],
                [
                    7644,
                    'k'
                ],
                [
                    7645,
                    'l'
                ],
                [
                    7656,
                    'b'
                ],
                [
                    7660,
                    'lDblTildeOver'
                ],
                [
                    7666,
                    'aDieresis'
                ],
                [
                    7667,
                    'oDieresis'
                ],
                [
                    7668,
                    'uDieresis'
                ],
                [
                    11744,
                    'cyrl/be'
                ],
                [
                    11770,
                    'cyrl/yat'
                ],
                [
                    42614,
                    'cyrl/yi'
                ],
                [
                    42616,
                    'cyrl/yer'
                ],
                [
                    42617,
                    'cyrl/yery'
                ],
                [
                    42618,
                    'cyrl/yeri'
                ],
                [
                    123023,
                    'cyrl/Ukrainiani'
                ]
            ]);
            r366_createMedievalCombs(r321_Descender, r321_XH, [
                [
                    6860,
                    'gInsular'
                ],
                [
                    7642,
                    'g'
                ],
                [
                    7639,
                    'cCedilla'
                ],
                [
                    7657,
                    'latn/beta'
                ],
                [
                    7662,
                    'p'
                ],
                [
                    11756,
                    'cyrl/er'
                ],
                [
                    42615,
                    'cyrl/u'
                ]
            ]);
            return r366_createMedievalCombs(r321_Descender, r321_CAP, [
                [
                    6861,
                    'rInsular'
                ],
                [
                    7659,
                    'f'
                ],
                [
                    7653,
                    'longs'
                ],
                [
                    7663,
                    'esh'
                ],
                [
                    42654,
                    'cyrl/ef'
                ]
            ]);
        }());
        (function () {
            var r388_createMedievalBelowCombs = function (r389__records) {
                var r389_unicode, r389_glyphid, _r389_t4, _r389_t5, _r389_t6;
                var _r389_t0 = r321_extendRelatedGlyphs('medievalBelow', r389__records);
                var r389_records = _r389_t0[0];
                var r389_relSets = _r389_t0[1];
                var r389_targetNameMap = _r389_t0[2];
                var r389_pendingGlyphs = r389_records.map(function (r390_record) {
                    var _r390_t0, _r390_t1;
                    return r390_record[1];
                });
                var r389_miniatureFont = r321_Miniature(r389_pendingGlyphs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', 7), new r321_xn$NamedParameterPair$2Lrc9b('scale', 0.4), new r321_xn$NamedParameterPair$2Lrc9b('mono', true), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1));
                var _r389_t1 = r389_records;
                var _r389_t2 = _r389_t1.length;
                var _r389_t3 = 0;
                while (_r389_t3 < _r389_t2) {
                    _r389_t4 = _r389_t1[_r389_t3];
                    r389_unicode = _r389_t4[0];
                    r389_glyphid = _r389_t4[1];
                    if (!r321_xn$queryglyph$1aao(r389_targetNameMap[r389_glyphid]))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r389_targetNameMap[r389_glyphid], r389_unicode, function () {
                            var _r398_t1;
                            var _r398_t0 = this;
                            var r398_currentGlyph = _r398_t0;
                            r398_currentGlyph.setWidth(0);
                            var r398_middle = r389_miniatureFont.queryByName(r389_glyphid).advanceWidth / 2;
                            r398_currentGlyph.include(r389_miniatureFont.queryByName(r389_glyphid));
                            r398_currentGlyph.include(r321_Ungizmo());
                            r398_currentGlyph.include(r321_Translate(-r398_middle, -r321_XH));
                            r398_currentGlyph.include(r321_Scale(0.4));
                            r398_currentGlyph.include(r321_Translate(r321_markMiddle, r321_belowMarkTop));
                            r398_currentGlyph.include(r321_Regizmo());
                            r398_currentGlyph.setMarkAnchor('below', r321_markMiddle, 0, r321_markMiddle, r321_belowMarkBot);
                            r398_currentGlyph.setBaseAnchor('belowBraceL', r321_markMiddle, r321_belowMarkMid);
                            r398_currentGlyph.setBaseAnchor('belowBraceR', r321_markMiddle, r321_belowMarkMid);
                            return void 0;
                        });
                    _r389_t3 = _r389_t3 + 1;
                }
                return r321_xn$linkrelations$5sIl(r389_relSets);
            };
            return r388_createMedievalBelowCombs([
                [
                    857,
                    'asterisk/sMid'
                ],
                [
                    6847,
                    'w'
                ],
                [
                    6848,
                    'turnw'
                ],
                [
                    7626,
                    'r'
                ]
            ]);
        }());
        return function () {
            var r410_createReversed = function (r411__records) {
                var r411_unicode, r411_glyphid, _r411_t4, _r411_t5, _r411_t6;
                var _r411_t0 = r321_extendRelatedGlyphs('reversed', r411__records);
                var r411_records = _r411_t0[0];
                var r411_relSets = _r411_t0[1];
                var r411_targetNameMap = _r411_t0[2];
                var r411_pendingGlyphs = r411_records.map(function (r412_record) {
                    var _r412_t0, _r412_t1;
                    return r412_record[1];
                });
                var r411_forkedPara = r321_para.reinit(function (r413_p) {
                    var _r413_t0, _r413_t1;
                    return r413_p.shape.slopeAngle = -r413_p.shape.slopeAngle;
                });
                var r411_miniatureFont = r321_Fork(r411_pendingGlyphs, r411_forkedPara);
                var _r411_t1 = r411_records;
                var _r411_t2 = _r411_t1.length;
                var _r411_t3 = 0;
                while (_r411_t3 < _r411_t2) {
                    _r411_t4 = _r411_t1[_r411_t3];
                    r411_unicode = _r411_t4[0];
                    r411_glyphid = _r411_t4[1];
                    if (!r321_xn$queryglyph$1aao(r411_targetNameMap[r411_glyphid]))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r411_targetNameMap[r411_glyphid], r411_unicode, function () {
                            var _r417_t1;
                            var _r417_t0 = this;
                            var r417_currentGlyph = _r417_t0;
                            var r417_g1 = r411_miniatureFont.queryByName(r411_glyphid);
                            r417_currentGlyph.include(r417_g1, r321_AS_BASE, r321_ALSO_METRICS);
                            r417_currentGlyph.gizmo = r417_g1.gizmo;
                            r417_currentGlyph.include(r321_Ungizmo());
                            r417_currentGlyph.gizmo = r1_Transform.Id();
                            r417_currentGlyph.include(r321_ScaleAround(r417_currentGlyph.advanceWidth / 2, 0, -1, 1));
                            r417_currentGlyph.include(r321_GlobalTransform);
                            return void 0;
                        });
                    _r411_t3 = _r411_t3 + 1;
                }
                return r321_xn$linkrelations$5sIl(r411_relSets);
            };
            return r410_createReversed([
                [
                    43003,
                    'F'
                ],
                [
                    43004,
                    'P'
                ],
                [
                    43005,
                    'turnM'
                ],
                [
                    119091,
                    'flatTone'
                ],
                [
                    122625,
                    'gScript'
                ],
                [
                    122627,
                    'k'
                ],
                [
                    122631,
                    'eng'
                ]
            ]);
        }();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r424_xn$Capture_Ext$2Lrc2b) {
    var _r424_t0, _r424_t1;
    r424_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r424_xn$Capture_Ext$2Lrc2b, 'Autobuild-Transformed-Mathematical', function (r425_xn$Capture$2Lrc8, r425_xn$ExportCapture$2Lrc4b) {
        var _r425_t8, _r425_t9;
        var _r425_t0 = r425_xn$Capture$2Lrc8;
        var r425_xn$createAndSaveGlyphImpl$2Lrc3c = _r425_t0['$createAndSaveGlyphImpl$'];
        var r425_xn$NamedParameterPair$2Lrc9b = _r425_t0['$NamedParameterPair$'];
        var r425_xn$assignUnicodeImpl$2Lrc8b = _r425_t0['$assignUnicodeImpl$'];
        var r425_xn$execState$2Lrc0b = _r425_t0['$execState$'];
        var r425_para = _r425_t0.para;
        var r425_glyphStore = _r425_t0.glyphStore;
        var r425_AS_BASE = _r425_t0.AS_BASE;
        var r425_ALSO_METRICS = _r425_t0.ALSO_METRICS;
        var _r425_t1 = r425_xn$Capture$2Lrc8.Metrics;
        var _r425_t2 = r425_xn$Capture$2Lrc8.SpiroFns;
        var _r425_t3 = r425_xn$Capture$2Lrc8.BooleFns;
        var _r425_t4 = r425_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r425_t5 = r425_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r425_xn$queryglyph$1aao = _r425_t5['query-glyph'];
        var r425_alias = _r425_t5.alias;
        var _r425_t6 = r425_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r425_Fork = _r425_t6.Fork;
        var _r425_t7 = r425_xn$Capture$2Lrc8['Autobuild-Transformed-Shared'].resolve();
        var r425_extendRelatedGlyphs = _r425_t7.extendRelatedGlyphs;
        var r425_xn$linkrelations$5sIl = _r425_t7['link-relations'];
        var r425_wrapName = _r425_t7.wrapName;
        var r425_createMathDerivedSeriesImpl = function (r430_groupName, r430_tfm, r430__records) {
            var r430_unicode, r430_glyphid, _r430_t4, _r430_t5, _r430_t6;
            var _r430_t0 = r425_extendRelatedGlyphs(r430_groupName, r430__records);
            var r430_records = _r430_t0[0];
            var r430_relSets = _r430_t0[1];
            var r430_targetNameMap = _r430_t0[2];
            var r430_pendingGlyphs = r430_records.map(function (r431_record) {
                var _r431_t0, _r431_t1;
                return r431_record[1];
            });
            var r430_forkedPara = r425_para.reinit(r430_tfm);
            var r430_forked = r425_Fork(r430_pendingGlyphs, r430_forkedPara);
            var _r430_t1 = r430_records;
            var _r430_t2 = _r430_t1.length;
            var _r430_t3 = 0;
            while (_r430_t3 < _r430_t2) {
                _r430_t4 = _r430_t1[_r430_t3];
                r430_unicode = _r430_t4[0];
                r430_glyphid = _r430_t4[1];
                if (!r425_xn$queryglyph$1aao(r430_targetNameMap[r430_glyphid]))
                    r425_xn$createAndSaveGlyphImpl$2Lrc3c(r430_targetNameMap[r430_glyphid], r430_unicode, function () {
                        var _r435_t1;
                        var _r435_t0 = this;
                        var r435_currentGlyph = _r435_t0;
                        var r435_glyphT = r430_forked.queryByName(r430_glyphid);
                        if (!r435_glyphT)
                            console.log(r430_glyphid);
                        r435_currentGlyph.include(r435_glyphT, r425_AS_BASE, r425_ALSO_METRICS);
                        r435_currentGlyph.gizmo = r435_glyphT.gizmo;
                        return void 0;
                    });
                _r430_t3 = _r430_t3 + 1;
            }
            return r425_xn$linkrelations$5sIl(r430_relSets);
        };
        var r425_boldGrade = function (r437_g) {
            var _r437_t0, _r437_t1;
            var r437_pGrade = (900 - r437_g) / 100;
            return 900 - 100 * (2 / 25) * r437_pGrade * r437_pGrade;
        };
        var r425_tfBold = function (r438_a) {
            var _r438_t0, _r438_t1;
            return r438_a.shape.weight = r425_boldGrade(r438_a.shape.weight);
        };
        var r425_tfItalic = function (r439_a) {
            var _r439_t0, _r439_t1;
            r439_a.shape.slope = 'italic';
            return r439_a.shape.slopeAngle = r1_mix(r425_para.slopeAngle || 0, 15, 94 / 150);
        };
        var r425_tfSans = function (r440_a) {
            var _r440_t0, _r440_t1;
            return r440_a.shape.serifs = 'sans';
        };
        var r425_tfBoldItalic = function (r441_a) {
            var _r441_t0, _r441_t1;
            r425_tfBold(r441_a);
            return r425_tfItalic(r441_a);
        };
        var r425_tfSansBold = function (r442_a) {
            var _r442_t0, _r442_t1;
            r425_tfSans(r442_a);
            return r425_tfBold(r442_a);
        };
        var r425_tfSansItalic = function (r443_a) {
            var _r443_t0, _r443_t1;
            r425_tfSans(r443_a);
            return r425_tfItalic(r443_a);
        };
        var r425_tfSansBoldItalic = function (r444_a) {
            var _r444_t0, _r444_t1;
            r425_tfSans(r444_a);
            r425_tfBold(r444_a);
            return r425_tfItalic(r444_a);
        };
        var r425_tfTypeWriter = function (r445_a) {
            var _r445_t0, _r445_t1;
            r445_a.shape.spacing = 'fixed';
            return r445_a.derivingVariants && r445_a.derivingVariants.mathtt ? r445_a.variants = r445_a.derivingVariants.mathtt : void 0;
        };
        var r425_Digits = Array.from('0123456789');
        var r425_UpperLatin = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        var r425_LowerLatin = Array.from('abcdefghijklmnopqrstuvwxyz');
        var r425_LowerLatin2 = Array.from('abcdefghijklmnopqrstuvwxyzħıȷ');
        var r425_UpperGreek = Array.from('ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡϴΣΤΥΦΧΨΩ\u2207');
        var r425_LowerGreek = Array.from('αβγδεζηθικλμνξοπρςστυφχψω\u2202ϵϑϰϕϱϖ');
        var r425_Greek2 = Array.from('Ϝϝ');
        var r425_ObliqueBlackboardBolds = Array.from('\uD835\uDD3B\uD835\uDD55\uD835\uDD56\uD835\uDD5A\uD835\uDD5B');
        var r425_CreateMathDerivatives = function (r446_groupName, r446_tfm, r446_gr, r446_base, r446_letters, r446_overrides) {
            var r446_letter, r446_source, r446_dst, _r446_t2, _r446_t3;
            var r446_jobs = [];
            var r446_overrideMap = new r1_Map(r446_overrides || []);
            var _r446_t0 = 0;
            var _r446_t1 = r446_letters.length;
            var r446_j = _r446_t0;
            while (r446_j < _r446_t1) {
                r446_letter = r446_letters[r446_j];
                r446_source = r425_glyphStore.queryNameOfUnicode(r446_letter.codePointAt(0));
                if (r446_gr && r446_gr.get(r425_xn$queryglyph$1aao(r446_source)))
                    r446_source = r446_gr.get(r425_xn$queryglyph$1aao(r446_source));
                r446_dst = r446_base + r446_j;
                if (r446_overrideMap.has(r446_letter))
                    r446_dst = r446_overrideMap.get(r446_letter);
                if (r446_source)
                    r446_jobs.push([
                        r446_dst,
                        r446_source
                    ]);
                r446_j = r446_j + 1;
            }
            return r425_createMathDerivedSeriesImpl(r446_groupName, r446_tfm, r446_jobs);
        };
        var r425_CreateMathAliasableImpl = function (r448_groupName, r448_altGroupName, r448_tfm, r448_gr, r448_base, r448_letters, r448_overrides) {
            var r448_letter, r448_source, r448_uDst, _r448_t2, _r448_t3, _r448_t5;
            var r448_overrideMap = new r1_Map(r448_overrides || []);
            var _r448_t0 = 0;
            var _r448_t1 = r448_letters.length;
            var r448_j = _r448_t0;
            var _r448_t4 = r448_j < _r448_t1;
            while (_r448_t4) {
                _r448_t5 = (r448_letter = r448_letters[r448_j], r448_source = r425_glyphStore.queryNameOfUnicode(r448_letter.codePointAt(0)), r448_source && r448_altGroupName ? r448_source = r425_wrapName(r448_altGroupName, r448_source) : void 0, r448_uDst = r448_base + r448_j, r448_overrideMap.has(r448_letter) ? r448_uDst = r448_overrideMap.get(r448_letter) : void 0, r448_source ? r425_alias(r425_wrapName(r448_groupName, r448_source), r448_uDst, r448_source) : void 0, r448_j = r448_j + 1);
                _r448_t4 = r448_j < _r448_t1;
            }
            return _r448_t5;
        };
        var r425_CreateMathAliasable = function (r450_cond, r450_groupName, r450_altGroupName, r450_tfm, r450_gr, r450_base, r450_letters, r450_overrides) {
            var _r450_t0, _r450_t1;
            return r450_cond ? r425_CreateMathDerivatives(r450_groupName, r450_tfm, r450_gr, r450_base, r450_letters, r450_overrides) : r425_CreateMathAliasableImpl(r450_groupName, r450_altGroupName, r450_tfm, r450_gr, r450_base, r450_letters, r450_overrides);
        };
        r425_CreateMathDerivatives('mathbf', r425_tfBold, null, 119808, r425_UpperLatin);
        r425_CreateMathDerivatives('mathbf', r425_tfBold, null, 119834, r425_LowerLatin);
        r425_CreateMathDerivatives('mathbf', r425_tfBold, null, 120488, r425_UpperGreek);
        r425_CreateMathDerivatives('mathbf', r425_tfBold, null, 120514, r425_LowerGreek);
        r425_CreateMathDerivatives('mathbf', r425_tfBold, null, 120782, r425_Digits);
        r425_CreateMathDerivatives('mathbf', r425_tfBold, null, 120778, r425_Greek2);
        r425_CreateMathDerivatives('mathit', r425_tfItalic, null, 119860, r425_UpperLatin);
        r425_CreateMathDerivatives('mathit', r425_tfItalic, null, 119886, r425_LowerLatin2, [
            [
                'h',
                8462
            ],
            [
                'ħ',
                8463
            ],
            [
                'ı',
                120484
            ],
            [
                'ȷ',
                120485
            ]
        ]);
        r425_CreateMathDerivatives('mathit', r425_tfItalic, null, 120546, r425_UpperGreek);
        r425_CreateMathDerivatives('mathit', r425_tfItalic, null, 120572, r425_LowerGreek);
        r425_CreateMathDerivatives('mathbi', r425_tfBoldItalic, null, 119912, r425_UpperLatin);
        r425_CreateMathDerivatives('mathbi', r425_tfBoldItalic, null, 119938, r425_LowerLatin);
        r425_CreateMathDerivatives('mathbi', r425_tfBoldItalic, null, 120604, r425_UpperGreek);
        r425_CreateMathDerivatives('mathbi', r425_tfBoldItalic, null, 120630, r425_LowerGreek);
        r425_CreateMathDerivatives('mathss', r425_tfSans, r1_MathSansSerif, 120224, r425_UpperLatin);
        r425_CreateMathDerivatives('mathss', r425_tfSans, r1_MathSansSerif, 120250, r425_LowerLatin);
        r425_CreateMathDerivatives('mathss', r425_tfSans, r1_MathSansSerif, 120802, r425_Digits);
        r425_CreateMathDerivatives('mathsi', r425_tfSansItalic, r1_MathSansSerif, 120328, r425_UpperLatin);
        r425_CreateMathDerivatives('mathsi', r425_tfSansItalic, r1_MathSansSerif, 120354, r425_LowerLatin);
        r425_CreateMathDerivatives('mathsb', r425_tfSansBold, r1_MathSansSerif, 120276, r425_UpperLatin);
        r425_CreateMathDerivatives('mathsb', r425_tfSansBold, r1_MathSansSerif, 120302, r425_LowerLatin);
        r425_CreateMathDerivatives('mathsb', r425_tfSansBold, r1_MathSansSerif, 120662, r425_UpperGreek);
        r425_CreateMathDerivatives('mathsb', r425_tfSansBold, r1_MathSansSerif, 120688, r425_LowerGreek);
        r425_CreateMathDerivatives('mathsb', r425_tfSansBold, r1_MathSansSerif, 120812, r425_Digits);
        r425_CreateMathDerivatives('mathsz', r425_tfSansBoldItalic, r1_MathSansSerif, 120380, r425_UpperLatin);
        r425_CreateMathDerivatives('mathsz', r425_tfSansBoldItalic, r1_MathSansSerif, 120406, r425_LowerLatin);
        r425_CreateMathDerivatives('mathsz', r425_tfSansBoldItalic, r1_MathSansSerif, 120720, r425_UpperGreek);
        r425_CreateMathDerivatives('mathsz', r425_tfSansBoldItalic, r1_MathSansSerif, 120746, r425_LowerGreek);
        var r425_doTypewriter = r425_para.isQuasiProportional;
        r425_CreateMathAliasable(r425_doTypewriter, 'mathtt', null, r425_tfTypeWriter, null, 120432, r425_UpperLatin);
        r425_CreateMathAliasable(r425_doTypewriter, 'mathtt', null, r425_tfTypeWriter, null, 120458, r425_LowerLatin);
        r425_CreateMathAliasable(r425_doTypewriter, 'mathtt', null, r425_tfTypeWriter, null, 120822, r425_Digits);
        return r425_CreateMathDerivatives('mathit', r425_tfItalic, null, 8517, r425_ObliqueBlackboardBolds);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r453_xn$Capture_Ext$2Lrc2b) {
    var _r453_t0, _r453_t1;
    r453_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r453_xn$Capture_Ext$2Lrc2b, 'Autobuild-Rhotic', function (r454_xn$Capture$2Lrc8, r454_xn$ExportCapture$2Lrc4b) {
        var _r454_t11, _r454_t12;
        var _r454_t0 = r454_xn$Capture$2Lrc8;
        var r454_xn$createAndSaveGlyphImpl$2Lrc3c = _r454_t0['$createAndSaveGlyphImpl$'];
        var r454_xn$NamedParameterPair$2Lrc9b = _r454_t0['$NamedParameterPair$'];
        var r454_xn$assignUnicodeImpl$2Lrc8b = _r454_t0['$assignUnicodeImpl$'];
        var r454_xn$execState$2Lrc0b = _r454_t0['$execState$'];
        var r454_MarkSet = _r454_t0.MarkSet;
        var _r454_t1 = r454_xn$Capture$2Lrc8.Metrics;
        var r454_Width = _r454_t1.Width;
        var r454_SB = _r454_t1.SB;
        var r454_XH = _r454_t1.XH;
        var r454_HVContrast = _r454_t1.HVContrast;
        var r454_HalfStroke = _r454_t1.HalfStroke;
        var r454_RightSB = _r454_t1.RightSB;
        var r454_AdviceStroke = _r454_t1.AdviceStroke;
        var _r454_t2 = r454_xn$Capture$2Lrc8.SpiroFns;
        var _r454_t3 = r454_xn$Capture$2Lrc8.BooleFns;
        var _r454_t4 = r454_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r454_markFine = _r454_t4.markFine;
        var r454_markstroke = _r454_t4.markstroke;
        var _r454_t5 = r454_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r454_t6 = r454_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r454_xn$queryglyph$1aao = _r454_t6['query-glyph'];
        var _r454_t7 = r454_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r454_Widen = _r454_t7.Widen;
        var _r454_t8 = r454_xn$Capture$2Lrc8['Letter-Latin-Rhotic'].resolve();
        var r454_ErTail = _r454_t8.ErTail;
        var _r454_t9 = r454_xn$Capture$2Lrc8['Autobuild-Transformed-Shared'].resolve();
        var r454_extendRelatedGlyphs = _r454_t9.extendRelatedGlyphs;
        var r454_xn$linkrelations$5sIl = _r454_t9['link-relations'];
        var _r454_t10 = r454_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r454_RetroflexHook = _r454_t10.RetroflexHook;
        var r454_ErTailAttachment = function (r462_y) {
            var _r462_t0, _r462_t1;
            return r454_ErTail(r454_Width * 0.85 - r454_SB - r454_markFine * r454_HVContrast * 1.25, r462_y, r454_XH * 0.2);
        };
        var r454_RhoticTailAttachment = function () {
            var _r463_t0, _r463_t1;
            return r454_RetroflexHook.r(new r454_xn$NamedParameterPair$2Lrc9b('x', r1_mix(r454_RightSB, r454_Width, 0.5)), new r454_xn$NamedParameterPair$2Lrc9b('y', 0), new r454_xn$NamedParameterPair$2Lrc9b('yAttach', r454_XH / 2 - r454_HalfStroke), new r454_xn$NamedParameterPair$2Lrc9b('xLink', r454_Width * 0.85 - r454_SB - r454_markFine * r454_HVContrast * 1.25), new r454_xn$NamedParameterPair$2Lrc9b('refSw', r454_AdviceStroke(4)));
        };
        var r454_createRhotics = function (r469_groupName, r469_tail, r469__records) {
            var r469_unicode, r469_glyphid, r469_pri, _r469_t4, _r469_t5, _r469_t6;
            var _r469_t0 = r454_extendRelatedGlyphs('rhotic_' + r469_groupName, r469__records);
            var r469_records = _r469_t0[0];
            var r469_relSets = _r469_t0[1];
            var r469_targetNameMap = _r469_t0[2];
            var r469_pendingGlyphs = r469_records.map(function (r470_record) {
                var _r470_t0, _r470_t1;
                return r470_record[1];
            });
            var r469_thinFont = r454_Widen(r469_pendingGlyphs, 0.85, 1);
            var _r469_t1 = r469_records;
            var _r469_t2 = _r469_t1.length;
            var _r469_t3 = 0;
            while (_r469_t3 < _r469_t2) {
                _r469_t4 = _r469_t1[_r469_t3];
                r469_unicode = _r469_t4[0];
                r469_glyphid = _r469_t4[1];
                r469_pri = _r469_t4[2];
                if (!r454_xn$queryglyph$1aao(r469_targetNameMap[r469_glyphid]))
                    r454_xn$createAndSaveGlyphImpl$2Lrc3c(r469_targetNameMap[r469_glyphid], r469_unicode, function () {
                        var _r474_t1;
                        var _r474_t0 = this;
                        var r474_currentGlyph = _r474_t0;
                        if (!r469_thinFont.queryByName(r469_glyphid))
                            throw new Error('Cannot find glyph ' + r469_glyphid);
                        r474_currentGlyph.include(r454_MarkSet.e());
                        r474_currentGlyph.include(r469_thinFont.queryByName(r469_glyphid));
                        r474_currentGlyph.include(r469_tail);
                        return void 0;
                    });
                _r469_t3 = _r469_t3 + 1;
            }
            r454_xn$linkrelations$5sIl(r469_relSets);
            return [
                r469_targetNameMap,
                r469_records
            ];
        };
        r454_createRhotics('er', r454_ErTailAttachment(r454_XH / 2), [[
                602,
                'schwa'
            ]]);
        r454_createRhotics('rhotic', r454_RhoticTailAttachment(), [[
                7573,
                'schwa'
            ]]);
        return r454_createRhotics('revLatinEpsilonEr', r454_ErTailAttachment(r454_XH * r1_mix(0.65, 1, 0.5)), [[
                605,
                'latn/epsilonRev'
            ]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r480_xn$Capture_Ext$2Lrc2b) {
    var _r480_t0, _r480_t1;
    r480_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r480_xn$Capture_Ext$2Lrc2b, 'Autobuild-Rotated', function (r481_xn$Capture$2Lrc8, r481_xn$ExportCapture$2Lrc4b) {
        var _r481_t8, _r481_t9, _r481_t10, _r481_tag11;
        var _r481_t0 = r481_xn$Capture$2Lrc8;
        var r481_xn$createAndSaveGlyphImpl$2Lrc3c = _r481_t0['$createAndSaveGlyphImpl$'];
        var r481_xn$NamedParameterPair$2Lrc9b = _r481_t0['$NamedParameterPair$'];
        var r481_xn$assignUnicodeImpl$2Lrc8b = _r481_t0['$assignUnicodeImpl$'];
        var r481_xn$execState$2Lrc0b = _r481_t0['$execState$'];
        var _r481_t1 = r481_xn$Capture$2Lrc8.Metrics;
        var r481_Width = _r481_t1.Width;
        var r481_SB = _r481_t1.SB;
        var r481_CAP = _r481_t1.CAP;
        var r481_SymbolMid = _r481_t1.SymbolMid;
        var r481_Italify = _r481_t1.Italify;
        var r481_Scale = _r481_t1.Scale;
        var r481_Translate = _r481_t1.Translate;
        var r481_Rotate = _r481_t1.Rotate;
        var r481_O = _r481_t1.O;
        var r481_WideWidth1 = _r481_t1.WideWidth1;
        var r481_RightSB = _r481_t1.RightSB;
        var _r481_t2 = r481_xn$Capture$2Lrc8.SpiroFns;
        var _r481_t3 = r481_xn$Capture$2Lrc8.BooleFns;
        var _r481_t4 = r481_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r481_t5 = r481_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var _r481_t6 = r481_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r481_Miniature = _r481_t6.Miniature;
        var _r481_t7 = r481_xn$Capture$2Lrc8['Symbol-Math-APL'].resolve();
        var r481_LinkAplFormForNwidWwid = _r481_t7.LinkAplFormForNwidWwid;
        (function () {
            var r488_FMosaicWide, r488_MosaicNameSuffix, r488_MosaicWidth, r488_MosaicWidthScalar, _r488_t3, _r488_t5, _r488_t6, _r488_tag7;
            var r488_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r481_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r481_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r488_t0 = r488_WidthKinds;
            var _r488_t1 = _r488_t0.length;
            var _r488_t2 = 0;
            var _r488_t4 = _r488_t2 < _r488_t1;
            while (_r488_t4) {
                _r488_t3 = _r488_t0[_r488_t2];
                r488_FMosaicWide = _r488_t3[0];
                r488_MosaicNameSuffix = _r488_t3[1];
                r488_MosaicWidth = _r488_t3[2];
                r488_MosaicWidthScalar = _r488_t3[3];
                (function () {
                    var _r491_t0, _r491_tag1;
                    var r491_MosaicDesiredWidth = r481_WideWidth1;
                    var r491_MosaicMiddle = r488_MosaicWidth / 2;
                    var r491_MosaicUnitWidth = r488_MosaicWidth / r488_MosaicWidthScalar;
                    var r491_MangleUnicode = function (r492_unicode, r492__desiredOverride) {
                        var _r492_t0, _r492_t1;
                        return r488_MosaicWidth === (r492__desiredOverride || r491_MosaicDesiredWidth) ? r492_unicode : void 0;
                    };
                    var r491_MangleName = function (r493_name) {
                        var _r493_t0, _r493_t1;
                        return r493_name + r488_MosaicNameSuffix;
                    };
                    return function () {
                        var r495_s = (r481_RightSB - r481_SB - r481_O * 4 + (r488_MosaicWidth - r481_Width) * 0.5) / r481_CAP;
                        var r495_df = r481_Miniature([
                            'eight.lnum.crossing',
                            'rotatedPropto',
                            'revS'
                        ], new r481_xn$NamedParameterPair$2Lrc9b('crowd', 4 / Math.sqrt(r488_MosaicWidthScalar)), new r481_xn$NamedParameterPair$2Lrc9b('scale', r495_s), new r481_xn$NamedParameterPair$2Lrc9b('forceUpright', true));
                        var r495_InftyLikeShape = function (r499_gn, r499_u, r499_gns) {
                            var _r499_t0, _r499_t1;
                            return r481_xn$createAndSaveGlyphImpl$2Lrc3c(r491_MangleName(r499_gn), r491_MangleUnicode(r499_u), function () {
                                var _r502_t1;
                                var _r502_t0 = this;
                                var r502_currentGlyph = _r502_t0;
                                r502_currentGlyph.setWidth(r488_MosaicWidth);
                                r502_currentGlyph.include(r495_df.queryByName(r499_gns));
                                r502_currentGlyph.include(r481_Translate(-(r481_Width / 2), -r481_CAP / 2));
                                r502_currentGlyph.include(r481_Rotate(Math.PI / 2));
                                r502_currentGlyph.include(r481_Scale(r495_s));
                                r502_currentGlyph.include(r481_Translate(r488_MosaicWidth / 2, r481_SymbolMid));
                                r502_currentGlyph.include(r481_Italify());
                                return void 0;
                            });
                        };
                        r495_InftyLikeShape('propto', 8733, 'rotatedPropto');
                        r495_InftyLikeShape('infty', 8734, 'eight.lnum.crossing');
                        return r495_InftyLikeShape('invLazyS', 8766, 'revS.serifless');
                    }();
                }());
                _r488_t5 = _r488_t2 = _r488_t2 + 1;
                _r488_t4 = _r488_t2 < _r488_t1;
            }
            return _r488_t5;
        }());
        r481_LinkAplFormForNwidWwid('infty');
        return r481_LinkAplFormForNwidWwid('invLazyS');
    });
    return void 0;
});
