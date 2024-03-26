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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Slashes-And-Number-Sign', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8, _r271_t9, _r271_tag10;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_SymbolMid = _r271_t1.SymbolMid;
        var r271_ParenTop = _r271_t1.ParenTop;
        var r271_ParenBot = _r271_t1.ParenBot;
        var r271_OperTop = _r271_t1.OperTop;
        var r271_OperBot = _r271_t1.OperBot;
        var r271_TackTop = _r271_t1.TackTop;
        var r271_TackBot = _r271_t1.TackBot;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_AccentClearance = _r271_t1.AccentClearance;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_Rect = _r271_t4.Rect;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['Mark-Shared-Metrics'].resolve();
        var r271_markStroke = _r271_t6.markStroke;
        var r271_markExtend = _r271_t6.markExtend;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'slashDefautLeft': r271_slashDefautLeft };
        });
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'slashDefaultRight': r271_slashDefaultRight };
        });
        var r271_slashDefautLeft = r271_SB + r271_HalfStroke;
        var r271_slashDefaultRight = r271_RightSB - r271_HalfStroke;
        var r271_SlashShape = function (r279_l, r279_r, r279__t, r279__b, r279__w) {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_w = r1_fallback(r279__w, r271_Stroke);
                var r281_t = r1_fallback(r279__t, r271_ParenTop);
                var r281_b = r1_fallback(r279__b, r271_ParenBot);
                var r281_cor = 1 / 2 * r271_HVContrast / Math.sqrt(1 - Math.pow((r279_r - r279_l - r271_Stroke) / (r281_t - r281_b), 2));
                r281_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r279_r - r281_w * r281_cor, r281_t), r271_corner(r279_r + r281_w * r281_cor, r281_t), r271_corner(r279_l + r281_w * r281_cor, r281_b), r271_corner(r279_l - r281_w * r281_cor, r281_b)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('slash', '/', function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r271_SlashShape(r271_slashDefautLeft, r271_slashDefaultRight));
            return void 0;
        });
        r271_alias('solidus', 8260, 'slash');
        r271_alias('fractionBar', null, 'slash');
        r271_alias('mathDivSlash', 8725, 'slash');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('doubleSlash', 11005, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_w = r271_AdviceStroke(3);
            var r289_b = Math.max(r289_w, r271_Width * 0.15);
            r289_currentGlyph.include(r271_SlashShape(r271_slashDefautLeft - r289_b, r271_slashDefaultRight - r289_b, void 0, void 0, r289_w));
            r289_currentGlyph.include(r271_SlashShape(r271_slashDefautLeft + r289_b, r271_slashDefaultRight + r289_b, void 0, void 0, r289_w));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('slash.left', null, function () {
            var _r294_t1;
            var _r294_t0 = this;
            var r294_currentGlyph = _r294_t0;
            r1_Joining.set(r294_currentGlyph, r1_Joining.Classes.Right);
            r294_currentGlyph.include(r271_SlashShape(r271_slashDefautLeft, r271_Width));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('slash.right', null, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r1_Joining.set(r298_currentGlyph, r1_Joining.Classes.Left);
            r298_currentGlyph.include(r271_SlashShape(0, r271_slashDefaultRight));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('slantedParallel', null, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            var r302_w = r271_AdviceStroke(3);
            var r302_b = Math.max(r302_w, r271_Width * 0.15);
            r302_currentGlyph.include(r271_SlashShape(r271_slashDefautLeft - r302_b, r271_slashDefaultRight - r302_b, r271_TackTop, r271_TackBot, r302_w));
            r302_currentGlyph.include(r271_SlashShape(r271_slashDefautLeft + r302_b, r271_slashDefaultRight + r302_b, r271_TackTop, r271_TackBot, r302_w));
            return void 0;
        });
        var r271_backslashWidth = (r271_slashDefaultRight - r271_slashDefautLeft) * (1 + r271_TanSlope * 2);
        var r271_BackslashShape = function (r305_l, r305_r) {
            var _r305_t0, _r305_t1;
            return function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_cor = 1 / 2 * r271_HVContrast / Math.sqrt(1 - Math.pow((r305_r - r305_l - r271_Stroke) / (r271_ParenTop - r271_ParenBot), 2));
                r307_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r305_l - r271_Stroke * r307_cor, r271_ParenTop), r271_corner(r305_l + r271_Stroke * r307_cor, r271_ParenTop), r271_corner(r305_r + r271_Stroke * r307_cor, r271_ParenBot), r271_corner(r305_r - r271_Stroke * r307_cor, r271_ParenBot)));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('backslash', '\\', function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r271_BackslashShape(r271_Middle - r271_backslashWidth / 2, r271_Middle + r271_backslashWidth / 2));
            return void 0;
        });
        r271_alias('mathSetMinus', 8726, 'backslash');
        r271_alias('mathBackslash', 10741, 'backslash');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('slashOverbar', 10742, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.include(r271_xn$referglyph$1aao('slash'));
            r315_currentGlyph.include(r271_HBar.t(r271_Middle - r271_markExtend, r271_Middle + r271_markExtend, r271_ParenTop + r271_AccentClearance, r271_markStroke));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('backslashBar', 10743, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            r320_currentGlyph.include(r271_xn$referglyph$1aao('backslash'));
            r320_currentGlyph.include(r271_HBar.m(r271_SB, r271_RightSB, r271_SymbolMid, r271_OverlayStroke));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('backslash.left', null, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            r1_Joining.set(r325_currentGlyph, r1_Joining.Classes.Right);
            r325_currentGlyph.include(r271_BackslashShape(r271_Middle - r271_backslashWidth / 2, r271_Width));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('backslash.right', null, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            r1_Joining.set(r329_currentGlyph, r1_Joining.Classes.Left);
            r329_currentGlyph.include(r271_BackslashShape(0, r271_Middle + r271_backslashWidth / 2));
            return void 0;
        });
        return function () {
            var r332_suffix, r332_FHBars, r332_FVBars, r332_p, r332_height, _r332_t2, _r332_t3, _r332_tag4;
            var r332_fine = r271_AdviceStroke(2.75);
            var r332_HspT = function (r333_l, r333_r) {
                var _r333_t0, _r333_t1;
                return (r333_r - r333_l - r332_fine * 2 * r271_HVContrast) * 0.3;
            };
            var r332_UprightHBars = function (r334_height, r334_lx, r334_l, r334_r, r334_p) {
                var _r334_t1, _r334_t2;
                var _r334_t0 = r334_height;
                var r334_nsTop = _r334_t0[0];
                var r334_nsBot = _r334_t0[1];
                return r271_union(r271_HBar.m(r334_lx, r334_r, r1_mix(r334_nsTop, r334_nsBot, 0.3)), r271_HBar.m(r334_lx, r334_r, r1_mix(r334_nsTop, r334_nsBot, 0.7)));
            };
            var r332_UprightHBarsOpen = function (r335_height, r335_lx, r335_l, r335_r, r335_p) {
                var _r335_t1, _r335_t2;
                var _r335_t0 = r335_height;
                var r335_nsTop = _r335_t0[0];
                var r335_nsBot = _r335_t0[1];
                var r335_hsp = r332_HspT(r335_l, r335_r);
                return r271_difference(r332_UprightHBars(r335_height, r335_lx, r335_l, r335_r, r335_p), r271_Rect(r335_nsTop, r335_nsBot, r335_l + r335_hsp + r332_fine * (0.5 + r335_p), r335_r - r335_hsp - r332_fine * (0.5 + r335_p)));
            };
            var r332_UprightVBars = function (r336_height, r336_lx, r336_l, r336_r, r336_p) {
                var _r336_t1, _r336_t2;
                var _r336_t0 = r336_height;
                var r336_nsTop = _r336_t0[0];
                var r336_nsBot = _r336_t0[1];
                var r336_hsp = r332_HspT(r336_l, r336_r);
                return r271_union(r271_VBar.l(r336_l + r336_hsp + r336_p * r332_fine, r336_nsBot, r336_nsTop, r332_fine), r271_VBar.r(r336_r - r336_hsp - r336_p * r332_fine, r336_nsBot, r336_nsTop, r332_fine));
            };
            var r332_SlantedDim = function (r337_l, r337_r) {
                var _r337_t0, _r337_t1;
                var r337_hsp = r332_HspT(r337_l, r337_r);
                var r337_x = r337_hsp + r332_fine / 2 * r271_HVContrast;
                var r337_w = (r337_r - r337_l) * 0.15;
                var r337_shift = r337_w / 3;
                return {
                    'hsp': r337_hsp,
                    'x': r337_x,
                    'w': r337_w,
                    'shift': r337_shift
                };
            };
            var r332_SlantedHBars = function (r338_height, r338_lx, r338_l, r338_r, r338_p) {
                var _r338_t2, _r338_t3;
                var _r338_t0 = r338_height;
                var r338_nsTop = _r338_t0[0];
                var r338_nsBot = _r338_t0[1];
                var _r338_t1 = r332_SlantedDim(r338_l, r338_r);
                var r338_shift = _r338_t1.shift;
                return r271_union(r271_HBar.m(r338_lx + r338_shift, r338_r + r338_shift, r1_mix(r338_nsTop, r338_nsBot, 0.3)), r271_HBar.m(r338_lx - r338_shift, r338_r - r338_shift, r1_mix(r338_nsTop, r338_nsBot, 0.7)));
            };
            var r332_SlantedHBarsOpen = function (r339_height, r339_lx, r339_l, r339_r, r339_p) {
                var _r339_t2, _r339_t3;
                var _r339_t0 = r339_height;
                var r339_nsTop = _r339_t0[0];
                var r339_nsBot = _r339_t0[1];
                var _r339_t1 = r332_SlantedDim(r339_l, r339_r);
                var r339_x = _r339_t1.x;
                var r339_w = _r339_t1.w;
                return r271_difference(r332_SlantedHBars(r339_height, r339_lx, r339_l, r339_r, r339_p), r271_xn$spirooutline$1aao(r271_corner(r339_l + r339_x + r339_w + r339_p * r332_fine, r339_nsTop), r271_corner(r339_r - r339_x + r339_w - r339_p * r332_fine, r339_nsTop), r271_corner(r339_r - r339_x - r339_w - r339_p * r332_fine, r339_nsBot), r271_corner(r339_l + r339_x - r339_w + r339_p * r332_fine, r339_nsBot)));
            };
            var r332_SlantedVBars = function (r340_height, r340_lx, r340_l, r340_r, r340_p) {
                var _r340_t2, _r340_t3;
                var _r340_t0 = r340_height;
                var r340_nsTop = _r340_t0[0];
                var r340_nsBot = _r340_t0[1];
                var _r340_t1 = r332_SlantedDim(r340_l, r340_r);
                var r340_x = _r340_t1.x;
                var r340_w = _r340_t1.w;
                return r271_union(r271_SlashShape(r340_l + r340_x - r340_w + r340_p * r332_fine, r340_l + r340_x + r340_w + r340_p * r332_fine, r340_nsTop, r340_nsBot, r332_fine), r271_SlashShape(r340_r - r340_x - r340_w - r340_p * r332_fine, r340_r - r340_x + r340_w - r340_p * r332_fine, r340_nsTop, r340_nsBot, r332_fine));
            };
            var r332_normalHeight = [
                r1_mix(0, r271_CAP, 0.975),
                r1_mix(0, r271_CAP, 0.025)
            ];
            var r332_tallHeight = [
                r1_mix(r271_OperTop, r271_ParenTop, 0.8),
                r1_mix(r271_OperBot, r271_ParenBot, 0.8)
            ];
            var r332_NumberSignConfig = {
                'upright': [
                    r332_UprightHBars,
                    r332_UprightVBars,
                    0,
                    r332_normalHeight
                ],
                'uprightOpen': [
                    r332_UprightHBarsOpen,
                    r332_UprightVBars,
                    1 / 8,
                    r332_normalHeight
                ],
                'slanted': [
                    r332_SlantedHBars,
                    r332_SlantedVBars,
                    0,
                    r332_normalHeight
                ],
                'slantedOpen': [
                    r332_SlantedHBarsOpen,
                    r332_SlantedVBars,
                    1 / 8,
                    r332_normalHeight
                ],
                'uprightTall': [
                    r332_UprightHBars,
                    r332_UprightVBars,
                    0,
                    r332_tallHeight
                ],
                'uprightOpenTall': [
                    r332_UprightHBarsOpen,
                    r332_UprightVBars,
                    1 / 8,
                    r332_tallHeight
                ],
                'slantedTall': [
                    r332_SlantedHBars,
                    r332_SlantedVBars,
                    0,
                    r332_tallHeight
                ],
                'slantedOpenTall': [
                    r332_SlantedHBarsOpen,
                    r332_SlantedVBars,
                    1 / 8,
                    r332_tallHeight
                ]
            };
            var _r332_t0 = Object.entries(r332_NumberSignConfig)[Symbol.iterator]();
            var _r332_t1 = void 0;
            while (!(_r332_t1 = _r332_t0.next()).done) {
                _r332_t2 = _r332_t1.value;
                r332_suffix = _r332_t2[0];
                r332_FHBars = _r332_t2[1][0];
                r332_FVBars = _r332_t2[1][1];
                r332_p = _r332_t2[1][2];
                r332_height = _r332_t2[1][3];
                _r332_t2[1];
                (function () {
                    var r343_l = r271_SB - r332_fine / 2;
                    var r343_r = r271_RightSB + r332_fine / 2;
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('numberSign.' + r332_suffix, null, r271_union(r332_FHBars(r332_height, r343_l, r343_l, r343_r, r332_p), r332_FVBars(r332_height, r343_l, r343_l, r343_r, r332_p)));
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('numberSign.jr.' + r332_suffix, null, function () {
                        var _r347_t1;
                        var _r347_t0 = this;
                        var r347_currentGlyph = _r347_t0;
                        r1_Joining.set(r347_currentGlyph, r1_Joining.Classes.Right);
                        r347_currentGlyph.include(r271_union(r332_FHBars(r332_height, r343_r - r271_Width, r343_l, r343_r, r332_p), r332_FVBars(r332_height, r343_r - r271_Width, r343_l, r343_r, r332_p)));
                        return void 0;
                    });
                }());
            }
            r271_xn$selectvariant$7Hrq('numberSign', '#');
            return r271_xn$selectvariant$7Hrq('numberSign.jr', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'numberSign'));
        }();
    });
    return void 0;
});
