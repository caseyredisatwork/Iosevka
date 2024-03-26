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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-J', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_base, r271_df, r271_dfHook, r271_serif, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OXHook = _r271_t1.OXHook;
        var r271_Hook = _r271_t1.Hook;
        var r271_JHook = _r271_t1.JHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_JBalance = _r271_t1.JBalance;
        var r271_JBalance2 = _r271_t1.JBalance2;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t6.CurlyTail;
        var r271_FlatHookDepth = _r271_t6.FlatHookDepth;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t7.BBS;
        var r271_BBD = _r271_t7.BBD;
        var _r271_t8 = r271_xn$Capture$2Lrc8['Letter-Latin-Lower-J'].resolve();
        var r271_FlatHookDotlessJShape = _r271_t8.FlatHookDotlessJShape;
        var r271_JFullHookBase = function (r277_df, r277_dfHook, r277_top) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                r279_currentGlyph.setWidth(r277_df.width);
                r279_currentGlyph.include(r277_df.markSet[r277_top > r271_XH ? 'capital' : 'e']());
                r279_currentGlyph.setBaseAnchor('above', r277_df.rightSB - r271_Stroke * r271_HVContrast * 0.75 - r271_JBalance2, r277_top);
                r279_currentGlyph.setBaseAnchor('overlay', r277_df.rightSB - r271_Stroke * r271_HVContrast * 0.75 - r271_JBalance2, r277_top * r271_OverlayPos);
                r279_currentGlyph.setBaseAnchor('jTopSerifAttach', r277_df.rightSB - r271_JBalance2 - r271_HalfStroke * r271_HVContrast, r277_top);
                var r279_sw = Math.min(0.4 * (r277_df.rightSB - r271_JBalance2 - r277_df.leftSB), r271_Stroke);
                var r279_hookx = 0.75 * r277_df.leftSB;
                r279_currentGlyph.include(r271_dispiro(r271_widths.rhs(r279_sw), r271_flat(r277_df.rightSB - r271_JBalance2, r277_top, r271_heading(r271_Downward)), r271_curl(r277_df.rightSB - r271_JBalance2, r271_ArchDepthB), r271_hookend(r271_O), r271_g4(r279_hookx, r271_Hook)));
                return void 0;
            };
        };
        var r271_JFlatHookBase = function (r286_df, r286_dfHook, r286_top) {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                r288_currentGlyph.setWidth(r286_df.width);
                r288_currentGlyph.include(r286_df.markSet[r286_top > r271_XH ? 'capital' : 'e']());
                r288_currentGlyph.setBaseAnchor('above', r286_df.rightSB - r271_Stroke * r271_HVContrast * 0.75 - r271_JBalance2, r286_top);
                r288_currentGlyph.setBaseAnchor('overlay', r286_df.rightSB - r271_Stroke * r271_HVContrast * 0.75 - r271_JBalance2, r286_top * r271_OverlayPos);
                r288_currentGlyph.setBaseAnchor('jTopSerifAttach', r286_df.rightSB - r271_JBalance2 - r271_HalfStroke * r271_HVContrast, r286_top);
                var r288_sw = Math.min(0.4 * (r286_df.rightSB - r271_JBalance2 - r286_df.leftSB), r271_Stroke);
                var r288_hookx = 0.75 * r286_df.leftSB;
                var r288_hd = r271_FlatHookDepth(r286_dfHook);
                r288_currentGlyph.include(r271_dispiro(r271_flat(r286_df.rightSB - r271_JBalance2, r286_top, r271_widths.rhs.heading(r288_sw, r271_Downward)), r271_curl(r286_df.rightSB - r271_JBalance2, r271_HalfStroke + 1.375 * r288_hd.y), r271_arcvh.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r286_df.rightSB - r271_JBalance2 - Math.min(0.625 * (r286_df.rightSB - r286_df.leftSB), 1.375 * r288_hd.x), 0, r271_widths.rhs(r271_Stroke)), r271_curl(r286_df.leftSB, 0)));
                return void 0;
            };
        };
        var r271_JDescendingBase = function (r295_df, r295_dfHook, r295_top) {
            var _r295_t0, _r295_t1;
            return function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                r297_currentGlyph.setWidth(r295_df.width);
                r297_currentGlyph.include(r295_df.markSet[r295_top > r271_XH ? 'bp' : 'p']());
                var r297_center = r295_df.middle + r271_JBalance + r271_HalfStroke * r271_HVContrast;
                r297_currentGlyph.setBaseAnchor('above', r297_center - r271_HVContrast * r271_HalfStroke, r295_top);
                r297_currentGlyph.setBaseAnchor('overlay', r297_center - r271_HVContrast * r271_HalfStroke, r295_top / 2);
                r297_currentGlyph.setBaseAnchor('jTopSerifAttach', r297_center - r271_HalfStroke * r271_HVContrast, r295_top);
                var r297_hookx = r297_center - r295_df.width * 0.5 - r271_Stroke * r271_HVContrast + r271_OXHook;
                var r297_turn = r1_mix(r297_center, r297_hookx, 0.5) + r271_CorrectionOMidS;
                r297_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r297_center, r295_top, r271_heading(r271_Downward)), r271_curl(r297_center, r271_Descender + r271_ArchDepthA), r271_hookend(r271_Descender + r271_O), r271_g4(r297_hookx, r271_Descender + r271_JHook)));
                return void 0;
            };
        };
        r271_JFullHookBase.WithCurlyTail = function (r304_df, r304_top) {
            var _r304_t0, _r304_t1;
            return r271_JCurlyTailBaseT(r304_df, r304_df.rightSB - r271_HalfStroke * r271_HVContrast - r271_JBalance2, r304_df.leftSB, r304_top, 0, 'capital');
        };
        r271_JDescendingBase.WithCurlyTail = function (r305_df, r305_top) {
            var _r305_t0, _r305_t1;
            return r271_JCurlyTailBaseT(r305_df, r305_df.middle + r271_JBalance, r305_df.middle + r271_JBalance - r271_LongJut - r271_HalfStroke * r271_HVContrast, r305_top, r271_Descender, 'bp');
        };
        var r271_JCurlyTailBaseT = function (r306_df, r306_xc, r306_xCo, r306_top, r306_bottom, r306_markClass) {
            var _r306_t0, _r306_t1;
            return function () {
                var _r308_t1;
                var _r308_t0 = this;
                var r308_currentGlyph = _r308_t0;
                r308_currentGlyph.setWidth(r306_df.width);
                r308_currentGlyph.include(r306_df.markSet[r306_markClass]());
                r308_currentGlyph.setBaseAnchor('above', r306_xc, r306_top);
                r308_currentGlyph.setBaseAnchor('overlay', r306_xc, r306_top / 2);
                r308_currentGlyph.setBaseAnchor('jTopSerifAttach', r306_xc, r306_top);
                var r308_m1 = r306_xc - r271_HalfStroke * r271_HVContrast;
                var r308_fine = r271_AdviceStroke(3.5);
                var r308_rinner = r271_LongJut / 2 - r308_fine / 2;
                var r308_x2 = r1_mix(r306_df.rightSB, r308_m1, 0.25);
                var r308_y2 = r306_bottom + r271_O;
                r308_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r308_m1, r306_top, r271_heading(r271_Downward)), r271_curl(r308_m1, r306_bottom + r308_fine + r308_rinner * 2), r271_CurlyTail(r308_fine, r308_rinner, r308_m1, r306_bottom, r306_xCo, r308_x2, r308_y2)));
                return void 0;
            };
        };
        var r271_JDescendingFlatHookBase = function (r315_df, r315_dfHook, r315_top) {
            var _r315_t0, _r315_t1;
            return function () {
                var _r317_t1;
                var _r317_t0 = this;
                var r317_currentGlyph = _r317_t0;
                r317_currentGlyph.setWidth(r315_df.width);
                r317_currentGlyph.include(r315_df.markSet[r315_top > r271_XH ? 'bp' : 'p']());
                r317_currentGlyph.include(r271_FlatHookDotlessJShape(r315_df, r315_dfHook, r315_top, new r271_xn$NamedParameterPair$2Lrc9b('crossLeft', r315_df.middle - (r315_dfHook.middle - r1_mix(0, r315_dfHook.leftSB, r1_mix(1, r315_dfHook.div, 2)))), new r271_xn$NamedParameterPair$2Lrc9b('barCenter', r315_df.middle + 0.25 * r271_JBalance * r315_df.div * r1_mix(1, r315_df.div, 2)), new r271_xn$NamedParameterPair$2Lrc9b('serif', false)));
                return void 0;
            };
        };
        var r271_JDescendingFlatHookSerifedBase = function (r324_df, r324_dfHook, r324_top) {
            var _r324_t0, _r324_t1;
            return function () {
                var _r326_t1;
                var _r326_t0 = this;
                var r326_currentGlyph = _r326_t0;
                r326_currentGlyph.setWidth(r324_df.width);
                r326_currentGlyph.include(r324_df.markSet[r324_top > r271_XH ? 'bp' : 'p']());
                r326_currentGlyph.include(r271_FlatHookDotlessJShape(r324_df, r324_df, r324_top, new r271_xn$NamedParameterPair$2Lrc9b('crossLeft', r1_mix(0, r271_SB, r1_mix(1, r324_df.div, 2))), new r271_xn$NamedParameterPair$2Lrc9b('barCenter', r324_df.middle + r271_JBalance * r324_df.div), new r271_xn$NamedParameterPair$2Lrc9b('serif', true)));
                return void 0;
            };
        };
        var r271_JLeftwardSerif = function (r333_df, r333_x, r333_top) {
            var _r333_t0, _r333_t1;
            return r271_HSerif.lt(r333_x, r333_top, r271_LongJut);
        };
        var r271_JBothSidesSerif = function (r334_df, r334_x, r334_top) {
            var _r334_t0, _r334_t1;
            return r271_union(r271_HSerif.lt(r334_x, r334_top, r271_LongJut), r271_HSerif.rt(r334_x, r334_top, r271_Jut));
        };
        var r271_JSymmetricSerif = function (r335_df, r335_x, r335_top) {
            var _r335_t0, _r335_t1;
            return r271_HSerif.mt(r335_x + r271_O, r335_top, r271_Jut + r271_JBalance2);
        };
        var r271_JConfig = r1_SuffixCfg.weave({
            '': [
                r271_JFullHookBase,
                r271_DivFrame(1),
                r271_DivFrame(1)
            ],
            'flatHook': [
                r271_JFlatHookBase,
                r271_DivFrame(1),
                r271_DivFrame(1)
            ],
            'descending': [
                r271_JDescendingBase,
                r271_DivFrame(1),
                r271_DivFrame(1)
            ],
            'descendingFlatHookSerifless': [
                r271_JDescendingFlatHookBase,
                r271_DivFrame(r271_para.diversityII),
                r271_DivFrame(r271_para.diversityI)
            ],
            'descendingFlatHookSerifed': [
                r271_JDescendingFlatHookSerifedBase,
                r271_DivFrame(r271_para.diversityI),
                r271_DivFrame(r271_para.diversityI)
            ]
        }, function (r336_body) {
            var _r336_t0, _r336_t1;
            return r336_body === 'descendingFlatHookSerifless' || r336_body === 'descendingFlatHookSerifed' ? { '': null } : {
                'serifless': null,
                'serifed': r271_JLeftwardSerif,
                'serifedBothSides': r271_JBothSidesSerif,
                'serifedSymmetric': r271_JSymmetricSerif
            };
        });
        var _r271_t9 = Object.entries(r271_JConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_base = _r271_t11[1][0][0];
            r271_df = _r271_t11[1][0][1];
            r271_dfHook = _r271_t11[1][0][2];
            _r271_t11[1][0];
            r271_serif = _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('J.' + r271_suffix, null, function () {
                    var r342_attach, _r342_t1;
                    var _r342_t0 = this;
                    var r342_currentGlyph = _r342_t0;
                    r342_currentGlyph.include(r271_base(r271_df, r271_dfHook, r271_CAP));
                    if (r271_serif) {
                        r342_attach = r342_currentGlyph.gizmo.unapply(r342_currentGlyph.baseAnchors.jTopSerifAttach);
                        r342_currentGlyph.include(r271_serif(r271_df, r342_attach.x, r271_CAP));
                    }
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpJ.' + r271_suffix, null, function () {
                    var r347_attach, _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    r347_currentGlyph.include(r271_base(r271_df, r271_dfHook, r271_XH));
                    if (r271_serif) {
                        r347_attach = r347_currentGlyph.gizmo.unapply(r347_currentGlyph.baseAnchors.jTopSerifAttach);
                        r347_currentGlyph.include(r271_serif(r271_df, r347_attach.x, r271_XH));
                    }
                    return void 0;
                });
                return r271_base.WithCurlyTail ? r271_xn$createAndSaveGlyphImpl$2Lrc3c('JCurlyTail.' + r271_suffix, null, function () {
                    var r352_attach, _r352_t1;
                    var _r352_t0 = this;
                    var r352_currentGlyph = _r352_t0;
                    r352_currentGlyph.include(r271_base.WithCurlyTail(r271_df, r271_CAP));
                    if (r271_serif) {
                        r352_attach = r352_currentGlyph.gizmo.unapply(r352_currentGlyph.baseAnchors.jTopSerifAttach);
                        r352_currentGlyph.include(r271_serif(r271_df, r352_attach.x, r271_CAP));
                    }
                    return void 0;
                }) : void 0;
            }());
        }
        r271_xn$selectvariant$7Hrq('J', 'J');
        r271_xn$selectvariant$7Hrq('J/noDescend', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'J'));
        r271_xn$linkreducedvariant$5sIl8('J/sansSerif', 'J', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpJ', 7434, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'J'));
        r271_alias('cyrl/Je', 1032, 'J');
        r271_alias('grek/Yot', 895, 'J');
        r271_xn$selectvariant$7Hrq('JCurlyTail', 42930);
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/J', 120129, function () {
            var _r359_t1;
            var _r359_t0 = this;
            var r359_currentGlyph = _r359_t0;
            var r359_hookx = 0.75 * r271_SB;
            r359_currentGlyph.include(r271_MarkSet.capital());
            r359_currentGlyph.setBaseAnchor('above', r271_RightSB - r271_BBD * r271_HVContrast * 0.75 - r271_JBalance2, r271_CAP);
            r359_currentGlyph.setBaseAnchor('overlay', r271_RightSB - r271_BBD * r271_HVContrast * 0.75 - r271_JBalance2, r271_CAP * r271_OverlayPos);
            r359_currentGlyph.include(r271_dispiro(r271_widths.rhs(r271_BBS), r271_flat(r271_RightSB - r271_JBalance2, r271_CAP, r271_heading(r271_Downward)), r271_curl(r271_RightSB - r271_JBalance2, r271_ArchDepthB), r271_hookend(r271_O), r271_g4(r359_hookx, r271_Hook)));
            r359_currentGlyph.include(r271_HBar.t(r271_RightSB - r271_JBalance2 - r271_BBD, r271_RightSB - r271_JBalance2, r271_CAP, r271_BBS));
            r359_currentGlyph.include(r271_intersection(r271_VBar.r(r271_RightSB - r271_JBalance2 - r271_BBD, 0, r271_CAP, r271_BBS), r271_xn$spirooutline$1aao(r271_corner(r271_RightSB - r271_JBalance2 - 1, r271_CAP, r271_heading(r271_Downward)), r271_curl(r271_RightSB - r271_JBalance2 - 1, r271_ArchDepthB), r271_hookend(1 + r271_O), r271_g4(r359_hookx + 1, r271_Hook), r271_corner(r359_hookx + 1, r271_CAP))));
            return void 0;
        });
    });
    return void 0;
});
