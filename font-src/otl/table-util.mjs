'use strict';
import * as _s0_t0 from 'toposort';
import * as _s0_t1 from '../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as CreateEmptyTable
};
var _s0_t3;
export {
    _s0_t3 as PickLanguage
};
var _s0_t4;
export {
    _s0_t4 as CopyLanguage
};
var _s0_t5;
export {
    _s0_t5 as AddLangFeature
};
var _s0_t6;
export {
    _s0_t6 as AddFeature
};
var _s0_t7;
export {
    _s0_t7 as PickFeature
};
var _s0_t8;
export {
    _s0_t8 as PickCommonFeature
};
var _s0_t9;
export {
    _s0_t9 as AddFeatureLookup
};
var _s0_t10;
export {
    _s0_t10 as AddLookup
};
var _s0_t11;
export {
    _s0_t11 as PickLookup
};
var _s0_t12;
export {
    _s0_t12 as AddCommonFeature
};
var _s0_t13;
export {
    _s0_t13 as BeginLookupBlock
};
var _s0_t14;
export {
    _s0_t14 as EndLookupBlock
};
var _s0_t15;
export {
    _s0_t15 as MoveBackUtilityLookups
};
var _s0_t16;
export {
    _s0_t16 as ChainRuleBuilder
};
var _s0_t17;
export {
    _s0_t17 as QueryRelatedGlyphs
};
var _s0_t18;
export {
    _s0_t18 as FinalizeTable
};
var _s0_t19;
export {
    _s0_t19 as UkMapToLookup
};
var _s0_t20;
export {
    _s0_t20 as UkMap2ToLookup
};
var r1_CreateEmptyTable, r1_PickLanguage, r1_CopyLanguage, r1_AddLangFeature, r1_AddFeature, r1_PickFeature, r1_PickCommonFeature, r1_AddFeatureLookup, r1_AddLookup, r1_PickLookup, r1_AddCommonFeature, r1_BeginLookupBlock, r1_EndLookupBlock, r1_MoveBackUtilityLookups, r1_ChainRuleBuilder, r1_QueryRelatedGlyphs, r1_FinalizeTable, r1_UkMapToLookup, r1_UkMap2ToLookup, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r211_t) {
    var r211_n, r211_i, r211_a, _r211_t3, _r211_t4, _r211_t5, _r211_t6, _r211_t7, _r211_t8, _r211_t9, _r211_t10, _r211_t11, _r211_t12, _r211_t13, _r211_t14, _r211_t15, _r211_t16, _r211_t17, _r211_t18, _r211_t19, _r211_t20, _r211_t21, _r211_t22, _r211_t23, _r211_t24, _r211_t25, _r211_t26;
    var _r211_t0 = function () {
        _r211_t7 = function (_r211_t8) {
            _r211_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r211_t8
            };
        };
        _r211_t9 = r211_t instanceof Array;
        if (_r211_t9) {
            _r211_t10 = r211_n = r211_t.length;
            _r211_t11 = r211_i = 0;
            _r211_t12 = function (_r211_t14) {
                return _r211_t7(_r211_t14);
            };
            _r211_t13 = function (_r211_t15) {
                _r211_t16 = r211_i < r211_n;
                if (_r211_t16) {
                    _r211_t0 = function (_r211_t17) {
                        return _r211_t13(r211_i = r211_i + 1);
                    };
                    return {
                        'value': [
                            r211_i,
                            r211_t[r211_i]
                        ],
                        'done': false
                    };
                } else
                    return _r211_t12(_r211_t15);
            };
            return _r211_t13();
        } else {
            _r211_t18 = r211_a = Object.keys(r211_t);
            _r211_t19 = r211_n = r211_a.length;
            _r211_t20 = r211_i = 0;
            _r211_t21 = function (_r211_t23) {
                return _r211_t7(_r211_t23);
            };
            _r211_t22 = function (_r211_t24) {
                _r211_t25 = r211_i < r211_n;
                if (_r211_t25) {
                    _r211_t0 = function (_r211_t26) {
                        return _r211_t22(r211_i = r211_i + 1);
                    };
                    return {
                        'value': [
                            r211_a[r211_i],
                            r211_t[r211_a[r211_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r211_t21(_r211_t24);
            };
            return _r211_t22();
        }
    };
    var _r211_t1 = function (x) {
        try {
            return _r211_t0(x);
        } catch (ex) {
            return _r211_t2(ex);
        }
    };
    var _r211_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r211_t3 = this;
    else {
        _r211_t4 = function () {
            void 0;
        };
        _r211_t4.prototype = _r1_t9.prototype;
        _r211_t3 = new _r211_t4();
    }
    _r211_t3[Symbol.iterator] = function () {
        return _r211_t3;
    };
    _r211_t3.next = _r211_t1;
    _r211_t3.throw = function (x) {
        return _r211_t2(x);
    };
    return _r211_t3;
};
var r1_toposort = _s0_t0.default;
var _r1_t8 = _s0_t1;
var r1_AnyCv = _r1_t8.AnyCv;
_s0_t2 = r1_CreateEmptyTable = function () {
    var _r132_t0, _r132_t1;
    return {
        'languages': {},
        'features': {},
        'lookups': {},
        'lookupDep': []
    };
};
var r1_Map = Map;
var r1_Set = Set;
_s0_t3 = r1_PickLanguage = function (r136_sink, r136_tag) {
    var _r136_t0, _r136_t1;
    if (r136_sink.languages[r136_tag])
        return r136_sink.languages[r136_tag];
    var r136_lang = { 'features': [] };
    r136_sink.languages[r136_tag] = r136_lang;
    return r136_lang;
};
_s0_t4 = r1_CopyLanguage = function (r138_sink, r138_tag, r138_tagFrom) {
    var r138_feat, _r138_t3, _r138_t4;
    var r138_langFrom = r1_PickLanguage(r138_sink, r138_tagFrom);
    var r138_langTo = r1_PickLanguage(r138_sink, r138_tag);
    var _r138_t0 = r138_langFrom.features;
    var _r138_t1 = _r138_t0.length;
    var _r138_t2 = 0;
    while (_r138_t2 < _r138_t1) {
        r138_feat = _r138_t0[_r138_t2];
        r138_langTo.features.push(r138_feat);
        _r138_t2 = _r138_t2 + 1;
    }
    return r138_langTo;
};
_s0_t5 = r1_AddLangFeature = function (r142_lang, r142_fea) {
    var _r142_t0, _r142_t1;
    var r142_index = r142_lang.features.indexOf(r142_fea.name);
    return r142_index < 0 ? r142_lang.features.push(r142_fea.name) : void 0;
};
_s0_t6 = r1_AddFeature = function (r144_sink, r144_tag) {
    var _r144_t0, _r144_t1, _r144_t3;
    var r144_lookupArray = [];
    var r144_n = 0;
    var _r144_t2 = true;
    while (_r144_t2) {
        if (!r144_sink.features[r144_tag + '_' + r144_n]) {
            r144_sink.features[r144_tag + '_' + r144_n] = r144_lookupArray;
            return {
                'tag': r144_tag,
                'name': r144_tag + '_' + r144_n,
                'lookups': r144_lookupArray
            };
        }
        _r144_t3 = r144_n = r144_n + 1;
        _r144_t2 = true;
    }
    return _r144_t3;
};
_s0_t7 = r1_PickFeature = function (r146_sink, r146_name) {
    var _r146_t0, _r146_t1;
    if (r146_sink.features[r146_name])
        return {
            'name': r146_name,
            'lookups': r146_sink.features[r146_name]
        };
    var r146_featObj = {
        'name': r146_name,
        'lookups': []
    };
    r146_sink.features[r146_name] = r146_featObj.lookups;
    return r146_featObj;
};
_s0_t8 = r1_PickCommonFeature = function (r148_sink, r148_name) {
    var _r148_t0, _r148_t1;
    if (r148_sink.features[r148_name])
        return {
            'name': r148_name,
            'lookups': r148_sink.features[r148_name]
        };
    var r148_featObj = {
        'name': r148_name,
        'lookups': []
    };
    r148_sink.features[r148_name] = r148_featObj.lookups;
    r1_AddCommonFeature(r148_sink, r148_featObj);
    return r148_featObj;
};
_s0_t9 = r1_AddFeatureLookup = function (r150_fea, r150_lookupName) {
    var _r150_t0, _r150_t1;
    var r150_index = r150_fea.lookups.indexOf(r150_lookupName);
    return r150_index < 0 ? r150_fea.lookups.push(r150_lookupName) : void 0;
};
_s0_t10 = r1_AddLookup = function (r152_sink, r152_data, r152__prefix) {
    var _r152_t0, _r152_t1, _r152_t3;
    var r152_prefix = r152__prefix || '_lut_';
    var r152_n = 0;
    var _r152_t2 = true;
    while (_r152_t2) {
        if (!r152_sink.lookups[r152_prefix + r152_n]) {
            r152_sink.lookups[r152_prefix + r152_n] = r152_data;
            return r152_prefix + r152_n;
        }
        _r152_t3 = r152_n = r152_n + 1;
        _r152_t2 = true;
    }
    return _r152_t3;
};
_s0_t11 = r1_PickLookup = function (r154_sink, r154_name, r154_fallback) {
    var _r154_t0, _r154_t1;
    if (r154_sink.lookups[r154_name])
        return r154_sink.lookups[r154_name];
    r154_sink.lookups[r154_name] = r154_fallback;
    return r154_sink.lookups[r154_name];
};
_s0_t12 = r1_AddCommonFeature = function (r156_sink, r156_fea) {
    var _r156_t0, _r156_t1;
    var r156_dfltDflt = r1_PickLanguage(r156_sink, 'DFLT_DFLT');
    var r156_latnDflt = r1_PickLanguage(r156_sink, 'latn_DFLT');
    var r156_grekDflt = r1_PickLanguage(r156_sink, 'grek_DFLT');
    var r156_cyrlDflt = r1_PickLanguage(r156_sink, 'cyrl_DFLT');
    r1_AddLangFeature(r156_dfltDflt, r156_fea);
    r1_AddLangFeature(r156_latnDflt, r156_fea);
    r1_AddLangFeature(r156_grekDflt, r156_fea);
    r1_AddLangFeature(r156_cyrlDflt, r156_fea);
    return r156_fea;
};
var r1_UtilityLookupPrefix = '.utility-single.';
_s0_t13 = r1_BeginLookupBlock = function (r158_sink) {
    var _r158_t0, _r158_t1;
    return { 'existingLookupNames': new r1_Set(Object.keys(r158_sink.lookups)) };
};
var r1_IsUtilityLookupId = function (r159_name) {
    var _r159_t0, _r159_t1;
    return r159_name.slice(0, r1_UtilityLookupPrefix.length) === r1_UtilityLookupPrefix;
};
_s0_t14 = r1_EndLookupBlock = function (r161_rec, r161_sink) {
    var r161_existing, r161_current, _r161_t2, _r161_t3, _r161_t4, _r161_t5, _r161_t7, _r161_t8, _r161_t9;
    var r161_currentLookupNames = new r1_Set(Object.keys(r161_sink.lookups));
    var _r161_t0 = r161_rec.existingLookupNames[Symbol.iterator]();
    var _r161_t1 = void 0;
    var _r161_t6 = !(_r161_t1 = _r161_t0.next()).done;
    while (_r161_t6) {
        r161_existing = _r161_t1.value;
        _r161_t2 = r161_currentLookupNames[Symbol.iterator]();
        _r161_t3 = void 0;
        _r161_t8 = !(_r161_t3 = _r161_t2.next()).done;
        while (_r161_t8) {
            _r161_t9 = (r161_current = _r161_t3.value, !r1_IsUtilityLookupId(r161_existing) && !r1_IsUtilityLookupId(r161_current) && !r161_rec.existingLookupNames.has(r161_current) ? r161_sink.lookupDep.push([
                r161_existing,
                r161_current
            ]) : void 0);
            _r161_t8 = !(_r161_t3 = _r161_t2.next()).done;
        }
        _r161_t7 = _r161_t9;
        _r161_t6 = !(_r161_t1 = _r161_t0.next()).done;
    }
    return _r161_t7;
};
r1_EndLookupBlock.Front = function (r164_rec, r164_sink) {
    var r164_existing, r164_current, _r164_t2, _r164_t3, _r164_t4, _r164_t5, _r164_t7, _r164_t8, _r164_t9;
    var r164_currentLookupNames = new r1_Set(Object.keys(r164_sink.lookups));
    var _r164_t0 = r164_rec.existingLookupNames[Symbol.iterator]();
    var _r164_t1 = void 0;
    var _r164_t6 = !(_r164_t1 = _r164_t0.next()).done;
    while (_r164_t6) {
        r164_existing = _r164_t1.value;
        _r164_t2 = r164_currentLookupNames[Symbol.iterator]();
        _r164_t3 = void 0;
        _r164_t8 = !(_r164_t3 = _r164_t2.next()).done;
        while (_r164_t8) {
            _r164_t9 = (r164_current = _r164_t3.value, !r1_IsUtilityLookupId(r164_existing) && !r1_IsUtilityLookupId(r164_current) && !r164_rec.existingLookupNames.has(r164_current) ? r164_sink.lookupDep.push([
                r164_current,
                r164_existing
            ]) : void 0);
            _r164_t8 = !(_r164_t3 = _r164_t2.next()).done;
        }
        _r164_t7 = _r164_t9;
        _r164_t6 = !(_r164_t1 = _r164_t0.next()).done;
    }
    return _r164_t7;
};
_s0_t15 = r1_MoveBackUtilityLookups = function (r168_sink) {
    var r168_front, r168_rear, _r168_t2, _r168_t3, _r168_t4, _r168_t5, _r168_t7, _r168_t8, _r168_t9;
    var r168_lns = new r1_Set(Object.keys(r168_sink.lookups));
    var _r168_t0 = r168_lns[Symbol.iterator]();
    var _r168_t1 = void 0;
    var _r168_t6 = !(_r168_t1 = _r168_t0.next()).done;
    while (_r168_t6) {
        r168_front = _r168_t1.value;
        _r168_t2 = r168_lns[Symbol.iterator]();
        _r168_t3 = void 0;
        _r168_t8 = !(_r168_t3 = _r168_t2.next()).done;
        while (_r168_t8) {
            _r168_t9 = (r168_rear = _r168_t3.value, !r1_IsUtilityLookupId(r168_front) && r1_IsUtilityLookupId(r168_rear) ? r168_sink.lookupDep.push([
                r168_front,
                r168_rear
            ]) : void 0);
            _r168_t8 = !(_r168_t3 = _r168_t2.next()).done;
        }
        _r168_t7 = _r168_t9;
        _r168_t6 = !(_r168_t1 = _r168_t0.next()).done;
    }
    return _r168_t7;
};
_s0_t16 = r1_ChainRuleBuilder = function (r174_sink) {
    var _r174_t0, _r174_t1;
    var r174_createNewLookup = function (r175_f, r175_t) {
        var _r175_t2, _r175_t3;
        var r175_subst = {};
        var _r175_t0 = 0;
        var _r175_t1 = r175_f.length;
        var r175_j = _r175_t0;
        while (r175_j < _r175_t1) {
            r175_subst[r175_f[r175_j]] = r175_t[r175_j];
            r175_j = r175_j + 1;
        }
        return r1_AddLookup(r174_sink, {
            'type': 'gsub_single',
            'substitutions': r175_subst
        }, r1_UtilityLookupPrefix);
    };
    var r174_getSubLookup = function (r178_left, r178_right) {
        var r178_found, r178_maxMatch, r178_lookupKeys, r178_name, r178_st, r178_compatible, r178_matchCount, r178_j, _r178_t0, _r178_t1, _r178_t2, _r178_t3, _r178_t4, _r178_t5, _r178_t6, _r178_t7, _r178_t8, _r178_t9, _r178_t10, _r178_t11, _r178_t12;
        if (!r178_right)
            return null;
        else if (typeof r178_right === 'string')
            return r178_right;
        else if (r178_right instanceof Function)
            return r174_getSubLookup(r178_left, r178_right(r178_left));
        else if (true) {
            r178_found = null;
            r178_maxMatch = 0;
            r178_lookupKeys = Object.keys(r174_sink.lookups).reverse();
            _r178_t0 = r178_lookupKeys;
            _r178_t1 = _r178_t0.length;
            _r178_t2 = 0;
            while (_r178_t2 < _r178_t1) {
                r178_name = _r178_t0[_r178_t2];
                r178_st = r174_sink.lookups[r178_name].substitutions;
                if (r1_IsUtilityLookupId(r178_name)) {
                    r178_compatible = true;
                    r178_matchCount = 0;
                    _r178_t3 = 0;
                    _r178_t4 = r178_left.length;
                    r178_j = _r178_t3;
                    while (r178_j < _r178_t4) {
                        if (r178_st[r178_left[r178_j]] && r178_st[r178_left[r178_j]] !== r178_right[r178_j])
                            r178_compatible = false;
                        if (r178_st[r178_left[r178_j]] === r178_right[r178_j])
                            r178_matchCount = r178_matchCount + 1;
                        r178_j = r178_j + 1;
                    }
                    if (r178_compatible && (!r178_found || r178_matchCount > r178_maxMatch)) {
                        r178_found = r178_name;
                        r178_maxMatch = r178_matchCount;
                    }
                }
                _r178_t2 = _r178_t2 + 1;
            }
            if (r178_found) {
                r178_st = r174_sink.lookups[r178_found].substitutions;
                _r178_t5 = 0;
                _r178_t6 = r178_left.length;
                r178_j = _r178_t5;
                while (r178_j < _r178_t6) {
                    r178_st[r178_left[r178_j]] = r178_right[r178_j];
                    r178_j = r178_j + 1;
                }
                return r178_found;
            }
            return r174_createNewLookup(r178_left, r178_right);
        } else
            return void 0;
    };
    var r174_xn$chainrule$1aao = function () {
        var r185_term, r185_lutn, _r185_t6;
        var _r185_t7 = arguments;
        var r185_terms = [].slice.call(_r185_t7, 0).map(function (r186_x) {
            var _r186_t0, _r186_t1;
            return r186_x.left ? r186_x : {
                'left': r186_x,
                'right': null
            };
        });
        var r185_rule = {
            'match': [],
            'apply': [],
            'inputBegins': 0,
            'inputEnds': 0
        };
        var r185_foundi = false;
        var r185_founde = false;
        var _r185_t0 = 0;
        var _r185_t1 = r185_terms.length;
        var r185_j = _r185_t0;
        while (r185_j < _r185_t1) {
            if (!r185_foundi && r185_terms[r185_j].right) {
                r185_rule.inputBegins = r185_j;
                r185_foundi = true;
            }
            r185_j = r185_j + 1;
        }
        var _r185_t2 = r185_terms.length - 1;
        var _r185_t3 = 0;
        r185_j = _r185_t2;
        while (r185_j >= _r185_t3) {
            if (!r185_founde && r185_terms[r185_j].right) {
                r185_rule.inputEnds = r185_j + 1;
                r185_founde = true;
            }
            r185_j = r185_j - 1;
        }
        var _r185_t4 = 0;
        var _r185_t5 = r185_terms.length;
        r185_j = _r185_t4;
        while (r185_j < _r185_t5) {
            r185_term = r185_terms[r185_j];
            r185_rule.match.push(Array.from(new r1_Set(r185_term.left)));
            r185_lutn = r174_getSubLookup(r185_term.left, r185_term.right);
            if (r185_lutn)
                r185_rule.apply.push({
                    'at': r185_j,
                    'lookup': r185_lutn
                });
            r185_j = r185_j + 1;
        }
        return r185_rule;
    };
    var r174_xn$reverserule$3qIs = function () {
        var r193_term, r193_subst, r193_g, r193_toGlyphs, r193_k, _r193_t2, _r193_t3, _r193_t4, _r193_t5, _r193_t6, _r193_t7;
        var _r193_t8 = arguments;
        var r193_terms = [].slice.call(_r193_t8, 0).map(function (r194_x) {
            var _r194_t0, _r194_t1;
            return r194_x.left ? r194_x : {
                'left': r194_x,
                'right': null
            };
        });
        var r193_rule = {
            'match': [],
            'to': [],
            'inputIndex': 0
        };
        var r193_foundi = false;
        var _r193_t0 = 0;
        var _r193_t1 = r193_terms.length;
        var r193_j = _r193_t0;
        while (r193_j < _r193_t1) {
            r193_term = r193_terms[r193_j];
            r193_subst = new r1_Map();
            _r193_t2 = r193_term.left;
            _r193_t3 = _r193_t2.length;
            _r193_t4 = 0;
            while (_r193_t4 < _r193_t3) {
                r193_g = _r193_t2[_r193_t4];
                r193_subst.set(r193_g, r193_g);
                _r193_t4 = _r193_t4 + 1;
            }
            if (r193_term.right) {
                if (r193_foundi)
                    throw new Error('Duplicate substitutions in one reverse rule');
                r193_foundi = true;
                r193_rule.inputIndex = r193_j;
                r193_toGlyphs = r193_term.right instanceof Function ? r193_term.right(r193_term.left) : true ? r193_term.right : void 0;
                _r193_t5 = 0;
                _r193_t6 = r193_term.left.length;
                r193_k = _r193_t5;
                while (r193_k < _r193_t6) {
                    r193_subst.set(r193_term.left[r193_k], r193_toGlyphs[r193_k] || r193_term.left[r193_k]);
                    r193_k = r193_k + 1;
                }
                r193_rule.to = Array.from(r193_subst.values());
            }
            r193_rule.match[r193_j] = Array.from(r193_subst.keys());
            r193_j = r193_j + 1;
        }
        return r193_rule;
    };
    return [
        r174_xn$chainrule$1aao,
        r174_xn$reverserule$3qIs
    ];
};
_s0_t17 = r1_QueryRelatedGlyphs = function (r202_glyphs, r202_para, r202_entries) {
    var r202_gid, r202_gr, _r202_t3, _r202_t4, _r202_t5, _r202_t6, _r202_t7;
    var r202_sink = [];
    var _r202_t0 = r202_entries;
    var _r202_t1 = _r202_t0.length;
    var _r202_t2 = 0;
    while (_r202_t2 < _r202_t1) {
        r202_gid = _r202_t0[_r202_t2];
        if (r202_glyphs[r202_gid]) {
            r202_sink.push(r202_gid);
            if (r202_para.enableCvSs) {
                _r202_t3 = r1_AnyCv.query(r202_glyphs[r202_gid]);
                _r202_t4 = _r202_t3.length;
                _r202_t5 = 0;
                while (_r202_t5 < _r202_t4) {
                    r202_gr = _r202_t3[_r202_t5];
                    r202_sink.push(r202_gr.get(r202_glyphs[r202_gid]));
                    _r202_t5 = _r202_t5 + 1;
                }
            }
        }
        _r202_t2 = _r202_t2 + 1;
    }
    return r202_sink;
};
_s0_t18 = r1_FinalizeTable = function (r208_table) {
    var r208_key, r208_lang, _r208_t2, _r208_t3, _r208_t4, _r208_t6;
    r208_table.lookupOrder = r1_toposort(r208_table.lookupDep);
    var _r208_t0 = _r1_t2(r208_table.languages)[Symbol.iterator]();
    var _r208_t1 = void 0;
    var _r208_t5 = !(_r208_t1 = _r208_t0.next()).done;
    while (_r208_t5) {
        _r208_t6 = (_r208_t2 = _r208_t1.value, r208_key = _r208_t2[0], r208_lang = _r208_t2[1], r208_lang.features ? r208_lang.features.sort() : void 0);
        _r208_t5 = !(_r208_t1 = _r208_t0.next()).done;
    }
    return _r208_t6;
};
_s0_t19 = r1_UkMapToLookup = function (r214_m) {
    var r214_k, r214_v, _r214_t2, _r214_t3, _r214_t4;
    var r214_l = [];
    var r214_r = [];
    var _r214_t0 = Object.entries(r214_m)[Symbol.iterator]();
    var _r214_t1 = void 0;
    while (!(_r214_t1 = _r214_t0.next()).done) {
        _r214_t2 = _r214_t1.value;
        r214_k = _r214_t2[0];
        r214_v = _r214_t2[1];
        r214_l.push(r214_k);
        r214_r.push(r214_v);
    }
    return {
        'left': r214_l,
        'right': r214_r
    };
};
_s0_t20 = r1_UkMap2ToLookup = function (r217_mm) {
    var r217_g1, r217_second, r217_g2, r217_gTo, _r217_t2, _r217_t3, _r217_t4, _r217_t5, _r217_t6, _r217_t7;
    var r217_res = [];
    var _r217_t0 = Object.entries(r217_mm)[Symbol.iterator]();
    var _r217_t1 = void 0;
    while (!(_r217_t1 = _r217_t0.next()).done) {
        _r217_t2 = _r217_t1.value;
        r217_g1 = _r217_t2[0];
        r217_second = _r217_t2[1];
        _r217_t3 = Object.entries(r217_second)[Symbol.iterator]();
        _r217_t4 = void 0;
        while (!(_r217_t4 = _r217_t3.next()).done) {
            _r217_t5 = _r217_t4.value;
            r217_g2 = _r217_t5[0];
            r217_gTo = _r217_t5[1];
            r217_res.push({
                'from': [
                    r217_g1,
                    r217_g2
                ],
                'to': r217_gTo
            });
        }
    }
    return r217_res;
};
