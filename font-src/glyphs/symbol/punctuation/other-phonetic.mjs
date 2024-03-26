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
var r1_Joining = _r1_t9.Joining;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Other-Phonetic', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_toneEnd, r271_toneMid, r271_name, r271_code, r271_a, r271_b, r271_pos, _r271_t10, _r271_t11, _r271_t14, _r271_t15, _r271_t18, _r271_t19, _r271_t20, _r271_t21, _r271_t25, _r271_t29, _r271_t30, _r271_t31, _r271_t33;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_PeriodRadius = _r271_t1.PeriodRadius;
        var r271_OperatorStroke = _r271_t1.OperatorStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_DotAt = _r271_t4.DotAt;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_triangleSize = Math.min(r271_PeriodRadius, r271_XH / 6);
        var r271_toneMarkLeft = r1_mix(r271_SB, r271_RightSB, 0.1);
        var r271_toneMarkRight = r271_Width - r271_toneMarkLeft;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('triangleColon', 720, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r271_MarkSet.e());
            r276_currentGlyph.include(r271_union(r271_xn$spirooutline$1aao(r271_corner(r271_Middle - r271_triangleSize * 1.35, r271_XH), r271_corner(r271_Middle, r271_XH - r271_triangleSize * 2.75), r271_corner(r271_Middle + r271_triangleSize * 1.35, r271_XH)), r271_xn$spirooutline$1aao(r271_corner(r271_Middle - r271_triangleSize * 1.35, 0), r271_corner(r271_Middle, 0 + r271_triangleSize * 2.75), r271_corner(r271_Middle + r271_triangleSize * 1.35, 0))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('halfTriangleColon', 721, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r271_MarkSet.e());
            r281_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r271_Middle - r271_triangleSize * 1.35, r271_XH), r271_corner(r271_Middle, r271_XH - r271_triangleSize * 2.75), r271_corner(r271_Middle + r271_triangleSize * 1.35, r271_XH)));
            return void 0;
        });
        var r271_yOfTone = function (r284_tone) {
            var _r284_t0, _r284_t1;
            return r1_mix(r271_OperatorStroke / 2, r271_CAP - r271_OperatorStroke / 2, r284_tone / 4);
        };
        var r271_yOfToneNeutral = function (r285_tone) {
            var _r285_t0, _r285_t1;
            return r1_mix(r271_DotRadius, r271_CAP - r271_DotRadius, r285_tone / 4);
        };
        var r271_yOfToneDepart = function (r286_a, r286_b, r286_p) {
            var _r286_t0, _r286_t1;
            return r1_mix(r271_CAP * r286_a + r271_OperatorStroke / 2, r271_CAP * r286_b - r271_OperatorStroke / 2, r286_p);
        };
        var _r271_t6 = 4;
        var _r271_t7 = 0;
        var r271_tone = _r271_t6;
        while (r271_tone >= _r271_t7) {
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('tone' + r271_tone, 741 + 4 - r271_tone, function () {
                var _r290_t1;
                var _r290_t0 = this;
                var r290_currentGlyph = _r290_t0;
                r290_currentGlyph.include(r271_VBar.r(r271_toneMarkRight, 0, r271_CAP, r271_OperatorStroke));
                r290_currentGlyph.include(r271_HBar.m(r271_toneMarkLeft, r271_toneMarkRight - 0.1, r271_yOfTone(r271_tone), r271_OperatorStroke));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneSandhi' + r271_tone, 42770 + 4 - r271_tone, function () {
                var _r295_t1;
                var _r295_t0 = this;
                var r295_currentGlyph = _r295_t0;
                r295_currentGlyph.include(r271_VBar.l(r271_toneMarkLeft, 0, r271_CAP, r271_OperatorStroke));
                r295_currentGlyph.include(r271_HBar.m(r271_toneMarkLeft + 0.1, r271_toneMarkRight, r271_yOfTone(r271_tone), r271_OperatorStroke));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneNeutral' + r271_tone, 42760 + 4 - r271_tone, function () {
                var _r300_t1;
                var _r300_t0 = this;
                var r300_currentGlyph = _r300_t0;
                r300_currentGlyph.include(r271_VBar.r(r271_toneMarkRight, 0, r271_CAP, r271_OperatorStroke));
                r300_currentGlyph.include(r271_DotAt(r271_toneMarkLeft + r271_DotRadius, r271_yOfToneNeutral(r271_tone), r271_DotRadius));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneSandhiNeutral' + r271_tone, 42765 + 4 - r271_tone, function () {
                var _r305_t1;
                var _r305_t0 = this;
                var r305_currentGlyph = _r305_t0;
                r305_currentGlyph.include(r271_VBar.l(r271_toneMarkLeft, 0, r271_CAP, r271_OperatorStroke));
                r305_currentGlyph.include(r271_DotAt(r271_toneMarkRight - r271_DotRadius, r271_yOfToneNeutral(r271_tone), r271_DotRadius));
                return void 0;
            });
            r271_tone = r271_tone - 1;
        }
        var _r271_t8 = 4;
        var _r271_t9 = 0;
        var r271_toneStart = _r271_t8;
        while (r271_toneStart >= _r271_t9) {
            _r271_t10 = 4;
            _r271_t11 = 0;
            r271_toneEnd = _r271_t10;
            while (r271_toneEnd >= _r271_t11) {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneStart' + r271_toneStart + r271_toneEnd, null, function () {
                    var _r312_t1;
                    var _r312_t0 = this;
                    var r312_currentGlyph = _r312_t0;
                    r1_Joining.set(r312_currentGlyph, r1_Joining.Classes.Right);
                    r312_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, r271_Middle, r271_Width), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(r271_Width / 2, r271_yOfTone(r271_toneStart)), r271_corner(r271_Width + r271_Width / 2, r271_yOfTone(r271_toneEnd)))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneSandhiStart' + r271_toneStart + r271_toneEnd, null, function () {
                    var _r316_t1;
                    var _r316_t0 = this;
                    var r316_currentGlyph = _r316_t0;
                    r1_Joining.set(r316_currentGlyph, r1_Joining.Classes.Right);
                    r316_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, r271_Middle, r271_Width), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(0 - r271_Width / 2, r271_yOfTone(r1_mix(r271_toneEnd, r271_toneStart, 2))), r271_corner(r271_Width + r271_Width / 2, r271_yOfTone(r271_toneEnd)))));
                    r316_currentGlyph.include(r271_VBar.m(r271_Middle, 0, r271_CAP, r271_OperatorStroke));
                    return void 0;
                });
                r271_toneEnd = r271_toneEnd - 1;
            }
            r271_toneStart = r271_toneStart - 1;
        }
        var _r271_t12 = 4;
        var _r271_t13 = 0;
        r271_toneStart = _r271_t12;
        while (r271_toneStart >= _r271_t13) {
            _r271_t14 = 4;
            _r271_t15 = 0;
            r271_toneEnd = _r271_t14;
            while (r271_toneEnd >= _r271_t15) {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneEnd' + r271_toneStart + r271_toneEnd, null, function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    r1_Joining.set(r323_currentGlyph, r1_Joining.Classes.Left);
                    r323_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, 0, r271_Middle), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(0 - r271_Width / 2, r271_yOfTone(r271_toneStart)), r271_corner(r271_Width + r271_Width / 2, r271_yOfTone(r1_mix(r271_toneStart, r271_toneEnd, 2))))));
                    r323_currentGlyph.include(r271_VBar.m(r271_Middle, 0, r271_CAP, r271_OperatorStroke));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneSandhiEnd' + r271_toneStart + r271_toneEnd, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    r1_Joining.set(r328_currentGlyph, r1_Joining.Classes.Left);
                    r328_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, 0, r271_Width), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(0 - r271_Width / 2, r271_yOfTone(r271_toneStart)), r271_corner(r271_Width / 2, r271_yOfTone(r271_toneEnd)))));
                    return void 0;
                });
                r271_toneEnd = r271_toneEnd - 1;
            }
            r271_toneStart = r271_toneStart - 1;
        }
        var _r271_t16 = 4;
        var _r271_t17 = 0;
        r271_toneStart = _r271_t16;
        while (r271_toneStart >= _r271_t17) {
            _r271_t18 = 4;
            _r271_t19 = 0;
            r271_toneMid = _r271_t18;
            while (r271_toneMid >= _r271_t19) {
                _r271_t20 = 4;
                _r271_t21 = 0;
                r271_toneEnd = _r271_t20;
                while (r271_toneEnd >= _r271_t21) {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneMid' + r271_toneStart + r271_toneMid + r271_toneEnd, null, function () {
                        var _r335_t1;
                        var _r335_t0 = this;
                        var r335_currentGlyph = _r335_t0;
                        r1_Joining.set(r335_currentGlyph, r1_Joining.Classes.Mid);
                        r335_currentGlyph.include(r271_intersection(r271_Rect(r271_CAP, 0, 0, r271_Width), r271_union(r271_intersection(r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(0 - r271_Width / 2, r271_yOfTone(r271_toneStart)), r271_corner(r271_Width + r271_Width / 2, r271_yOfTone(r1_mix(r271_toneStart, r271_toneMid, 2)))), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(0 - r271_Width / 2, r271_yOfTone(r1_mix(r271_toneEnd, r271_toneMid, 2))), r271_corner(r271_Width + r271_Width / 2, r271_yOfTone(r271_toneEnd)))), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(0 - r271_Width / 2, r271_yOfTone(r271_toneStart)), r271_corner(r271_Width / 2, r271_yOfTone(r271_toneMid))), r271_dispiro(r271_widths.center(r271_OperatorStroke), r271_corner(r271_Width / 2, r271_yOfTone(r271_toneMid)), r271_corner(r271_Width + r271_Width / 2, r271_yOfTone(r271_toneEnd))))));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('toneSandhiMid' + r271_toneStart + r271_toneMid + r271_toneEnd, null, function () {
                        var _r339_t1;
                        var _r339_t0 = this;
                        var r339_currentGlyph = _r339_t0;
                        r339_currentGlyph.include(r271_xn$referglyph$1aao('toneMid' + r271_toneStart + r271_toneMid + r271_toneEnd), r271_AS_BASE, r271_ALSO_METRICS);
                        r1_Joining.set(r339_currentGlyph, r1_Joining.Classes.Mid);
                        return void 0;
                    });
                    r271_toneEnd = r271_toneEnd - 1;
                }
                r271_toneMid = r271_toneMid - 1;
            }
            r271_toneStart = r271_toneStart - 1;
        }
        var r271_DepartingToneConfig = [
            [
                'departingToneYin',
                746,
                0,
                0.5,
                0
            ],
            [
                'departingToneYang',
                747,
                0,
                0.5,
                0.5
            ],
            [
                'beginHighTone',
                761,
                0.6,
                1,
                1
            ],
            [
                'beginLowTone',
                763,
                0,
                0.4,
                0
            ]
        ];
        var _r271_t22 = r271_DepartingToneConfig;
        var _r271_t23 = _r271_t22.length;
        var _r271_t24 = 0;
        while (_r271_t24 < _r271_t23) {
            _r271_t25 = _r271_t22[_r271_t24];
            r271_name = _r271_t25[0];
            r271_code = _r271_t25[1];
            r271_a = _r271_t25[2];
            r271_b = _r271_t25[3];
            r271_pos = _r271_t25[4];
            r271_xn$createAndSaveGlyphImpl$2Lrc3c(r271_name, r271_code, function () {
                var _r344_t1;
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                r344_currentGlyph.include(r271_VBar.l(r271_toneMarkLeft, r271_CAP * r271_a, r271_CAP * r271_b, r271_OperatorStroke));
                r344_currentGlyph.include(r271_HBar.m(r271_toneMarkLeft + 0.1, r271_toneMarkRight, r271_yOfToneDepart(r271_a, r271_b, r271_pos), r271_OperatorStroke));
                return void 0;
            });
            _r271_t24 = _r271_t24 + 1;
        }
        var r271_EnteringToneConfig = [
            [
                'endHighTone',
                762,
                0.6,
                1,
                1
            ],
            [
                'endLowTone',
                764,
                0,
                0.4,
                0
            ]
        ];
        var _r271_t26 = r271_EnteringToneConfig;
        var _r271_t27 = _r271_t26.length;
        var _r271_t28 = 0;
        var _r271_t32 = _r271_t28 < _r271_t27;
        while (_r271_t32) {
            _r271_t33 = (_r271_t29 = _r271_t26[_r271_t28], r271_name = _r271_t29[0], r271_code = _r271_t29[1], r271_a = _r271_t29[2], r271_b = _r271_t29[3], r271_pos = _r271_t29[4], r271_xn$createAndSaveGlyphImpl$2Lrc3c(r271_name, r271_code, function () {
                var _r350_t1;
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                r350_currentGlyph.include(r271_VBar.r(r271_toneMarkRight, r271_CAP * r271_a, r271_CAP * r271_b, r271_OperatorStroke));
                r350_currentGlyph.include(r271_HBar.m(r271_toneMarkLeft, r271_toneMarkRight - 0.1, r271_yOfToneDepart(r271_a, r271_b, r271_pos), r271_OperatorStroke));
                return void 0;
            }), _r271_t28 = _r271_t28 + 1);
            _r271_t32 = _r271_t28 < _r271_t27;
        }
        return _r271_t33;
    });
    return void 0;
});
