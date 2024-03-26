'use strict';
import * as _s0_t0 from './table-util.mjs';
var _s0_t1;
export {
    _s0_t1 as buildMarkMkmk
};
var r1_buildMarkMkmk, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_Map = Map;
var r1_Set = Set;
var r1_MarkClasses = [
    'above',
    'tieAbove',
    'topLeft',
    'topRight',
    'grekUpperTonos',
    'aboveBraceL',
    'aboveBraceR',
    'below',
    'tieBelow',
    'bottomLeft',
    'bottomRight',
    'trailing',
    'lf',
    'belowBraceL',
    'belowBraceR',
    'overlay',
    'slash',
    'strike',
    'cvDecompose',
    'enclosureInner',
    'enclosureInnerFirstHalf',
    'enclosureInnerSecondHalf',
    'fracBuildUp'
];
var r1_MarkInteractions = new r1_Map([
    [
        'aboveBraceL',
        [
            'aboveBraceL',
            'above',
            'tieAbove',
            'topLeft',
            'topRight',
            'grekUpperTonos'
        ]
    ],
    [
        'aboveBraceR',
        [
            'aboveBraceR',
            'above',
            'tieAbove',
            'topLeft',
            'topRight',
            'grekUpperTonos'
        ]
    ],
    [
        'belowBraceL',
        [
            'belowBraceL',
            'below',
            'tieBelow',
            'bottomLeft',
            'bottomRight',
            'trailing',
            'lf'
        ]
    ],
    [
        'belowBraceR',
        [
            'belowBraceR',
            'below',
            'tieBelow',
            'bottomLeft',
            'bottomRight',
            'trailing',
            'lf'
        ]
    ]
]);
var r1_MkmkStackingLimit = new r1_Set([
    'above',
    'below'
]);
_s0_t1 = r1_buildMarkMkmk = function (r133_sink, r133_glyphStore, r133_markGlyphs) {
    var r133_cls, r133_markLookup, r133_mkmkLookup, r133_gn, r133_glyph, r133_lidMark, r133_lidMkmk, r133_lookup, r133_interactionMarkSet, r133_includeSet, r133_ignoreSet, r133_c, _r133_t3, _r133_t4, _r133_t5, _r133_t9, _r133_t10, _r133_t11, _r133_t14, _r133_t15, _r133_t18, _r133_t19, _r133_t20, _r133_t21, _r133_t22, _r133_t23, _r133_t25;
    var r133_validMarkClasses = new r1_Set(r1_MarkClasses);
    var r133_mark = {
        'feature': r1_AddFeature(r133_sink, 'mark'),
        'lookupMap': new r1_Map(),
        'lookupNames': new r1_Set(),
        'createLookup': function () {
            var _r134_t0, _r134_t1;
            return {
                'type': 'gpos_mark_to_base',
                'marks': {},
                'bases': {}
            };
        }
    };
    var r133_mkmk = {
        'feature': r1_AddFeature(r133_sink, 'mkmk'),
        'lookupMap': new r1_Map(),
        'lookupNames': new r1_Set(),
        'createLookup': function () {
            var _r135_t0, _r135_t1;
            return {
                'type': 'gpos_mark_to_mark',
                'marks': {},
                'bases': {}
            };
        }
    };
    r1_AddCommonFeature(r133_sink, r133_mark.feature);
    r1_AddCommonFeature(r133_sink, r133_mkmk.feature);
    var _r133_t0 = r1_MarkClasses;
    var _r133_t1 = _r133_t0.length;
    var _r133_t2 = 0;
    while (_r133_t2 < _r133_t1) {
        r133_cls = _r133_t0[_r133_t2];
        r133_markLookup = r1_ensureLookup(r133_sink, r133_mark, r133_cls);
        r133_mkmkLookup = r1_ensureLookup(r133_sink, r133_mkmk, r133_cls);
        _r133_t3 = r133_glyphStore.namedEntries()[Symbol.iterator]();
        _r133_t4 = void 0;
        while (!(_r133_t4 = _r133_t3.next()).done) {
            _r133_t5 = _r133_t4.value;
            r133_gn = _r133_t5[0];
            r133_glyph = _r133_t5[1];
            if (r133_glyph.markAnchors[r133_cls]) {
                r133_markGlyphs.all.add(r133_gn);
                r133_markGlyphs.markAttachClassDef.set(r133_gn, r133_cls);
                r1_addMarkAnchor(r133_markLookup, r133_gn, r133_cls, r133_glyph.markAnchors[r133_cls]);
                r1_addMarkAnchor(r133_mkmkLookup, r133_gn, r133_cls, r133_glyph.markAnchors[r133_cls]);
            }
        }
        _r133_t2 = _r133_t2 + 1;
    }
    var _r133_t6 = r1_MarkClasses;
    var _r133_t7 = _r133_t6.length;
    var _r133_t8 = 0;
    while (_r133_t8 < _r133_t7) {
        r133_cls = _r133_t6[_r133_t8];
        r133_markLookup = r1_ensureLookup(r133_sink, r133_mark, r133_cls);
        r133_mkmkLookup = r1_ensureLookup(r133_sink, r133_mkmk, r133_cls);
        _r133_t9 = r133_glyphStore.namedEntries()[Symbol.iterator]();
        _r133_t10 = void 0;
        while (!(_r133_t10 = _r133_t9.next()).done) {
            _r133_t11 = _r133_t10.value;
            r133_gn = _r133_t11[0];
            r133_glyph = _r133_t11[1];
            if (r133_glyph.baseAnchors[r133_cls])
                if (r133_markGlyphs.all.has(r133_gn))
                    r1_addBaseAnchor(r133_mkmkLookup, r133_gn, r133_cls, r133_glyph.baseAnchors[r133_cls]);
                else
                    r1_addBaseAnchor(r133_markLookup, r133_gn, r133_cls, r133_glyph.baseAnchors[r133_cls]);
        }
        _r133_t8 = _r133_t8 + 1;
    }
    var _r133_t12 = r133_mark.lookupNames[Symbol.iterator]();
    var _r133_t13 = void 0;
    while (!(_r133_t13 = _r133_t12.next()).done) {
        r133_lidMark = _r133_t13.value;
        _r133_t14 = r133_mkmk.lookupNames[Symbol.iterator]();
        _r133_t15 = void 0;
        while (!(_r133_t15 = _r133_t14.next()).done) {
            r133_lidMkmk = _r133_t15.value;
            r133_sink.lookupDep.push([
                r133_lidMark,
                r133_lidMkmk
            ]);
        }
    }
    var _r133_t16 = r133_mkmk.lookupMap[Symbol.iterator]();
    var _r133_t17 = void 0;
    var _r133_t24 = !(_r133_t17 = _r133_t16.next()).done;
    while (_r133_t24) {
        _r133_t18 = _r133_t17.value;
        r133_cls = _r133_t18[0];
        r133_lookup = _r133_t18[1];
        r133_interactionMarkSet = new r1_Set(r1_MarkInteractions.get(r133_cls) || [r133_cls]);
        r133_includeSet = new r1_Set();
        r133_ignoreSet = new r1_Set();
        _r133_t19 = r133_markGlyphs.markAttachClassDef[Symbol.iterator]();
        _r133_t20 = void 0;
        while (!(_r133_t20 = _r133_t19.next()).done) {
            _r133_t21 = _r133_t20.value;
            r133_gn = _r133_t21[0];
            r133_c = _r133_t21[1];
            if (r133_interactionMarkSet.has(r133_c))
                r133_includeSet.add(r133_gn);
            else
                r133_ignoreSet.add(r133_gn);
        }
        r133_lookup.ignoreGlyphs = Array.from(r133_ignoreSet);
        _r133_t25 = r133_interactionMarkSet.size > 1 ? r133_markGlyphs.markGlyphSets.push(Array.from(r133_includeSet)) : void 0;
        _r133_t24 = !(_r133_t17 = _r133_t16.next()).done;
    }
    return _r133_t25;
};
var r1_ensureLookup = function (r144_sink, r144_feat, r144_cls) {
    var _r144_t0, _r144_t1;
    var r144_existing = r144_feat.lookupMap.get(r144_cls);
    if (r144_existing)
        return r144_existing;
    var r144_novel = r144_feat.createLookup();
    var r144_lid = r1_AddLookup(r144_sink, r144_novel);
    r144_feat.feature.lookups.push(r144_lid);
    r144_feat.lookupNames.add(r144_lid);
    r144_feat.lookupMap.set(r144_cls, r144_novel);
    return r144_novel;
};
var r1_addMarkAnchor = function (r145_lookup, r145_gn, r145_cls, r145_anchor) {
    var _r145_t0, _r145_t1;
    var r145_a = {
        'class': r145_cls,
        'x': r145_anchor.x,
        'y': r145_anchor.y
    };
    return r145_lookup.marks[r145_gn] = r145_a;
};
var r1_addBaseAnchor = function (r146_lookup, r146_gn, r146_cls, r146_anchor) {
    var _r146_t0, _r146_t1;
    var r146_a = {
        'x': r146_anchor.x,
        'y': r146_anchor.y
    };
    if (!r146_lookup.bases[r146_gn])
        r146_lookup.bases[r146_gn] = {};
    return r146_lookup.bases[r146_gn][r146_cls] = r146_a;
};
