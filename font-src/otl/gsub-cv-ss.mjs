'use strict';
import * as _s0_t0 from './table-util.mjs';
import * as _s0_t1 from '../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as buildCVSS
};
var r1_buildCVSS, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r299_t) {
    var r299_n, r299_i, r299_a, _r299_t3, _r299_t4, _r299_t5, _r299_t6, _r299_t7, _r299_t8, _r299_t9, _r299_t10, _r299_t11, _r299_t12, _r299_t13, _r299_t14, _r299_t15, _r299_t16, _r299_t17, _r299_t18, _r299_t19, _r299_t20, _r299_t21, _r299_t22, _r299_t23, _r299_t24, _r299_t25, _r299_t26;
    var _r299_t0 = function () {
        _r299_t7 = function (_r299_t8) {
            _r299_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r299_t8
            };
        };
        _r299_t9 = r299_t instanceof Array;
        if (_r299_t9) {
            _r299_t10 = r299_n = r299_t.length;
            _r299_t11 = r299_i = 0;
            _r299_t12 = function (_r299_t14) {
                return _r299_t7(_r299_t14);
            };
            _r299_t13 = function (_r299_t15) {
                _r299_t16 = r299_i < r299_n;
                if (_r299_t16) {
                    _r299_t0 = function (_r299_t17) {
                        return _r299_t13(r299_i = r299_i + 1);
                    };
                    return {
                        'value': [
                            r299_i,
                            r299_t[r299_i]
                        ],
                        'done': false
                    };
                } else
                    return _r299_t12(_r299_t15);
            };
            return _r299_t13();
        } else {
            _r299_t18 = r299_a = Object.keys(r299_t);
            _r299_t19 = r299_n = r299_a.length;
            _r299_t20 = r299_i = 0;
            _r299_t21 = function (_r299_t23) {
                return _r299_t7(_r299_t23);
            };
            _r299_t22 = function (_r299_t24) {
                _r299_t25 = r299_i < r299_n;
                if (_r299_t25) {
                    _r299_t0 = function (_r299_t26) {
                        return _r299_t22(r299_i = r299_i + 1);
                    };
                    return {
                        'value': [
                            r299_a[r299_i],
                            r299_t[r299_a[r299_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r299_t21(_r299_t24);
            };
            return _r299_t22();
        }
    };
    var _r299_t1 = function (x) {
        try {
            return _r299_t0(x);
        } catch (ex) {
            return _r299_t2(ex);
        }
    };
    var _r299_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r299_t3 = this;
    else {
        _r299_t4 = function () {
            void 0;
        };
        _r299_t4.prototype = _r1_t10.prototype;
        _r299_t3 = new _r299_t4();
    }
    _r299_t3[Symbol.iterator] = function () {
        return _r299_t3;
    };
    _r299_t3.next = _r299_t1;
    _r299_t3.throw = function (x) {
        return _r299_t2(x);
    };
    return _r299_t3;
};
var _r1_t8 = _s0_t0;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_PickCommonFeature = _r1_t8.PickCommonFeature;
var r1_AddFeatureLookup = _r1_t8.AddFeatureLookup;
var r1_PickLookup = _r1_t8.PickLookup;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
var r1_ChainRuleBuilder = _r1_t8.ChainRuleBuilder;
var _r1_t9 = _s0_t1;
var r1_Cv = _r1_t9.Cv;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_RightDependentLink = _r1_t9.RightDependentLink;
var r1_RightDependentTrigger = _r1_t9.RightDependentTrigger;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$lookaround$5sIl = null;
var r1_FeatureName = function (r266_tag) {
    var _r266_t0, _r266_t1;
    return r266_tag + '_cvss';
};
var r1_SsLookupName = function (r267_tag) {
    var _r267_t0, _r267_t1;
    return 'lookup_ss_' + r267_tag;
};
var r1_CvLookupName = function (r268_tag) {
    var _r268_t0, _r268_t1;
    return 'lookup_cv_' + r268_tag;
};
var r1_CvDecomposeLookupName = function (r269_tag) {
    var _r269_t0, _r269_t1;
    return 'lookup_cv_decompose_' + r269_tag;
};
_s0_t2 = r1_buildCVSS = function (r271_sink, r271_para, r271_glyphStore) {
    var r271_gn, r271_glyph, r271_decomp, r271_name, r271_composition, r271_lutn, r271_st, r271_k, r271_v, r271_idx, r271_lutnDe, r271_lutnCv, r271_lutnSs, _r271_t3, _r271_t6, _r271_t9, _r271_t12, _r271_t15, _r271_t16, _r271_t17, _r271_t18, _r271_t19, _r271_t22, _r271_t23, _r271_t26, _r271_t27, _r271_t30, _r271_t31, _r271_t32, _r271_t33, _r271_t34, _r271_tag35, _r271_t36, _r271_tag37, _r271_t38, _r271_tag39, _r271_t40, _r271_tag41;
    var _r271_t0 = r1_ChainRuleBuilder(r271_sink);
    var r271_xn$chainrule$1aao = _r271_t0[0];
    var r271_rec = r1_BeginLookupBlock(r271_sink);
    var r271_cvLookupNameSet = new r1_Set();
    var r271_ssLookupNameSet = new r1_Set();
    var r271_decompositions = new r1_Map();
    var r271_cvDecompositionLookupNameSet = new r1_Set();
    var r271_cvTagToDecompositionLookups = new r1_Map();
    var _r271_t1 = r271_glyphStore.namedEntries()[Symbol.iterator]();
    var _r271_t2 = void 0;
    while (!(_r271_t2 = _r271_t1.next()).done) {
        _r271_t3 = _r271_t2.value;
        r271_gn = _r271_t3[0];
        r271_glyph = _r271_t3[1];
        if (r1_CvDecompose.get(r271_glyph))
            (function () {
                var r274_part, r274_gPart, r274_gr, _r274_t3, _r274_t4, _r274_t5, _r274_t7;
                var r274_decomp = {
                    'parts': r1_CvDecompose.get(r271_glyph),
                    'influences': new r1_Set()
                };
                r271_decompositions.set(r271_gn, r274_decomp);
                var _r274_t0 = r274_decomp.parts;
                var _r274_t1 = _r274_t0.length;
                var _r274_t2 = 0;
                var _r274_t6 = _r274_t2 < _r274_t1;
                while (_r274_t6) {
                    r274_part = _r274_t0[_r274_t2];
                    r274_gPart = r271_glyphStore.queryByName(r274_part);
                    if (r274_gPart) {
                        _r274_t3 = r1_AnyCv.query(r274_gPart);
                        _r274_t4 = _r274_t3.length;
                        _r274_t5 = 0;
                        while (_r274_t5 < _r274_t4) {
                            r274_gr = _r274_t3[_r274_t5];
                            if (r274_gr.tag)
                                r274_decomp.influences.add(r274_gr.tag);
                            _r274_t5 = _r274_t5 + 1;
                        }
                    }
                    _r274_t7 = _r274_t2 = _r274_t2 + 1;
                    _r274_t6 = _r274_t2 < _r274_t1;
                }
                return _r274_t7;
            }());
    }
    var _r271_t4 = r271_decompositions[Symbol.iterator]();
    var _r271_t5 = void 0;
    while (!(_r271_t5 = _r271_t4.next()).done) {
        _r271_t6 = _r271_t5.value;
        r271_gn = _r271_t6[0];
        r271_decomp = _r271_t6[1];
        if (r271_decomp.influences.size)
            (function () {
                var r280_cvTag, r280_s, _r280_t3;
                var r280_lookupName = r1_CvDecomposeLookupName(Array.from(r271_decomp.influences).sort().join('/'));
                var r280_lookup = r1_PickLookup(r271_sink, r280_lookupName, {
                    'type': 'gsub_multiple',
                    'substitutions': {}
                });
                r271_cvDecompositionLookupNameSet.add(r280_lookupName);
                r280_lookup.substitutions[r271_gn] = r271_decomp.parts;
                var _r280_t0 = r271_decomp.influences[Symbol.iterator]();
                var _r280_t1 = void 0;
                var _r280_t2 = !(_r280_t1 = _r280_t0.next()).done;
                while (_r280_t2) {
                    _r280_t3 = (r280_cvTag = _r280_t1.value, r280_s = r271_cvTagToDecompositionLookups.get(r280_cvTag), !r280_s ? (r280_s = new r1_Set(), r271_cvTagToDecompositionLookups.set(r280_cvTag, r280_s)) : void 0, r280_s.add(r280_lookupName));
                    _r280_t2 = !(_r280_t1 = _r280_t0.next()).done;
                }
                return _r280_t3;
            }());
    }
    var r271_addCvMapping = function (r282_tag, r282_src, r282_dst, r282_rank) {
        var r282_decompLookups, r282_d, _r282_t0, _r282_t1, _r282_t2, _r282_t3;
        var r282_feature = r1_PickCommonFeature(r271_sink, r1_FeatureName(r282_tag));
        var r282_lookupName = r1_CvLookupName(r282_tag);
        var r282_lookup = r1_PickLookup(r271_sink, r282_lookupName, {
            'type': 'gsub_alternate',
            'substitutions': {}
        });
        if (!r271_cvLookupNameSet.has(r282_lookupName)) {
            r1_AddFeatureLookup(r282_feature, r282_lookupName);
            r271_cvLookupNameSet.add(r282_lookupName);
            r282_decompLookups = r271_cvTagToDecompositionLookups.get(r282_tag);
            if (r282_decompLookups) {
                _r282_t0 = r282_decompLookups[Symbol.iterator]();
                _r282_t1 = void 0;
                while (!(_r282_t1 = _r282_t0.next()).done) {
                    r282_d = _r282_t1.value;
                    r1_AddFeatureLookup(r282_feature, r282_d);
                }
            }
        }
        if (!r282_lookup.substitutions[r282_src])
            r282_lookup.substitutions[r282_src] = [];
        return r282_lookup.substitutions[r282_src][r282_rank - 1] = r282_dst;
    };
    var r271_addSsSubstitution = function (r284_tag, r284_decomp, r284_src, r284_dst) {
        var r284_prime, r284_pv, r284_decompLookups, r284_d, _r284_t0, _r284_t1, _r284_t2, _r284_t3, _r284_t4, _r284_t5, _r284_t6, _r284_t7;
        var r284_feature = r1_PickCommonFeature(r271_sink, r1_FeatureName(r284_tag));
        var r284_lookupName = r1_SsLookupName(r271_composition.tag);
        var r284_lookup = r1_PickLookup(r271_sink, r284_lookupName, {
            'type': 'gsub_single',
            'substitutions': {}
        });
        if (!r271_ssLookupNameSet.has(r284_lookupName)) {
            r1_AddFeatureLookup(r284_feature, r284_lookupName);
            r271_ssLookupNameSet.add(r284_lookupName);
            _r284_t0 = r284_decomp;
            _r284_t1 = _r284_t0.length;
            _r284_t2 = 0;
            while (_r284_t2 < _r284_t1) {
                _r284_t3 = _r284_t0[_r284_t2];
                r284_prime = _r284_t3[0];
                r284_pv = _r284_t3[1];
                if (r284_pv.tag && r284_pv.rank) {
                    r284_decompLookups = r271_cvTagToDecompositionLookups.get(r284_pv.tag);
                    if (r284_decompLookups) {
                        _r284_t4 = r284_decompLookups[Symbol.iterator]();
                        _r284_t5 = void 0;
                        while (!(_r284_t5 = _r284_t4.next()).done) {
                            r284_d = _r284_t5.value;
                            r1_AddFeatureLookup(r284_feature, r284_d);
                        }
                    }
                }
                _r284_t2 = _r284_t2 + 1;
            }
        }
        return r284_lookup.substitutions[r284_src] = r284_dst;
    };
    var _r271_t7 = r271_glyphStore.namedEntries()[Symbol.iterator]();
    var _r271_t8 = void 0;
    while (!(_r271_t8 = _r271_t7.next()).done) {
        _r271_t9 = _r271_t8.value;
        r271_gn = _r271_t9[0];
        r271_glyph = _r271_t9[1];
        if (!r1_CvDecompose.get(r271_glyph))
            (function () {
                var r289_gr, _r289_t4;
                var _r289_t0 = r1_AnyCv.query(r271_glyph);
                var _r289_t1 = _r289_t0.length;
                var _r289_t2 = 0;
                var _r289_t3 = _r289_t2 < _r289_t1;
                while (_r289_t3) {
                    _r289_t4 = (r289_gr = _r289_t0[_r289_t2], r289_gr.tag ? r271_addCvMapping(r289_gr.tag, r271_gn, r271_glyphStore.ensureExists(r289_gr.get(r271_glyph)), r289_gr.rank) : void 0, _r289_t2 = _r289_t2 + 1);
                    _r289_t3 = _r289_t2 < _r289_t1;
                }
                return _r289_t4;
            }());
    }
    var _r271_t10 = r271_para.variants.composites[Symbol.iterator]();
    var _r271_t11 = void 0;
    while (!(_r271_t11 = _r271_t10.next()).done) {
        _r271_t12 = _r271_t11.value;
        r271_name = _r271_t12[0];
        r271_composition = _r271_t12[1];
        if (r271_composition.tag)
            (function () {
                var r294_prime, r294_pv, r294_gr, r294_gn, r294_glyph, r294_substituted, _r294_t3, _r294_t4, _r294_t5, _r294_t6, _r294_t8;
                var r294_decomp = r271_composition.decompose(r271_para, r271_para.variants.selectorTree);
                var _r294_t0 = r294_decomp;
                var _r294_t1 = _r294_t0.length;
                var _r294_t2 = 0;
                var _r294_t7 = _r294_t2 < _r294_t1;
                while (_r294_t7) {
                    _r294_t3 = _r294_t0[_r294_t2];
                    r294_prime = _r294_t3[0];
                    r294_pv = _r294_t3[1];
                    if (r294_pv.tag && r294_pv.rank) {
                        r294_gr = r1_Cv(r294_pv.tag, r294_pv.rank);
                        _r294_t4 = r271_glyphStore.namedEntries()[Symbol.iterator]();
                        _r294_t5 = void 0;
                        while (!(_r294_t5 = _r294_t4.next()).done) {
                            _r294_t6 = _r294_t5.value;
                            r294_gn = _r294_t6[0];
                            r294_glyph = _r294_t6[1];
                            if (!r1_CvDecompose.get(r294_glyph)) {
                                r294_substituted = r294_gr.get(r294_glyph);
                                if (r294_substituted)
                                    r271_addSsSubstitution(r271_composition.tag, r294_decomp, r294_gn, r294_substituted);
                            }
                        }
                    }
                    _r294_t8 = _r294_t2 = _r294_t2 + 1;
                    _r294_t7 = _r294_t2 < _r294_t1;
                }
                return _r294_t8;
            }());
    }
    var _r271_t13 = r271_cvLookupNameSet[Symbol.iterator]();
    var _r271_t14 = void 0;
    while (!(_r271_t14 = _r271_t13.next()).done) {
        r271_lutn = _r271_t14.value;
        r271_st = r1_PickLookup(r271_sink, r271_lutn).substitutions;
        _r271_t15 = _r1_t2(r271_st)[Symbol.iterator]();
        _r271_t16 = void 0;
        while (!(_r271_t16 = _r271_t15.next()).done) {
            _r271_t17 = _r271_t16.value;
            r271_k = _r271_t17[0];
            r271_v = _r271_t17[1];
            _r271_t18 = 0;
            _r271_t19 = r271_v.length;
            r271_idx = _r271_t18;
            while (r271_idx < _r271_t19) {
                if (!r271_v[r271_idx])
                    r271_v[r271_idx] = r271_k;
                r271_idx = r271_idx + 1;
            }
        }
    }
    var _r271_t20 = r271_cvDecompositionLookupNameSet[Symbol.iterator]();
    var _r271_t21 = void 0;
    while (!(_r271_t21 = _r271_t20.next()).done) {
        r271_lutnDe = _r271_t21.value;
        _r271_t22 = r271_cvLookupNameSet[Symbol.iterator]();
        _r271_t23 = void 0;
        while (!(_r271_t23 = _r271_t22.next()).done) {
            r271_lutnCv = _r271_t23.value;
            r271_sink.lookupDep.push([
                r271_lutnDe,
                r271_lutnCv
            ]);
        }
    }
    var _r271_t24 = r271_cvDecompositionLookupNameSet[Symbol.iterator]();
    var _r271_t25 = void 0;
    while (!(_r271_t25 = _r271_t24.next()).done) {
        r271_lutnDe = _r271_t25.value;
        _r271_t26 = r271_ssLookupNameSet[Symbol.iterator]();
        _r271_t27 = void 0;
        while (!(_r271_t27 = _r271_t26.next()).done) {
            r271_lutnSs = _r271_t27.value;
            r271_sink.lookupDep.push([
                r271_lutnDe,
                r271_lutnSs
            ]);
        }
    }
    var _r271_t28 = r271_cvLookupNameSet[Symbol.iterator]();
    var _r271_t29 = void 0;
    while (!(_r271_t29 = _r271_t28.next()).done) {
        r271_lutnCv = _r271_t29.value;
        _r271_t30 = r271_ssLookupNameSet[Symbol.iterator]();
        _r271_t31 = void 0;
        while (!(_r271_t31 = _r271_t30.next()).done) {
            r271_lutnSs = _r271_t31.value;
            r271_sink.lookupDep.push([
                r271_lutnCv,
                r271_lutnSs
            ]);
        }
    }
    return r1_EndLookupBlock(r271_rec, r271_sink);
};
var r1_objectIsNotEmpty = function (r308_obj) {
    var _r308_t0, _r308_t1;
    return r308_obj && Object.keys(r308_obj).length;
};
