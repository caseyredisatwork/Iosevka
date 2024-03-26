'use strict';
import * as _s0_t0 from './table-util.mjs';
import * as _s0_t1 from '../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as buildFrac
};
var r1_buildFrac, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
var r1_ChainRuleBuilder = _r1_t8.ChainRuleBuilder;
var _r1_t9 = _s0_t1;
var r1_NumeratorForm = _r1_t9.NumeratorForm;
var r1_DenominatorForm = _r1_t9.DenominatorForm;
_s0_t2 = r1_buildFrac = function (r265_sink, r265_glyphStore) {
    var r265_gid, r265_g, r265_numForm, r265_denForm, _r265_t3, _r265_t4, _r265_t5;
    var r265_rec = r1_BeginLookupBlock(r265_sink);
    var r265_frac = r1_AddFeature(r265_sink, 'frac');
    var _r265_t0 = r1_ChainRuleBuilder(r265_sink);
    var r265_xn$chainrule$1aao = _r265_t0[0];
    var r265_xn$reverserule$3qIs = _r265_t0[1];
    var r265_subSolidus = r1_AddLookup(r265_sink, {
        'type': 'gsub_single',
        'substitutions': {
            'solidus': 'fractionBar',
            'slash': 'fractionBar'
        }
    });
    var r265_digitSet = [];
    var r265_numSet = [];
    var r265_denSet = [];
    var _r265_t1 = r265_glyphStore.namedEntries()[Symbol.iterator]();
    var _r265_t2 = void 0;
    while (!(_r265_t2 = _r265_t1.next()).done) {
        _r265_t3 = _r265_t2.value;
        r265_gid = _r265_t3[0];
        r265_g = _r265_t3[1];
        if (r265_gid[0] !== '.') {
            r265_numForm = r1_NumeratorForm.get(r265_g);
            r265_denForm = r1_DenominatorForm.get(r265_g);
            if (r265_numForm && r265_denForm) {
                r265_digitSet.push(r265_gid);
                r265_numSet.push(r265_numForm);
                r265_denSet.push(r265_denForm);
            }
        }
    }
    var r265_subDen = r1_AddLookup(r265_sink, {
        'type': 'gsub_chaining',
        'rules': [r265_xn$chainrule$1aao(['fractionBar'].concat(r265_denSet), {
                'left': r265_digitSet,
                'right': r265_denSet
            })]
    });
    var r265_subNum = r1_AddLookup(r265_sink, {
        'type': 'gsub_reverse',
        'rules': [r265_xn$reverserule$3qIs({
                'left': r265_digitSet,
                'right': r265_numSet
            }, ['fractionBar'].concat(r265_numSet))]
    });
    r265_frac.lookups.push(r265_subSolidus);
    r265_frac.lookups.push(r265_subDen);
    r265_frac.lookups.push(r265_subNum);
    r265_sink.lookupDep.push([
        r265_subSolidus,
        r265_subDen
    ]);
    r265_sink.lookupDep.push([
        r265_subSolidus,
        r265_subNum
    ]);
    r1_AddCommonFeature(r265_sink, r265_frac);
    return r1_EndLookupBlock(r265_rec, r265_sink);
};
var r1_objectIsNotEmpty = function (r269_obj) {
    var _r269_t0, _r269_t1;
    return r269_obj && Object.keys(r269_obj).length;
};
