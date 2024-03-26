'use strict';
import * as _s0_t0 from './table-util.mjs';
var _s0_t1;
export {
    _s0_t1 as buildLigations
};
var r1_buildLigations, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r284_t) {
    var r284_n, r284_i, r284_a, _r284_t3, _r284_t4, _r284_t5, _r284_t6, _r284_t7, _r284_t8, _r284_t9, _r284_t10, _r284_t11, _r284_t12, _r284_t13, _r284_t14, _r284_t15, _r284_t16, _r284_t17, _r284_t18, _r284_t19, _r284_t20, _r284_t21, _r284_t22, _r284_t23, _r284_t24, _r284_t25, _r284_t26;
    var _r284_t0 = function () {
        _r284_t7 = function (_r284_t8) {
            _r284_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r284_t8
            };
        };
        _r284_t9 = r284_t instanceof Array;
        if (_r284_t9) {
            _r284_t10 = r284_n = r284_t.length;
            _r284_t11 = r284_i = 0;
            _r284_t12 = function (_r284_t14) {
                return _r284_t7(_r284_t14);
            };
            _r284_t13 = function (_r284_t15) {
                _r284_t16 = r284_i < r284_n;
                if (_r284_t16) {
                    _r284_t0 = function (_r284_t17) {
                        return _r284_t13(r284_i = r284_i + 1);
                    };
                    return {
                        'value': [
                            r284_i,
                            r284_t[r284_i]
                        ],
                        'done': false
                    };
                } else
                    return _r284_t12(_r284_t15);
            };
            return _r284_t13();
        } else {
            _r284_t18 = r284_a = Object.keys(r284_t);
            _r284_t19 = r284_n = r284_a.length;
            _r284_t20 = r284_i = 0;
            _r284_t21 = function (_r284_t23) {
                return _r284_t7(_r284_t23);
            };
            _r284_t22 = function (_r284_t24) {
                _r284_t25 = r284_i < r284_n;
                if (_r284_t25) {
                    _r284_t0 = function (_r284_t26) {
                        return _r284_t22(r284_i = r284_i + 1);
                    };
                    return {
                        'value': [
                            r284_a[r284_i],
                            r284_t[r284_a[r284_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r284_t21(_r284_t24);
            };
            return _r284_t22();
        }
    };
    var _r284_t1 = function (x) {
        try {
            return _r284_t0(x);
        } catch (ex) {
            return _r284_t2(ex);
        }
    };
    var _r284_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r284_t3 = this;
    else {
        _r284_t4 = function () {
            void 0;
        };
        _r284_t4.prototype = _r1_t9.prototype;
        _r284_t3 = new _r284_t4();
    }
    _r284_t3[Symbol.iterator] = function () {
        return _r284_t3;
    };
    _r284_t3.next = _r284_t1;
    _r284_t3.throw = function (x) {
        return _r284_t2(x);
    };
    return _r284_t3;
};
var _r1_t8 = _s0_t0;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_ChainRuleBuilder = _r1_t8.ChainRuleBuilder;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
var r1_Map = Map;
var r1_Set = Set;
var r1_arrowBarX = function (r265_s) {
    var _r265_t0, _r265_t1;
    return function (r266_t) {
        var _r266_t0, _r266_t1;
        return r266_t.map(function (r267_x) {
            var _r267_t0, _r267_t1;
            return '' + r267_x + '.arrowBar.' + r265_s;
        });
    };
};
var r1_lsx = function (r268_s) {
    var _r268_t0, _r268_t1;
    return function (r269_t) {
        var _r269_t0, _r269_t1;
        return r269_t.map(function (r270_x) {
            var _r270_t0, _r270_t1;
            return '' + r270_x + '.lig.' + r268_s;
        });
    };
};
var r1_csx = function (r271_s) {
    var _r271_t0, _r271_t1;
    return function (r272_t) {
        var _r272_t0, _r272_t1;
        return r272_t.map(function (r273_x) {
            var _r273_t0, _r273_t1;
            return '' + r273_x + '.' + r271_s;
        });
    };
};
var r1_just = function (r274_s) {
    var _r274_t0, _r274_t1;
    return function (r275_t) {
        var _r275_t0, _r275_t1;
        return r275_t.map(function (r276_x) {
            var _r276_t0, _r276_t1;
            return r274_s;
        });
    };
};
var r1_xn$lookaround$5sIl = null;
var r1_advance = function (r277_t) {
    var _r277_t0, _r277_t1;
    return null;
};
var r1_ident = function (r278_t) {
    var _r278_t0, _r278_t1;
    return r278_t.map(function (r279_x) {
        var _r279_t0, _r279_t1;
        return r279_x;
    });
};
_s0_t1 = r1_buildLigations = function (r281_sink, r281_para, r281_plm) {
    var r281_featureTag, r281_feature, _r281_t2, _r281_t3, _r281_t4;
    var r281_features = new r1_Map();
    var _r281_t0 = _r1_t2(r281_plm)[Symbol.iterator]();
    var _r281_t1 = void 0;
    while (!(_r281_t1 = _r281_t0.next()).done) {
        _r281_t2 = _r281_t1.value;
        r281_featureTag = _r281_t2[0];
        r281_feature = r1_AddCommonFeature(r281_sink, r1_AddFeature(r281_sink, r281_featureTag));
        r281_features.set(r281_featureTag, r281_feature);
    }
    return r1_buildLigationsImpl(r281_sink, r281_para, r1_DoLigGroupT(r281_sink, r281_plm, r281_features));
};
var r1_DoLigGroupT = function (r286_sink, r286_plm, r286_features) {
    var _r286_t0, _r286_t1;
    return function (r287_F) {
        var r287_featureTag, r287_groups, r287_feature, r287_fUnique, r287_lookupsToPush, r287_ln, r287_rec, r287_obj, r287_lastLookupInGroup, _r287_t2, _r287_t3, _r287_t4, _r287_t5, _r287_t6, _r287_t7, _r287_t8, _r287_t9, _r287_t10, _r287_t11, _r287_t12, _r287_t14, _r287_t15;
        var r287_deDupeGroups = new r1_Map();
        var r287_deDupe = function (r288_lookupsToPush) {
            var r288_obj, _r288_t2, _r288_t3;
            var r288_h = '';
            var _r288_t0 = r288_lookupsToPush.values()[Symbol.iterator]();
            var _r288_t1 = void 0;
            while (!(_r288_t1 = _r288_t0.next()).done) {
                r288_obj = _r288_t1.value;
                r288_h = r288_h + JSON.stringify(r288_obj) + '\\n';
            }
            var r288_g = r287_deDupeGroups.get(r288_h);
            if (r288_g)
                return [
                    false,
                    r288_g
                ];
            r287_deDupeGroups.set(r288_h, r288_lookupsToPush);
            return [
                true,
                r288_lookupsToPush
            ];
        };
        var _r287_t0 = _r1_t2(r286_plm)[Symbol.iterator]();
        var _r287_t1 = void 0;
        var _r287_t13 = !(_r287_t1 = _r287_t0.next()).done;
        while (_r287_t13) {
            _r287_t2 = _r287_t1.value;
            r287_featureTag = _r287_t2[0];
            r287_groups = _r287_t2[1];
            r287_feature = r286_features.get(r287_featureTag);
            _r287_t3 = r287_deDupe(r1_DoFeatureLigGroup(r286_sink, r287_feature, r287_groups, r287_F));
            r287_fUnique = _r287_t3[0];
            r287_lookupsToPush = _r287_t3[1];
            _r287_t4 = r287_lookupsToPush.keys()[Symbol.iterator]();
            _r287_t5 = void 0;
            while (!(_r287_t5 = _r287_t4.next()).done) {
                r287_ln = _r287_t5.value;
                r287_feature.lookups.push(r287_ln);
            }
            if (r287_fUnique) {
                r287_rec = r1_BeginLookupBlock(r286_sink);
                _r287_t6 = r287_lookupsToPush[Symbol.iterator]();
                _r287_t7 = void 0;
                while (!(_r287_t7 = _r287_t6.next()).done) {
                    _r287_t8 = _r287_t7.value;
                    r287_ln = _r287_t8[0];
                    r287_obj = _r287_t8[1];
                    if (r286_sink.lookups[r287_ln])
                        throw new Error('Lookup name conflict ' + r287_ln);
                    r286_sink.lookups[r287_ln] = r287_obj;
                }
                r287_lastLookupInGroup = null;
                _r287_t9 = r287_lookupsToPush.keys()[Symbol.iterator]();
                _r287_t10 = void 0;
                while (!(_r287_t10 = _r287_t9.next()).done) {
                    r287_ln = _r287_t10.value;
                    if (r287_lastLookupInGroup)
                        r286_sink.lookupDep.push([
                            r287_lastLookupInGroup,
                            r287_ln
                        ]);
                    r287_lastLookupInGroup = r287_ln;
                }
                _r287_t15 = r1_EndLookupBlock(r287_rec, r286_sink);
            }
            _r287_t14 = _r287_t15;
            _r287_t13 = !(_r287_t1 = _r287_t0.next()).done;
        }
        return _r287_t14;
    };
};
var r1_DoFeatureLigGroup = function (r296_sink, r296_feature, r296_groups, r296_F) {
    var _r296_t0, _r296_t1;
    var r296_hasLG = function (r297_ln) {
        var _r297_t0, _r297_t1;
        return r296_groups.indexOf(r297_ln) >= 0;
    };
    var r296_lookupNamePrefix = 'lig_' + r296_feature.tag + '_';
    var r296_lookupsToPush = new r1_Map();
    var r296_AddLookup = function (r298_obj) {
        var _r298_t0, _r298_t1;
        return r296_lookupsToPush.set(r296_lookupNamePrefix + (r296_feature.lookups.length + r296_lookupsToPush.size), r298_obj);
    };
    var r296_filterNulls = function (r299__rules) {
        var r299_rule, _r299_t3, _r299_t4;
        if (!r299__rules)
            return r299__rules;
        var r299_rules = [];
        var _r299_t0 = r299__rules;
        var _r299_t1 = _r299_t0.length;
        var _r299_t2 = 0;
        while (_r299_t2 < _r299_t1) {
            r299_rule = _r299_t0[_r299_t2];
            if (r299_rule)
                r299_rules.push(r299_rule);
            _r299_t2 = _r299_t2 + 1;
        }
        return r299_rules;
    };
    var r296_CreateLigationLookup = function (r302__rules) {
        var _r302_t0, _r302_t1;
        var r302_rules = r296_filterNulls(r302__rules);
        return r302_rules && r302_rules.length ? r296_AddLookup({
            'type': 'gsub_chaining',
            'rules': r302_rules
        }) : void 0;
    };
    var r296_CreateReverseLigationLookup = function (r303__rules) {
        var _r303_t0, _r303_t1;
        var r303_rules = r296_filterNulls(r303__rules);
        return r303_rules && r303_rules.length ? r296_AddLookup({
            'type': 'gsub_reverse',
            'rules': r303_rules
        }) : void 0;
    };
    r296_F(r296_hasLG, r296_CreateLigationLookup, r296_CreateReverseLigationLookup);
    return r296_lookupsToPush;
};
var r1_buildLigationsImpl = function (r309_sink, r309_para, r309_xn$LigGroup$2Lrc9) {
    var _r309_t1, _r309_t2;
    var _r309_t0 = r1_ChainRuleBuilder(r309_sink);
    var r309_xn$chainrule$1aao = _r309_t0[0];
    var r309_xn$reverserule$3qIs = _r309_t0[1];
    var r309_less = ['less'];
    var r309_lessAndEquiv = [
        'less',
        'less.lig.shift0',
        'less.lig.shift0.anti'
    ];
    var r309_greater = ['greater'];
    var r309_greaterAndEquiv = [
        'greater',
        'greater.lig.shift0',
        'greater.lig.shift0.anti'
    ];
    var r309_lessOrGreater = [].concat(r309_less, r309_greater);
    var r309_lessOrGreaterAndEquiv = [].concat(r309_lessAndEquiv, r309_greaterAndEquiv);
    var r309_hyphen = ['hyphen'];
    var r309_equal = ['equal'];
    var r309_anyStraightRod = [
        'hyphen',
        'equal'
    ];
    var r309_anyWave = [
        'asciiTilde',
        'asciiTilde.low',
        'asciiTilde.high'
    ];
    var r309_bar = ['bar'];
    var r309_slash = ['slash'];
    var r309_exclam = ['exclam'];
    var r309_backslash = ['backslash'];
    var r309_underscore = ['underscore'];
    var r309_anyBar = [
        'bar',
        'slash',
        'backslash'
    ];
    var r309_regexLookAround = r309_less.concat(r309_hyphen, r309_equal, r309_exclam, r309_greater, r309_anyBar);
    r309_xn$LigGroup$2Lrc9(function (r311_hasLG, r311_CreateLigationLookup, r311_CreateReverseLigationLookup) {
        var _r311_t0, _r311_t1;
        return r311_hasLG('brst') ? r311_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asterisk'],
                'right': ['asterisk/sMid']
            }),
            r309_xn$chainrule$1aao({
                'left': ['asterisk'],
                'right': ['asterisk/sMid']
            }, {
                'left': ['parenRight'],
                'right': r1_xn$lookaround$5sIl
            })
        ]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r317_hasLG, r317_CreateLigationLookup, r317_CreateReverseLigationLookup) {
        var _r317_t0, _r317_t1;
        return r317_hasLG('center-ops') ? r317_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': [
                    'parenLeft',
                    'bracketLeft',
                    'braceLeft'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['colon'],
                'right': ['colon/mid']
            }),
            r309_xn$chainrule$1aao({
                'left': ['colon'],
                'right': ['colon/mid']
            }, {
                'left': [
                    'parenRight',
                    'bracketRight',
                    'braceRight'
                ],
                'right': r1_xn$lookaround$5sIl
            })
        ]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r323_hasLG, r323_CreateLigationLookup, r323_CreateReverseLigationLookup) {
        var r323_triggerL, r323_triggerR, r323_skipL, r323_skipR, r323_acops, r323_acskip, r323_opcGroups, r323_opcFrom, r323_opcTo, r323_C, _r323_t0, _r323_t1;
        return r323_hasLG('center-ops') ? (r323_triggerL = [], r323_triggerR = [], r323_skipL = [
            'slash',
            'backslash',
            'at',
            'ampersand',
            'percent',
            'numberSign'
        ], r323_skipR = [
            'slash',
            'backslash',
            'at',
            'ampersand',
            'percent',
            'numberSign'
        ], r323_hasLG('center-op-trigger-plus-minus-l') ? r323_triggerL.push('plus', 'minus', 'hyphen') : void 0, r323_hasLG('center-op-trigger-plus-minus-r') ? r323_triggerR.push('plus', 'minus', 'hyphen') : void 0, r323_hasLG('center-op-trigger-equal-l') ? r323_triggerL.push('equal', 'ident') : void 0, r323_hasLG('center-op-trigger-equal-r') ? r323_triggerR.push('equal', 'ident') : void 0, r323_hasLG('center-op-trigger-bar-l') ? r323_triggerL.push('bar') : void 0, r323_hasLG('center-op-trigger-bar-r') ? r323_triggerR.push('bar') : void 0, r323_hasLG('center-op-trigger-slash-l') ? r323_triggerL.push('slash', 'backslash') : void 0, r323_hasLG('center-op-trigger-slash-r') ? r323_triggerR.push('slash', 'backslash') : void 0, r323_hasLG('center-op-trigger-angle-inside') ? (r323_triggerR.push('less'), r323_triggerL.push('greater')) : void 0, r323_hasLG('center-op-trigger-angle-outside') ? (r323_triggerL.push('less'), r323_triggerR.push('greater')) : void 0, !r323_hasLG('center-op-trigger-bar-l') ? r323_skipL.push('bar') : void 0, !r323_hasLG('center-op-trigger-bar-r') ? r323_skipR.push('bar') : void 0, r323_acops = function () {
            var _r324_t0, _r324_t1;
            return r323_hasLG('bar-triggers-op-centering') ? [
                'less',
                'greater',
                'hyphen',
                'equal',
                'plus',
                'slash',
                'bar',
                'backslash'
            ] : [
                'less',
                'greater',
                'hyphen',
                'equal',
                'plus'
            ];
        }, r323_acskip = function () {
            var _r325_t0, _r325_t1;
            return r323_hasLG('bar-triggers-op-centering') ? [
                'at',
                'ampersand',
                'percent',
                'numberSign'
            ] : [
                'slash',
                'bar',
                'backslash',
                'at',
                'ampersand',
                'percent',
                'numberSign'
            ];
        }, r323_opcGroups = [
            {
                'left': ['asterisk'],
                'right': ['asterisk/sMid']
            },
            {
                'left': ['asciiTilde'],
                'right': ['asciiTilde.low']
            }
        ], r323_hasLG('center-op-influence-dot') ? r323_opcGroups.push({
            'left': ['period'],
            'right': ['period/mid']
        }) : void 0, r323_hasLG('center-op-influence-colon') ? r323_opcGroups.push({
            'left': ['colon'],
            'right': ['colon/mid']
        }) : void 0, r323_opcFrom = r323_opcGroups.map(function (r330_x) {
            var _r330_t0, _r330_t1;
            return r330_x.left[0];
        }), r323_opcTo = r323_opcGroups.map(function (r331_x) {
            var _r331_t0, _r331_t1;
            return r331_x.right[0];
        }), r323_C = {
            'left': r323_opcFrom,
            'right': r323_opcTo
        }, r323_CreateLigationLookup([
            r309_xn$chainrule$1aao(r323_C, r323_C, r323_skipL, r323_skipL, r323_triggerL),
            r309_xn$chainrule$1aao(r323_C, r323_C, r323_skipL, r323_triggerL),
            r309_xn$chainrule$1aao(r323_C, r323_C, r323_triggerL),
            r309_xn$chainrule$1aao(r323_C, r323_skipL, r323_skipL, r323_triggerL),
            r309_xn$chainrule$1aao(r323_C, r323_skipL, r323_triggerL),
            r309_xn$chainrule$1aao(r323_C, r323_triggerL),
            r309_xn$chainrule$1aao(r323_triggerR, r323_skipR, r323_skipR, r323_C),
            r309_xn$chainrule$1aao(r323_triggerR, r323_skipR, r323_C),
            r309_xn$chainrule$1aao(r323_triggerR, r323_C)
        ]), r323_CreateLigationLookup([
            r309_xn$chainrule$1aao(r323_opcTo, r323_skipR, r323_skipR, r323_C),
            r309_xn$chainrule$1aao(r323_opcTo, r323_skipR, r323_C),
            r309_xn$chainrule$1aao(r323_opcTo, r323_C)
        ]), r323_CreateReverseLigationLookup([
            r309_xn$reverserule$3qIs(r323_C, r323_skipL, r323_skipL, r323_opcTo),
            r309_xn$reverserule$3qIs(r323_C, r323_skipL, r323_opcTo),
            r309_xn$reverserule$3qIs(r323_C, r323_opcTo)
        ]), r323_CreateLigationLookup([
            r309_xn$chainrule$1aao(r323_C, r323_skipR, r323_skipR, r323_opcTo),
            r309_xn$chainrule$1aao(r323_C, r323_skipR, r323_opcTo),
            r309_xn$chainrule$1aao(r323_C, r323_opcTo)
        ])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r334_hasLG, r334_CreateLigationLookup, r334_CreateReverseLigationLookup) {
        var _r334_t0, _r334_t1;
        return r334_hasLG('slash-asterisk') ? (r334_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['slash'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asterisk'],
                'right': r1_just('asterisk/slashTop')
            }),
            r309_xn$chainrule$1aao({
                'left': ['asterisk'],
                'right': r1_just('asterisk/slashBot')
            }, {
                'left': ['slash'],
                'right': r1_xn$lookaround$5sIl
            })
        ]), r334_CreateReverseLigationLookup([
            r309_xn$reverserule$3qIs({
                'left': ['asterisk'],
                'right': r1_just('asterisk/slashBot')
            }, {
                'left': ['asterisk/slashBot'],
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$reverserule$3qIs({
                'left': ['asterisk/slashTop'],
                'right': r1_just('asterisk/sMid/ligComment')
            }, {
                'left': ['asterisk/slashBot'],
                'right': r1_xn$lookaround$5sIl
            })
        ]), r334_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['asterisk/slashTop'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asterisk'],
                'right': ['asterisk/slashTop']
            }),
            r309_xn$chainrule$1aao({
                'left': ['asterisk/sMid/ligComment'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': [
                    'asterisk',
                    'asterisk/slashBot'
                ],
                'right': r1_just('asterisk/sMid/ligComment')
            })
        ])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r348_hasLG, r348_CreateLigationLookup, r348_CreateReverseLigationLookup) {
        var r348_dottyPunctuationSets, r348_dottyConnected, r348_dpShort, r348_dpTall, r348_dp, r348_dLeft, r348_dRight, r348_dLeftHalf, r348_dRightHalf, r348_dMid, r348_boundary, _r348_t0, _r348_t1, _r348_t2, _r348_t3, _r348_t4, _r348_t5, _r348_t6, _r348_t7, _r348_t8, _r348_t9, _r348_t10, _r348_t11, _r348_t12, _r348_tag13;
        if (r348_hasLG('kern-dotty')) {
            r348_dottyPunctuationSets = [
                [
                    [
                        'period',
                        'period/mid'
                    ],
                    [
                        'colon',
                        'colon/mid',
                        'question',
                        'exclam'
                    ]
                ],
                [
                    ['comma'],
                    ['semicolon']
                ]
            ];
            r348_dottyConnected = [
                [
                    'equal',
                    'hyphen',
                    'plus',
                    'less',
                    'greater',
                    'asterisk',
                    'asciiTilde',
                    'asciiCaret'
                ],
                [
                    'parenLeft',
                    'parenRight',
                    'bracketLeft',
                    'bracketRight',
                    'braceLeft',
                    'braceRight',
                    'numberSign',
                    'ampersand',
                    'slash',
                    'bar'
                ]
            ];
            _r348_t0 = r348_dottyPunctuationSets;
            _r348_t1 = _r348_t0.length;
            _r348_t2 = 0;
            _r348_t10 = _r348_t2 < _r348_t1;
            while (_r348_t10) {
                _r348_t3 = _r348_t0[_r348_t2];
                r348_dpShort = _r348_t3[0];
                r348_dpTall = _r348_t3[1];
                r348_dp = [].concat(r348_dpShort, r348_dpTall);
                r348_dLeft = r1_lsx('dLeft')(r348_dp);
                r348_dRight = r1_lsx('dRight')(r348_dp);
                r348_dLeftHalf = r1_lsx('dLeftHalf')(r348_dp);
                r348_dRightHalf = r1_lsx('dRightHalf')(r348_dp);
                r348_dMid = r1_lsx('dMid')(r348_dp);
                r348_CreateLigationLookup([
                    r309_xn$chainrule$1aao({
                        'left': r348_dRight.concat(r348_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r348_dp,
                        'right': r348_dMid
                    }, {
                        'left': r348_dp,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r348_dRight.concat(r348_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r348_dp,
                        'right': r348_dLeft
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r348_dp,
                        'right': r348_dRight
                    }, {
                        'left': r348_dp,
                        'right': r1_xn$lookaround$5sIl
                    })
                ]);
                _r348_t4 = r348_dottyConnected;
                _r348_t5 = _r348_t4.length;
                _r348_t6 = 0;
                while (_r348_t6 < _r348_t5) {
                    r348_boundary = _r348_t4[_r348_t6];
                    (function () {
                        var r359_dg = r348_boundary === r348_dottyConnected[0] ? r348_dp : r348_dpTall;
                        var r359_dgLeft = r1_lsx('dLeftHalf')(r359_dg);
                        var r359_dgRight = r1_lsx('dRightHalf')(r359_dg);
                        var r359_dgLeftHalf = r1_lsx('dLeftHalf')(r359_dg);
                        var r359_dgRightHalf = r1_lsx('dRightHalf')(r359_dg);
                        var r359_dgMid = r1_lsx('dMid')(r359_dg);
                        return r348_CreateLigationLookup([
                            r309_xn$chainrule$1aao({
                                'left': r348_boundary,
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r359_dgRight,
                                'right': r359_dgMid
                            }, {
                                'left': r359_dgLeft,
                                'right': r359_dgMid
                            }, {
                                'left': r348_boundary,
                                'right': r1_xn$lookaround$5sIl
                            }),
                            r309_xn$chainrule$1aao({
                                'left': r348_boundary,
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r359_dgRight,
                                'right': r359_dgMid
                            }, {
                                'left': r359_dgMid.concat(r359_dgLeft),
                                'right': r1_xn$lookaround$5sIl
                            }),
                            r309_xn$chainrule$1aao({
                                'left': r359_dgMid.concat(r359_dgRight),
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r359_dgLeft,
                                'right': r359_dgMid
                            }, {
                                'left': r348_boundary,
                                'right': r1_xn$lookaround$5sIl
                            })
                        ]);
                    }());
                    _r348_t6 = _r348_t6 + 1;
                }
                r348_CreateLigationLookup([
                    r309_xn$chainrule$1aao({
                        'left': r348_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r348_dMid,
                        'right': r348_dRightHalf
                    }, {
                        'left': r348_dMid,
                        'right': r348_dLeftHalf
                    }, {
                        'left': r348_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r348_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r348_dMid,
                        'right': r348_dRightHalf
                    }, {
                        'left': r348_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r348_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r348_dMid,
                        'right': r348_dLeftHalf
                    }, {
                        'left': r348_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r348_dRight,
                        'right': r348_dRightHalf
                    }, {
                        'left': r348_dLeft,
                        'right': r348_dLeftHalf
                    })
                ]);
                _r348_t11 = _r348_t2 = _r348_t2 + 1;
                _r348_t10 = _r348_t2 < _r348_t1;
            }
            return _r348_t11;
        } else
            return void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r383_hasLG, r383_CreateLigationLookup, r383_CreateReverseLigationLookup) {
        var _r383_t0, _r383_t1;
        return r383_hasLG('trig') ? (r383_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_lsx('trig')
            }, {
                'left': ['bar'],
                'right': r1_lsx('trig')
            }),
            r309_xn$chainrule$1aao({
                'left': ['bar'],
                'right': r1_lsx('trig')
            }, {
                'left': r309_greater,
                'right': r1_lsx('trig')
            }),
            r309_xn$chainrule$1aao({
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greater,
                'right': r1_lsx('trig')
            }),
            r309_xn$chainrule$1aao({
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['bar'],
                'right': r1_lsx('trig')
            })
        ]), r383_CreateReverseLigationLookup([r309_xn$reverserule$3qIs({
                'left': ['bar'],
                'right': r1_lsx('trig')(['bar'])
            }, {
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            })]), r383_CreateLigationLookup([r309_xn$chainrule$1aao({
                'left': ['bar'],
                'right': r1_lsx('trig')(['bar'])
            }, {
                'left': r1_lsx('trig')(['bar']),
                'right': r1_xn$lookaround$5sIl
            })])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r397_hasLG, r397_CreateLigationLookup, r397_CreateReverseLigationLookup) {
        var _r397_t0, _r397_t1;
        return r397_hasLG('llggeq') ? r397_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r309_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_less,
                'right': r1_lsx('shift0h')
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r309_greater,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greater,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_less,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r309_less,
                'right': r1_lsx('shift0h')
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_greater,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }),
            r309_xn$chainrule$1aao({
                'left': r309_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r309_greater,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            })
        ]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r449_hasLG, r449_CreateLigationLookup, r449_CreateReverseLigationLookup) {
        var _r449_t0, _r449_t1;
        return r449_hasLG('html-comment') ? r449_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_exclam,
                'right': r1_lsx('htmlcommentstart')
            }, {
                'left': r309_hyphen,
                'right': r1_lsx('lxc')
            }, {
                'left': r309_hyphen,
                'right': r1_lsx('cc')
            }, {
                'left': r309_hyphen,
                'right': r1_lsx('cf')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_exclam,
                'right': r1_lsx('htmlcommentstart')
            }, {
                'left': r309_hyphen,
                'right': r1_lsx('lxc')
            }, {
                'left': r309_hyphen,
                'right': r1_lsx('cf')
            })
        ]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r460_hasLG, r460_CreateLigationLookup, r460_CreateReverseLigationLookup) {
        var r460_rodCls, r460_dbl, r460_ltgt, r460_CRod, _r460_t3, _r460_t7, _r460_t8, _r460_t9, _r460_t11, _r460_t12, _r460_tag13, _r460_t14, _r460_tag15;
        var r460_singular = r309_hyphen.concat(r309_anyWave);
        var r460_CBarSingular = function (r461_k) {
            var _r461_t0, _r461_t1;
            var r461_hyphenSet = new r1_Set(r309_hyphen);
            var r461_fHyphen = r1_arrowBarX(r461_k);
            var r461_fWave = r1_just('wave.lig.' + r461_k);
            return function (r462_t) {
                var _r462_t0, _r462_t1;
                var r462_hyphenResults = r461_fHyphen(r462_t);
                var r462_waveResults = r461_fWave(r462_t);
                return r462_t.map(function (r463_x, r463_j) {
                    var _r463_t0, _r463_t1;
                    return r461_hyphenSet.has(r463_x) ? r462_hyphenResults[r463_j] : r462_waveResults[r463_j];
                });
            };
        };
        var r460_ArrowFormationConfig = [
            [
                r309_equal,
                1,
                1,
                r1_arrowBarX
            ],
            [
                r460_singular,
                0,
                0,
                r460_CBarSingular
            ]
        ];
        var r460_ArrowExtensionConfig = [
            [
                r309_equal,
                r1_arrowBarX
            ],
            [
                r309_hyphen,
                r1_arrowBarX
            ],
            [
                r309_anyWave,
                function (r464_k) {
                    var _r464_t0, _r464_t1;
                    return r1_just('wave.lig.' + r464_k);
                }
            ]
        ];
        var _r460_t0 = r460_ArrowFormationConfig;
        var _r460_t1 = _r460_t0.length;
        var _r460_t2 = 0;
        while (_r460_t2 < _r460_t1) {
            _r460_t3 = _r460_t0[_r460_t2];
            r460_rodCls = _r460_t3[0];
            r460_dbl = _r460_t3[1];
            r460_ltgt = _r460_t3[2];
            r460_CRod = _r460_t3[3];
            (function () {
                var r468_lBar, r468_kl, r468_envL, r468_rBar, r468_kr, r468_envR, _r468_t3, _r468_t4, _r468_t5, _r468_t6, _r468_t7, _r468_t11, _r468_t15;
                var r468_heads = [];
                var r468_rods = [];
                var r468_doLT = !r460_ltgt || r460_hasLG('arrow-l') && !r460_hasLG('lteq');
                var r468_doLTAlt = !r460_ltgt || r460_hasLG('counter-arrow-l') && !r460_hasLG('eqlt');
                var r468_doRT = !r460_ltgt || r460_hasLG('counter-arrow-r') && !r460_hasLG('gteq');
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': ['parenLeft'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': ['question'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': ['parenLeft'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': ['question'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': ['parenLeft'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': ['question'],
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }, {
                    'left': r309_regexLookAround,
                    'right': r1_advance
                }));
                var r468_CJoinHeadForce = function () {
                    var _r484_t0, _r484_t1;
                    return r460_dbl ? r1_lsx('dblhead') : r1_lsx('shift0.head');
                };
                var r468_CJoinHeadMid = function () {
                    var _r485_t0, _r485_t1;
                    return r460_dbl ? r1_lsx('dblhead.mid') : r1_lsx('shift0.mid');
                };
                var r468_CJoinHeadForceShift1 = function () {
                    var _r486_t0, _r486_t1;
                    return r460_dbl ? r1_lsx('dblhead.shift1') : r1_lsx('shift1.head');
                };
                var r468_CAntiHeadForce = function () {
                    var _r487_t0, _r487_t1;
                    return r460_dbl ? r1_lsx('hole') : r1_lsx('shift0.anti');
                };
                var r468_CAntiHeadForceShiftN1 = function () {
                    var _r488_t0, _r488_t1;
                    return r460_dbl ? r1_lsx('hole.shiftN1') : r1_lsx('shiftN1.anti');
                };
                var r468_LJoinHeadForce = function () {
                    var _r489_t0, _r489_t1;
                    return r460_hasLG('arrow-l') ? r468_CJoinHeadForce() : r1_advance;
                };
                var r468_LJoinHeadForceShift1 = function () {
                    var _r490_t0, _r490_t1;
                    return r460_hasLG('arrow-l') ? r468_CJoinHeadForceShift1() : r1_advance;
                };
                var r468_LMiddleHead = function () {
                    var _r491_t0, _r491_t1;
                    return r460_hasLG('counter-arrow-l') ? r468_CJoinHeadMid() : r460_hasLG('arrow-l') ? r468_LJoinHeadForce() : r1_advance;
                };
                var r468_LAntiHeadForce = function () {
                    var _r492_t0, _r492_t1;
                    return r460_hasLG('counter-arrow-l') ? r468_CAntiHeadForce() : r1_advance;
                };
                var r468_LAntiHeadForceShiftN1 = function () {
                    var _r493_t0, _r493_t1;
                    return r460_hasLG('counter-arrow-l') ? r468_CAntiHeadForceShiftN1() : r1_advance;
                };
                var r468_RJoinHeadForce = function () {
                    var _r494_t0, _r494_t1;
                    return r460_hasLG('arrow-r') ? r468_CJoinHeadForce() : r1_advance;
                };
                var r468_RJoinHeadForceShift1 = function () {
                    var _r495_t0, _r495_t1;
                    return r460_hasLG('arrow-r') ? r468_CJoinHeadForceShift1() : r1_advance;
                };
                var r468_RMiddleHead = function () {
                    var _r496_t0, _r496_t1;
                    return r460_hasLG('counter-arrow-r') ? r468_CJoinHeadMid() : r460_hasLG('arrow-r') ? r468_RJoinHeadForce() : r1_advance;
                };
                var r468_RAntiHeadForce = function () {
                    var _r497_t0, _r497_t1;
                    return r460_hasLG('counter-arrow-r') ? r468_CAntiHeadForce() : r1_advance;
                };
                var r468_RAntiHeadForceShiftN1 = function () {
                    var _r498_t0, _r498_t1;
                    return r460_hasLG('counter-arrow-r') ? r468_CAntiHeadForceShiftN1() : r1_advance;
                };
                var r468_LAntiHeadAmbig = function () {
                    var _r499_t0, _r499_t1;
                    return r468_doLTAlt ? r468_LAntiHeadForce() : r1_advance;
                };
                var r468_RJoinHeadAmbig = r468_RJoinHeadForce;
                var r468_LJoinHeadAmbig = function () {
                    var _r500_t0, _r500_t1;
                    return r468_doLT ? r468_LJoinHeadForce() : r1_advance;
                };
                var r468_RAntiHeadAmbig = function () {
                    var _r501_t0, _r501_t1;
                    return r468_doRT ? r468_RAntiHeadForce() : r1_advance;
                };
                var r468_CollectApply = function (r502_ck, r502_fns) {
                    var r502_fnT, r502_fn, r502_transformed, r502_g, _r502_t3, _r502_t4, _r502_t5, _r502_t6, _r502_t7;
                    var r502_a = new r1_Set();
                    var _r502_t0 = r502_fns;
                    var _r502_t1 = _r502_t0.length;
                    var _r502_t2 = 0;
                    while (_r502_t2 < _r502_t1) {
                        r502_fnT = _r502_t0[_r502_t2];
                        r502_fn = r502_fnT();
                        r502_transformed = r502_fn ? r502_fn(r502_ck) : r502_ck;
                        _r502_t3 = r502_transformed;
                        _r502_t4 = _r502_t3.length;
                        _r502_t5 = 0;
                        while (_r502_t5 < _r502_t4) {
                            r502_g = _r502_t3[_r502_t5];
                            r502_a.add(r502_g);
                            _r502_t5 = _r502_t5 + 1;
                        }
                        _r502_t2 = _r502_t2 + 1;
                    }
                    return Array.from(r502_a);
                };
                var r468_arrowIndicator = r309_anyBar.concat(r468_CollectApply(r309_less.concat(r309_greater), [
                    function () {
                        var _r507_t0, _r507_t1;
                        return r1_ident;
                    },
                    r468_CJoinHeadForce,
                    r468_CJoinHeadForceShift1,
                    r468_CAntiHeadForce,
                    r468_CAntiHeadForceShiftN1,
                    r468_CJoinHeadMid
                ]));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RJoinHeadForceShift1()
                }, {
                    'left': r309_greater,
                    'right': r468_RAntiHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LAntiHeadForce()
                }, {
                    'left': r309_less,
                    'right': r468_LJoinHeadForceShift1()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RJoinHeadForce()
                }, {
                    'left': r309_less,
                    'right': r468_LJoinHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LAntiHeadForce()
                }, {
                    'left': r309_greater,
                    'right': r468_RAntiHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RMiddleHead()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LMiddleHead()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RJoinHeadForceShift1()
                }, {
                    'left': r309_greater,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LAntiHeadForceShiftN1()
                }, {
                    'left': r309_less,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_greater,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RAntiHeadForceShiftN1()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_less,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LJoinHeadForceShift1()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RJoinHeadForce()
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LAntiHeadForce()
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_greater,
                    'right': r468_RAntiHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_less,
                    'right': r468_LJoinHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r468_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RJoinHeadForce()
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r468_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LAntiHeadForce()
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_greater,
                    'right': r468_RAntiHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r468_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_less,
                    'right': r468_LJoinHeadForce()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r468_arrowIndicator,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_greater,
                    'right': r468_RJoinHeadAmbig()
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }, {
                    'left': r309_less,
                    'right': r468_LAntiHeadAmbig()
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_greater,
                    'right': r468_RAntiHeadAmbig()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                r468_heads.push(r309_xn$chainrule$1aao({
                    'left': r309_less,
                    'right': r468_LJoinHeadAmbig()
                }, {
                    'left': r460_rodCls,
                    'right': r1_xn$lookaround$5sIl
                }));
                var r468_kindLeftMid = [
                    [
                        false,
                        'l',
                        r468_CollectApply(r309_less, [
                            r468_CJoinHeadForce,
                            r468_CJoinHeadMid
                        ])
                    ],
                    [
                        false,
                        'l1',
                        r468_CollectApply(r309_less, [r468_CJoinHeadForceShift1])
                    ],
                    [
                        false,
                        'j',
                        r468_CollectApply(r309_greater, [
                            r468_CAntiHeadForce,
                            r468_CJoinHeadMid
                        ])
                    ],
                    [
                        true,
                        'm',
                        r309_anyBar
                    ],
                    [
                        false,
                        'j1',
                        r468_CollectApply(r309_greater, [r468_CAntiHeadForceShiftN1])
                    ]
                ];
                var r468_kindRightMid = [
                    [
                        false,
                        'r',
                        r468_CollectApply(r309_greater, [
                            r468_CJoinHeadForce,
                            r468_CJoinHeadMid
                        ])
                    ],
                    [
                        false,
                        'r1',
                        r468_CollectApply(r309_greater, [r468_CJoinHeadForceShift1])
                    ],
                    [
                        false,
                        'j',
                        r468_CollectApply(r309_less, [
                            r468_CAntiHeadForce,
                            r468_CJoinHeadMid
                        ])
                    ],
                    [
                        true,
                        'm',
                        r309_anyBar
                    ],
                    [
                        false,
                        'j1',
                        r468_CollectApply(r309_less, [r468_CAntiHeadForceShiftN1])
                    ]
                ];
                var _r468_t0 = r468_kindLeftMid;
                var _r468_t1 = _r468_t0.length;
                var _r468_t2 = 0;
                while (_r468_t2 < _r468_t1) {
                    _r468_t3 = _r468_t0[_r468_t2];
                    r468_lBar = _r468_t3[0];
                    r468_kl = _r468_t3[1];
                    r468_envL = _r468_t3[2];
                    _r468_t4 = r468_kindRightMid;
                    _r468_t5 = _r468_t4.length;
                    _r468_t6 = 0;
                    while (_r468_t6 < _r468_t5) {
                        _r468_t7 = _r468_t4[_r468_t6];
                        r468_rBar = _r468_t7[0];
                        r468_kr = _r468_t7[1];
                        r468_envR = _r468_t7[2];
                        if (!r468_lBar || !r468_rBar)
                            r468_rods.push(r309_xn$chainrule$1aao({
                                'left': r468_envL,
                                'right': r1_xn$lookaround$5sIl
                            }, {
                                'left': r460_rodCls,
                                'right': r460_CRod('' + r468_kl + '' + r468_kr)
                            }, {
                                'left': r468_envR,
                                'right': r1_xn$lookaround$5sIl
                            }));
                        _r468_t6 = _r468_t6 + 1;
                    }
                    _r468_t2 = _r468_t2 + 1;
                }
                var _r468_t8 = r468_kindLeftMid;
                var _r468_t9 = _r468_t8.length;
                var _r468_t10 = 0;
                while (_r468_t10 < _r468_t9) {
                    _r468_t11 = _r468_t8[_r468_t10];
                    r468_lBar = _r468_t11[0];
                    r468_kl = _r468_t11[1];
                    r468_envL = _r468_t11[2];
                    if (!r468_lBar)
                        r468_rods.push(r309_xn$chainrule$1aao({
                            'left': r468_envL,
                            'right': r1_xn$lookaround$5sIl
                        }, {
                            'left': r460_rodCls,
                            'right': r460_CRod('' + r468_kl + 'f')
                        }));
                    _r468_t10 = _r468_t10 + 1;
                }
                var _r468_t12 = r468_kindRightMid;
                var _r468_t13 = _r468_t12.length;
                var _r468_t14 = 0;
                while (_r468_t14 < _r468_t13) {
                    _r468_t15 = _r468_t12[_r468_t14];
                    r468_rBar = _r468_t15[0];
                    r468_kr = _r468_t15[1];
                    r468_envR = _r468_t15[2];
                    if (!r468_rBar)
                        r468_rods.push(r309_xn$chainrule$1aao({
                            'left': r460_rodCls,
                            'right': r460_CRod('f' + r468_kr)
                        }, {
                            'left': r468_envR,
                            'right': r1_xn$lookaround$5sIl
                        }));
                    _r468_t14 = _r468_t14 + 1;
                }
                r460_CreateLigationLookup(r468_heads);
                return r460_CreateLigationLookup(r468_rods);
            }());
            _r460_t2 = _r460_t2 + 1;
        }
        var _r460_t4 = r460_ArrowExtensionConfig;
        var _r460_t5 = _r460_t4.length;
        var _r460_t6 = 0;
        var _r460_t10 = _r460_t6 < _r460_t5;
        while (_r460_t10) {
            _r460_t7 = _r460_t4[_r460_t6];
            r460_rodCls = _r460_t7[0];
            r460_CRod = _r460_t7[1];
            (function () {
                var r592_lc, r592_rc;
                var r592_rodTermLeft = [];
                var r592_rodConnLeft = [];
                var _r592_t0 = [
                    'l',
                    'l1',
                    'j',
                    'j1',
                    'c',
                    'z',
                    'm'
                ];
                var _r592_t1 = _r592_t0.length;
                var _r592_t2 = 0;
                while (_r592_t2 < _r592_t1) {
                    r592_lc = _r592_t0[_r592_t2];
                    r592_rodTermLeft = r592_rodTermLeft.concat(r460_CRod('' + r592_lc + 'f')(r460_rodCls));
                    r592_rodConnLeft = r592_rodConnLeft.concat(r460_CRod('' + r592_lc + 'c')(r460_rodCls));
                    _r592_t2 = _r592_t2 + 1;
                }
                var r592_rodTermRight = [];
                var r592_rodConnRight = [];
                var _r592_t3 = [
                    'r',
                    'r1',
                    'j',
                    'j1',
                    'c',
                    'z',
                    'm'
                ];
                var _r592_t4 = _r592_t3.length;
                var _r592_t5 = 0;
                while (_r592_t5 < _r592_t4) {
                    r592_rc = _r592_t3[_r592_t5];
                    r592_rodTermRight = r592_rodTermRight.concat(r460_CRod('f' + r592_rc)(r460_rodCls));
                    r592_rodConnRight = r592_rodConnRight.concat(r460_CRod('c' + r592_rc)(r460_rodCls));
                    _r592_t5 = _r592_t5 + 1;
                }
                r460_CreateLigationLookup([r309_xn$chainrule$1aao({
                        'left': r592_rodTermLeft,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r460_rodCls,
                        'right': r460_CRod('zf')
                    })]);
                r460_CreateReverseLigationLookup([r309_xn$reverserule$3qIs({
                        'left': r460_rodCls,
                        'right': r460_CRod('fz')
                    }, {
                        'left': r592_rodTermRight,
                        'right': r1_xn$lookaround$5sIl
                    })]);
                r460_CreateLigationLookup([r309_xn$chainrule$1aao({
                        'left': r460_rodCls,
                        'right': r460_CRod('fz')
                    }, {
                        'left': r592_rodTermRight,
                        'right': r1_xn$lookaround$5sIl
                    })]);
                r460_CreateLigationLookup([
                    r309_xn$chainrule$1aao({
                        'left': r592_rodTermLeft,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r460_CRod('zf')(r460_rodCls),
                        'right': r460_CRod('zm')(r460_rodCls)
                    }, {
                        'left': r309_anyBar,
                        'right': r1_lsx('dMid')
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r309_anyBar,
                        'right': r1_lsx('dMid')
                    }, {
                        'left': r460_CRod('fz')(r460_rodCls),
                        'right': r460_CRod('mz')(r460_rodCls)
                    }, {
                        'left': r592_rodTermRight,
                        'right': r1_xn$lookaround$5sIl
                    })
                ]);
                return r460_CreateLigationLookup([r309_xn$chainrule$1aao({
                        'left': r592_rodTermLeft,
                        'right': r592_rodConnLeft
                    }, {
                        'left': r592_rodTermRight,
                        'right': r592_rodConnRight
                    })]);
            }());
            _r460_t11 = _r460_t6 = _r460_t6 + 1;
            _r460_t10 = _r460_t6 < _r460_t5;
        }
        return _r460_t11;
    });
    r309_xn$LigGroup$2Lrc9(function (r612_hasLG, r612_CreateLigationLookup, r612_CreateReverseLigationLookup) {
        var r612_lAll, r612_lNeut, r612_gAll, r612_gNeut, r612_lgAll, r612_lgNeut, _r612_t0, _r612_t1;
        return r612_hasLG('llgg') ? (r612_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }),
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }),
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r309_less,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_less,
                'right': r1_lsx('shift0h')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r309_greater,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greater,
                'right': r1_lsx('shiftN0h')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_less,
                'right': r1_lsx('shiftN0h')
            }, {
                'left': r309_less,
                'right': r1_lsx('shift0h')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_greater,
                'right': r1_lsx('shift0h')
            }, {
                'left': r309_greater,
                'right': r1_lsx('shiftN0h')
            })
        ]), r612_lAll = [
            'less',
            'less.lig.shift0h',
            'less.lig.shiftN0h'
        ], r612_lNeut = [
            'less',
            'less',
            'less'
        ], r612_gAll = [
            'greater',
            'greater.lig.shift0h',
            'greater.lig.shiftN0h'
        ], r612_gNeut = [
            'greater',
            'greater',
            'greater'
        ], r612_lgAll = r612_lAll.concat(r612_gAll), r612_lgNeut = r612_lNeut.concat(r612_gNeut), r612_CreateLigationLookup([r309_xn$chainrule$1aao({
                'left': r612_lgAll,
                'right': r612_lgNeut
            }, {
                'left': r612_lgAll,
                'right': r612_lgNeut
            }, {
                'left': r612_lgAll,
                'right': r612_lgNeut
            }, {
                'left': r612_lgAll,
                'right': r1_xn$lookaround$5sIl
            })]), r612_CreateLigationLookup([r309_xn$chainrule$1aao({
                'left': r612_lgAll,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r612_lgAll,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r612_lgAll,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r612_lgAll,
                'right': r612_lgNeut
            })]), r612_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': r612_lAll,
                'right': r612_lNeut
            }, {
                'left': r612_lAll,
                'right': r612_lNeut
            }, {
                'left': r612_gAll,
                'right': r612_gNeut
            }),
            r309_xn$chainrule$1aao({
                'left': r612_gAll,
                'right': r612_gNeut
            }, {
                'left': r612_gAll,
                'right': r612_gNeut
            }, {
                'left': r612_lAll,
                'right': r612_lNeut
            }),
            r309_xn$chainrule$1aao({
                'left': r612_lAll,
                'right': r612_lNeut
            }, {
                'left': r612_gAll,
                'right': r612_gNeut
            }, {
                'left': r612_gAll,
                'right': r612_gNeut
            }),
            r309_xn$chainrule$1aao({
                'left': r612_gAll,
                'right': r612_gNeut
            }, {
                'left': r612_lAll,
                'right': r612_lNeut
            }, {
                'left': r612_lAll,
                'right': r612_lNeut
            })
        ])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r659_hasLG, r659_CreateLigationLookup, r659_CreateReverseLigationLookup) {
        var _r659_t0, _r659_t1;
        return r659_hasLG('logic') ? r659_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': r309_slash,
                'right': r1_csx('left')
            }, {
                'left': r309_backslash,
                'right': r1_csx('right')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_backslash,
                'right': r1_csx('left')
            }, {
                'left': r309_slash,
                'right': r1_csx('right')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_bar,
                'right': r1_lsx('dMid')
            }, {
                'left': r309_anyStraightRod,
                'right': r1_lsx('mf')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_anyStraightRod,
                'right': r1_lsx('fm')
            }, {
                'left': r309_bar,
                'right': r1_lsx('dMid')
            }),
            r309_xn$chainrule$1aao({
                'left': r309_underscore,
                'right': r1_lsx('fm')
            }, {
                'left': r309_bar,
                'right': r1_lsx('bottomMid')
            }, {
                'left': r309_underscore,
                'right': r1_lsx('mf')
            })
        ]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r672_hasLG, r672_CreateLigationLookup, r672_CreateReverseLigationLookup) {
        var _r672_t0, _r672_t1;
        var r672_AnyEqualEnding = [
            'equal',
            'equal.lig.cf',
            'equal.lig.jf',
            'equal.lig.xf',
            'ident.lig.cf',
            'ident.lig.yf'
        ];
        return r672_CreateLigationLookup([
            r672_hasLG('eqeq') ? r309_xn$chainrule$1aao({
                'left': [
                    'equal.lig.cf',
                    'equal.lig.zf'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_equal,
                'right': r1_lsx('zf')
            }) : void 0,
            r672_hasLG('eqexeq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_just('ident.lig.fc')
            }, {
                'left': r309_exclam,
                'right': ['neq.allow-dot.1m']
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.yf')
            }) : r672_hasLG('eqexeq-dl') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r309_exclam,
                'right': ['neq.allow-dot.1m']
            }, {
                'left': r309_equal,
                'right': r1_lsx('yf')
            }) : true ? r309_xn$chainrule$1aao({
                'left': r672_AnyEqualEnding,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_exclam,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r672_hasLG('exeqeqeq') ? r309_xn$chainrule$1aao({
                'left': r309_exclam,
                'right': ['neq.allow-dot.4l']
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.xc')
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.cc')
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.cf')
            }) : r672_hasLG('exeq') ? r309_xn$chainrule$1aao({
                'left': r309_exclam,
                'right': ['neq.allow-dot.4l']
            }, {
                'left': r309_equal,
                'right': r1_lsx('xc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r672_hasLG('eqeq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r672_hasLG('exeqeq') ? r309_xn$chainrule$1aao({
                'left': r309_exclam,
                'right': ['neq.allow-dot.3l']
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.xc')
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.cf')
            }) : r672_hasLG('exeq') ? r309_xn$chainrule$1aao({
                'left': r309_exclam,
                'right': ['neq.allow-dot.3l']
            }, {
                'left': r309_equal,
                'right': r1_lsx('xc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r672_hasLG('eqslasheq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_just('ident.lig.fc')
            }, {
                'left': r309_slash,
                'right': ['neq.bar-only.1m']
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.yf')
            }) : r672_hasLG('slasheq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r309_slash,
                'right': ['neq.bar-only.1m']
            }, {
                'left': r309_equal,
                'right': r1_lsx('yf')
            }) : void 0,
            r672_hasLG('eqeqeq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_just('ident.lig.fc')
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.cc')
            }, {
                'left': r309_equal,
                'right': r1_just('ident.lig.cf')
            }) : r672_hasLG('eqeq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cf')
            }) : void 0,
            r672_hasLG('tildeeq') ? r309_xn$chainrule$1aao({
                'left': r309_anyWave,
                'right': r1_just('neq.bar-only.2l')
            }, {
                'left': r309_equal,
                'right': r1_lsx('xf')
            }) : void 0,
            r672_hasLG('slasheq') ? r309_xn$chainrule$1aao({
                'left': r309_slash,
                'right': ['neq.bar-only.2l']
            }, {
                'left': r309_equal,
                'right': r1_lsx('xf')
            }) : void 0,
            r672_hasLG('exeq') ? r309_xn$chainrule$1aao({
                'left': r309_exclam,
                'right': ['neq.allow-dot.2l']
            }, {
                'left': r309_equal,
                'right': r1_lsx('xf')
            }) : void 0,
            r672_hasLG('eqeq') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_lsx('fc')
            }, {
                'left': r309_equal,
                'right': r1_lsx('cf')
            }) : void 0
        ]);
    });
    r309_xn$LigGroup$2Lrc9(function (r723_hasLG, r723_CreateLigationLookup, r723_CreateReverseLigationLookup) {
        var r723_acops, _r723_t0, _r723_t1;
        return r723_hasLG('lteq') || r723_hasLG('eqlt') || r723_hasLG('gteq') ? (r723_acops = [
            'less',
            'greater',
            'hyphen',
            'equal',
            'plus',
            'slash',
            'bar',
            'backslash'
        ], r723_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }),
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }),
            r309_xn$chainrule$1aao({
                'left': ['parenLeft'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['question'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }, {
                'left': r309_regexLookAround,
                'right': r1_advance
            }),
            r723_hasLG('lteq') ? r309_xn$chainrule$1aao({
                'left': r723_acops,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_lessAndEquiv,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_advance
            }) : void 0,
            r723_hasLG('lteq') ? r309_xn$chainrule$1aao({
                'left': r309_lessAndEquiv,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_advance
            }, {
                'left': r723_acops,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r723_hasLG('lteq') ? r309_xn$chainrule$1aao({
                'left': r309_lessAndEquiv,
                'right': r1_just('less.lig2')
            }, {
                'left': r309_equal,
                'right': ['eq.at-lteq.lig2']
            }) : void 0,
            r723_hasLG('eqlt') ? r309_xn$chainrule$1aao({
                'left': r723_acops,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_equal,
                'right': r1_advance
            }, {
                'left': r309_lessAndEquiv,
                'right': r1_advance
            }) : void 0,
            r723_hasLG('eqlt') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_advance
            }, {
                'left': r309_lessAndEquiv,
                'right': r1_advance
            }, {
                'left': r723_acops,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r723_hasLG('eqlt') ? r309_xn$chainrule$1aao({
                'left': r309_equal,
                'right': r1_just('less.lig2')
            }, {
                'left': r309_lessAndEquiv,
                'right': ['eq.at-lteq.lig2']
            }) : void 0,
            r723_hasLG('gteq') ? r309_xn$chainrule$1aao({
                'left': r723_acops,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greaterAndEquiv,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_advance
            }) : void 0,
            r723_hasLG('gteq') ? r309_xn$chainrule$1aao({
                'left': r309_greaterAndEquiv,
                'right': r1_advance
            }, {
                'left': r309_equal,
                'right': r1_advance
            }, {
                'left': r723_acops,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r723_hasLG('gteq') ? r309_xn$chainrule$1aao({
                'left': r309_greaterAndEquiv,
                'right': r1_just('greater.lig2')
            }, {
                'left': r309_equal,
                'right': ['eq.at-gteq.lig2']
            }) : void 0
        ])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r764_hasLG, r764_CreateLigationLookup, r764_CreateReverseLigationLookup) {
        var _r764_t0, _r764_t1;
        return r764_CreateLigationLookup([r764_hasLG('ltgt-diamond') ? r309_xn$chainrule$1aao({
                'left': r309_lessAndEquiv,
                'right': r1_just('less.lig.diamond')
            }, {
                'left': r309_greaterAndEquiv,
                'right': r1_just('greater.lig.diamond')
            }) : r764_hasLG('ltgt-diamond-tag') ? r309_xn$chainrule$1aao({
                'left': r309_lessAndEquiv,
                'right': r1_just('less.lig.diamond.tag')
            }, {
                'left': r309_greaterAndEquiv,
                'right': r1_just('greater.lig.diamond.tag')
            }) : r764_hasLG('ltgt-ne') ? r309_xn$chainrule$1aao({
                'left': r309_lessAndEquiv,
                'right': r1_just('neq.bar-only.2l')
            }, {
                'left': r309_greaterAndEquiv,
                'right': r1_just('equal.lig.xf')
            }) : void 0]);
    });
    r309_xn$LigGroup$2Lrc9(function (r772_hasLG, r772_CreateLigationLookup, r772_CreateReverseLigationLookup) {
        var _r772_t0, _r772_t1;
        return r772_CreateLigationLookup([
            r772_hasLG('ltgt-slash-tag') ? r309_xn$chainrule$1aao({
                'left': r309_lessAndEquiv,
                'right': r1_just('less.lig.tag-slash')
            }, {
                'left': r309_slash,
                'right': r1_xn$lookaround$5sIl
            }) : void 0,
            r772_hasLG('ltgt-slash-tag') ? r309_xn$chainrule$1aao({
                'left': r309_slash,
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greaterAndEquiv,
                'right': r1_just('greater.lig.tag-slash')
            }) : void 0
        ]);
    });
    r309_xn$LigGroup$2Lrc9(function (r778_hasLG, r778_CreateLigationLookup, r778_CreateReverseLigationLookup) {
        var _r778_t0, _r778_t1;
        return r778_hasLG('colon-greater') ? r778_CreateLigationLookup([r309_xn$chainrule$1aao({
                'left': ['colon/mid'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_greaterAndEquiv,
                'right': r1_just('greaterArrow')
            })]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r782_hasLG, r782_CreateLigationLookup, r782_CreateReverseLigationLookup) {
        var _r782_t0, _r782_t1;
        return r782_CreateLigationLookup([
            r782_hasLG('brack-bar') ? r309_xn$chainrule$1aao({
                'left': ['bracketLeft'],
                'right': ['ligExtBracketLeft']
            }, {
                'left': ['bar'],
                'right': ['ligBarInsideBracketLeft']
            }) : void 0,
            r782_hasLG('brack-bar') ? r309_xn$chainrule$1aao({
                'left': ['bar'],
                'right': ['ligBarInsideBracketRight']
            }, {
                'left': ['bracketRight'],
                'right': ['ligExtBracketRight']
            }) : void 0,
            r782_hasLG('brace-bar') ? r309_xn$chainrule$1aao({
                'left': ['braceLeft'],
                'right': ['ligExtBraceLeft']
            }, {
                'left': ['bar'],
                'right': ['ligBarInsideBracketLeft']
            }) : void 0,
            r782_hasLG('brace-bar') ? r309_xn$chainrule$1aao({
                'left': ['bar'],
                'right': ['ligBarInsideBracketRight']
            }, {
                'left': ['braceRight'],
                'right': ['ligExtBraceRight']
            }) : void 0
        ]);
    });
    r309_xn$LigGroup$2Lrc9(function (r792_hasLG, r792_CreateLigationLookup, r792_CreateReverseLigationLookup) {
        var _r792_t0, _r792_t1;
        return r792_hasLG('plusplus') ? (r792_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': [
                    'plus.lig.cf',
                    'plus.lig.zf'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['plus'],
                'right': r1_lsx('zf')
            }),
            r309_xn$chainrule$1aao({
                'left': ['plus'],
                'right': r1_lsx('fc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cf')
            }),
            r309_xn$chainrule$1aao({
                'left': ['plus'],
                'right': r1_lsx('fc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cf')
            }),
            r309_xn$chainrule$1aao({
                'left': ['plus'],
                'right': r1_lsx('fc')
            }, {
                'left': ['plus'],
                'right': r1_lsx('cf')
            })
        ]), r792_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['plus.lig.fc'],
                'right': ['plus.lig.fc.s']
            }, {
                'left': ['plus.lig.cc'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['plus.lig.cf'],
                'right': ['plus.lig.cf.s']
            }),
            r309_xn$chainrule$1aao({
                'left': ['plus.lig.fc'],
                'right': ['plus.lig.fc.s']
            }, {
                'left': ['plus.lig.cf'],
                'right': ['plus.lig.cf.s']
            })
        ])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r810_hasLG, r810_CreateLigationLookup, r810_CreateReverseLigationLookup) {
        var _r810_t0, _r810_t1;
        return r810_hasLG('connected-underscore') ? r810_CreateLigationLookup([r309_xn$chainrule$1aao({
                'left': r309_underscore.concat(r1_lsx('zf')(r309_underscore)),
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': r309_underscore,
                'right': r1_lsx('zf')
            })]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r814_hasLG, r814_CreateLigationLookup, r814_CreateReverseLigationLookup) {
        var _r814_t0, _r814_t1;
        return r814_hasLG('connected-tilde-as-wave') ? r814_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': [
                    'wave.lig.cf',
                    'wave.lig.zf'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['asciiTilde'],
                'right': ['wave.lig.zf']
            }),
            r309_xn$chainrule$1aao({
                'left': ['asciiTilde'],
                'right': ['wave.lig.fc']
            }, {
                'left': ['asciiTilde'],
                'right': ['wave.lig.cf']
            })
        ]) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r820_hasLG, r820_CreateLigationLookup, r820_CreateReverseLigationLookup) {
        var _r820_t0, _r820_t1;
        return r820_hasLG('connected-hyphen') ? (r820_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['hyphen.lig.zf'],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['hyphen'],
                'right': ['hyphen.lig.zf']
            }),
            r309_xn$chainrule$1aao({
                'left': ['hyphen'],
                'right': ['hyphen.lig.fc']
            }, {
                'left': ['hyphen'],
                'right': ['hyphen.lig.zf']
            })
        ]), r820_CreateLigationLookup([
            r309_xn$chainrule$1aao({
                'left': ['hyphen.lig.jf'],
                'right': ['hyphen.lig.jc']
            }, {
                'left': ['hyphen'],
                'right': ['hyphen.lig.cc']
            }, {
                'left': ['hyphen.lig.fj'],
                'right': ['hyphen.lig.cj']
            }),
            r309_xn$chainrule$1aao({
                'left': ['hyphen.lig.jf'],
                'right': ['hyphen.lig.jc']
            }, {
                'left': ['hyphen.lig.fc'],
                'right': ['hyphen.lig.cc']
            }),
            r309_xn$chainrule$1aao({
                'left': ['hyphen.lig.zf'],
                'right': ['hyphen.lig.zc']
            }, {
                'left': ['hyphen.lig.fj'],
                'right': ['hyphen.lig.cj']
            })
        ])) : void 0;
    });
    r309_xn$LigGroup$2Lrc9(function (r833_hasLG, r833_CreateLigationLookup, r833_CreateReverseLigationLookup) {
        var _r833_t0, _r833_t1;
        return r833_hasLG('connected-number-sign') ? r833_CreateLigationLookup([r309_xn$chainrule$1aao({
                'left': [
                    'numberSign',
                    'numberSign.jr'
                ],
                'right': r1_xn$lookaround$5sIl
            }, {
                'left': ['numberSign'],
                'right': ['numberSign.jr']
            })]) : void 0;
    });
    return r309_xn$LigGroup$2Lrc9(function (r837_hasLG, r837_CreateLigationLookup, r837_CreateReverseLigationLookup) {
        var r837_chBar, r837_dp, r837_dLeft, r837_dRight, r837_dLeftHalf, r837_dRightHalf, r837_dMid, _r837_t0, _r837_t1, _r837_t2, _r837_t3, _r837_t4, _r837_t5, _r837_t6, _r837_t7;
        if (r837_hasLG('kern-bars')) {
            _r837_t0 = r309_anyBar;
            _r837_t1 = _r837_t0.length;
            _r837_t2 = 0;
            _r837_t6 = _r837_t2 < _r837_t1;
            while (_r837_t6) {
                _r837_t7 = (r837_chBar = _r837_t0[_r837_t2], r837_dp = [r837_chBar], r837_dLeft = r1_lsx('dLeft')(r837_dp), r837_dRight = r1_lsx('dRight')(r837_dp), r837_dLeftHalf = r1_lsx('dLeftHalf')(r837_dp), r837_dRightHalf = r1_lsx('dRightHalf')(r837_dp), r837_dMid = r1_lsx('dMid')(r837_dp), r837_CreateLigationLookup([
                    r309_xn$chainrule$1aao({
                        'left': r837_dRight.concat(r837_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r837_dp,
                        'right': r837_dMid
                    }, {
                        'left': r837_dp.concat(r837_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r837_dRight.concat(r837_dMid),
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r837_dp,
                        'right': r837_dLeft
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r837_dp,
                        'right': r837_dRight
                    }, {
                        'left': r837_dp.concat(r837_dMid),
                        'right': r1_xn$lookaround$5sIl
                    })
                ]), r837_CreateLigationLookup([
                    r309_xn$chainrule$1aao({
                        'left': r837_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r837_dMid,
                        'right': r837_dRightHalf
                    }, {
                        'left': r837_dMid,
                        'right': r837_dLeftHalf
                    }, {
                        'left': r837_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r837_dRight,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r837_dMid,
                        'right': r837_dRightHalf
                    }, {
                        'left': r837_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r837_dMid,
                        'right': r1_xn$lookaround$5sIl
                    }, {
                        'left': r837_dMid,
                        'right': r837_dLeftHalf
                    }, {
                        'left': r837_dLeft,
                        'right': r1_xn$lookaround$5sIl
                    }),
                    r309_xn$chainrule$1aao({
                        'left': r837_dRight,
                        'right': r837_dRightHalf
                    }, {
                        'left': r837_dLeft,
                        'right': r837_dLeftHalf
                    })
                ]), _r837_t2 = _r837_t2 + 1);
                _r837_t6 = _r837_t2 < _r837_t1;
            }
            return _r837_t7;
        } else
            return void 0;
    });
};
