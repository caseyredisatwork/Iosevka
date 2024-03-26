'use strict';
import * as _s0_t0 from './table-util.mjs';
import * as _s0_t1 from '../support/gr.mjs';
import * as _s0_t2 from '../meta/unicode-knowledge.mjs';
var _s0_t3;
export {
    _s0_t3 as buildCCMP
};
var _s0_t4;
export {
    _s0_t4 as buildCCMPPostCvSs
};
var r1_buildCCMP, r1_buildCCMPPostCvSs, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_AddFeatureLookup = _r1_t8.AddFeatureLookup;
var r1_ChainRuleBuilder = _r1_t8.ChainRuleBuilder;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
var r1_UkMapToLookup = _r1_t8.UkMapToLookup;
var r1_UkMap2ToLookup = _r1_t8.UkMap2ToLookup;
var _r1_t9 = _s0_t1;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_Dotless = _r1_t9.Dotless;
var r1_TieMark = _r1_t9.TieMark;
var r1_TieGlyph = _r1_t9.TieGlyph;
var r1_OgonekTrY = _r1_t9.OgonekTrY;
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
var r1_UnicodeKnowledge = _s0_t2;
var r1_Set = Set;
_s0_t3 = r1_buildCCMP = function (r272_sink, r272_glyphStore, r272_markGlyphs) {
    var _r272_t0, _r272_t1;
    var r272_anyMark = Array.from(r272_markGlyphs.all);
    var r272_aboveMark = r1_filterMarkByClass(r272_markGlyphs, 'above');
    var r272_ccmp = r1_AddFeature(r272_sink, 'ccmp');
    r1_AddCommonFeature(r272_sink, r272_ccmp);
    var r272_xn$ExecCcmpGroup$2Lrc4b = function (r273_fn) {
        var _r273_t1, _r273_t2;
        var r273_addedLookups = [];
        var r273_xn$exportlookup$7Hrq = function (r274_lookupName) {
            var _r274_t0, _r274_t1;
            r272_ccmp.lookups.push(r274_lookupName);
            return r273_addedLookups.push(r274_lookupName);
        };
        var r273_rec = r1_BeginLookupBlock(r272_sink);
        var _r273_t0 = r1_ChainRuleBuilder(r272_sink);
        var r273_xn$chainrule$1aao = _r273_t0[0];
        r273_fn(r273_xn$exportlookup$7Hrq, r273_xn$chainrule$1aao);
        var r273_j = 1;
        while (r273_j < r273_addedLookups.length) {
            r272_sink.lookupDep.push([
                r273_addedLookups[r273_j - 1],
                r273_addedLookups[r273_j]
            ]);
            r273_j = r273_j + 1;
        }
        return r1_EndLookupBlock(r273_rec, r272_sink);
    };
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r276_xn$exportlookup$7Hrq, r276_xn$chainrule$1aao) {
        var r276_gid, r276_g, _r276_t2, _r276_t3, _r276_t4;
        var r276_groupGrekUpperTonos = [];
        var r276_groupLF = [];
        var r276_dotlessFrom = [];
        var r276_dotlessTo = [];
        var r276_TieMarkFrom = [];
        var r276_TieMarkTo = [];
        var r276_TieGlyphs = [];
        var _r276_t0 = r272_glyphStore.namedEntries()[Symbol.iterator]();
        var _r276_t1 = void 0;
        while (!(_r276_t1 = _r276_t0.next()).done) {
            _r276_t2 = _r276_t1.value;
            r276_gid = _r276_t2[0];
            r276_g = _r276_t2[1];
            if (r276_gid[0] !== '.') {
                if (r276_g.baseAnchors.lf)
                    r276_groupLF.push(r276_gid);
                if (r276_g.baseAnchors.grekUpperTonos)
                    r276_groupGrekUpperTonos.push(r276_gid);
                if (r1_Dotless.get(r276_g)) {
                    r276_dotlessFrom.push(r276_gid);
                    r276_dotlessTo.push(r1_Dotless.get(r276_g));
                }
                if (r1_TieGlyph.get(r276_g))
                    r276_TieGlyphs.push(r276_gid);
                if (r1_TieMark.get(r276_g)) {
                    r276_TieMarkFrom.push(r276_gid);
                    r276_TieMarkTo.push(r1_TieMark.get(r276_g));
                }
            }
        }
        var r276_IotaLF = function () {
            var _r278_t0, _r278_t1;
            return r1_UkMapToLookup(r1_UnicodeKnowledge.iotaBelowToLfTf);
        };
        var r276_GrekUpperTonosTf = function () {
            var _r279_t0, _r279_t1;
            return r1_UkMapToLookup(r1_UnicodeKnowledge.upperGrekMarkToTonosTf);
        };
        r276_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'ignoreGlyphs': r1_filterMarkByClassNegated(r272_markGlyphs, 'above'),
            'rules': [
                r276_xn$chainrule$1aao({
                    'left': r276_dotlessFrom,
                    'right': r276_dotlessTo
                }, {
                    'left': r272_aboveMark,
                    'right': null
                }),
                r276_xn$chainrule$1aao(r276_groupGrekUpperTonos, r276_GrekUpperTonosTf())
            ]
        }));
        r276_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'ignoreGlyphs': r1_filterMarkByClassNegated(r272_markGlyphs, 'below'),
            'rules': [r276_xn$chainrule$1aao(r276_groupLF, r276_IotaLF())]
        }));
        r276_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_ligature',
            'substitutions': r1_UkMap2ToLookup(r1_UnicodeKnowledge.markCompositionTf)
        }));
        r276_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_multiple',
            'substitutions': {
                'braceAbove': [
                    'leftParenAbove',
                    'rightParenAbove'
                ],
                'parenAbove': [
                    'leftBrackAbove',
                    'rightBrackAbove'
                ],
                'parenBelow': [
                    'leftParenBelow',
                    'rightParenBelow'
                ]
            }
        }));
        var r276_lookupTieMarkLigature = r1_AddLookup(r272_sink, {
            'type': 'gsub_ligature',
            'substitutions': [].concat(r276_TieMarkFrom.map(function (r282_gnFrom, r282_idx) {
                var _r282_t0, _r282_t1;
                return {
                    'from': [
                        'cgj',
                        r282_gnFrom
                    ],
                    'to': r276_TieMarkTo[r282_idx]
                };
            }))
        });
        return r276_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [{
                    'match': [
                        r276_TieGlyphs.concat(r276_TieMarkTo),
                        ['cgj'],
                        r276_TieMarkFrom
                    ],
                    'inputBegins': 1,
                    'inputEnds': 3,
                    'apply': [{
                            'at': 1,
                            'lookup': r276_lookupTieMarkLigature
                        }]
                }]
        }));
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r284_xn$exportlookup$7Hrq, r284_xn$chainrule$1aao) {
        var r284_gid, r284_g, _r284_t2, _r284_t3, _r284_t4;
        var r284_superscripts = [];
        var r284_subscripts = [];
        var _r284_t0 = r272_glyphStore.namedEntries()[Symbol.iterator]();
        var _r284_t1 = void 0;
        while (!(_r284_t1 = _r284_t0.next()).done) {
            _r284_t2 = _r284_t1.value;
            r284_gid = _r284_t2[0];
            r284_g = _r284_t2[1];
            if (r284_gid[0] !== '.') {
                if (r1_IsSuperscript.get(r284_g))
                    r284_superscripts.push(r284_gid);
                if (r1_IsSubscript.get(r284_g))
                    r284_subscripts.push(r284_gid);
            }
        }
        return r284_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'ignoreGlyphs': r272_anyMark,
            'rules': [
                r284_xn$chainrule$1aao(r284_superscripts, {
                    'left': ['rhoticHook'],
                    'right': ['rhoticHook/sup']
                }),
                r284_xn$chainrule$1aao(r284_subscripts, {
                    'left': ['rhoticHook'],
                    'right': ['rhoticHook/sub']
                })
            ]
        }));
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r289_xn$exportlookup$7Hrq, r289_xn$chainrule$1aao) {
        var _r289_t0, _r289_t1;
        var r289_ToneToToneStart = function (r290_toneEnd) {
            var _r290_t2, _r290_t3;
            var r290_f = [];
            var r290_e = [];
            var _r290_t0 = 4;
            var _r290_t1 = 0;
            var r290_toneStart = _r290_t0;
            while (r290_toneStart >= _r290_t1) {
                r290_f.push('tone' + r290_toneStart);
                r290_e.push('toneStart' + r290_toneStart + r290_toneEnd);
                r290_toneStart = r290_toneStart - 1;
            }
            return {
                'left': r290_f,
                'right': r290_e
            };
        };
        var r289_ToneToToneEnd = function (r293_toneStart) {
            var _r293_t2, _r293_t3;
            var r293_f = [];
            var r293_e = [];
            var _r293_t0 = 4;
            var _r293_t1 = 0;
            var r293_toneEnd = _r293_t0;
            while (r293_toneEnd >= _r293_t1) {
                r293_f.push('tone' + r293_toneEnd);
                r293_e.push('toneEnd' + r293_toneStart + r293_toneEnd);
                r293_toneEnd = r293_toneEnd - 1;
            }
            return {
                'left': r293_f,
                'right': r293_e
            };
        };
        var r289_ToneStartOrMidAt = function (r296_y) {
            var _r296_t4, _r296_t5, _r296_t6, _r296_t7;
            var r296_f = [];
            var _r296_t0 = 4;
            var _r296_t1 = 0;
            var r296_toneEnd = _r296_t0;
            while (r296_toneEnd >= _r296_t1) {
                r296_f.push('toneStart' + r296_y + r296_toneEnd);
                r296_toneEnd = r296_toneEnd - 1;
            }
            var _r296_t2 = 4;
            var _r296_t3 = 0;
            var r296_toneStart = _r296_t2;
            while (r296_toneStart >= _r296_t3) {
                _r296_t4 = 4;
                _r296_t5 = 0;
                r296_toneEnd = _r296_t4;
                while (r296_toneEnd >= _r296_t5) {
                    r296_f.push('toneMid' + r296_toneStart + r296_y + r296_toneEnd);
                    r296_toneEnd = r296_toneEnd - 1;
                }
                r296_toneStart = r296_toneStart - 1;
            }
            return r296_f;
        };
        var r289_ToneStartToToneMid = function (r300_toneStart) {
            var r300_toneEnd, _r300_t2, _r300_t3, _r300_t4, _r300_t5;
            var r300_f = [];
            var r300_e = [];
            var _r300_t0 = 4;
            var _r300_t1 = 0;
            var r300_toneMid = _r300_t0;
            while (r300_toneMid >= _r300_t1) {
                _r300_t2 = 4;
                _r300_t3 = 0;
                r300_toneEnd = _r300_t2;
                while (r300_toneEnd >= _r300_t3) {
                    r300_f.push('toneStart' + r300_toneMid + r300_toneEnd);
                    r300_e.push('toneMid' + r300_toneStart + r300_toneMid + r300_toneEnd);
                    r300_toneEnd = r300_toneEnd - 1;
                }
                r300_toneMid = r300_toneMid - 1;
            }
            return {
                'left': r300_f,
                'right': r300_e
            };
        };
        var r289_ToneSandhiToToneStart = function (r304_toneEnd) {
            var _r304_t2, _r304_t3;
            var r304_f = [];
            var r304_e = [];
            var _r304_t0 = 4;
            var _r304_t1 = 0;
            var r304_toneStart = _r304_t0;
            while (r304_toneStart >= _r304_t1) {
                r304_f.push('toneSandhi' + r304_toneStart);
                r304_e.push('toneSandhiStart' + r304_toneStart + r304_toneEnd);
                r304_toneStart = r304_toneStart - 1;
            }
            return {
                'left': r304_f,
                'right': r304_e
            };
        };
        var r289_ToneSandhiToToneEnd = function (r307_toneStart) {
            var _r307_t2, _r307_t3;
            var r307_f = [];
            var r307_e = [];
            var _r307_t0 = 4;
            var _r307_t1 = 0;
            var r307_toneEnd = _r307_t0;
            while (r307_toneEnd >= _r307_t1) {
                r307_f.push('toneSandhi' + r307_toneEnd);
                r307_e.push('toneSandhiEnd' + r307_toneStart + r307_toneEnd);
                r307_toneEnd = r307_toneEnd - 1;
            }
            return {
                'left': r307_f,
                'right': r307_e
            };
        };
        var r289_ToneSandhiStartOrMidAt = function (r310_y) {
            var _r310_t4, _r310_t5, _r310_t6, _r310_t7;
            var r310_f = [];
            var _r310_t0 = 4;
            var _r310_t1 = 0;
            var r310_toneEnd = _r310_t0;
            while (r310_toneEnd >= _r310_t1) {
                r310_f.push('toneSandhiStart' + r310_y + r310_toneEnd);
                r310_toneEnd = r310_toneEnd - 1;
            }
            var _r310_t2 = 4;
            var _r310_t3 = 0;
            var r310_toneStart = _r310_t2;
            while (r310_toneStart >= _r310_t3) {
                _r310_t4 = 4;
                _r310_t5 = 0;
                r310_toneEnd = _r310_t4;
                while (r310_toneEnd >= _r310_t5) {
                    r310_f.push('toneSandhiMid' + r310_toneStart + r310_y + r310_toneEnd);
                    r310_toneEnd = r310_toneEnd - 1;
                }
                r310_toneStart = r310_toneStart - 1;
            }
            return r310_f;
        };
        var r289_ToneSandhiStartToToneMid = function (r314_toneStart) {
            var r314_toneEnd, _r314_t2, _r314_t3, _r314_t4, _r314_t5;
            var r314_f = [];
            var r314_e = [];
            var _r314_t0 = 4;
            var _r314_t1 = 0;
            var r314_toneMid = _r314_t0;
            while (r314_toneMid >= _r314_t1) {
                _r314_t2 = 4;
                _r314_t3 = 0;
                r314_toneEnd = _r314_t2;
                while (r314_toneEnd >= _r314_t3) {
                    r314_f.push('toneSandhiStart' + r314_toneMid + r314_toneEnd);
                    r314_e.push('toneSandhiMid' + r314_toneStart + r314_toneMid + r314_toneEnd);
                    r314_toneEnd = r314_toneEnd - 1;
                }
                r314_toneMid = r314_toneMid - 1;
            }
            return {
                'left': r314_f,
                'right': r314_e
            };
        };
        r289_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [
                r289_xn$chainrule$1aao(r289_ToneToToneStart(0), ['tone0']),
                r289_xn$chainrule$1aao(r289_ToneToToneStart(1), ['tone1']),
                r289_xn$chainrule$1aao(r289_ToneToToneStart(2), ['tone2']),
                r289_xn$chainrule$1aao(r289_ToneToToneStart(3), ['tone3']),
                r289_xn$chainrule$1aao(r289_ToneToToneStart(4), ['tone4'])
            ]
        }));
        r289_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(0), r289_ToneStartToToneMid(0)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(1), r289_ToneStartToToneMid(1)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(2), r289_ToneStartToToneMid(2)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(3), r289_ToneStartToToneMid(3)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(4), r289_ToneStartToToneMid(4))
            ]
        }));
        r289_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(0), r289_ToneToToneEnd(0)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(1), r289_ToneToToneEnd(1)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(2), r289_ToneToToneEnd(2)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(3), r289_ToneToToneEnd(3)),
                r289_xn$chainrule$1aao(r289_ToneStartOrMidAt(4), r289_ToneToToneEnd(4))
            ]
        }));
        r289_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [
                r289_xn$chainrule$1aao(r289_ToneSandhiToToneStart(0), ['toneSandhi0']),
                r289_xn$chainrule$1aao(r289_ToneSandhiToToneStart(1), ['toneSandhi1']),
                r289_xn$chainrule$1aao(r289_ToneSandhiToToneStart(2), ['toneSandhi2']),
                r289_xn$chainrule$1aao(r289_ToneSandhiToToneStart(3), ['toneSandhi3']),
                r289_xn$chainrule$1aao(r289_ToneSandhiToToneStart(4), ['toneSandhi4'])
            ]
        }));
        r289_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(0), r289_ToneSandhiStartToToneMid(0)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(1), r289_ToneSandhiStartToToneMid(1)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(2), r289_ToneSandhiStartToToneMid(2)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(3), r289_ToneSandhiStartToToneMid(3)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(4), r289_ToneSandhiStartToToneMid(4))
            ]
        }));
        return r289_xn$exportlookup$7Hrq(r1_AddLookup(r272_sink, {
            'type': 'gsub_chaining',
            'rules': [
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(0), r289_ToneSandhiToToneEnd(0)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(1), r289_ToneSandhiToToneEnd(1)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(2), r289_ToneSandhiToToneEnd(2)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(3), r289_ToneSandhiToToneEnd(3)),
                r289_xn$chainrule$1aao(r289_ToneSandhiStartOrMidAt(4), r289_ToneSandhiToToneEnd(4))
            ]
        }));
    });
    return r272_ccmp;
};
_s0_t4 = r1_buildCCMPPostCvSs = function (r319_sink, r319_ccmpFeature, r319_glyphStore, r319_markGlyphs) {
    var r319_gid, r319_g, _r319_t3, _r319_t4, _r319_t5;
    var r319_anyMark = Array.from(r319_markGlyphs.all);
    var r319_rec = r1_BeginLookupBlock(r319_sink);
    var r319_ccmp = r1_AddFeature(r319_sink, 'ccmp');
    var _r319_t0 = r1_ChainRuleBuilder(r319_sink);
    var r319_xn$chainrule$1aao = _r319_t0[0];
    var r319_triggerGlyphs_Normal = [];
    var r319_triggerGlyphs_Y = [];
    var _r319_t1 = r319_glyphStore.namedEntries()[Symbol.iterator]();
    var _r319_t2 = void 0;
    while (!(_r319_t2 = _r319_t1.next()).done) {
        _r319_t3 = _r319_t2.value;
        r319_gid = _r319_t3[0];
        r319_g = _r319_t3[1];
        if (r319_gid[0] !== '.')
            if (r319_g.baseAnchors.trailing)
                if (r1_OgonekTrY.get(r319_g))
                    r319_triggerGlyphs_Y.push(r319_gid);
                else if (true)
                    r319_triggerGlyphs_Normal.push(r319_gid);
                else
                    void 0;
    }
    var r319_markTransform_Normal = function () {
        var _r321_t0, _r321_t1;
        return r1_UkMapToLookup(r1_UnicodeKnowledge.ogonekBelowToTRTf);
    };
    var r319_markTransform_Y = function () {
        var _r322_t0, _r322_t1;
        return r1_UkMapToLookup(r1_UnicodeKnowledge.ogonekBelowToTRTf_Y);
    };
    var r319_lookupMarks1 = r1_AddLookup(r319_sink, {
        'type': 'gsub_chaining',
        'ignoreGlyphs': r1_filterMarkByClassNegated(r319_markGlyphs, 'below'),
        'rules': [
            r319_xn$chainrule$1aao(r319_triggerGlyphs_Normal, r319_markTransform_Normal()),
            r319_xn$chainrule$1aao(r319_triggerGlyphs_Y, r319_markTransform_Y())
        ]
    });
    r319_ccmpFeature.lookups.push(r319_lookupMarks1);
    return r1_EndLookupBlock(r319_rec, r319_sink);
};
var r1_objectIsNotEmpty = function (r323_obj) {
    var _r323_t0, _r323_t1;
    return r323_obj && Object.keys(r323_obj).length;
};
var r1_filterMarkByClass = function (r324_markGlyphs, r324_c) {
    var r324_gn, r324_m, _r324_t2, _r324_t3, _r324_t4;
    var r324_marks = [];
    var _r324_t0 = r324_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r324_t1 = void 0;
    while (!(_r324_t1 = _r324_t0.next()).done) {
        _r324_t2 = _r324_t1.value;
        r324_gn = _r324_t2[0];
        r324_m = _r324_t2[1];
        if (r324_m === r324_c)
            r324_marks.push(r324_gn);
    }
    return r324_marks;
};
var r1_filterMarkByClassNegated = function (r326_markGlyphs, r326_c) {
    var r326_gn, r326_m, _r326_t2, _r326_t3, _r326_t4;
    var r326_marks = [];
    var _r326_t0 = r326_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r326_t1 = void 0;
    while (!(_r326_t1 = _r326_t0.next()).done) {
        _r326_t2 = _r326_t1.value;
        r326_gn = _r326_t2[0];
        r326_m = _r326_t2[1];
        if (r326_m !== r326_c)
            r326_marks.push(r326_gn);
    }
    return r326_marks;
};
