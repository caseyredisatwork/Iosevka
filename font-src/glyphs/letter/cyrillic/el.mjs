'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/point.mjs';
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
var r1_Point = _r1_t9.Point;
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
    r270_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r270_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-El', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t8, _r271_t9;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$assignUnicodeImpl$2Lrc8b = _r271_t0['$assignUnicodeImpl$'];
        var r271_xn$execState$2Lrc0b = _r271_t0['$execState$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_tagged = _r271_t0.tagged;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJut = _r271_t1.VJut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_LegShape = _r271_t6.LegShape;
        var r271_RightwardTailedBar = _r271_t6.RightwardTailedBar;
        var _r271_t7 = r271_xn$Capture$2Lrc8['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t7.CyrDescender;
        var r271_CyrTailDescender = _r271_t7.CyrTailDescender;
        var r271_PalatalHook = _r271_t7.PalatalHook;
        var r271_MidHook = _r271_t7.MidHook;
        var r271_UpwardHookShape = _r271_t7.UpwardHookShape;
        var r271_xn$BODYSTRAIGHT$5sIl = 0;
        var r271_xn$BODYTAILED$5sIl = 1;
        var r271_xn$BODYNONE$5sIl = 2;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABALL$5sIl = 1;
        var r271_xn$SLABLOWER$5sIl = 2;
        var r271_xn$SLABTAILEDU$5sIl7 = 3;
        var r271_xn$SLABTAILEDI$5sIl7 = 4;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'CyrElShape': r271_CyrElShape };
        });
        var r271_CyrElShape = function (r278_left, r278_right, r278_top, r278_bodyType, r278_slabType, r278__sw) {
            var _r278_t0, _r278_t1;
            return function () {
                var r280___, _r280_t0, _r280_t1, _r280_t2, _r280_t3, _r280_t5;
                var _r280_t4 = this;
                var r280_currentGlyph = _r280_t4;
                var r280_sw = r1_fallback(r278__sw, r271_Stroke);
                var r280_halfSw = r280_sw * 0.5;
                var r280_xCutLeft = r1_mix(r278_left, r278_right, 0.075);
                r280_currentGlyph.include((_r280_t0 = r278_bodyType, _r280_t0 === r271_xn$BODYTAILED$5sIl ? r271_RightwardTailedBar(r278_right, 0, r278_top, r280_sw) : _r280_t0 === r271_xn$BODYSTRAIGHT$5sIl ? r271_VBar.r(r278_right, 0, r278_top, r280_sw) : (r280___ = _r280_t0, function () {
                    var _r283_t1;
                    var _r283_t0 = this;
                    var r283_currentGlyph = _r283_t0;
                    return void 0;
                })));
                r280_currentGlyph.include(r271_HBar.m(r280_xCutLeft, r278_right, r278_top - r280_halfSw, r280_sw));
                r280_currentGlyph.include(r271_LegShape(new r271_xn$NamedParameterPair$2Lrc9b('ztop', r1_Point.fromXY(r1_Point.Type.Corner, r280_xCutLeft, r278_top)), new r271_xn$NamedParameterPair$2Lrc9b('zbot', r1_Point.fromXY(r1_Point.Type.Corner, r1_mix(r271_SB, 0, r271_SLAB ? 1 : 0.75), 0)), new r271_xn$NamedParameterPair$2Lrc9b('xb', r280_xCutLeft), new r271_xn$NamedParameterPair$2Lrc9b('fine', r280_sw)));
                r280_currentGlyph.include(r271_tagged('serifLT', (_r280_t1 = r278_slabType, _r280_t1 === r271_xn$SLABALL$5sIl ? r271_HSerif.lt(r280_xCutLeft, r278_top, r271_SideJut, r280_sw) : _r280_t1 === r271_xn$SLABLOWER$5sIl ? r271_HSerif.lt(r280_xCutLeft, r278_top, r271_SideJut, r280_sw) : _r280_t1 === r271_xn$SLABTAILEDU$5sIl7 ? r271_HSerif.lt(r280_xCutLeft, r278_top, r271_SideJut, r280_sw) : _r280_t1 === r271_xn$SLABTAILEDI$5sIl7 ? r271_HSerif.lt(r280_xCutLeft, r278_top, r271_SideJut, r280_sw) : (r280___ = _r280_t1, function () {
                    var _r292_t1;
                    var _r292_t0 = this;
                    var r292_currentGlyph = _r292_t0;
                    return void 0;
                }))));
                r280_currentGlyph.include(r271_tagged('SerifRT', (_r280_t2 = r278_slabType, _r280_t2 === r271_xn$SLABALL$5sIl ? r271_HSerif.rt(r278_right, r278_top, r271_SideJut, r280_sw) : _r280_t2 === r271_xn$SLABTAILEDU$5sIl7 ? r271_HSerif.rt(r278_right, r278_top, r271_SideJut, r280_sw) : (r280___ = _r280_t2, function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    return void 0;
                }))));
                if (r278_bodyType !== r271_xn$BODYNONE$5sIl)
                    r280_currentGlyph.include(r271_tagged('SerifRB', (_r280_t3 = r278_slabType, _r280_t3 === r271_xn$SLABALL$5sIl ? r271_HSerif.mb(r278_right - r280_halfSw * r271_HVContrast, 0, r271_Jut, r280_sw) : _r280_t3 === r271_xn$SLABLOWER$5sIl ? r271_HSerif.rb(r278_right, 0, r271_SideJut, r280_sw) : (r280___ = _r280_t3, function () {
                        var _r298_t1;
                        var _r298_t0 = this;
                        var r298_currentGlyph = _r298_t0;
                        return void 0;
                    }))));
                return void 0;
            };
        };
        var r271_CyrSoftElShape = function (r299_left, r299_right, r299_top, r299_bodyType, r299_slabType, r299__sw) {
            var _r299_t0, _r299_t1;
            return function () {
                var _r301_t1;
                var _r301_t0 = this;
                var r301_currentGlyph = _r301_t0;
                var r301_sw = r1_fallback(r299__sw, r271_Stroke);
                var r301_xm = r271_SLAB ? r1_mix(r299_left, r299_right, 0.625) + 0.25 * r301_sw * r271_HVContrast : r1_mix(r299_left, r299_right, 0.75);
                r301_currentGlyph.include(r271_CyrElShape(r299_left, r301_xm, r299_top, r299_bodyType, r299_slabType, r299__sw));
                r301_currentGlyph.include(r271_HBar.t(r301_xm, r299_right, r299_top, r301_sw));
                if (r271_SLAB)
                    r301_currentGlyph.include(r271_VSerif.dr(r299_right, r299_top, r271_VJut, r301_sw * r271_VJutStroke / r271_Stroke));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/El', 1051, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r271_MarkSet.capital());
            r307_currentGlyph.include(r271_CyrElShape(r271_SB, r271_RightSB, r271_CAP, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/smcpEl', 7467, function () {
            var _r312_t1;
            var _r312_t0 = this;
            var r312_currentGlyph = _r312_t0;
            r312_currentGlyph.include(r271_MarkSet.e());
            r312_currentGlyph.include(r271_CyrElShape(r271_SB, r271_RightSB, r271_XH, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/el.straight', null, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            r317_currentGlyph.include(r271_MarkSet.e());
            r317_currentGlyph.include(r271_CyrElShape(r271_SB, r271_RightSB, r271_XH, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABLOWER$5sIl : r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/el.tailed', null, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.include(r271_MarkSet.e());
            r322_currentGlyph.include(r271_CyrElShape(r271_SB, r271_RightSB, r271_XH, r271_xn$BODYTAILED$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABTAILEDI$5sIl7 : r271_xn$SLABTAILEDU$5sIl7 : r271_xn$SLABNONE$5sIl));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ElSoft', 42596, function () {
            var _r327_t1;
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            var r327_df = r271_DivFrame(r271_para.diversityM, 3);
            r327_currentGlyph.setWidth(r327_df.width);
            r327_currentGlyph.include(r327_df.markSet.capital());
            r327_currentGlyph.include(r271_CyrSoftElShape(r327_df.leftSB, r327_df.rightSB, r271_CAP, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl, r327_df.mvs));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/elSoft.straight', null, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            var r333_df = r271_DivFrame(r271_para.diversityM, 3);
            r333_currentGlyph.setWidth(r333_df.width);
            r333_currentGlyph.include(r333_df.markSet.e());
            r333_currentGlyph.include(r271_CyrSoftElShape(r333_df.leftSB, r333_df.rightSB, r271_XH, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABLOWER$5sIl : r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl, r333_df.mvs));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/elSoft.tailed', null, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            var r339_df = r271_DivFrame(r271_para.diversityM, 3);
            r339_currentGlyph.setWidth(r339_df.width);
            r339_currentGlyph.include(r339_df.markSet.e());
            r339_currentGlyph.include(r271_CyrSoftElShape(r339_df.leftSB, r339_df.rightSB, r271_XH, r271_xn$BODYTAILED$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABTAILEDI$5sIl7 : r271_xn$SLABTAILEDU$5sIl7 : r271_xn$SLABNONE$5sIl, r339_df.mvs));
            return void 0;
        });
        r271_xn$derivecomposites$7Hrq('cyrl/ElDescender', 1326, 'cyrl/El', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/elDescender', 1327, 'cyrl/el.straight', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/ElTail', 1221, 'cyrl/El', r271_CyrTailDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/elTail', 1222, 'cyrl/el.straight', r271_CyrTailDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/ElHook', 1298, 'cyrl/El', r271_PalatalHook.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/elHook', 1299, 'cyrl/el.straight', r271_PalatalHook.rSideJut(r271_RightSB, 0));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ElMidHook', 1312, function () {
            var _r345_t1;
            var _r345_t0 = this;
            var r345_currentGlyph = _r345_t0;
            var r345_df = r271_DivFrame(r271_para.diversityM, 3);
            var r345_xm = r345_df.middle + 0.5 * r345_df.mvs * r271_HVContrast;
            r345_currentGlyph.setWidth(r345_df.width);
            r345_currentGlyph.include(r271_MarkSet.capDesc());
            r345_currentGlyph.include(r271_CyrElShape(r345_df.leftSB, r345_xm, r271_CAP, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl, r345_df.mvs));
            r345_currentGlyph.include(r271_MidHook.m(r345_df, r271_CAP));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/elMidHook.straight', null, function () {
            var _r352_t1;
            var _r352_t0 = this;
            var r352_currentGlyph = _r352_t0;
            var r352_df = r271_DivFrame(r271_para.diversityM, 3);
            var r352_xm = r352_df.middle + 0.5 * r352_df.mvs * r271_HVContrast;
            r352_currentGlyph.include(r271_MarkSet.p());
            r352_currentGlyph.setWidth(r352_df.width);
            r352_currentGlyph.include(r271_CyrElShape(r352_df.leftSB, r352_xm, r271_XH, r271_xn$BODYSTRAIGHT$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABLOWER$5sIl : r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl, r352_df.mvs));
            r352_currentGlyph.include(r271_MidHook.m(r352_df, r271_XH));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/elMidHook.tailed', null, function () {
            var _r359_t1;
            var _r359_t0 = this;
            var r359_currentGlyph = _r359_t0;
            var r359_df = r271_DivFrame(r271_para.diversityM, 3);
            var r359_xm = r359_df.middle + 0.5 * r359_df.mvs * r271_HVContrast;
            r359_currentGlyph.include(r271_MarkSet.p());
            r359_currentGlyph.setWidth(r359_df.width);
            r359_currentGlyph.include(r271_CyrElShape(r359_df.leftSB, r359_xm, r271_XH, r271_xn$BODYTAILED$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABTAILEDI$5sIl7 : r271_xn$SLABTAILEDU$5sIl7 : r271_xn$SLABNONE$5sIl, r359_df.mvs));
            r359_currentGlyph.include(r271_MidHook.m(r359_df, r271_XH));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/LjeKomi', 1288, function () {
            var _r366_t1;
            var _r366_t0 = this;
            var r366_currentGlyph = _r366_t0;
            var r366_df = r271_DivFrame(r271_para.diversityM, 3);
            r366_currentGlyph.setWidth(r366_df.width);
            r366_currentGlyph.include(r366_df.markSet.capital());
            var r366_xm = r366_df.middle + 0.5 * r366_df.mvs * r271_HVContrast;
            r366_currentGlyph.include(r271_CyrElShape(r366_df.leftSB, r366_xm, r271_CAP, r271_xn$BODYNONE$5sIl, r271_SLAB ? r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl, r366_df.mvs));
            r366_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r366_df.middle - 0.5 * r366_df.mvs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r366_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_CAP / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA * 0.6 * r366_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB * 0.6 * r366_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r366_df.mvs)));
            var r366_sf2 = r271_SerifFrame.fromDf(r366_df, r271_CAP / 2, 0).slice(1, 2);
            if (r271_SLAB)
                r366_currentGlyph.include(r366_sf2.rt.full);
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ljeKomi', 1289, function () {
            var _r381_t1;
            var _r381_t0 = this;
            var r381_currentGlyph = _r381_t0;
            var r381_df = r271_DivFrame(r271_para.diversityM, 3);
            r381_currentGlyph.setWidth(r381_df.width);
            r381_currentGlyph.include(r381_df.markSet.e());
            var r381_xm = r381_df.middle + 0.5 * r381_df.mvs * r271_HVContrast;
            r381_currentGlyph.include(r271_CyrElShape(r381_df.leftSB, r381_xm, r271_XH, r271_xn$BODYNONE$5sIl, r271_SLAB ? r271_para.isItalic ? r271_xn$SLABLOWER$5sIl : r271_xn$SLABALL$5sIl : r271_xn$SLABNONE$5sIl, r381_df.mvs));
            r381_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r381_df.middle - 0.5 * r381_df.mvs * r271_HVContrast), new r271_xn$NamedParameterPair$2Lrc9b('right', r381_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_XH), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA * 0.6 * r381_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB * 0.6 * r381_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r381_df.mvs)));
            var r381_sf2 = r271_SerifFrame.fromDf(r381_df, r271_XH / 2, 0).slice(1, 2);
            if (r271_SLAB)
                r381_currentGlyph.include(r381_sf2.rt.full);
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('cyrl/el', 1083);
        r271_xn$selectvariant$7Hrq('cyrl/elSoft', 42597, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/el'));
        r271_xn$selectvariant$7Hrq('cyrl/elMidHook', 1313, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/el'));
        r271_alias('cyrl/El.BGR', null, 'grek/Lambda');
        return r271_alias('cyrl/el.BGR', null, 'turnv');
    });
    return void 0;
});
