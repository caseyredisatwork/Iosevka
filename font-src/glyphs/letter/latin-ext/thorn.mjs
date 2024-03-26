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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Thorn', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t6.OBarLeft;
        var r271_LetterBarOverlay = _r271_t6.LetterBarOverlay;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_xThornLeftStroke = r271_SB * 1.25;
        var r271_yThornBowlBot = r271_CAP * 0.19 + (r271_SLAB ? r271_Stroke * 0.375 : 0);
        var r271_ThornShape = function (r275_yBowlBot) {
            var _r275_t0, _r275_t1;
            return function () {
                var r277_sf, _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_yBowlTop = r271_CAP - r275_yBowlBot;
                var r277_turn = r1_mix(r277_yBowlTop, r275_yBowlBot, r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB));
                var r277_turnRadius = (r277_yBowlTop - r275_yBowlBot) / 2;
                r277_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r271_xThornLeftStroke, r277_yBowlTop, r271_heading(r271_Rightward)), r271_curl(r271_RightSB - r277_turnRadius - r271_CorrectionOMidS, r277_yBowlTop), r271_archv(), r271_g4(r271_RightSB - r271_O, r277_turn), r271_arcvh(), r271_flat(r271_RightSB - r277_turnRadius + r271_CorrectionOMidS, r275_yBowlBot), r271_curl(r271_xThornLeftStroke, r275_yBowlBot, r271_heading(r271_Leftward))));
                r277_currentGlyph.include(r271_VBar.l(r271_xThornLeftStroke, 0, r271_CAP));
                if (r271_SLAB) {
                    r277_sf = r271_SerifFrame(r271_Ascender, 0, r271_xThornLeftStroke, r271_RightSB);
                    r277_currentGlyph.include(function () {
                        var _r282_t1;
                        var _r282_t0 = this;
                        var r282_currentGlyph = _r282_t0;
                        r282_currentGlyph.include(r277_sf.lt.fullSide, true, true);
                        r282_currentGlyph.include(r277_sf.lb.fullSide);
                        return void 0;
                    });
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Thorn', 222, function () {
            var _r287_t1;
            var _r287_t0 = this;
            var r287_currentGlyph = _r287_t0;
            r287_currentGlyph.include(r271_MarkSet.capital());
            r287_currentGlyph.include(r271_ThornShape(r271_yThornBowlBot));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('thorn', 254, function () {
            var r292_sf, _r292_t1;
            var _r292_t0 = this;
            var r292_currentGlyph = _r292_t0;
            r292_currentGlyph.include(r271_MarkSet.bp());
            r292_currentGlyph.include(r271_OBarLeft.shape());
            r292_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, r271_Ascender));
            if (r271_SLAB) {
                r292_sf = r271_SerifFrame(r271_Ascender, r271_Descender, r271_SB, r271_RightSB);
                r292_currentGlyph.include(function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    r298_currentGlyph.include(r292_sf.lt.outer, true, true);
                    r298_currentGlyph.include(r292_sf.lb.fullSide);
                    return void 0;
                });
            }
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('ThornBarTop/Overlay', null, r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xThornLeftStroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - (r271_SLAB ? r271_Stroke : 0)), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_CAP - r271_yThornBowlBot)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('thornBarTop/Overlay', null, r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_SB), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_Ascender - (r271_SLAB ? r271_Stroke : 0)), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_XH)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('ThornBarBot/Overlay', null, r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xThornLeftStroke), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0 + (r271_SLAB ? r271_Stroke : 0)), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_yThornBowlBot)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('thornBarBot/Overlay', null, r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_SB), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_Descender + (r271_SLAB ? r271_Stroke : 0)), new r271_xn$NamedParameterPair$2Lrc9b('top', 0)));
        r271_xn$derivecomposites$7Hrq('ThornBarTop', 42852, 'Thorn', 'ThornBarTop/Overlay');
        r271_xn$derivecomposites$7Hrq('thornBarTop', 42853, 'thorn', 'thornBarTop/Overlay');
        r271_xn$derivecomposites$7Hrq('ThornBarBot', 42854, 'Thorn', 'ThornBarBot/Overlay');
        r271_xn$derivecomposites$7Hrq('thornBarBot', 42855, 'thorn', 'thornBarBot/Overlay');
        r271_alias('grek/Sho', 1015, 'Thorn');
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/sho', 1016, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            r319_currentGlyph.include(r271_MarkSet.bp());
            r319_currentGlyph.include(r271_OBarLeft.shape());
            r319_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, r271_Ascender));
            return void 0;
        });
    });
    return void 0;
});
