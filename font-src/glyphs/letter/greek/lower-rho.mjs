'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Rho', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t7, _r271_t8;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_tagged = _r271_t0.tagged;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_OBarRight = _r271_t6.OBarRight;
        var r271_LetterBarOverlay = _r271_t6.LetterBarOverlay;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/rho', 961, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r271_MarkSet.p());
            r277_currentGlyph.include(r271_tagged('bowl', r271_OBarRight.rounded(new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_CAP))));
            r277_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/rhoSymbol', 1009, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r271_MarkSet.p());
            r284_currentGlyph.include(r271_tagged('bowl', r271_OBarRight.rounded(new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_XH))));
            r284_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            r284_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r271_SB, r271_XH - r271_SmallArchDepthA), r271_curl(r271_SB, r271_Descender + r271_SmallArchDepthB), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r271_Descender + r271_O), r271_g4(r1_mix(r271_SB, r271_RightSB, 0.75) + r271_CorrectionOMidS, r271_Descender - 0.5 * r271_O, r271_heading(r271_Rightward)), r271_g4(r271_RightSB + r271_CorrectionOMidS, r271_Descender + 0.5 * r271_O, r271_heading(r271_Rightward))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/rhoBar/overlay', null, r271_LetterBarOverlay.l.in(r271_SB, r271_Descender, 0));
        return r271_xn$derivecomposites$7Hrq('grek/rhoBar', 1020, 'grek/rho', 'grek/rhoBar/overlay');
    });
    return void 0;
});
