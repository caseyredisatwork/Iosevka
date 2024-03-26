'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/transform.mjs';
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
var r1_Transform = _r1_t9.Transform;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Pictograph-Musical', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7, _r271_t8, _r271_tag9, _r271_t10, _r271_tag11;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_UPM = _r271_t1.UPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_PictTop = _r271_t1.PictTop;
        var r271_PictBot = _r271_t1.PictBot;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_SmoothAdjust = _r271_t1.SmoothAdjust;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Ring = _r271_t4.Ring;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_Ungizmo = _r271_t4.Ungizmo;
        var r271_Regizmo = _r271_t4.Regizmo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_fine = r271_AdviceStroke(6);
        var r271_noteSize = r271_Width * 0.4 + r271_fine / 2;
        var r271_noteCompress = 0.8;
        var r271_commonNoteBottom = r271_PictBot + r271_noteCompress / 2 * r271_noteSize;
        var r271_BandShape = function (r274_z1, r274_z2, r274_l, r274_r, r274_h) {
            var _r274_t0, _r274_t1;
            var r274_slope = (r274_z2.y - r274_z1.y) / (r274_z2.x - r274_z1.x);
            var r274_yl = r274_z1.y + (r274_l - r274_z1.x) * r274_slope;
            var r274_yr = r274_z1.y + (r274_r - r274_z1.x) * r274_slope;
            return r271_xn$spirooutline$1aao(r271_corner(r274_l, r274_yl), r271_corner(r274_r, r274_yr), r271_corner(r274_r, r274_yr + r274_h), r271_corner(r274_l, r274_yl + r274_h));
        };
        var r271_MusicalNoteAt = function (r275_size, r275_x, r275_y) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                r277_currentGlyph.include(r271_Ring(-r271_noteCompress / 2 * r275_size, r271_noteCompress / 2 * r275_size, -r275_size, 0));
                r277_currentGlyph.include(r271_Ungizmo());
                r277_currentGlyph.include(new r1_Transform(1, 0, 0.15, 1, 0, 0));
                r277_currentGlyph.include(r271_Translate(r275_x, r275_y));
                r277_currentGlyph.include(r271_Regizmo());
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('crotchet', 9833, r271_union(r271_MusicalNoteAt(r271_noteSize, r271_Middle + r271_noteSize / 6 + r271_fine / 2 * r271_HVContrast, r271_commonNoteBottom), r271_VBar.m(r271_Middle + r271_noteSize / 6, r271_commonNoteBottom, r271_PictTop, r271_fine)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('quaver', 9834, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            var r286_x3 = r1_mix(r271_Middle, r271_RightSB, 0.35);
            var r286_y3 = r1_mix(r271_PictBot, r271_PictTop, 0.25);
            var r286_y2 = r1_mix(r286_y3, r271_PictTop, 0.25);
            r286_currentGlyph.include(r271_union(r271_MusicalNoteAt(r271_noteSize, r271_Middle, r271_commonNoteBottom), r271_VBar.r(r271_Middle, r271_commonNoteBottom, r271_PictTop, r271_fine), r271_dispiro(r271_widths.rhs(r271_fine), r271_g4.down.start(r271_Middle, r271_PictTop), r271_g4.down.mid(r271_RightSB, r286_y2), r271_g4(r286_x3, r286_y3))));
            return void 0;
        });
        (function () {
            var r289_x1 = r271_Middle - r271_noteSize / 6;
            var r289_x2 = r289_x1 + r271_noteSize * 7 / 6;
            var r289_deltaY = r271_noteCompress * r271_noteSize / 2;
            var r289_lb1 = r271_PictBot + r271_noteCompress / 2 * r271_noteSize;
            var r289_bandWidth = r271_noteSize * r271_noteCompress * 0.75;
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('beamQuaver', 9835, r271_difference(r271_union(r271_MusicalNoteAt(r271_noteSize, r289_x1, r271_commonNoteBottom), r271_VBar.r(r289_x1, r271_commonNoteBottom, r271_PictTop - r289_deltaY, r271_fine), r271_MusicalNoteAt(r271_noteSize, r289_x2, r271_commonNoteBottom + r289_deltaY), r271_VBar.r(r289_x2, r271_commonNoteBottom + r289_deltaY, r271_PictTop, r271_fine), r271_BandShape({
                'x': r289_x1,
                'y': r271_PictTop - r289_deltaY
            }, {
                'x': r289_x2,
                'y': r271_PictTop
            }, r289_x1 - r271_fine * r271_HVContrast, r289_x2 + 0, 0 - r289_bandWidth)), r271_BandShape({
                'x': r289_x1,
                'y': r271_PictTop - r289_deltaY
            }, {
                'x': r289_x2,
                'y': r271_PictTop
            }, r289_x1 - r271_fine * r271_HVContrast, r289_x2 + 0, 0 + r289_bandWidth)));
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('beamSemiQuaver', 9836, r271_union(r271_xn$referglyph$1aao('beamQuaver'), r271_BandShape({
                'x': r289_x1,
                'y': r271_PictTop - r289_deltaY - 1.5 * r289_bandWidth
            }, {
                'x': r289_x2,
                'y': r271_PictTop - 1.5 * r289_bandWidth
            }, r289_x1 - r271_fine * r271_HVContrast, r289_x2 + 0, 0 - r289_bandWidth)));
        }());
        return function () {
            var r293_nsTop = r271_PictTop;
            var r293_nsBot = r271_PictBot;
            var r293_fine = r271_AdviceStroke(3.5);
            var r293_fine2 = r271_AdviceStroke(4);
            var r293_l = r271_SB - r293_fine * 0;
            var r293_r = r271_RightSB + r293_fine * 0;
            var r293_hsp = (r293_r - r293_l - r293_fine * 2 * r271_HVContrast) * 0.3;
            var r293_skew = 0.2;
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('sharpTone', 9839, function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                r296_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r293_l, r1_mix(r293_nsTop, r293_nsBot, 0.3) - (r271_Middle - r293_l) * r293_skew, r271_heading(r271_Rightward)), r271_curl(r293_r, r1_mix(r293_nsTop, r293_nsBot, 0.3) - (r271_Middle - r293_r) * r293_skew, r271_heading(r271_Rightward))));
                r296_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r293_l, r1_mix(r293_nsTop, r293_nsBot, 0.7) - (r271_Middle - r293_l) * r293_skew, r271_heading(r271_Rightward)), r271_curl(r293_r, r1_mix(r293_nsTop, r293_nsBot, 0.7) - (r271_Middle - r293_r) * r293_skew, r271_heading(r271_Rightward))));
                r296_currentGlyph.include(r271_VBar.l(r293_l + r293_hsp, r293_nsBot - (r271_Middle - r293_l - r293_hsp) * r293_skew, r293_nsTop - (r271_Middle - r293_l - r293_hsp) * r293_skew, r293_fine));
                r296_currentGlyph.include(r271_VBar.r(r293_r - r293_hsp, r293_nsBot - (r271_Middle - r293_r + r293_hsp) * r293_skew, r293_nsTop - (r271_Middle - r293_r + r293_hsp) * r293_skew, r293_fine));
                return void 0;
            });
            var r293_FlatToneShape = function (r301__l, r301__r, r301__sw) {
                var _r301_t0, _r301_t1;
                return function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    var r303_yTerminal = r1_mix(r293_nsBot, r293_nsTop, 0.55);
                    var r303_curly = 0.65;
                    var r303_curly2 = 1.1;
                    var r303_curly3 = 0.3;
                    var r303_l = r1_fallback(r301__l, r1_mix(r271_SB, r271_RightSB, 0.07));
                    var r303_r = r1_fallback(r301__r, r1_mix(r271_RightSB, r271_SB, 0.07));
                    var r303_sw = r1_fallback(r301__sw, r293_fine);
                    r303_currentGlyph.include(r271_difference(r271_union(r271_VBar.l(r303_l, r293_nsBot, r293_nsTop, r303_sw), r271_dispiro(r271_widths.lhs(r303_sw), r271_g4(r303_l, r293_nsBot - 1), r271_alsoThru(0.5, r303_curly3), r271_g4.up.mid(r303_r - r271_O + 1, r1_mix(r293_nsBot, r303_yTerminal, r303_curly) + (r303_r - r303_l) * r293_skew - r271_TanSlope * r271_SmoothAdjust, r271_widths.lhs(r303_sw + 1)), r271_g4.left.mid(r1_mix(r303_l, r303_r, 0.5) - r271_CorrectionOMidX * r303_sw, r1_mix(r293_nsBot, r303_yTerminal, r303_curly2) + (r303_r - r303_l) * r293_skew / 2 + 1), r271_g4(r303_l, r303_yTerminal + 1))), r271_difference(r271_xn$spirooutline$1aao(r271_corner(r303_l, r293_nsBot - r271_UPM), r271_corner(r303_l, r293_nsBot), r271_alsoThru(0.5, r303_curly3), r271_g4.up.mid(r303_r - r271_O, r1_mix(r293_nsBot, r303_yTerminal, r303_curly) + (r303_r - r303_l) * r293_skew - r271_TanSlope * r271_SmoothAdjust), r271_g4.left.mid(r1_mix(r303_l, r303_r, 0.5) - r271_CorrectionOMidX * r303_sw, r1_mix(r293_nsBot, r303_yTerminal, r303_curly2) + (r303_r - r303_l) * r293_skew / 2), r271_corner(r303_l, r303_yTerminal), r271_corner(r303_l, r303_yTerminal + 1), r271_corner(r303_l, r293_nsTop), r271_corner(r271_Width, r293_nsTop), r271_corner(r271_Width, r293_nsBot - r271_UPM)), r271_xn$spirooutline$1aao(r271_corner(0, r303_yTerminal), r271_corner(0, r293_nsTop), r271_corner(r303_l + r303_sw * r271_HVContrast, r293_nsTop), r271_corner(r303_l + r303_sw * r271_HVContrast, r303_yTerminal))), r271_xn$spirooutline$1aao(r271_corner(r303_l, r293_nsBot - r271_UPM), r271_corner(r303_l, r293_nsTop), r271_corner(r303_l - r271_UPM, r293_nsTop), r271_corner(r303_l - r271_UPM, r293_nsBot - r271_UPM))));
                    return void 0;
                };
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('flatTone', 9837, function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                r307_currentGlyph.include(r293_FlatToneShape());
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('naturalTone', 9838, function () {
                var _r311_t1;
                var _r311_t0 = this;
                var r311_currentGlyph = _r311_t0;
                var r311_k = 0.25 - r271_Stroke * 0.25 / (r293_nsTop - r293_nsBot);
                var r311_kr = 0.5;
                var r311_ll = r293_l + r293_hsp * r311_kr;
                var r311_rr = r293_r - r293_hsp * r311_kr;
                var r311_barLeft = r271_VBar.l(r311_ll, r1_mix(r293_nsBot, r293_nsTop, r311_k), r293_nsTop, r293_fine);
                var r311_barRight = r271_VBar.r(r311_rr, r293_nsBot, r1_mix(r293_nsBot, r293_nsTop, 1 - r311_k), r293_fine);
                var r311_diagLow = r271_dispiro(r271_widths.lhs(r293_fine), r271_flat(r311_ll, r1_mix(r293_nsBot, r293_nsTop, r311_k)), r271_curl(r311_rr, r1_mix(r293_nsBot, r293_nsTop, r311_k) + (r311_rr - r311_ll) * r293_skew));
                var r311_belowDiagLow = r271_xn$spirooutline$1aao(r271_corner(r311_ll, r1_mix(r293_nsBot, r293_nsTop, r311_k)), r271_corner(r311_rr, r1_mix(r293_nsBot, r293_nsTop, r311_k) + (r311_rr - r311_ll) * r293_skew), r271_corner(r311_rr, r293_nsBot), r271_corner(r311_ll, r293_nsBot));
                var r311_diagHigh = r271_dispiro(r271_widths.lhs(r293_fine), r271_flat(r311_rr, r1_mix(r293_nsBot, r293_nsTop, 1 - r311_k)), r271_curl(r311_ll, r1_mix(r293_nsBot, r293_nsTop, 1 - r311_k) - (r311_rr - r311_ll) * r293_skew));
                var r311_aboveDiagHigh = r271_xn$spirooutline$1aao(r271_corner(r311_rr, r1_mix(r293_nsBot, r293_nsTop, 1 - r311_k)), r271_corner(r311_ll, r1_mix(r293_nsBot, r293_nsTop, 1 - r311_k) - (r311_rr - r311_ll) * r293_skew), r271_corner(r311_ll, r293_nsTop), r271_corner(r311_rr, r293_nsTop));
                var r311_outsideBars = r271_difference(r271_xn$spirooutline$1aao(r271_corner(r311_ll - r271_UPM, r293_nsBot - r271_UPM), r271_corner(r311_ll - r271_UPM, r293_nsTop + r271_UPM), r271_corner(r311_rr + r271_UPM, r293_nsTop + r271_UPM), r271_corner(r311_rr + r271_UPM, r293_nsBot - r271_UPM)), r271_xn$spirooutline$1aao(r271_corner(r311_ll, r293_nsBot), r271_corner(r311_ll, r293_nsTop), r271_corner(r311_rr, r293_nsTop), r271_corner(r311_rr, r293_nsBot)));
                r311_currentGlyph.include(r271_union(r271_difference(r311_barLeft, r311_belowDiagLow), r271_difference(r311_barRight, r311_aboveDiagHigh), r271_difference(r311_diagLow, r311_barLeft, r311_barRight, r311_outsideBars), r271_difference(r311_diagHigh, r311_barLeft, r311_barRight, r311_outsideBars)));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('dblSharpTone', 119082, function () {
                var _r315_t1;
                var _r315_t0 = this;
                var r315_currentGlyph = _r315_t0;
                var r315_w = r293_r - r293_l;
                var r315_t = r293_nsTop - r293_fine * 0;
                var r315_b = r315_t - r315_w;
                var r315_cx = r1_mix(r293_l, r293_r, 0.5);
                var r315_cy = r1_mix(r315_t, r315_b, 0.5);
                var r315_cofine = Math.min(r315_w / 3, r315_w / 2 - r271_Stroke);
                var r315_p = 0.5;
                var r315_size = r315_w * (5 / 12);
                r315_currentGlyph.include(r271_union(r271_difference(r271_xn$spirooutline$1aao(r271_corner(r293_l, r315_t), r271_corner(r293_r, r315_t), r271_corner(r293_r, r315_b), r271_corner(r293_l, r315_b)), r271_union(r271_VBar.m(r315_cx, r315_t, r315_b, r315_cofine), r271_HBar.m(r293_l, r293_r, r315_cy, r315_cofine))), r271_xn$spirooutline$1aao(r271_corner(r315_cx - r315_size, r315_cy + r315_size), r271_g4(r315_cx, r315_cy + r315_p * r315_size), r271_corner(r315_cx + r315_size, r315_cy + r315_size), r271_g4(r315_cx + r315_p * r315_size, r315_cy), r271_corner(r315_cx + r315_size, r315_cy - r315_size), r271_g4(r315_cx, r315_cy - r315_p * r315_size), r271_corner(r315_cx - r315_size, r315_cy - r315_size), r271_g4(r315_cx - r315_p * r315_size, r315_cy), r271_close())));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('dblFlatTone', 119083, function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                var r319_sw = r271_AdviceStroke(5.5);
                r319_currentGlyph.include(r271_union(r293_FlatToneShape(r293_l, r271_Middle + r319_sw / 3, r319_sw), r293_FlatToneShape(r271_Middle - r319_sw / 3, r293_r, r319_sw)));
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('qtrSharpTone', 119090, function () {
                var _r323_t1;
                var _r323_t0 = this;
                var r323_currentGlyph = _r323_t0;
                r323_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r293_l, r1_mix(r293_nsTop, r293_nsBot, 0.3) - (r271_Middle - r293_l) * r293_skew, r271_heading(r271_Rightward)), r271_curl(r293_r, r1_mix(r293_nsTop, r293_nsBot, 0.3) - (r271_Middle - r293_r) * r293_skew, r271_heading(r271_Rightward))));
                r323_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r293_l, r1_mix(r293_nsTop, r293_nsBot, 0.7) - (r271_Middle - r293_l) * r293_skew, r271_heading(r271_Rightward)), r271_curl(r293_r, r1_mix(r293_nsTop, r293_nsBot, 0.7) - (r271_Middle - r293_r) * r293_skew, r271_heading(r271_Rightward))));
                r323_currentGlyph.include(r271_VBar.m(r271_Middle, r293_nsBot, r293_nsTop, r293_fine));
                return void 0;
            });
        }();
    });
    return void 0;
});
