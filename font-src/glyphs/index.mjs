'use strict';
import * as _s0_t0 from '../support/glyph/index.mjs';
import * as _s0_t1 from '../support/glyph-store.mjs';
import * as _s0_t2 from '../support/glyph-block.mjs';
import * as _s0_t3 from '../support/gr.mjs';
import * as _s0_t4 from '../kits/spiro-kit.mjs';
import * as _s0_t5 from '../kits/boole-kit.mjs';
import * as _s0_t6 from '../meta/aesthetics.mjs';
import * as _s0_t7 from '../support/utils.mjs';
import * as _s0_t9 from './common/shapes.mjs';
import * as _s0_t10 from './common/derivatives.mjs';
import * as _s0_t11 from './space/index.mjs';
import * as _s0_t12 from './marks/index.mjs';
import * as _s0_t13 from './letter/shared.mjs';
import * as _s0_t14 from './letter/latin.mjs';
import * as _s0_t15 from './letter/greek.mjs';
import * as _s0_t16 from './letter/cyrillic.mjs';
import * as _s0_t17 from './number/index.mjs';
import * as _s0_t18 from './symbol/shared.mjs';
import * as _s0_t19 from './symbol/punctuation.mjs';
import * as _s0_t20 from './symbol/arrow.mjs';
import * as _s0_t21 from './symbol/geometric.mjs';
import * as _s0_t22 from './symbol/enclosure.mjs';
import * as _s0_t23 from './symbol/math.mjs';
import * as _s0_t24 from './symbol/letter.mjs';
import * as _s0_t25 from './symbol/braille.mjs';
import * as _s0_t26 from './symbol/mosaic.mjs';
import * as _s0_t27 from './symbol/pictograph.mjs';
import * as _s0_t28 from './symbol/ligation.mjs';
import * as _s0_t29 from './auto-build/special-accented-letters.mjs';
import * as _s0_t30 from './auto-build/mark-doppelganger.mjs';
import * as _s0_t31 from './auto-build/accents.mjs';
import * as _s0_t32 from './auto-build/transformed.mjs';
import * as _s0_t33 from './auto-build/composite.mjs';
var _s0_t8;
export {
    _s0_t8 as buildGlyphs
};
var r1_buildGlyphs, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Glyph = _r1_t8.Glyph;
var _r1_t9 = _s0_t1;
var r1_GlyphStore = _r1_t9.GlyphStore;
var _r1_t10 = _s0_t2;
var r1_GlyphBlock = _r1_t10.GlyphBlock;
var r1_GlyphBlockExecState = _r1_t10.GlyphBlockExecState;
var r1_Gr = _s0_t3;
var r1_SpiroKit = _s0_t4;
var r1_BooleKit = _s0_t5;
var _r1_t11 = _s0_t6;
var r1_DesignParameters = _r1_t11.DesignParameters;
var r1_isFinite = isFinite;
var _r1_t12 = _s0_t7;
var r1_mix = _r1_t12.mix;
var r1_linreg = _r1_t12.linreg;
var r1_clamp = _r1_t12.clamp;
var r1_fallback = _r1_t12.fallback;
var r1_xn$NamedParameterPair$2Lrc9b = _r1_t12['$NamedParameterPair$'];
var _r1_t13 = _s0_t6;
var r1_calculateMetrics = _r1_t13.calculateMetrics;
var r1_setFontMetrics = _r1_t13.setFontMetrics;
var r1_GenDivFrame = _r1_t13.GenDivFrame;
_s0_t8 = r1_buildGlyphs = function (r273_para, r273_recursive) {
    var r273_gb, _r273_t4, _r273_t5;
    var r273_glyphStore = new r1_GlyphStore();
    var r273_Metrics = r1_calculateMetrics(r273_para);
    var r273_fontMetrics = {
        'head': {},
        'hhea': {},
        'os2': {},
        'post': {}
    };
    r1_setFontMetrics(r273_para, r273_Metrics, r273_fontMetrics);
    var _r273_t0 = [
        'AS-BASE',
        'ALSO-METRICS'
    ];
    var r273_AS_BASE = _r273_t0[0];
    var r273_ALSO_METRICS = _r273_t0[1];
    var r273_DivFrame = r1_GenDivFrame(r273_Metrics);
    var r273_MarkSet = r273_DivFrame(1, 2).markSet;
    var r273_xn$glyphisneeded$1aao3 = function (r274_name) {
        var _r274_t0, _r274_t1;
        return !r273_recursive || r273_recursive.glyphIsNeeded(r274_name);
    };
    var r273_xn$createAndSaveGlyphImpl$2Lrc3c = function (r275__1, r275__2, r275_actions) {
        var _r275_t0, _r275_t1;
        var r275_saveGlyphName = null;
        var r275_unicode = null;
        if (typeof r275__1 === 'number' && r275__1) {
            r275_saveGlyphName = 'uni' + r275__1.toString(16).padStart(4, '0').toUpperCase();
            r275_unicode = r275__1;
        } else if (typeof r275__1 === 'string' && r275__1) {
            r275_saveGlyphName = r275__1;
            r275_unicode = r275__2;
        } else if (true) {
            r275_saveGlyphName = null;
            r275_unicode = null;
        } else
            void 0;
        if (r275_saveGlyphName && !r273_xn$glyphisneeded$1aao3(r275_saveGlyphName))
            return void 0;
        if (r273_para.verbose)
            console.log(r275_saveGlyphName);
        var r275_glyphObject = new r1_Glyph(r275_saveGlyphName);
        r275_glyphObject.setWidth(r273_Metrics.Width);
        r275_glyphObject.gizmo = r273_Metrics.GlobalTransform;
        r275_glyphObject['_m_dependencyManager'] = r273_xn$execState$2Lrc0b.dependencyManager;
        r275_glyphObject.include(r275_actions, true, true);
        r273_xn$execState$2Lrc0b.setGlyphToBlockDependency(r275_glyphObject);
        if (r275_saveGlyphName) {
            if (r275_saveGlyphName[0] !== '.' && r273_glyphStore.queryByName(r275_saveGlyphName))
                throw new Error('Glyph ' + r275_saveGlyphName + ' already exists');
            r273_glyphStore.addGlyph(r275_saveGlyphName, r275_glyphObject);
            if (r275_unicode)
                r273_xn$assignUnicodeImpl$2Lrc8b(r275_glyphObject, r275_unicode);
        }
        return r275_glyphObject;
    };
    var r273_xn$assignUnicodeImpl$2Lrc8b = function (r276_g, r276_unicode) {
        var _r276_t0, _r276_t1;
        var r276_u = r276_unicode;
        if (typeof r276_unicode === 'string')
            r276_u = r276_unicode.codePointAt(0);
        return r273_glyphStore.encodeGlyph(r276_u, r276_g);
    };
    var r273_xn$pendingGlyphBlocks$2Lrc9b = [];
    var r273_xn$execState$2Lrc0b = new r1_GlyphBlockExecState();
    var r273_xn$defineGlyphBlockImpl$2Lrc1c = function (r277_xn$Capture$2Lrc8, r277_blockName, r277_body) {
        var _r277_t0, _r277_t1;
        var r277_glyphBlock = new r1_GlyphBlock(r277_xn$Capture$2Lrc8, r273_xn$execState$2Lrc0b, r277_blockName, r277_body);
        if (!r277_xn$Capture$2Lrc8[r277_blockName])
            r277_xn$Capture$2Lrc8[r277_blockName] = r277_glyphBlock;
        return r273_xn$pendingGlyphBlocks$2Lrc9b.push(r277_glyphBlock);
    };
    var r273_SpiroFns = r1_SpiroKit.SetupBuilders({
        'globalTransform': r273_Metrics.GlobalTransform,
        'Contrast': r273_Metrics.Contrast,
        'Stroke': r273_Metrics.Stroke,
        'CorrectionOMidX': r273_Metrics.CorrectionOMidX,
        'Superness': r1_DesignParameters.superness
    });
    var r273_BooleFns = r1_BooleKit.SetupBuilders({
        'globalTransform': r273_Metrics.GlobalTransform,
        'Glyph': r1_Glyph
    });
    var r273_tagged = function (r278_tag, r278_component) {
        var _r278_t0, _r278_t1;
        return function (r279_ca, r279_cw) {
            var _r279_t1;
            var _r279_t0 = this;
            var r279_t = _r279_t0.ctxTag;
            _r279_t0.ctxTag = r278_tag;
            var r279_ret = _r279_t0.include(r278_component, r279_ca, r279_cw);
            _r279_t0.ctxTag = r279_t;
            return r279_ret;
        };
    };
    var r273_xn$Capture$2Lrc181 = {
        '$createAndSaveGlyphImpl$': r273_xn$createAndSaveGlyphImpl$2Lrc3c,
        '$NamedParameterPair$': r1_xn$NamedParameterPair$2Lrc9b,
        '$assignUnicodeImpl$': r273_xn$assignUnicodeImpl$2Lrc8b,
        '$defineGlyphBlockImpl$': r273_xn$defineGlyphBlockImpl$2Lrc1c,
        '$execState$': r273_xn$execState$2Lrc0b,
        'Metrics': Object.assign({}, r273_Metrics),
        'para': r273_para,
        'recursive': r273_recursive,
        'glyphStore': r273_glyphStore,
        'SpiroFns': r273_SpiroFns,
        'BooleFns': r273_BooleFns,
        'DivFrame': r273_DivFrame,
        'MarkSet': r273_MarkSet,
        'AS_BASE': r273_AS_BASE,
        'ALSO_METRICS': r273_ALSO_METRICS,
        'glyph-is-needed': r273_xn$glyphisneeded$1aao3,
        'buildGlyphs': r1_buildGlyphs,
        'tagged': r273_tagged,
        'fontMetrics': r273_fontMetrics
    };
    _s0_t9.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t10.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t11.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t12.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t13.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t14.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t15.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t16.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t17.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t18.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t19.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t20.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t21.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t22.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t23.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t24.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t25.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t26.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t27.apply.call(r273_xn$Capture$2Lrc181);
    _s0_t28.apply.call(r273_xn$Capture$2Lrc181);
    if (!r273_recursive) {
        _s0_t29.apply.call(r273_xn$Capture$2Lrc181);
        _s0_t30.apply.call(r273_xn$Capture$2Lrc181);
        _s0_t31.apply.call(r273_xn$Capture$2Lrc181);
        _s0_t32.apply.call(r273_xn$Capture$2Lrc181);
        _s0_t33.apply.call(r273_xn$Capture$2Lrc181);
    }
    var _r273_t1 = r273_xn$pendingGlyphBlocks$2Lrc9b;
    var _r273_t2 = _r273_t1.length;
    var _r273_t3 = 0;
    while (_r273_t3 < _r273_t2) {
        r273_gb = _r273_t1[_r273_t3];
        r273_gb.resolve();
        _r273_t3 = _r273_t3 + 1;
    }
    r1_Gr.linkSuffixPairGr(r273_glyphStore, 'NWID', 'WWID', r1_Gr.Nwid, r1_Gr.Wwid);
    r1_Gr.linkSuffixPairGr(r273_glyphStore, 'lnum', 'onum', r1_Gr.Lnum, r1_Gr.Onum);
    r1_Gr.linkSuffixGr(r273_glyphStore, 'aplForm', r1_Gr.AplForm);
    return {
        'glyphStore': r273_glyphStore,
        'fontMetrics': r273_fontMetrics
    };
};
