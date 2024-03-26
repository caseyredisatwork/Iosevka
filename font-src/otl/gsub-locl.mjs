'use strict';
import * as _s0_t0 from './table-util.mjs';
var _s0_t1;
export {
    _s0_t1 as buildLOCL
};
var r1_buildLOCL, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_CopyLanguage = _r1_t8.CopyLanguage;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
_s0_t1 = r1_buildLOCL = function (r131_sink, r131_para, r131_glyphStore) {
    var _r131_t0, _r131_t1;
    var r131_rec = r1_BeginLookupBlock(r131_sink);
    var r131_cyrlSRB = r1_CopyLanguage(r131_sink, 'cyrl_SRB ', 'cyrl_DFLT');
    var r131_cyrlMKD = r1_CopyLanguage(r131_sink, 'cyrl_MKD ', 'cyrl_DFLT');
    var r131_cyrlBGR = r1_CopyLanguage(r131_sink, 'cyrl_BGR ', 'cyrl_DFLT');
    var r131_loclSRB = r1_AddFeature(r131_sink, 'locl');
    r131_cyrlSRB.features.unshift(r131_loclSRB.name);
    r131_cyrlMKD.features.unshift(r131_loclSRB.name);
    r131_loclSRB.lookups.push(r1_AddLookup(r131_sink, {
        'type': 'gsub_single',
        'substitutions': r131_para.isItalic ? {
            'cyrl/be': r131_glyphStore.ensureExists('cyrl/be.SRB'),
            'cyrl/ghe': r131_glyphStore.ensureExists('cyrl/ghe.SRB'),
            'cyrl/de': r131_glyphStore.ensureExists('cyrl/de.SRB'),
            'cyrl/gje': r131_glyphStore.ensureExists('cyrl/gje.SRB'),
            'cyrl/pe': r131_glyphStore.ensureExists('cyrl/pe.SRB'),
            'cyrl/te': r131_glyphStore.ensureExists('cyrl/te.SRB')
        } : { 'cyrl/be': r131_glyphStore.ensureExists('cyrl/be.SRB') }
    }));
    var r131_loclBGR = r1_AddFeature(r131_sink, 'locl');
    r131_cyrlBGR.features.unshift(r131_loclBGR.name);
    r131_loclBGR.lookups.push(r1_AddLookup(r131_sink, {
        'type': 'gsub_single',
        'substitutions': {
            'cyrl/ve': r131_glyphStore.ensureExists('cyrl/ve.BGR'),
            'cyrl/ghe': r131_glyphStore.ensureExists('cyrl/ghe.italic'),
            'cyrl/De': r131_glyphStore.ensureExists('cyrl/De.BGR'),
            'cyrl/de': r131_glyphStore.ensureExists('cyrl/de.BGR'),
            'cyrl/zhe': r131_glyphStore.ensureExists('cyrl/zhe.BGR'),
            'cyrl/ze': r131_glyphStore.ensureExists('cyrl/ze.BGR'),
            'cyrl/i': r131_glyphStore.ensureExists('cyrl/i.BGR'),
            'cyrl/ibreve': r131_glyphStore.ensureExists('cyrl/ibreve.BGR'),
            'cyrl/igrave': r131_glyphStore.ensureExists('cyrl/igrave.BGR'),
            'cyrl/ka': r131_glyphStore.ensureExists('cyrl/ka.BGR'),
            'cyrl/El': r131_glyphStore.ensureExists('cyrl/El.BGR'),
            'cyrl/el': r131_glyphStore.ensureExists('cyrl/el.BGR'),
            'cyrl/en': r131_glyphStore.ensureExists('cyrl/en.BGR'),
            'cyrl/pe': r131_glyphStore.ensureExists('cyrl/pe.BGR'),
            'cyrl/te': r131_glyphStore.ensureExists('cyrl/te.BGR'),
            'cyrl/che': r131_glyphStore.ensureExists('cyrl/che.BGR'),
            'cyrl/sha': r131_glyphStore.ensureExists('cyrl/sha.BGR'),
            'cyrl/shcha': r131_glyphStore.ensureExists('cyrl/shcha.BGR'),
            'cyrl/yu': r131_glyphStore.ensureExists('cyrl/yu.BGR'),
            'cyrl/tse': r131_glyphStore.ensureExists('cyrl/tse.BGR'),
            'cyrl/yer': r131_glyphStore.ensureExists('cyrl/yer.BGR'),
            'cyrl/yeri': r131_glyphStore.ensureExists('cyrl/yeri.BGR')
        }
    }));
    return r1_EndLookupBlock.Front(r131_rec, r131_sink);
};
