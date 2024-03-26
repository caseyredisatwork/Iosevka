'use strict';
import * as _s0_t0 from '../support/glyph/index.mjs';
import * as _s0_t1 from '../support/geometry/transform.mjs';
var _s0_t2;
export {
    _s0_t2 as BuildCompatLigatures
};
var r1_BuildCompatLigatures, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Glyph = _r1_t8.Glyph;
var _r1_t9 = _s0_t1;
var r1_Transform = _r1_t9.Transform;
var r1_GDEF_SIMPLE = 1;
var r1_GDEF_LIGATURE = 2;
var r1_GDEF_MARK = 3;
var r1_interpretLookups = function (r131_gs, r131_lutns, r131_lookups) {
    var r131_lutn, r131_lut, _r131_t3, _r131_t4, _r131_t6;
    var _r131_t0 = r131_lutns;
    var _r131_t1 = _r131_t0.length;
    var _r131_t2 = 0;
    var _r131_t5 = _r131_t2 < _r131_t1;
    while (_r131_t5) {
        _r131_t6 = (r131_lutn = _r131_t0[_r131_t2], r131_lut = r131_lookups[r131_lutn], r131_lut ? r1_interpretLookup(r131_gs, r131_lut, r131_lookups) : void 0, _r131_t2 = _r131_t2 + 1);
        _r131_t5 = _r131_t2 < _r131_t1;
    }
    return _r131_t6;
};
var r1_interpretLookup = function (r134_gs, r134_lut, r134_lookups) {
    var r134_j, r134_incN, _r134_t1, _r134_t2, _r134_t3, _r134_t4, _r134_t5, _r134_t6, _r134_t7, _r134_t8, _r134_t9, _r134_t10, _r134_tag11, _r134_t12, _r134_t13, _r134_t14, _r134_tag15;
    var _r134_t0 = r134_lut.type;
    if ('gsub_chaining' === _r134_t0) {
        r134_j = 0;
        _r134_t6 = r134_j < r134_gs.length;
        while (_r134_t6) {
            r134_incN = 1;
            (function () {
                var r140_rule, r140_matchT, r140_ib, r140_foundMatch, r140_k, r140_app, _r140_t3, _r140_t4, _r140_t5, _r140_t7, _r140_t8, _r140_tag9;
                var _r140_t0 = r134_lut.rules;
                var _r140_t1 = _r140_t0.length;
                var _r140_t2 = 0;
                var _r140_t6 = _r140_t2 < _r140_t1;
                while (_r140_t6) {
                    r140_rule = _r140_t0[_r140_t2];
                    r140_matchT = r140_rule.match;
                    r140_ib = r140_rule.inputBegins;
                    r140_foundMatch = true;
                    r140_k = 0;
                    while (r140_foundMatch && r140_k < r140_matchT.length) {
                        if (!r134_gs[r134_j + r140_k - r140_ib])
                            r140_foundMatch = false;
                        else if (r140_matchT[r140_k].indexOf(r134_gs[r134_j + r140_k - r140_ib]) < 0)
                            r140_foundMatch = false;
                        r140_k = r140_k + 1;
                    }
                    if (r140_foundMatch) {
                        _r140_t3 = r140_rule.apply;
                        _r140_t4 = _r140_t3.length;
                        _r140_t5 = 0;
                        while (_r140_t5 < _r140_t4) {
                            r140_app = _r140_t3[_r140_t5];
                            (function () {
                                var r146_aj = r134_j - r140_ib + r140_app.at;
                                var r146_alut = r134_lookups[r140_app.lookup];
                                return r1_interpretLookupAt(r134_gs, r146_aj, r146_alut);
                            }());
                            _r140_t5 = _r140_t5 + 1;
                        }
                        r134_incN = r134_incN + r140_rule.inputEnds - r140_rule.inputBegins;
                        return void 0;
                    }
                    _r140_t7 = _r140_t2 = _r140_t2 + 1;
                    _r140_t6 = _r140_t2 < _r140_t1;
                }
                return _r140_t7;
            }());
            _r134_t7 = r134_j = r134_j + r134_incN;
            _r134_t6 = r134_j < r134_gs.length;
        }
        return _r134_t7;
    } else if ('gsub_reverse' === _r134_t0) {
        r134_j = r134_gs.length - 1;
        _r134_t8 = r134_j >= 0;
        while (_r134_t8) {
            (function () {
                var r136_rule, r136_matchT, r136_ib, r136_foundMatch, r136_k, _r136_t4;
                var _r136_t0 = r134_lut.rules;
                var _r136_t1 = _r136_t0.length;
                var _r136_t2 = 0;
                var _r136_t3 = _r136_t2 < _r136_t1;
                while (_r136_t3) {
                    r136_rule = _r136_t0[_r136_t2];
                    r136_matchT = r136_rule.match;
                    r136_ib = r136_rule.inputIndex;
                    r136_foundMatch = true;
                    r136_k = 0;
                    while (r136_foundMatch && r136_k < r136_matchT.length) {
                        if (!r134_gs[r134_j + r136_k - r136_ib])
                            r136_foundMatch = false;
                        else if (r136_matchT[r136_k].indexOf(r134_gs[r134_j + r136_k - r136_ib]) < 0)
                            r136_foundMatch = false;
                        r136_k = r136_k + 1;
                    }
                    if (r136_foundMatch)
                        r134_gs[r134_j] = r136_rule.to[r136_matchT[r136_ib].indexOf(r134_gs[r134_j])] || r134_gs[r134_j];
                    _r136_t4 = _r136_t2 = _r136_t2 + 1;
                    _r136_t3 = _r136_t2 < _r136_t1;
                }
                return _r136_t4;
            }());
            _r134_t9 = r134_j = r134_j - 1;
            _r134_t8 = r134_j >= 0;
        }
        return _r134_t9;
    } else if ('gsub_single' === _r134_t0) {
        r134_j = 0;
        _r134_t12 = r134_j < r134_gs.length;
        while (_r134_t12) {
            _r134_t13 = (r1_interpretLookupAt(r134_gs, r134_j, r134_lut), r134_j = r134_j + 1);
            _r134_t12 = r134_j < r134_gs.length;
        }
        return _r134_t13;
    } else
        return void 0;
};
var r1_interpretLookupAt = function (r147_gs, r147_j, r147_lut) {
    var _r147_t1, _r147_t2;
    var _r147_t0 = r147_lut.type;
    return 'gsub_single' === _r147_t0 ? r147_lut.substitutions[r147_gs[r147_j]] ? r147_gs[r147_j] = r147_lut.substitutions[r147_gs[r147_j]] : void 0 : void 0;
};
_s0_t2 = r1_BuildCompatLigatures = function (r149_para, r149_glyphStore, r149_GSUB, r149_GDEF, r149_config) {
    var r149_cldef, _r149_t3, _r149_t4, _r149_t6, _r149_t7, _r149_tag8;
    var _r149_t0 = r149_config;
    var _r149_t1 = _r149_t0.length;
    var _r149_t2 = 0;
    var _r149_t5 = _r149_t2 < _r149_t1;
    while (_r149_t5) {
        r149_cldef = _r149_t0[_r149_t2];
        (function () {
            var r153_fn, r153_gn, r153_g;
            if (!r149_cldef.unicode)
                return void 0;
            if (!r149_cldef.featureTag)
                return void 0;
            if (!r149_cldef.sequence)
                return void 0;
            var r153_feature = null;
            var _r153_t0 = r149_GSUB.languages.DFLT_DFLT.features;
            var _r153_t1 = _r153_t0.length;
            var _r153_t2 = 0;
            while (_r153_t2 < _r153_t1) {
                r153_fn = _r153_t0[_r153_t2];
                if (r149_cldef.featureTag === r153_fn.slice(0, 4))
                    r153_feature = r149_GSUB.features[r153_fn];
                _r153_t2 = _r153_t2 + 1;
            }
            if (!r153_feature)
                return void 0;
            var r153_gnames = [];
            var r153_j = 0;
            while (r153_j < r149_cldef.sequence.length) {
                if (!r149_glyphStore.queryByUnicode(r149_cldef.sequence.charCodeAt(r153_j)))
                    return void 0;
                r153_gnames.push(r149_glyphStore.queryNameOfUnicode(r149_cldef.sequence.charCodeAt(r153_j)));
                r153_j = r153_j + 1;
            }
            r1_interpretLookups(r153_gnames, r153_feature, r149_GSUB.lookups);
            var r153_g1Name = '$clig.' + r149_cldef.unicode;
            var r153_g1 = new r1_Glyph(r153_g1Name);
            r153_g1.advanceWidth = 0;
            var _r153_t3 = r153_gnames;
            var _r153_t4 = _r153_t3.length;
            var _r153_t5 = 0;
            while (_r153_t5 < _r153_t4) {
                r153_gn = _r153_t3[_r153_t5];
                r153_g = r149_glyphStore.queryByName(r153_gn);
                r153_g1.applyTransform(new r1_Transform(1, 0, 0, 1, -r153_g1.advanceWidth, 0));
                r153_g1.includeGlyph(r153_g);
                r153_g1.applyTransform(new r1_Transform(1, 0, 0, 1, r153_g1.advanceWidth, 0));
                r153_g1.advanceWidth = r153_g1.advanceWidth + r153_g.advanceWidth;
                _r153_t5 = _r153_t5 + 1;
            }
            if (r149_para.forceMonospace && Math.round(r153_g1.advanceWidth) > Math.round(r149_para.width))
                throw new Error('Compat ligature wider than one unit, conflicts with fontconfig-mono: ' + r149_cldef.unicode.toString(16));
            r149_glyphStore.addGlyph(r153_g1Name, r153_g1);
            r149_glyphStore.encodeGlyph(r149_cldef.unicode, r153_g1);
            return r149_GDEF.glyphClassDef[r153_g1Name] = r1_GDEF_LIGATURE;
        }());
        _r149_t6 = _r149_t2 = _r149_t2 + 1;
        _r149_t5 = _r149_t2 < _r149_t1;
    }
    return _r149_t6;
};
