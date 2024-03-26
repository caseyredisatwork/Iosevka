'use strict';
var _s0_t0;
export {
    _s0_t0 as iotaBelowToLfTf
};
var _s0_t1;
export {
    _s0_t1 as ogonekBelowToTRTf
};
var _s0_t2;
export {
    _s0_t2 as ogonekBelowToTRTf_Y
};
var _s0_t3;
export {
    _s0_t3 as upperGrekMarkToTonosTf
};
var _s0_t4;
export {
    _s0_t4 as markCompositionTf
};
var _s0_t5;
export {
    _s0_t5 as decompOverrides
};
var r1_iotaBelowToLfTf, r1_ogonekBelowToTRTf, r1_ogonekBelowToTRTf_Y, r1_upperGrekMarkToTonosTf, r1_markCompositionTf, r1_decompOverrides, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
_s0_t0 = r1_iotaBelowToLfTf = { 'iotaBelow': 'iotaLF' };
_s0_t1 = r1_ogonekBelowToTRTf = { 'ogonekBelow': 'ogonekTR' };
_s0_t2 = r1_ogonekBelowToTRTf_Y = { 'ogonekBelow': 'ogonekTR_Y' };
_s0_t3 = r1_upperGrekMarkToTonosTf = {
    'tonosAbove': 'tonosGrekUpperTonos',
    'variaAbove': 'variaGrekUpperTonos',
    'oxiaAbove': 'oxiaGrekUpperTonos',
    'graveAbove': 'variaGrekUpperTonos',
    'acuteAbove': 'oxiaGrekUpperTonos',
    'graveToneAbove': 'variaGrekUpperTonos',
    'acuteToneAbove': 'oxiaGrekUpperTonos',
    'commaAbove': 'commaGrekUpperTonos',
    'revCommaAbove': 'revCommaGrekUpperTonos',
    'psiliVaria': 'psiliVariaGrekUpperTonos',
    'psiliOxia': 'psiliOxiaGrekUpperTonos',
    'dasiaVaria': 'dasiaVariaGrekUpperTonos',
    'dasiaOxia': 'dasiaOxiaGrekUpperTonos',
    'psiliPerispomeni': 'psiliPerispomeniGrekUpperTonos',
    'dasiaPerispomeni': 'dasiaPerispomeniGrekUpperTonos'
};
_s0_t4 = r1_markCompositionTf = {
    'commaAbove': {
        'graveAbove': 'psiliVaria',
        'acuteAbove': 'psiliOxia',
        'perispomeniAbove': 'psiliPerispomeni',
        'cyrlPokrytieAbove': 'commaCyrlPorkytieAbove'
    },
    'revCommaAbove': {
        'graveAbove': 'dasiaVaria',
        'acuteAbove': 'dasiaOxia',
        'perispomeniAbove': 'dasiaPerispomeni'
    },
    'cyrlPsiliAbove': { 'cyrlPokrytieAbove': 'cyrlPsiliPokrytieAbove' }
};
_s0_t5 = r1_decompOverrides = {
    290: [
        'G',
        'commaBelow'
    ],
    291: [
        'g',
        'turnCommaAbove'
    ],
    310: [
        'K',
        'commaBelow'
    ],
    311: [
        'k',
        'commaBelow'
    ],
    315: [
        'L',
        'commaBelow'
    ],
    316: [
        'l',
        'commaBelow'
    ],
    325: [
        'N',
        'commaBelow'
    ],
    326: [
        'n',
        'commaBelow'
    ],
    342: [
        'R',
        'commaBelow'
    ],
    343: [
        'r',
        'commaBelow'
    ],
    7696: [
        'D',
        'commaBelow'
    ],
    7697: [
        'd',
        'commaBelow'
    ],
    168: [
        'markBaseSpace',
        'dieresisAbove'
    ],
    175: [
        'markBaseSpace',
        'macronAbove'
    ],
    184: [
        'markBaseSpace',
        'cedillaBelow'
    ],
    706: [
        'markBaseSpace',
        'lessAbove'
    ],
    707: [
        'markBaseSpace',
        'greaterAbove'
    ],
    708: [
        'markBaseSpace',
        'upArrowHeadAbove'
    ],
    709: [
        'markBaseSpace',
        'downArrowHeadAbove'
    ],
    710: [
        'markBaseSpace',
        'circumflexAbove'
    ],
    711: [
        'markBaseSpace',
        'caronAbove'
    ],
    713: [
        'markBaseSpace',
        'macronAbove'
    ],
    714: [
        'markBaseSpace',
        'acuteAbove'
    ],
    715: [
        'markBaseSpace',
        'graveAbove'
    ],
    717: [
        'markBaseSpace',
        'macronBelow'
    ],
    718: [
        'markBaseSpace',
        'graveBelow'
    ],
    719: [
        'markBaseSpace',
        'acuteBelow'
    ],
    722: [
        'markBaseSpace',
        'rightHalfCircleOver'
    ],
    723: [
        'markBaseSpace',
        'leftHalfCircleOver'
    ],
    724: [
        'markBaseSpace',
        'upTackOver'
    ],
    725: [
        'markBaseSpace',
        'downTackOver'
    ],
    726: [
        'markBaseSpace',
        'plusOver'
    ],
    727: [
        'markBaseSpace',
        'minusOver'
    ],
    728: [
        'markBaseSpace',
        'breveAbove'
    ],
    729: [
        'markBaseSpace',
        'dotAbove'
    ],
    730: [
        'markBaseSpace',
        'ringAbove'
    ],
    731: [
        'markBaseSpace',
        'ogonekBelow'
    ],
    732: [
        'markBaseSpace',
        'tildeAbove'
    ],
    733: [
        'markBaseSpace',
        'doubleAcuteAbove'
    ],
    735: [
        'markBaseSpace',
        'crossAbove'
    ],
    748: [
        'markBaseSpace',
        'caronBelow'
    ],
    749: [
        'markBaseSpace',
        'dblOverlineAbove'
    ],
    751: [
        'markBaseSpace',
        'downArrowHeadBelow'
    ],
    752: [
        'markBaseSpace',
        'upArrowHeadBelow'
    ],
    753: [
        'markBaseSpace',
        'lessBelow'
    ],
    754: [
        'markBaseSpace',
        'greaterBelow'
    ],
    755: [
        'markBaseSpace',
        'ringBelow'
    ],
    759: [
        'markBaseSpace',
        'tildeBelow'
    ],
    767: [
        'markBaseSpace',
        'leftArrowBelow'
    ],
    890: [
        'markBaseSpace',
        'iotaBelow'
    ],
    900: [
        'markBaseSpace',
        'tonosAbove'
    ],
    901: [
        'markBaseSpace',
        'dialytikaTonosAbove'
    ],
    8125: [
        'markBaseSpace',
        'commaAbove'
    ],
    8126: [
        'markBaseSpace',
        'iotaBelow'
    ],
    8127: [
        'markBaseSpace',
        'commaAbove'
    ],
    8128: [
        'markBaseSpace',
        'perispomeniAbove'
    ],
    8129: [
        'markBaseSpace',
        'dieresisAbove',
        'perispomeniAbove'
    ],
    8173: [
        'markBaseSpace',
        'dialytikaVariaAbove'
    ],
    8174: [
        'markBaseSpace',
        'dialytikaOxiaAbove'
    ],
    8175: [
        'markBaseSpace',
        'graveAbove'
    ],
    8189: [
        'markBaseSpace',
        'acuteAbove'
    ],
    8190: [
        'markBaseSpace',
        'revCommaAbove'
    ],
    11823: [
        'markBaseSpace',
        'yerikAbove'
    ],
    42888: [
        'markBaseSpace',
        'circumflexBelow'
    ],
    42890: [
        'markBaseSpace',
        'equalOver'
    ],
    43882: [
        'markBaseSpace',
        'leftTackOver'
    ],
    43883: [
        'markBaseSpace',
        'rightTackOver'
    ],
    359: [
        't',
        'barOver'
    ],
    407: [
        'I',
        'barOver'
    ],
    410: [
        'l',
        'barOver'
    ],
    443: [
        'two.lnum',
        'hStrike'
    ],
    570: [
        'A',
        'longSlash'
    ],
    571: [
        'C',
        'longSlash'
    ],
    572: [
        'c',
        'shortSlash'
    ],
    574: [
        'T',
        'longSlash'
    ],
    580: [
        'U',
        'hStrike'
    ],
    582: [
        'E',
        'longSlash'
    ],
    583: [
        'e',
        'shortSlash'
    ],
    584: [
        'J',
        'barOver'
    ],
    585: [
        'j',
        'barOver'
    ],
    589: [
        'r',
        'barOver'
    ],
    591: [
        'y',
        'hStrike'
    ],
    902: [
        'grek/Alpha',
        'tonosGrekUpperTonos'
    ],
    904: [
        'grek/Epsilon',
        'tonosGrekUpperTonos'
    ],
    905: [
        'grek/Eta',
        'tonosGrekUpperTonos'
    ],
    906: [
        'grek/Iota',
        'tonosGrekUpperTonos'
    ],
    908: [
        'grek/Omicron',
        'tonosGrekUpperTonos'
    ],
    910: [
        'grek/Upsilon',
        'tonosGrekUpperTonos'
    ],
    911: [
        'grek/Omega',
        'tonosGrekUpperTonos'
    ],
    912: [
        'grek/iota',
        'dialytikaTonosAbove'
    ],
    940: [
        'grek/alpha',
        'tonosAbove'
    ],
    941: [
        'grek/epsilon',
        'tonosAbove'
    ],
    942: [
        'grek/eta',
        'tonosAbove'
    ],
    943: [
        'grek/iota',
        'tonosAbove'
    ],
    944: [
        'grek/upsilon',
        'dialytikaTonosAbove'
    ],
    972: [
        'grek/omicron',
        'tonosAbove'
    ],
    973: [
        'grek/upsilon',
        'tonosAbove'
    ],
    974: [
        'grek/omega',
        'tonosAbove'
    ],
    1148: [
        'cyrl/BroadOmega',
        'cyrlPsiliAbove',
        'cyrlPokrytieAbove'
    ],
    1149: [
        'cyrl/broadOmega',
        'cyrlPsiliAbove',
        'cyrlPokrytieAbove'
    ],
    7534: [
        'f',
        'tildeOver'
    ],
    7535: [
        'm',
        'tildeStrikeDivM'
    ],
    7536: [
        'n',
        'tildeStrike'
    ],
    7540: [
        's',
        'tildeStrike'
    ],
    7541: [
        't',
        'tildeOver'
    ],
    7542: [
        'z/reduced',
        'tildeStrike2'
    ],
    7548: [
        'latn/iota',
        'barOver'
    ],
    7549: [
        'p',
        'hStrike'
    ],
    7551: [
        'latn/upsilon',
        'hStrike'
    ],
    7836: [
        'longs',
        'shortSlashOver'
    ],
    7898: [
        'OHorn',
        'acuteAbove'
    ],
    7899: [
        'oHorn',
        'acuteAbove'
    ],
    7900: [
        'OHorn',
        'graveAbove'
    ],
    7901: [
        'oHorn',
        'graveAbove'
    ],
    7902: [
        'OHorn',
        'hookAbove'
    ],
    7903: [
        'oHorn',
        'hookAbove'
    ],
    7904: [
        'OHorn',
        'tildeAbove'
    ],
    7905: [
        'oHorn',
        'tildeAbove'
    ],
    7906: [
        'OHorn',
        'dotBelow'
    ],
    7907: [
        'oHorn',
        'dotBelow'
    ],
    8146: [
        'grek/iota',
        'dialytikaVariaAbove'
    ],
    8147: [
        'grek/iota',
        'dialytikaOxiaAbove'
    ],
    8162: [
        'grek/upsilon',
        'dialytikaVariaAbove'
    ],
    8163: [
        'grek/upsilon',
        'dialytikaOxiaAbove'
    ],
    8365: [
        'K',
        'hStrike'
    ],
    11361: [
        'l',
        'dblBarOver'
    ],
    11365: [
        'a',
        'shortSlash'
    ],
    11366: [
        't',
        'longSlash'
    ],
    42826: [
        'O',
        'hStrike'
    ],
    42827: [
        'o',
        'hStrike'
    ],
    42905: [
        'f',
        'barOver'
    ],
    42936: [
        'U',
        'longSlash'
    ],
    42937: [
        'u',
        'shortSlash'
    ],
    42939: [
        'a',
        'EgyptologicalYodAbove'
    ],
    42941: [
        'i',
        'EgyptologicalYodAbove'
    ],
    42943: [
        'u',
        'EgyptologicalYodAbove'
    ],
    42953: [
        'S',
        'hStrike'
    ],
    42954: [
        's',
        'hStrike'
    ],
    42912: [
        'G',
        'oblStrike'
    ],
    42913: [
        'g',
        'oblStrike'
    ],
    42914: [
        'K',
        'oblStrike'
    ],
    42915: [
        'k',
        'oblStrike'
    ],
    42916: [
        'N',
        'oblStrike'
    ],
    42917: [
        'n',
        'oblStrike'
    ],
    42918: [
        'R',
        'oblStrike'
    ],
    42919: [
        'r',
        'oblStrike'
    ],
    42920: [
        'S',
        'oblStrike'
    ],
    42921: [
        's',
        'oblStrike'
    ],
    43824: [
        'scripta',
        'hStrike'
    ],
    43839: [
        'turnc',
        'shortSlash'
    ],
    122635: [
        'esh',
        'dblBarOver'
    ],
    122636: [
        'eshCurlyTail',
        'dblBarOver'
    ]
};
