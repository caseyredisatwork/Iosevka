'use strict';
import * as _s0_t0 from './table-util.mjs';
var _s0_t1;
export {
    _s0_t1 as buildGrFeature
};
var r1_buildGrFeature, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
_s0_t1 = r1_buildGrFeature = function (r131_sink, r131_glyphStore, r131_gr) {
    var r131_gnSrc, r131_glyph, r131_gnDst, r131_glyphDst, r131_lookup1, r131_feature1, _r131_t2, _r131_t3, _r131_t4;
    var r131_rec = r1_BeginLookupBlock(r131_sink);
    var r131_mapping = {};
    var _r131_t0 = r131_glyphStore.namedEntries()[Symbol.iterator]();
    var _r131_t1 = void 0;
    while (!(_r131_t1 = _r131_t0.next()).done) {
        _r131_t2 = _r131_t1.value;
        r131_gnSrc = _r131_t2[0];
        r131_glyph = _r131_t2[1];
        r131_gnDst = r131_gr.get(r131_glyph);
        r131_glyphDst = r131_glyphStore.queryByName(r131_gnDst);
        if (r131_glyphDst && (r131_glyphStore.queryUnicodeOf(r131_glyph) || r131_glyphStore.queryUnicodeOf(r131_glyphDst)))
            r131_mapping[r131_gnSrc] = r131_gnDst;
    }
    if (r1_objectIsNotEmpty(r131_mapping)) {
        r131_lookup1 = r1_AddLookup(r131_sink, {
            'type': 'gsub_single',
            'substitutions': r131_mapping
        });
        r131_feature1 = r1_AddFeature(r131_sink, r131_gr.otlTag);
        r131_feature1.lookups.push(r131_lookup1);
        r1_AddCommonFeature(r131_sink, r131_feature1);
    }
    return r1_EndLookupBlock(r131_rec, r131_sink);
};
var r1_objectIsNotEmpty = function (r133_obj) {
    var _r133_t0, _r133_t1;
    return r133_obj && Object.keys(r133_obj).length;
};
