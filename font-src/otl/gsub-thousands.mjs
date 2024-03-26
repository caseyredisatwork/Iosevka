'use strict';
import * as _s0_t0 from './table-util.mjs';
var _s0_t1;
export {
    _s0_t1 as buildGsubThousands
};
var r1_buildGsubThousands, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_AddCommonFeature = _r1_t8.AddCommonFeature;
var r1_AddFeature = _r1_t8.AddFeature;
var r1_AddLookup = _r1_t8.AddLookup;
var r1_ChainRuleBuilder = _r1_t8.ChainRuleBuilder;
var r1_QueryRelatedGlyphs = _r1_t8.QueryRelatedGlyphs;
var r1_BeginLookupBlock = _r1_t8.BeginLookupBlock;
var r1_EndLookupBlock = _r1_t8.EndLookupBlock;
_s0_t1 = r1_buildGsubThousands = function (r264_sink, r264_para) {
    var _r264_t1, _r264_t2;
    var r264_rec = r1_BeginLookupBlock(r264_sink);
    var r264_Thousand = r1_AddFeature(r264_sink, 'THND');
    var _r264_t0 = r1_ChainRuleBuilder(r264_sink);
    var r264_xn$chainrule$1aao = _r264_t0[0];
    var r264_xn$reverserule$3qIs = _r264_t0[1];
    var r264_numberGlyphIDs = [
        'zero.lnum',
        'one.lnum',
        'two.lnum',
        'three.lnum',
        'four.lnum',
        'five.lnum',
        'six.lnum',
        'seven.lnum',
        'eight.lnum',
        'nine.lnum'
    ];
    var r264_nd = function (r265_s) {
        var _r265_t0, _r265_t1;
        return r264_numberGlyphIDs.map(function (r266_x) {
            var _r266_t0, _r266_t1;
            return '' + r266_x + '.nd' + r265_s;
        });
    };
    var r264_lookupThousand1 = r1_AddLookup(r264_sink, {
        'type': 'gsub_chaining',
        'rules': [
            r264_xn$chainrule$1aao({
                'left': ['period'],
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(2)
            }, {
                'left': r264_numberGlyphIDs,
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': null
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(2),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(1)
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(1),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(6)
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(6),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(5)
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(5),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(4)
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(4),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(3)
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(3),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(2)
            })
        ]
    });
    var r264_lookupThousand2 = r1_AddLookup(r264_sink, {
        'type': 'gsub_chaining',
        'rules': [
            r264_xn$chainrule$1aao({
                'left': r264_numberGlyphIDs,
                'right': r264_nd(0)
            }, {
                'left': r264_numberGlyphIDs,
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': null
            }),
            r264_xn$chainrule$1aao({
                'left': r264_nd(0),
                'right': null
            }, {
                'left': r264_numberGlyphIDs,
                'right': r264_nd(0)
            })
        ]
    });
    var r264_lookupThousand3 = r1_AddLookup(r264_sink, {
        'type': 'gsub_reverse',
        'rules': [
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(1)
            }, {
                'left': r264_nd(0),
                'right': null
            }),
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(2)
            }, {
                'left': r264_nd(1),
                'right': null
            }),
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(3)
            }, {
                'left': r264_nd(2),
                'right': null
            }),
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(4)
            }, {
                'left': r264_nd(3),
                'right': null
            }),
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(5)
            }, {
                'left': r264_nd(4),
                'right': null
            }),
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(6)
            }, {
                'left': r264_nd(5),
                'right': null
            }),
            r264_xn$reverserule$3qIs({
                'left': r264_nd(0),
                'right': r264_nd(1)
            }, {
                'left': r264_nd(6),
                'right': null
            })
        ]
    });
    r264_Thousand.lookups.push(r264_lookupThousand1, r264_lookupThousand2, r264_lookupThousand3);
    r1_AddCommonFeature(r264_sink, r264_Thousand);
    return r1_EndLookupBlock(r264_rec, r264_sink);
};
