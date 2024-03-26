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
var r1_Cv = _r1_t9.Cv;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_AnyDerivingCv = _r1_t9.AnyDerivingCv;
var r1_Dotless = _r1_t9.Dotless;
var r1_SvInheritableRelations = _r1_t9.SvInheritableRelations;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_PseudoCvDecompose = _r1_t9.PseudoCvDecompose;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_Map = Map;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r271_xn$Capture_Ext$2Lrc2b, 'Common-Derivatives', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_xn$derivecomposites$7Hrq, _r272_t4, _r272_t5;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$assignUnicodeImpl$2Lrc8b = _r272_t0['$assignUnicodeImpl$'];
        var r272_xn$execState$2Lrc0b = _r272_t0['$execState$'];
        var r272_para = _r272_t0.para;
        var r272_glyphStore = _r272_t0.glyphStore;
        var r272_xn$glyphisneeded$1aao3 = _r272_t0['glyph-is-needed'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_Scale = _r272_t1.Scale;
        var r272_Translate = _r272_t1.Translate;
        var r272_TanSlope = _r272_t1.TanSlope;
        var r272_compositeBaseAnchors = _r272_t1.compositeBaseAnchors;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r274_t0, _r274_t1;
            return { 'ApplyCv': r272_ApplyCv };
        });
        var r272_ApplyCv = function (r275_g, r275_shapeFrom, r275_follow, r275_para) {
            var r275_kPrime, r275_prime, r275_h, r275_suffix, r275_dstName, r275_dst, _r275_t2, _r275_t3, _r275_t4, _r275_t5, _r275_t6, _r275_t8, _r275_t9, _r275_t10;
            var _r275_t0 = r275_para.variants.primes[Symbol.iterator]();
            var _r275_t1 = void 0;
            var _r275_t7 = !(_r275_t1 = _r275_t0.next()).done;
            while (_r275_t7) {
                _r275_t2 = _r275_t1.value;
                r275_kPrime = _r275_t2[0];
                r275_prime = _r275_t2[1];
                _r275_t3 = r275_prime.variants.values()[Symbol.iterator]();
                _r275_t4 = void 0;
                _r275_t9 = !(_r275_t4 = _r275_t3.next()).done;
                while (_r275_t9) {
                    _r275_t10 = (r275_h = _r275_t4.value, r275_suffix = r275_h.resolveFor(r275_para, r275_follow), r275_suffix ? (r275_dstName = r275_shapeFrom + '.' + r275_suffix, r275_dst = r272_glyphStore.queryByName(r275_dstName), r275_dst ? r275_g.dependsOn(r275_dst) : void 0, r275_para.enableCvSs && r275_h.tag && r275_h.rank ? (r1_Cv(r275_h.tag, r275_h.rank, r275_h.groupRank, r275_h.description).set(r275_g, r275_dstName), r275_h.nonDeriving ? r1_Cv(r275_h.tag, r275_h.rank).setPreventDeriving(r275_g) : void 0) : void 0) : void 0);
                    _r275_t9 = !(_r275_t4 = _r275_t3.next()).done;
                }
                _r275_t8 = _r275_t10;
                _r275_t7 = !(_r275_t1 = _r275_t0.next()).done;
            }
            return _r275_t8;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'select-variant': r272_xn$selectvariant$7Hrq };
        });
        var r272_xn$selectvariant$7Hrq = function () {
            var _r280_t6;
            var _r280_t7 = arguments;
            var _r280_t0 = [].slice.call(_r280_t7, 0);
            var _r280_t1 = [];
            var _r280_t2 = 0;
            while (_r280_t2 < _r280_t0.length) {
                if (!(_r280_t0[_r280_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r280_t1.push(_r280_t0[_r280_t2]);
                _r280_t2 = _r280_t2 + 1;
            }
            var _r280_t3 = _r280_t0;
            var _r280_t4 = _r280_t3.length;
            var _r280_t5 = 0;
            while (_r280_t5 < _r280_t4) {
                _r280_t2 = _r280_t3[_r280_t5];
                if (_r280_t2 && _r280_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'name')
                    r280_name = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'unicode')
                    r280_unicode = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'shapeFrom')
                    r280_shapeFrom = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'follow')
                    r280_follow = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'reduction')
                    r280_reduction = _r280_t2.right;
                _r280_t5 = _r280_t5 + 1;
            }
            var r280_name = r1_fallback(r280_name, _r280_t1[0]);
            var r280_unicode = r1_fallback(r280_unicode, _r280_t1[1]);
            var r280_shapeFrom = r1_fallback(r280_shapeFrom, _r280_t1[2], r280_name);
            var r280_follow = r1_fallback(r280_follow, _r280_t1[3], r280_name);
            var r280_reduction = r1_fallback(r280_reduction, _r280_t1[4], null);
            if (!r272_xn$glyphisneeded$1aao3(r280_name))
                return void 0;
            var r280_variant = r272_para.variantSelector[r280_follow];
            if (r280_reduction)
                r280_variant = r280_reduction[r280_variant] || r280_variant;
            if (!r280_variant)
                throw new Error('Variant for ' + r280_name + ' (selector: ' + r280_shapeFrom + ') is not assigned.');
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r280_name, r280_unicode, function () {
                var r287_gr, r287_v, _r287_t4;
                var _r287_t3 = this;
                var r287_currentGlyph = _r287_t3;
                r287_currentGlyph.include(r272_xn$referglyph$1aao(r280_shapeFrom + '.' + r280_variant), r272_AS_BASE, r272_ALSO_METRICS);
                r272_ApplyCv(r287_currentGlyph, r280_shapeFrom, r280_follow, r272_para);
                r287_currentGlyph.cloneRankFromGlyph(r272_xn$queryglyph$1aao(r280_shapeFrom + '.' + r280_variant));
                var _r287_t0 = r1_SvInheritableRelations;
                var _r287_t1 = _r287_t0.length;
                var _r287_t2 = 0;
                while (_r287_t2 < _r287_t1) {
                    r287_gr = _r287_t0[_r287_t2];
                    r287_v = r287_gr.get(r272_xn$queryglyph$1aao(r280_shapeFrom + '.' + r280_variant));
                    if (r287_v)
                        r287_gr.set(_r287_t3, r287_v);
                    _r287_t2 = _r287_t2 + 1;
                }
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r291_t0, _r291_t1;
            return { 'orthographic-italic': r272_xn$orthographicitalic$3DrD };
        });
        var r272_xn$orthographicitalic$3DrD = function (r292_name, r292_unicode) {
            var _r292_t0, _r292_t1;
            return r272_para.isItalic ? r272_alias(r292_name, r292_unicode, r292_name + '.italic') : r272_alias(r292_name, r292_unicode, r292_name + '.upright');
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r294_t0, _r294_t1;
            return { 'orthographic-slanted': r272_xn$orthographicslanted$3DrD };
        });
        var r272_xn$orthographicslanted$3DrD = function (r295_name, r295_unicode) {
            var _r295_t0, _r295_t1;
            return r272_para.slopeAngle ? r272_alias(r295_name, r295_unicode, r295_name + '.slanted') : r272_alias(r295_name, r295_unicode, r295_name + '.upright');
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r297_t0, _r297_t1;
            return { 'query-glyph': r272_xn$queryglyph$1aao };
        });
        var r272_xn$queryglyph$1aao = function (r298_id) {
            var _r298_t0, _r298_t1;
            return r272_glyphStore.queryByName(r298_id);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r300_t0, _r300_t1;
            return { 'refer-glyph': r272_xn$referglyph$1aao };
        });
        var r272_xn$referglyph$1aao = function (r301_id) {
            var _r301_t0, _r301_t1;
            return function (r302_copyAnchors, r302_copyWidth) {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_goal = r272_xn$queryglyph$1aao(r301_id);
                if (!r302_goal)
                    throw new Error('Cannot find glyph \'' + r301_id + '\'');
                return _r302_t0.includeGlyph(r302_goal, r302_copyAnchors, r302_copyWidth);
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r304_t0, _r304_t1;
            return { 'add-glyph-dependency': r272_xn$addglyphdependency$9Jrj6 };
        });
        var r272_xn$addglyphdependency$9Jrj6 = function (r305_id) {
            var _r305_t0, _r305_t1;
            return function (r306_copyAnchors, r306_copyWidth) {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_goal = r272_xn$queryglyph$1aao(r305_id);
                if (!r306_goal)
                    throw new Error('Cannot find glyph \'' + r305_id + '\'');
                return _r306_t0.dependsOn(r306_goal);
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r308_t0, _r308_t1;
            return { 'DeriveMeshT': r272_DeriveMeshT };
        });
        var r272_DeriveMeshT = function (r309_gnSources, r309_Query, r309_Fn, r309_FnLink) {
            var r309_gr, r309_from, r309_to, r309_key, r309_gnDerivedTo, r309_gndFrom, r309_gndTo, _r309_t3, _r309_t7, _r309_t8, _r309_t9;
            var r309_linksGnMap = new r1_Map();
            var r309_gndSource = r309_Fn(r309_gnSources, null, null);
            r309_linksGnMap.set(r272_keyOfGnList(r309_gnSources), r309_gndSource);
            var r309_mesh = r1_getGrMesh(r309_gnSources, r309_Query, r272_xn$queryglyph$1aao);
            var _r309_t0 = r309_mesh;
            var _r309_t1 = _r309_t0.length;
            var _r309_t2 = 0;
            while (_r309_t2 < _r309_t1) {
                _r309_t3 = _r309_t0[_r309_t2];
                r309_gr = _r309_t3[0];
                r309_from = _r309_t3[1];
                r309_to = _r309_t3[2];
                r309_key = r272_keyOfGnList(r309_to);
                if (!r309_linksGnMap.has(r309_key)) {
                    r309_gnDerivedTo = r309_Fn(r309_to, r309_gr, r309_from);
                    r309_linksGnMap.set(r309_key, r309_gnDerivedTo);
                }
                _r309_t2 = _r309_t2 + 1;
            }
            var _r309_t4 = r309_mesh;
            var _r309_t5 = _r309_t4.length;
            var _r309_t6 = 0;
            while (_r309_t6 < _r309_t5) {
                _r309_t7 = _r309_t4[_r309_t6];
                r309_gr = _r309_t7[0];
                r309_from = _r309_t7[1];
                r309_to = _r309_t7[2];
                r309_gndFrom = r309_linksGnMap.get(r272_keyOfGnList(r309_from));
                r309_gndTo = r309_linksGnMap.get(r272_keyOfGnList(r309_to));
                if (r309_gndFrom && r309_gndTo && r272_xn$queryglyph$1aao(r309_gndFrom) && r272_xn$queryglyph$1aao(r309_gndTo)) {
                    r309_gr.set(r272_xn$queryglyph$1aao(r309_gndFrom), r309_gndTo);
                    if (r309_FnLink)
                        r309_FnLink(r309_gndFrom, r309_gndTo, r309_from, r309_to);
                }
                _r309_t6 = _r309_t6 + 1;
            }
            return r309_gndSource;
        };
        var r272_keyOfGnList = function (r312_gns) {
            var _r312_t0, _r312_t1;
            return '.deriveKey{' + r312_gns.join('}{') + '}';
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r314_t0, _r314_t1;
            return { 'derive-glyphs': r272_xn$deriveglyphs$7Hrq };
        });
        var r272_xn$deriveglyphs$7Hrq = function (r315_dstGid, r315_dstUnicode, r315_srcGid, r315_Fn) {
            var _r315_t0, _r315_t1;
            if (!r272_xn$glyphisneeded$1aao3(r315_dstGid))
                return void 0;
            return r272_DeriveMeshT([r315_srcGid], r1_AnyDerivingCv, function (r316_gns, r316_gr) {
                var _r316_t0, _r316_t1;
                var r316_gn = r316_gns[0];
                var r316_gnDst = !r316_gr ? r315_dstGid : '' + r315_dstGid + '/derive{' + r316_gn + '}';
                var r316_unicodeDst = !r316_gr ? r315_dstUnicode : null;
                r272_xn$createAndSaveGlyphImpl$2Lrc3c(r316_gnDst, r316_unicodeDst, r315_Fn(r316_gn, r316_gr));
                return r316_gnDst;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return { 'derive-multi-part-glyphs': r272_xn$derivemultipartglyphs$7Hrq65 };
        });
        var r272_xn$derivemultipartglyphs$7Hrq65 = function (r320_dstGid, r320_dstUnicode, r320_gnSoruces, r320_Fn) {
            var _r320_t0, _r320_t1;
            if (!r272_xn$glyphisneeded$1aao3(r320_dstGid))
                return void 0;
            return r272_DeriveMeshT(r320_gnSoruces, r1_AnyDerivingCv, function (r321_gns, r321_gr) {
                var _r321_t0, _r321_t1;
                var r321_gnDst = !r321_gr ? r320_dstGid : '' + r320_dstGid + '/derive{' + r321_gns.join('}{') + '}';
                var r321_unicodeDst = !r321_gr ? r320_dstUnicode : null;
                r272_xn$createAndSaveGlyphImpl$2Lrc3c(r321_gnDst, r321_unicodeDst, r320_Fn(r321_gns, r321_gr));
                return r321_gnDst;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return { 'alias': r272_alias };
        });
        var r272_alias = function (r325_dstGid, r325_dstUnicode, r325_srcGid) {
            var r325_gr, _r325_t0, _r325_t1, _r325_t2, _r325_t3, _r325_t4, _r325_t5;
            if (!r325_dstGid)
                throw new Error('Target ID not specified');
            if (!r272_xn$glyphisneeded$1aao3(r325_srcGid))
                return void 0;
            var r325_glyphSrc = r272_glyphStore.queryByNameEnsured(r325_srcGid);
            var r325_glyphDst = r272_xn$createAndSaveGlyphImpl$2Lrc3c(r325_dstGid, r325_dstUnicode, function () {
                var _r328_t1;
                var _r328_t0 = this;
                var r328_currentGlyph = _r328_t0;
                r328_currentGlyph.include(r272_xn$referglyph$1aao(r325_srcGid), r272_AS_BASE, r272_ALSO_METRICS);
                return void 0;
            });
            if (r325_glyphDst) {
                _r325_t0 = r1_AnyCv.query(r325_glyphSrc);
                _r325_t1 = _r325_t0.length;
                _r325_t2 = 0;
                while (_r325_t2 < _r325_t1) {
                    r325_gr = _r325_t0[_r325_t2];
                    r325_gr.set(r325_glyphDst, r325_gr.get(r325_glyphSrc));
                    if (r325_gr.getPreventDeriving(r325_glyphSrc))
                        r325_gr.setPreventDeriving(r325_glyphDst);
                    _r325_t2 = _r325_t2 + 1;
                }
                return r1_Dotless.get(r325_glyphSrc) ? r1_Dotless.set(r325_glyphDst, r1_Dotless.get(r325_glyphSrc)) : void 0;
            } else
                return void 0;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r333_t0, _r333_t1;
            return { 'turned': r272_turned };
        });
        var r272_turned = function (r334_newid, r334_unicode, r334_id, r334__x, r334__y, r334_mark) {
            var _r334_t0, _r334_t1;
            if (!r334_newid)
                throw new Error('Target ID not specified');
            return r272_xn$deriveglyphs$7Hrq(r334_newid, r334_unicode, r334_id, function (r335_src, r335_gr) {
                var _r335_t0, _r335_t1;
                return function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    var r337_currentGlyph = _r337_t0;
                    r337_currentGlyph.include(r272_xn$referglyph$1aao(r335_src), r334_mark ? false : r272_AS_BASE, r272_ALSO_METRICS);
                    if (r334_mark)
                        r337_currentGlyph.include(r334_mark);
                    var r337_x = r334__x instanceof Function ? r334__x.call(r337_currentGlyph) : r334__x;
                    var r337_y = r334__y instanceof Function ? r334__y.call(r337_currentGlyph) : r334__y;
                    r337_currentGlyph.include(_r337_t0.gizmo.inverse());
                    r337_currentGlyph.include(r272_Translate(-r337_x, -r337_y));
                    r337_currentGlyph.include(r272_Scale(-1, -1));
                    r337_currentGlyph.include(r272_Translate(r337_x, r337_y));
                    r337_currentGlyph.include(_r337_t0.gizmo);
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r346_t0, _r346_t1;
            return { 'link-reduced-variant': r272_xn$linkreducedvariant$5sIl8 };
        });
        var r272_xn$linkreducedvariant$5sIl8 = function () {
            var _r347_t6;
            var _r347_t7 = arguments;
            var _r347_t0 = [].slice.call(_r347_t7, 0);
            var _r347_t1 = [];
            var _r347_t2 = 0;
            while (_r347_t2 < _r347_t0.length) {
                if (!(_r347_t0[_r347_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r347_t1.push(_r347_t0[_r347_t2]);
                _r347_t2 = _r347_t2 + 1;
            }
            var _r347_t3 = _r347_t0;
            var _r347_t4 = _r347_t3.length;
            var _r347_t5 = 0;
            while (_r347_t5 < _r347_t4) {
                _r347_t2 = _r347_t3[_r347_t5];
                if (_r347_t2 && _r347_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r347_t2.left === 'dstGid')
                    r347_dstGid = _r347_t2.right;
                if (_r347_t2 && _r347_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r347_t2.left === 'srcGid')
                    r347_srcGid = _r347_t2.right;
                if (_r347_t2 && _r347_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r347_t2.left === 'gr')
                    r347_gr = _r347_t2.right;
                if (_r347_t2 && _r347_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r347_t2.left === 'follow')
                    r347_follow = _r347_t2.right;
                _r347_t5 = _r347_t5 + 1;
            }
            var r347_dstGid = r1_fallback(r347_dstGid, _r347_t1[0]);
            var r347_srcGid = r1_fallback(r347_srcGid, _r347_t1[1]);
            var r347_gr = r1_fallback(r347_gr, _r347_t1[2]);
            var r347_follow = r1_fallback(r347_follow, _r347_t1[3]);
            if (!r272_xn$queryglyph$1aao(r347_dstGid))
                r272_xn$selectvariant$7Hrq(r347_dstGid, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', r347_srcGid), new r272_xn$NamedParameterPair$2Lrc9b('follow', r1_fallback(r347_follow, r347_dstGid)));
            return r347_gr && r272_xn$queryglyph$1aao(r347_srcGid) ? r347_gr.set(r272_xn$queryglyph$1aao(r347_srcGid), r347_dstGid) : void 0;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r355_t0, _r355_t1;
            return { 'alias-reduced-variant': r272_xn$aliasreducedvariant$1aao8 };
        });
        var r272_xn$aliasreducedvariant$1aao8 = function (r356_dstGid, r356_srcGid, r356_shapeGid, r356_gr) {
            var _r356_t0, _r356_t1;
            r272_alias(r356_dstGid, null, r356_shapeGid);
            return r356_gr && r272_xn$queryglyph$1aao(r356_srcGid) ? r356_gr.set(r272_xn$queryglyph$1aao(r356_srcGid), r356_dstGid) : void 0;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r358_t0, _r358_t1;
            return { 'HalfAdvance': r272_HalfAdvance };
        });
        var r272_HalfAdvance = function () {
            var _r359_t1;
            var _r359_t0 = this;
            return _r359_t0.advanceWidth / 2;
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r361_t0, _r361_t1;
            return { 'TurnMarks': r272_TurnMarks };
        });
        var r272_TurnMarks = function (r362_k, r362_fnOverride) {
            var _r362_t0, _r362_t1;
            return function () {
                var _r364_t1;
                var _r364_t0 = this;
                var r364_currentGlyph = _r364_t0;
                var r364_df = r272_DivFrame(r364_currentGlyph.advanceWidth / r272_Width);
                var r364_mx = r272_compositeBaseAnchors(r364_df.markSet[r362_k](), r362_fnOverride ? r362_fnOverride(r364_df) : { 'baseAnchors': {} });
                r364_currentGlyph.include(r364_mx);
                return void 0;
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r367_t0, _r367_t1;
            return { 'HCombine': r272_HCombine };
        });
        var r272_HCombine = function (r368_newid, r368_unicode, r368_id1, r368_id2, r368_spacing) {
            var _r368_t0, _r368_t1;
            if (!r368_newid)
                throw new Error('Target ID not specified');
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r368_newid, r368_unicode, function () {
                var _r371_t1;
                var _r371_t0 = this;
                var r371_currentGlyph = _r371_t0;
                r371_currentGlyph.include(r272_xn$referglyph$1aao(r368_id1), r272_AS_BASE, r272_ALSO_METRICS);
                r371_currentGlyph.include(r272_Translate(-r368_spacing, 0));
                r371_currentGlyph.include(r272_xn$referglyph$1aao(r368_id2));
                r371_currentGlyph.include(r272_Translate(r368_spacing / 2, 0));
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r377_t0, _r377_t1;
            return { 'HDual': r272_HDual };
        });
        var r272_HDual = function (r378_newid, r378_unicode, r378_id, r378_spacing) {
            var _r378_t0, _r378_t1;
            if (!r378_newid)
                throw new Error('Target ID not specified');
            return r272_HCombine(r378_newid, r378_unicode, r378_id, r378_id, r378_spacing);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r380_t0, _r380_t1;
            return { 'VCombine': r272_VCombine };
        });
        var r272_VCombine = function (r381_newid, r381_unicode, r381_id1, r381_id2, r381_spacing) {
            var _r381_t0, _r381_t1;
            if (!r381_newid)
                throw new Error('Target ID not specified');
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(r381_newid, r381_unicode, function () {
                var _r384_t1;
                var _r384_t0 = this;
                var r384_currentGlyph = _r384_t0;
                r384_currentGlyph.include(r272_xn$referglyph$1aao(r381_id2), r272_AS_BASE, r272_ALSO_METRICS);
                r384_currentGlyph.include(r272_Translate(-r381_spacing * r272_TanSlope, -r381_spacing));
                r384_currentGlyph.include(r272_xn$referglyph$1aao(r381_id1));
                r384_currentGlyph.include(r272_Translate(r381_spacing * r272_TanSlope / 2, r381_spacing / 2));
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r390_t0, _r390_t1;
            return { 'VDual': r272_VDual };
        });
        var r272_VDual = function (r391_newid, r391_unicode, r391_id, r391_spacing) {
            var _r391_t0, _r391_t1;
            if (!r391_newid)
                throw new Error('Target ID not specified');
            return r272_VCombine(r391_newid, r391_unicode, r391_id, r391_id, r391_spacing);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r393_t0, _r393_t1;
            return { 'derive-composites': r272_xn$derivecomposites$7Hrq };
        });
        return r272_xn$derivecomposites$7Hrq = function (r394_dstGid, r394_dstUnicode, r394_srcGid) {
            var r394_part, _r394_t3;
            var _r394_t4 = arguments;
            if (!r272_xn$glyphisneeded$1aao3(r394_dstGid))
                return void 0;
            var r394_components = [].slice.call(_r394_t4, 2);
            var r394_refs = [];
            var _r394_t0 = r394_components;
            var _r394_t1 = _r394_t0.length;
            var _r394_t2 = 0;
            while (_r394_t2 < _r394_t1) {
                r394_part = _r394_t0[_r394_t2];
                if (typeof r394_part === 'string')
                    r394_refs.push(r394_part);
                _r394_t2 = _r394_t2 + 1;
            }
            return r272_xn$derivemultipartglyphs$7Hrq65(r394_dstGid, r394_dstUnicode, r394_refs, function (r396_srcs) {
                var _r396_t0, _r396_t1;
                return function () {
                    var r398_asBase, r398_alsoMetrics, r398_part, _r398_t3;
                    var _r398_t2 = this;
                    var r398_currentGlyph = _r398_t2;
                    var r398_rid = 0;
                    var _r398_t0 = 0;
                    var _r398_t1 = r394_components.length;
                    var r398_j = _r398_t0;
                    while (r398_j < _r398_t1) {
                        r398_asBase = r398_j === 0 ? r272_AS_BASE : void 0;
                        r398_alsoMetrics = r398_j === 0 ? r272_ALSO_METRICS : void 0;
                        r398_part = r394_components[r398_j];
                        if (typeof r398_part === 'string') {
                            r398_currentGlyph.include(r272_xn$referglyph$1aao(r396_srcs[r398_rid]), r398_asBase, r398_alsoMetrics);
                            r398_rid = r398_rid + 1;
                        } else
                            r398_currentGlyph.include(r398_part, r398_asBase, r398_alsoMetrics);
                        r398_j = r398_j + 1;
                    }
                    return void 0;
                };
            });
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r404_xn$Capture_Ext$2Lrc2b) {
    var _r404_t0, _r404_t1;
    r404_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r404_xn$Capture_Ext$2Lrc2b, 'Recursive-Build', function (r405_xn$Capture$2Lrc8, r405_xn$ExportCapture$2Lrc4b) {
        var _r405_t4, _r405_t5;
        var _r405_t0 = r405_xn$Capture$2Lrc8;
        var r405_xn$createAndSaveGlyphImpl$2Lrc3c = _r405_t0['$createAndSaveGlyphImpl$'];
        var r405_xn$NamedParameterPair$2Lrc9b = _r405_t0['$NamedParameterPair$'];
        var r405_xn$assignUnicodeImpl$2Lrc8b = _r405_t0['$assignUnicodeImpl$'];
        var r405_xn$execState$2Lrc0b = _r405_t0['$execState$'];
        var r405_para = _r405_t0.para;
        var r405_glyphStore = _r405_t0.glyphStore;
        var r405_buildGlyphs = _r405_t0.buildGlyphs;
        var _r405_t1 = r405_xn$Capture$2Lrc8.Metrics;
        var r405_UPM = _r405_t1.UPM;
        var r405_HalfUPM = _r405_t1.HalfUPM;
        var r405_Width = _r405_t1.Width;
        var r405_SB = _r405_t1.SB;
        var r405_HookX = _r405_t1.HookX;
        var r405_LongJut = _r405_t1.LongJut;
        var r405_Jut = _r405_t1.Jut;
        var r405_AccentWidth = _r405_t1.AccentWidth;
        var r405_AdviceStroke = _r405_t1.AdviceStroke;
        var _r405_t2 = r405_xn$Capture$2Lrc8.SpiroFns;
        var _r405_t3 = r405_xn$Capture$2Lrc8.BooleFns;
        var r405_Fork = function (r406_gs, r406_ps) {
            var r406_glyphid, r406_g, _r406_t3, _r406_t4;
            var r406_glyphs = [];
            var _r406_t0 = r406_gs;
            var _r406_t1 = _r406_t0.length;
            var _r406_t2 = 0;
            while (_r406_t2 < _r406_t1) {
                r406_glyphid = _r406_t0[_r406_t2];
                r406_g = r405_glyphStore.queryByName(r406_glyphid);
                if (r406_g)
                    r406_glyphs.push(r406_g);
                _r406_t2 = _r406_t2 + 1;
            }
            r406_gs = r405_buildGlyphs(r406_ps, r405_xn$execState$2Lrc0b.dependencyManager.traverseDependencies(r406_glyphs));
            return r406_gs.glyphStore;
        };
        var r405_MiniatureParaT = function () {
            var _r409_t6;
            var _r409_t7 = arguments;
            var _r409_t0 = [].slice.call(_r409_t7, 0);
            var _r409_t1 = [];
            var _r409_t2 = 0;
            while (_r409_t2 < _r409_t0.length) {
                if (!(_r409_t0[_r409_t2] instanceof r405_xn$NamedParameterPair$2Lrc9b))
                    _r409_t1.push(_r409_t0[_r409_t2]);
                _r409_t2 = _r409_t2 + 1;
            }
            var _r409_t3 = _r409_t0;
            var _r409_t4 = _r409_t3.length;
            var _r409_t5 = 0;
            while (_r409_t5 < _r409_t4) {
                _r409_t2 = _r409_t3[_r409_t5];
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'pp')
                    r409_pp = _r409_t2.right;
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'crowd')
                    r409_crowd = _r409_t2.right;
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'scale')
                    r409_scale = _r409_t2.right;
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'sbscale')
                    r409_sbscale = _r409_t2.right;
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'mono')
                    r409_mono = _r409_t2.right;
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'mono2')
                    r409_mono2 = _r409_t2.right;
                if (_r409_t2 && _r409_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r409_t2.left === 'forceUpright')
                    r409_forceUpright = _r409_t2.right;
                _r409_t5 = _r409_t5 + 1;
            }
            var r409_pp = r1_fallback(r409_pp, _r409_t1[0]);
            var r409_crowd = r1_fallback(r409_crowd, _r409_t1[1]);
            var r409_scale = r1_fallback(r409_scale, _r409_t1[2]);
            var r409_sbscale = r1_fallback(r409_sbscale, _r409_t1[3], r405_Width / r405_UPM);
            var r409_mono = r1_fallback(r409_mono, _r409_t1[4], false);
            var r409_mono2 = r1_fallback(r409_mono2, _r409_t1[5], false);
            var r409_forceUpright = r1_fallback(r409_forceUpright, _r409_t1[6], false);
            var r409_forkedPara = Object.assign({}, r409_pp);
            r409_forkedPara.stroke = r405_AdviceStroke(r409_crowd, Math.pow(r1_clamp(0, 1, r405_HalfUPM / r405_Width), 0.5)) / r409_scale;
            r409_forkedPara.dotSize = r409_pp.dotSize * r409_forkedPara.stroke / r409_pp.stroke;
            r409_forkedPara.periodSize = r409_pp.periodSize * r409_forkedPara.stroke / r409_pp.stroke;
            r409_forkedPara.sb = r405_SB * r409_sbscale;
            if (r409_forceUpright)
                r409_forkedPara.slopeAngle = 0;
            if (r409_mono)
                r409_forkedPara.diversityM = 1;
            if (r409_mono2) {
                r409_forkedPara.diversityF = 1;
                r409_forkedPara.diversityI = 1;
                r409_forkedPara.diversityII = 1;
            }
            return r409_forkedPara;
        };
        var r405_Miniature = function (r414_glyphs) {
            var _r414_t0;
            var _r414_t1 = arguments;
            return r405_Fork(r414_glyphs, r405_MiniatureParaT.apply(null, [r405_para].concat([].slice.call(_r414_t1, 1))));
        };
        var r405_Thinner = function () {
            var _r415_t6;
            var _r415_t7 = arguments;
            var _r415_t0 = [].slice.call(_r415_t7, 0);
            var _r415_t1 = [];
            var _r415_t2 = 0;
            while (_r415_t2 < _r415_t0.length) {
                if (!(_r415_t0[_r415_t2] instanceof r405_xn$NamedParameterPair$2Lrc9b))
                    _r415_t1.push(_r415_t0[_r415_t2]);
                _r415_t2 = _r415_t2 + 1;
            }
            var _r415_t3 = _r415_t0;
            var _r415_t4 = _r415_t3.length;
            var _r415_t5 = 0;
            while (_r415_t5 < _r415_t4) {
                _r415_t2 = _r415_t3[_r415_t5];
                if (_r415_t2 && _r415_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r415_t2.left === 'glyphs')
                    r415_glyphs = _r415_t2.right;
                if (_r415_t2 && _r415_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r415_t2.left === 'p')
                    r415_p = _r415_t2.right;
                if (_r415_t2 && _r415_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r415_t2.left === 'fMono')
                    r415_fMono = _r415_t2.right;
                if (_r415_t2 && _r415_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r415_t2.left === 'crowd')
                    r415_crowd = _r415_t2.right;
                if (_r415_t2 && _r415_t2 instanceof r405_xn$NamedParameterPair$2Lrc9b && _r415_t2.left === 'crowdAdjScale')
                    r415_crowdAdjScale = _r415_t2.right;
                _r415_t5 = _r415_t5 + 1;
            }
            var r415_glyphs = r1_fallback(r415_glyphs, _r415_t1[0]);
            var r415_p = r1_fallback(r415_p, _r415_t1[1]);
            var r415_fMono = r1_fallback(r415_fMono, _r415_t1[2]);
            var r415_crowd = r1_fallback(r415_crowd, _r415_t1[3]);
            var r415_crowdAdjScale = r1_fallback(r415_crowdAdjScale, _r415_t1[4]);
            var r415_forkedPara = Object.assign({}, r405_para);
            if (r415_crowd && r415_crowdAdjScale) {
                r415_forkedPara.stroke = r405_AdviceStroke(r415_crowd) / r415_crowdAdjScale;
                r415_forkedPara.dotSize = r405_para.dotSize * r415_forkedPara.stroke / r405_para.stroke;
                r415_forkedPara.periodSize = r405_para.periodSize * r415_forkedPara.stroke / r405_para.stroke;
            }
            r415_forkedPara.unitWidthScalar = r405_para.unitWidthScalar * r415_p;
            r415_forkedPara.width = r405_Width * r415_p;
            r415_forkedPara.accentWidth = r405_AccentWidth * r415_p;
            r415_forkedPara.jut = r405_Jut * r415_p;
            r415_forkedPara.longjut = r405_LongJut * r415_p;
            r415_forkedPara.diversityM = 1;
            if (r415_fMono) {
                r415_forkedPara.diversityF = 1;
                r415_forkedPara.diversityI = 1;
                r415_forkedPara.diversityII = 1;
            }
            return r405_Fork(r415_glyphs, r415_forkedPara);
        };
        var r405_Widen = function (r420_glyphs, r420_p, r420_psb) {
            var _r420_t0, _r420_t1;
            var r420_forkedPara = Object.assign({}, r405_para);
            r420_forkedPara.unitWidthScalar = r405_para.unitWidthScalar * r420_p;
            r420_forkedPara.width = r405_Width * r420_p;
            r420_forkedPara.sb = r405_SB * r1_fallback(r420_psb, r420_p);
            r420_forkedPara.accentWidth = r405_AccentWidth * r420_p;
            r420_forkedPara.jut = r405_Jut * r420_p;
            r420_forkedPara.longjut = r405_LongJut * r420_p;
            r420_forkedPara.hookx = r405_HookX * r420_p;
            return r405_Fork(r420_glyphs, r420_forkedPara);
        };
        return r405_xn$ExportCapture$2Lrc4b(function () {
            var _r422_t0, _r422_t1;
            return {
                'Fork': r405_Fork,
                'Miniature': r405_Miniature,
                'MiniatureParaT': r405_MiniatureParaT,
                'Thinner': r405_Thinner,
                'Widen': r405_Widen
            };
        });
    });
    return void 0;
});
