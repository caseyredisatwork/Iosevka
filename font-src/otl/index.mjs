'use strict';
import * as _s0_t0 from 'toposort';
import * as _s0_t1 from '../support/gr.mjs';
import * as _s0_t2 from './table-util.mjs';
import * as _s0_t3 from './gsub-ligation.mjs';
import * as _s0_t4 from './gsub-ccmp.mjs';
import * as _s0_t5 from './gsub-gr.mjs';
import * as _s0_t6 from './gsub-frac.mjs';
import * as _s0_t7 from './gsub-cv-ss.mjs';
import * as _s0_t8 from './gsub-locl.mjs';
import * as _s0_t9 from './gsub-thousands.mjs';
import * as _s0_t10 from './gpos-mark-mkmk.mjs';
import * as _s0_t11 from './compat-ligature.mjs';
var _s0_t12;
export {
    _s0_t12 as buildOtl
};
var r1_buildOtl, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_toposort = _s0_t0;
var r1_Gr = _s0_t1;
var _r1_t8 = _s0_t2;
var r1_CreateEmptyTable = _r1_t8.CreateEmptyTable;
var r1_FinalizeTable = _r1_t8.FinalizeTable;
var r1_MoveBackUtilityLookups = _r1_t8.MoveBackUtilityLookups;
var _r1_t9 = _s0_t3;
var r1_buildLigations = _r1_t9.buildLigations;
var _r1_t10 = _s0_t4;
var r1_buildCCMP = _r1_t10.buildCCMP;
var r1_buildCCMPPostCvSs = _r1_t10.buildCCMPPostCvSs;
var _r1_t11 = _s0_t5;
var r1_buildGrFeature = _r1_t11.buildGrFeature;
var _r1_t12 = _s0_t6;
var r1_buildFrac = _r1_t12.buildFrac;
var _r1_t13 = _s0_t7;
var r1_buildCVSS = _r1_t13.buildCVSS;
var _r1_t14 = _s0_t8;
var r1_buildLOCL = _r1_t14.buildLOCL;
var _r1_t15 = _s0_t9;
var r1_buildGsubThousands = _r1_t15.buildGsubThousands;
var _r1_t16 = _s0_t10;
var r1_buildMarkMkmk = _r1_t16.buildMarkMkmk;
var _r1_t17 = _s0_t11;
var r1_BuildCompatLigatures = _r1_t17.BuildCompatLigatures;
var r1_GDEF_SIMPLE = 1;
var r1_GDEF_LIGATURE = 2;
var r1_GDEF_MARK = 3;
var r1_Set = Set;
var r1_Map = Map;
var r1_buildGSUB = function (r143_para, r143_glyphStore, r143_markGlyphs) {
    var _r143_t0, _r143_t1, _r143_t2, _r143_tag3;
    var r143_gsub = r1_CreateEmptyTable();
    if (r143_para.enableNwidWwid) {
        r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.Nwid);
        r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.Wwid);
    }
    r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.Lnum);
    r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.Onum);
    if (r143_para.enableCvSs)
        r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.AplForm);
    r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.NumeratorForm);
    r1_buildGrFeature(r143_gsub, r143_glyphStore, r1_Gr.DenominatorForm);
    var r143_ccmp = r1_buildCCMP(r143_gsub, r143_glyphStore, r143_markGlyphs);
    r1_buildFrac(r143_gsub, r143_glyphStore);
    if (r143_para.enableLigation)
        (function () {
            var r145_plm = Object.assign({}, r143_para.ligation.defaultBuildup);
            if (r143_para.ligation.caltBuildup && r143_para.ligation.caltBuildup.length)
                r145_plm.calt = r143_para.ligation.caltBuildup;
            return r1_buildLigations(r143_gsub, r143_para, r145_plm);
        }());
    r1_buildGsubThousands(r143_gsub, r143_para, r143_glyphStore);
    if (r143_para.enableCvSs)
        r1_buildCVSS(r143_gsub, r143_para, r143_glyphStore);
    r1_buildCCMPPostCvSs(r143_gsub, r143_ccmp, r143_glyphStore, r143_markGlyphs);
    r1_buildLOCL(r143_gsub, r143_para, r143_glyphStore);
    r1_MoveBackUtilityLookups(r143_gsub);
    r1_FinalizeTable(r143_gsub);
    return r143_gsub;
};
var r1_buildGPOS = function (r146_para, r146_glyphStore, r146_markGlyphs) {
    var _r146_t0, _r146_t1;
    var r146_gpos = r1_CreateEmptyTable();
    r1_buildMarkMkmk(r146_gpos, r146_glyphStore, r146_markGlyphs);
    r1_FinalizeTable(r146_gpos);
    return r146_gpos;
};
var r1_buildGDEF = function (r147_para, r147_glyphStore, r147_markGlyphs) {
    var r147_gn, r147_glyph, r147_clsStr, r147_clsNum, _r147_t2, _r147_t5, _r147_t6, _r147_t7;
    var r147_GDEF = {
        'glyphClassDef': {},
        'markAttachClassDef': {},
        'markGlyphSets': []
    };
    var _r147_t0 = r147_glyphStore.namedEntries()[Symbol.iterator]();
    var _r147_t1 = void 0;
    while (!(_r147_t1 = _r147_t0.next()).done) {
        _r147_t2 = _r147_t1.value;
        r147_gn = _r147_t2[0];
        r147_glyph = _r147_t2[1];
        if (r147_markGlyphs.all.has(r147_gn))
            r147_GDEF.glyphClassDef[r147_gn] = r1_GDEF_MARK;
        else if (/_/.test(r147_gn))
            r147_GDEF.glyphClassDef[r147_gn] = r1_GDEF_LIGATURE;
        else if (true)
            r147_GDEF.glyphClassDef[r147_gn] = r1_GDEF_SIMPLE;
        else
            void 0;
    }
    var r147_n = 1;
    var r147_m = new r1_Map();
    var _r147_t3 = r147_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r147_t4 = void 0;
    while (!(_r147_t4 = _r147_t3.next()).done) {
        _r147_t5 = _r147_t4.value;
        r147_gn = _r147_t5[0];
        r147_clsStr = _r147_t5[1];
        r147_clsNum = r147_m.get(r147_clsStr);
        if (!r147_clsNum) {
            r147_clsNum = r147_n;
            r147_n = r147_n + 1;
            r147_m.set(r147_clsStr, r147_clsNum);
        }
        r147_GDEF.markAttachClassDef[r147_gn] = r147_clsNum;
    }
    r147_GDEF.markGlyphSets = r147_markGlyphs.markGlyphSets;
    return r147_GDEF;
};
_s0_t12 = r1_buildOtl = function (r151_para, r151_glyphStore) {
    var r151_gnMark, _r151_t2, _r151_t3;
    var r151_markGlyphs = {
        'all': new r1_Set(),
        'markAttachClassDef': new r1_Map(),
        'markGlyphSets': []
    };
    var r151_GPOS = r1_buildGPOS(r151_para, r151_glyphStore, r151_markGlyphs);
    var r151_GDEF = r1_buildGDEF(r151_para, r151_glyphStore, r151_markGlyphs);
    var r151_GSUB = r1_buildGSUB(r151_para, r151_glyphStore, r151_markGlyphs);
    var _r151_t0 = r151_markGlyphs.all[Symbol.iterator]();
    var _r151_t1 = void 0;
    while (!(_r151_t1 = _r151_t0.next()).done) {
        r151_gnMark = _r151_t1.value;
        r1_Gr.Joining.or(r151_glyphStore.queryByName(r151_gnMark), r1_Gr.Joining.Classes.Left);
    }
    if (r151_para.enableLigation && r151_para.compLig)
        r1_BuildCompatLigatures(r151_para, r151_glyphStore, r151_GSUB, r151_GDEF, r151_para.compLig);
    return {
        'GSUB': r151_GSUB,
        'GPOS': r151_GPOS,
        'GDEF': r151_GDEF
    };
};
