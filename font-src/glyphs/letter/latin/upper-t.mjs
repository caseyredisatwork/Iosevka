'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-T', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_div, r271_doST, r271_doSB, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_OX = _r271_t1.OX;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJut = _r271_t1.VJut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_MidJutCenter = _r271_t1.MidJutCenter;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t6.BBS;
        var r271_BBD = _r271_t6.BBD;
        r271_xn$Capture$2Lrc8['Letter-Latin-Lower-M'].resolve();
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t7.LetterBarOverlay;
        var r271_UpwardHookShape = _r271_t7.UpwardHookShape;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t8.CyrDescender;
        var r271_SerifFrame = _r271_t8.SerifFrame;
        var r271_FlatHookDepth = _r271_t8.FlatHookDepth;
        var r271_LeftHook = _r271_t8.LeftHook;
        var r271_RetroflexHook = _r271_t8.RetroflexHook;
        var r271_TLeftX = function (r278_df) {
            var _r278_t0, _r278_t1;
            return r278_df.leftSB + 0.75 * r271_OX;
        };
        var r271_TRightX = function (r279_df) {
            var _r279_t0, _r279_t1;
            return r279_df.rightSB - 0.75 * r271_OX;
        };
        var r271_TShape = function (r280_df, r280_top, r280_doTopSerifs, r280_doBottomSerifs) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r271_VBar.m(r280_df.middle, 0, r280_top));
                var r282_l = r271_TLeftX(r280_df);
                var r282_r = r271_TRightX(r280_df);
                r282_currentGlyph.include(r271_tagged('strokeLT', r271_HBar.t(r282_l, r280_df.middle, r280_top)));
                r282_currentGlyph.include(r271_tagged('strokeRT', r271_HBar.t(r280_df.middle, r282_r, r280_top)));
                if (r280_doTopSerifs) {
                    r282_currentGlyph.include(r271_tagged('serifRT', r271_VSerif.dr(r282_r, r280_top, r271_VJut)));
                    r282_currentGlyph.include(r271_tagged('serifLT', r271_VSerif.dl(r282_l, r280_top, r271_VJut)));
                }
                if (r280_doBottomSerifs) {
                    r282_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.rb(r280_df.middle, 0, r271_MidJutCenter)));
                    r282_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.lb(r280_df.middle, 0, r271_MidJutCenter)));
                }
                return void 0;
            };
        };
        var r271_TjeShape = function (r290_df, r290_top, r290_doTopSerifs) {
            var _r290_t0, _r290_t1;
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                var r292_left = r1_mix(r290_df.leftSB, r290_df.rightSB, 0.3) + r271_OX;
                var r292_mid = r292_left + r271_HVContrast / 2 * r290_df.mvs;
                var r292_xTopBarLeft = r290_df.leftSB - r271_SideJut;
                var r292_xTopBarRightSym = 2 * r292_left + r271_HVContrast * r290_df.mvs - r292_xTopBarLeft;
                var r292_xTopBarRight = Math.max(r292_xTopBarRightSym, r1_mix(r292_left, r290_df.rightSB, 0.475));
                r292_currentGlyph.include(r271_tagged('strokeLT', r271_HBar.t(r292_xTopBarLeft, r292_mid, r290_top)));
                r292_currentGlyph.include(r271_tagged('strokeRT', r271_HBar.t(r292_mid, r292_xTopBarRight, r290_top)));
                r292_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r292_left), new r271_xn$NamedParameterPair$2Lrc9b('right', r290_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r290_top), new r271_xn$NamedParameterPair$2Lrc9b('yend', r290_top / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA * 0.6 * r290_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB * 0.6 * r290_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r290_df.mvs)));
                if (r290_doTopSerifs) {
                    r292_currentGlyph.include(r271_tagged('serifRT', r271_VSerif.dr(r292_xTopBarRight, r290_top, r271_VJut)));
                    r292_currentGlyph.include(r271_tagged('serifLT', r271_VSerif.dl(r292_xTopBarLeft, r290_top, r271_VJut)));
                }
                var r292_sf2 = r271_SerifFrame.fromDf(r290_df, r290_top / 2, 0).slice(1, 2);
                if (r271_SLAB)
                    r292_currentGlyph.include(r292_sf2.rt.full);
                return void 0;
            };
        };
        var r271_TauShape = function (r306_df, r306_top, r306_doTopSerifs) {
            var _r306_t0, _r306_t1;
            return function () {
                var _r308_t1;
                var _r308_t0 = this;
                var r308_currentGlyph = _r308_t0;
                var r308_hd = r271_FlatHookDepth(r306_df);
                r308_currentGlyph.include(r271_difference(r271_TShape(r306_df, r306_top, r306_doTopSerifs, false), r271_MaskBelow(r308_hd.y)));
                r308_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_straight.down.start(r306_df.middle, r308_hd.y, r271_heading(r271_Downward)), r271_arcvh.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r306_df.middle + r308_hd.x - r271_HalfStroke * r271_HVContrast, r271_HalfStroke), r271_curl(r306_df.middle + Math.max(r308_hd.x - r271_HalfStroke * r271_HVContrast + 1, r271_LongJut * 1.05) + r271_HalfStroke * r271_TanSlope, r271_HalfStroke)));
                return void 0;
            };
        };
        var r271_TConfig = {
            'serifless': [
                1,
                false,
                false
            ],
            'motionSerifed': [
                r1_mix(1, r271_para.diversityM, 0.5),
                true,
                false
            ],
            'serifed': [
                r1_mix(1, r271_para.diversityM, 0.5),
                true,
                true
            ]
        };
        var _r271_t9 = Object.entries(r271_TConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_div = _r271_t11[1][0];
            r271_doST = _r271_t11[1][1];
            r271_doSB = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                var r313_df = r271_DivFrame(r271_div);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('T.' + r271_suffix, null, function () {
                    var _r316_t1;
                    var _r316_t0 = this;
                    var r316_currentGlyph = _r316_t0;
                    r316_currentGlyph.setWidth(r313_df.width);
                    r316_currentGlyph.include(r313_df.markSet.capital());
                    r316_currentGlyph.setBaseAnchor('bottomRight', r313_df.middle + r271_HalfStroke * r271_HVContrast, 0);
                    r316_currentGlyph.include(r271_TShape(r313_df, r271_CAP, r271_doST, r271_doSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/TeDescender.' + r271_suffix, null, function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    r323_currentGlyph.setWidth(r313_df.width);
                    r323_currentGlyph.include(r313_df.markSet.capital());
                    r323_currentGlyph.setBaseAnchor('bottomRight', r313_df.middle + r271_HalfStroke * r271_HVContrast, 0);
                    r323_currentGlyph.include(r271_TShape(r313_df, r271_CAP, r271_doST, r271_doSB));
                    r323_currentGlyph.include(r271_CyrDescender.rSideJut(new r271_xn$NamedParameterPair$2Lrc9b('x', r313_df.middle + r271_HalfStroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('jut', r271_doSB ? r271_MidJutCenter : r271_Jut)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('TBar.' + r271_suffix, null, function () {
                    var _r334_t1;
                    var _r334_t0 = this;
                    var r334_currentGlyph = _r334_t0;
                    r334_currentGlyph.include(r271_xn$referglyph$1aao('T.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r334_currentGlyph.include(r271_LetterBarOverlay.m.in(r313_df.middle, 0, r271_CAP, 0.45));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('Thookleft.' + r271_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    r339_currentGlyph.include(r271_xn$referglyph$1aao('T.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r339_currentGlyph.ejectTagged('serifLT');
                    r339_currentGlyph.ejectTagged('strokeLT');
                    r339_currentGlyph.include(r271_LeftHook(r313_df.leftSB + r271_LeftHook.extension, r271_CAP, r313_df.middle));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpT.' + r271_suffix, null, function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.setWidth(r313_df.width);
                    r346_currentGlyph.include(r313_df.markSet.e());
                    r346_currentGlyph.setBaseAnchor('bottomRight', r313_df.middle + r271_HalfStroke * r271_HVContrast, 0);
                    r346_currentGlyph.include(r271_TShape(r313_df, r271_XH, r271_doST, r271_doSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Twe.' + r271_suffix, null, function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    r353_currentGlyph.setWidth(r313_df.width);
                    r353_currentGlyph.include(r313_df.markSet.capital());
                    r353_currentGlyph.include(r271_TauShape(r313_df, r271_CAP, r271_doST, r271_doSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/twe.' + r271_suffix, null, function () {
                    var _r359_t1;
                    var _r359_t0 = this;
                    var r359_currentGlyph = _r359_t0;
                    r359_currentGlyph.setWidth(r313_df.width);
                    r359_currentGlyph.include(r313_df.markSet.e());
                    r359_currentGlyph.include(r271_TauShape(r313_df, r271_XH, r271_doST, r271_doSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/tengeSign.' + r271_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    r365_currentGlyph.setWidth(r313_df.width);
                    r365_currentGlyph.include(r313_df.markSet.capital());
                    var r365_gap = Math.max(r271_CAP * 0.1, r271_AdviceStroke2(2, 6, r271_CAP));
                    r365_currentGlyph.include(r271_HBar.t(r271_TLeftX(r313_df), r271_TRightX(r313_df), r271_CAP, r271_OverlayStroke));
                    r365_currentGlyph.include(r271_TShape(r313_df, r271_CAP - r365_gap - r271_OverlayStroke, r271_doST, r271_doSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/teDescender.upright.' + r271_suffix, null, function () {
                    var _r372_t1;
                    var _r372_t0 = this;
                    var r372_currentGlyph = _r372_t0;
                    r372_currentGlyph.setWidth(r313_df.width);
                    r372_currentGlyph.include(r313_df.markSet.e());
                    r372_currentGlyph.include(r271_TShape(r313_df, r271_XH, r271_doST, r271_doSB));
                    r372_currentGlyph.include(r271_CyrDescender.rSideJut(new r271_xn$NamedParameterPair$2Lrc9b('x', r313_df.middle + r271_HalfStroke * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('jut', r271_doSB ? r271_MidJutCenter : r271_Jut)));
                    return void 0;
                });
                r271_turned('turnT.' + r271_suffix, void 0, 'T.' + r271_suffix, r313_df.middle, r271_CAP / 2);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('TRTailBR.' + r271_suffix, null, function () {
                    var _r382_t1;
                    var _r382_t0 = this;
                    var r382_currentGlyph = _r382_t0;
                    r382_currentGlyph.include(r271_xn$referglyph$1aao('T.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r382_currentGlyph.include(r271_MarkSet.capital());
                    r382_currentGlyph.include(r271_RetroflexHook.mExt(r313_df.middle, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/TjeKomi.' + r271_suffix, null, function () {
                    var _r388_t1;
                    var _r388_t0 = this;
                    var r388_currentGlyph = _r388_t0;
                    var r388_df = r271_DivFrame(r271_div, 3);
                    r388_currentGlyph.setWidth(r388_df.width);
                    r388_currentGlyph.include(r388_df.markSet.capital());
                    r388_currentGlyph.include(r271_TjeShape(r388_df, r271_CAP, r271_doST));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tjeKomi.' + r271_suffix, null, function () {
                    var _r394_t1;
                    var _r394_t0 = this;
                    var r394_currentGlyph = _r394_t0;
                    var r394_df = r271_DivFrame(r271_div, 3);
                    r394_currentGlyph.setWidth(r394_df.width);
                    r394_currentGlyph.include(r394_df.markSet.e());
                    r394_currentGlyph.include(r271_TjeShape(r394_df, r271_XH, r271_doST));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('T', 'T');
        r271_xn$linkreducedvariant$5sIl8('T/sansSerif', 'T', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpT', 7451, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_xn$selectvariant$7Hrq('TBar', 358, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_xn$selectvariant$7Hrq('Thookleft', 428, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_xn$selectvariant$7Hrq('cyrl/TeDescender', 1196, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_xn$selectvariant$7Hrq('turnT', 42929, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_alias('grek/Tau', 932, 'T');
        r271_alias('grek/tau', 964, 'cyrl/twe.serifless');
        r271_xn$aliasreducedvariant$1aao8('grek/Tau/sansSerif', 'grek/Tau', 'T/sansSerif', r1_MathSansSerif);
        r271_alias('cyrl/Te', 1058, 'T');
        r271_alias('cyrl/te.upright', null, 'smcpT');
        r271_xn$selectvariant$7Hrq('cyrl/teDescender.upright', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_xn$selectvariant$7Hrq('TRTailBR', 430, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T/rtailBase'));
        r271_xn$selectvariant$7Hrq('cyrl/TjeKomi', 1294, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T/rtailBase'));
        r271_xn$selectvariant$7Hrq('cyrl/tjeKomi', 1295, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T/rtailBase'));
        r271_xn$selectvariant$7Hrq('cyrl/Twe', 42636, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T/rtailBase'));
        r271_xn$selectvariant$7Hrq('cyrl/twe', 42637, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T/rtailBase'));
        r271_xn$selectvariant$7Hrq('currency/tengeSign', 8376, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/T', 120139, function () {
            var _r412_t1;
            var _r412_t0 = this;
            var r412_currentGlyph = _r412_t0;
            var r412_df = r271_DivFrame(1);
            r412_currentGlyph.include(r412_df.markSet.capital());
            r412_currentGlyph.include(r271_HBar.t(r271_TLeftX(r412_df), r271_TRightX(r412_df), r271_CAP, r271_BBS));
            r412_currentGlyph.include(r271_VBar.m(r412_df.middle - r271_BBD / 2, 0, r271_CAP, r271_BBS));
            r412_currentGlyph.include(r271_VBar.m(r412_df.middle + r271_BBD / 2, 0, r271_CAP, r271_BBS));
            r412_currentGlyph.include(r271_HBar.b(r412_df.middle - r271_BBD / 2, r412_df.middle + r271_BBD / 2, 0, r271_BBS));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('capitalSmcpI', 42926, function () {
            var _r420_t1;
            var _r420_t0 = this;
            var r420_currentGlyph = _r420_t0;
            var r420_df = r271_DivFrame(1);
            r420_currentGlyph.setWidth(r420_df.width);
            r420_currentGlyph.include(r420_df.markSet.capital());
            var r420_l = r271_TLeftX(r420_df);
            var r420_r = r271_TRightX(r420_df);
            r420_currentGlyph.include(r271_VBar.m(r420_df.middle, 0, r271_CAP));
            r420_currentGlyph.include(r271_HBar.t(r420_l, r420_r, r271_CAP));
            r420_currentGlyph.include(r271_HBar.b(r420_l, r420_r, 0));
            if (r271_SLAB) {
                r420_currentGlyph.include(r271_tagged('serifRT', r271_VSerif.dr(r420_r, r271_CAP, r271_VJut)));
                r420_currentGlyph.include(r271_tagged('serifLT', r271_VSerif.dl(r420_l, r271_CAP, r271_VJut)));
                r420_currentGlyph.include(r271_tagged('serifRB', r271_VSerif.ur(r420_r, 0, r271_VJut)));
                r420_currentGlyph.include(r271_tagged('serifLB', r271_VSerif.ul(r420_l, 0, r271_VJut)));
            }
            return void 0;
        });
    });
    return void 0;
});
