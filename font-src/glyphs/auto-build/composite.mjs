'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
import * as _s0_t2 from '../../support/geometry/index.mjs';
import * as _s0_t3 from '../../support/geometry/transform.mjs';
var _s0_t4;
export {
    _s0_t4 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_Joining = _r1_t9.Joining;
var r1_hashCv = _r1_t9.hashCv;
var _r1_t10 = _s0_t2;
var r1_hashGeometry = _r1_t10.hashGeometry;
var _r1_t11 = _s0_t3;
var r1_Transform = _r1_t11.Transform;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r270_block, _r270_t4, _r270_t6;
    var _r270_t3 = this;
    var _r270_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r270_t1 = _r270_t0.length;
    var _r270_t2 = 0;
    var _r270_t5 = _r270_t2 < _r270_t1;
    while (_r270_t5) {
        _r270_t6 = (r270_block = _r270_t0[_r270_t2], r270_block(_r270_t3), _r270_t2 = _r270_t2 + 1);
        _r270_t5 = _r270_t2 < _r270_t1;
    }
    return _r270_t6;
};
var r1_DECOMPOSABLE = true;
var r1_xn$NONDECOMPOSABLE$9Jrj = false;
var r1_CENTERED = true;
var r1_xn$NOTCENTERED$9Jrj = false;
var r1_xn$ALLOWPROPORTIONAL$1aao = true;
var r1_xn$MONOSPACEONLY$5Frx = false;
var r1_StandardSpacing = void 0;
r1_xn$GlyphBlocks$2Lrc2b.push(function (r274_xn$Capture_Ext$2Lrc2b) {
    var _r274_t0, _r274_t1;
    r274_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r274_xn$Capture_Ext$2Lrc2b, 'Autobuild-Enclosure-Shared', function (r275_xn$Capture$2Lrc8, r275_xn$ExportCapture$2Lrc4b) {
        var r275_applyRelations, _r275_t6, _r275_t7;
        var _r275_t0 = r275_xn$Capture$2Lrc8;
        var r275_xn$createAndSaveGlyphImpl$2Lrc3c = _r275_t0['$createAndSaveGlyphImpl$'];
        var r275_xn$NamedParameterPair$2Lrc9b = _r275_t0['$NamedParameterPair$'];
        var r275_xn$assignUnicodeImpl$2Lrc8b = _r275_t0['$assignUnicodeImpl$'];
        var r275_xn$execState$2Lrc0b = _r275_t0['$execState$'];
        var r275_para = _r275_t0.para;
        var _r275_t1 = r275_xn$Capture$2Lrc8.Metrics;
        var r275_CAP = _r275_t1.CAP;
        var _r275_t2 = r275_xn$Capture$2Lrc8.SpiroFns;
        var _r275_t3 = r275_xn$Capture$2Lrc8.BooleFns;
        var _r275_t4 = r275_xn$Capture$2Lrc8.CommonShapes.resolve();
        var _r275_t5 = r275_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r275_xn$queryglyph$1aao = _r275_t5['query-glyph'];
        var r275_DeriveMeshT = _r275_t5.DeriveMeshT;
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'CircNameNoCheck': r275_CircNameNoCheck };
        });
        var r275_CircNameNoCheck = function (r280_unicode, r280_prefix, r280_parts, r280_suffix) {
            var _r280_t0, _r280_t1;
            var r280_baseName = r280_prefix + '{' + r280_unicode + '}{' + r280_parts.join('}{') + '}';
            return r280_suffix ? r280_baseName + '.' + r280_suffix : r280_baseName;
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'CircName': r275_CircName };
        });
        var r275_CircName = function (r283_unicode, r283_prefix, r283_parts, r283_suffix) {
            var _r283_t0, _r283_t1;
            var r283_name = r275_CircNameNoCheck(r283_unicode, r283_prefix, r283_parts, r283_suffix);
            if (r275_xn$queryglyph$1aao(r283_name))
                throw new Error('Glyph exists : ' + r283_name);
            return r283_name;
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r285_t0, _r285_t1;
            return { 'EnsureComponentGlyphT': r275_EnsureComponentGlyphT };
        });
        var r275_EnsureComponentGlyphT = function (r286_gnPart, r286_fnBuildup) {
            var _r286_t0, _r286_t1;
            var r286_rs = new r1_Set();
            return r275_DeriveMeshT([r286_gnPart], r1_AnyCv, function (r287_gns, r287_gr) {
                var _r287_t0, _r287_t1;
                return r286_fnBuildup(r287_gns[0]);
            }, function (r288_gniFrom, r288_gniTo) {
                var _r288_t0, _r288_t1;
                return r275_xn$queryglyph$1aao(r288_gniFrom).tryBecomeMirrorOf(r275_xn$queryglyph$1aao(r288_gniTo), r286_rs);
            });
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'getGlyphDefaultShift': r275_getGlyphDefaultShift };
        });
        var r275_getGlyphDefaultShift = function (r291_bal, r291_baly, r291_g) {
            var _r291_t0, _r291_t1;
            if (r291_g && r291_g.baseAnchors.above && r291_g.baseAnchors.below)
                if (r291_bal)
                    return r275_CAP / 2 - r1_mix(r291_baly, r1_mix(r291_g.baseAnchors.above.y, r291_g.baseAnchors.below.y, 0.5), r291_bal);
                else
                    return r275_CAP / 2 - r1_mix(r291_g.baseAnchors.above.y, r291_g.baseAnchors.below.y, 0.5);
            return 0;
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r293_t0, _r293_t1;
            return { 'CollectJobs': r275_CollectJobs };
        });
        var r275_CollectJobs = function (r294_globallyDecomposable, r294_centered, r294_allowProportional, r294_prefix, r294_suffix, r294_demands) {
            var r294_demand, _r294_t3, _r294_t4, _r294_t5, _r294_tag6;
            var r294_nonDecomposable = [];
            var r294_decomposableJobs = [];
            var r294_relApplications = [];
            var r294_decomposableRelGlyphs = new r1_Set();
            var _r294_t0 = r294_demands;
            var _r294_t1 = _r294_t0.length;
            var _r294_t2 = 0;
            while (_r294_t2 < _r294_t1) {
                r294_demand = _r294_t0[_r294_t2];
                (function () {
                    var r297_part, r297_g, r297_relatedGlyphs, r297_gr, r297_mesh, r297_fromParts, r297_toParts, r297_gn, _r297_t3, _r297_t4, _r297_t5, _r297_t6, _r297_t7, _r297_t8, _r297_t9, _r297_t10, _r297_t11, _r297_t12, _r297_t13, _r297_t14, _r297_t15, _r297_t16, _r297_t17, _r297_t18, _r297_t19, _r297_t20, _r297_t21, _r297_t22, _r297_t23, _r297_t24, _r297_t25, _r297_t26, _r297_tag27;
                    var r297_unicode = r294_demand[0];
                    var r297_parts = r294_demand[1];
                    var r297_restInfo = r294_demand.slice(2);
                    var r297_origJobGlyphGn = r275_CircName(r297_unicode, r294_prefix, r297_parts, r294_suffix);
                    var r297_demandDecomposable = r275_para.enableCvSs && r294_globallyDecomposable;
                    var _r297_t0 = r297_parts;
                    var _r297_t1 = _r297_t0.length;
                    var _r297_t2 = 0;
                    while (_r297_t2 < _r297_t1) {
                        r297_part = _r297_t0[_r297_t2];
                        if (r275_xn$queryglyph$1aao(r297_part)) {
                            r297_g = r275_xn$queryglyph$1aao(r297_part);
                            r297_relatedGlyphs = r1_AnyCv.query(r297_g);
                            _r297_t3 = r297_relatedGlyphs;
                            _r297_t4 = _r297_t3.length;
                            _r297_t5 = 0;
                            while (_r297_t5 < _r297_t4) {
                                r297_gr = _r297_t3[_r297_t5];
                                if (r275_xn$queryglyph$1aao(r297_gr.get(r297_g))) {
                                    if (r294_allowProportional && r275_xn$queryglyph$1aao(r297_gr.get(r297_g)).advanceWidth !== r297_g.advanceWidth)
                                        r297_demandDecomposable = false;
                                    if (r294_centered && r275_getGlyphDefaultShift(0, 0, r275_xn$queryglyph$1aao(r297_gr.get(r297_g))) !== r275_getGlyphDefaultShift(0, 0, r297_g))
                                        r297_demandDecomposable = false;
                                }
                                _r297_t5 = _r297_t5 + 1;
                            }
                        }
                        _r297_t2 = _r297_t2 + 1;
                    }
                    var r297_jobsOrig = r297_demandDecomposable ? r294_decomposableJobs : r294_nonDecomposable;
                    r297_jobsOrig.push([
                        r297_origJobGlyphGn,
                        r297_unicode,
                        r297_parts
                    ].concat(r297_restInfo));
                    if (r275_para.enableCvSs) {
                        if (r297_demandDecomposable) {
                            _r297_t6 = r297_parts;
                            _r297_t7 = _r297_t6.length;
                            _r297_t8 = 0;
                            _r297_t22 = _r297_t8 < _r297_t7;
                            while (_r297_t22) {
                                r297_part = _r297_t6[_r297_t8];
                                r297_mesh = r1_getGrMesh([r297_part], r1_AnyCv, r275_xn$queryglyph$1aao);
                                _r297_t9 = r297_mesh;
                                _r297_t10 = _r297_t9.length;
                                _r297_t11 = 0;
                                while (_r297_t11 < _r297_t10) {
                                    _r297_t12 = _r297_t9[_r297_t11];
                                    r297_gr = _r297_t12[0];
                                    r297_fromParts = _r297_t12[1];
                                    r297_toParts = _r297_t12[2];
                                    _r297_t13 = r297_toParts;
                                    _r297_t14 = _r297_t13.length;
                                    _r297_t15 = 0;
                                    while (_r297_t15 < _r297_t14) {
                                        r297_gn = _r297_t13[_r297_t15];
                                        r294_decomposableRelGlyphs.add(r297_gn);
                                        _r297_t15 = _r297_t15 + 1;
                                    }
                                    _r297_t11 = _r297_t11 + 1;
                                }
                                _r297_t23 = _r297_t8 = _r297_t8 + 1;
                                _r297_t22 = _r297_t8 < _r297_t7;
                            }
                            _r297_t21 = _r297_t23;
                        } else {
                            r297_mesh = r1_getGrMesh(r297_parts, r1_AnyCv, r275_xn$queryglyph$1aao);
                            _r297_t16 = r297_mesh;
                            _r297_t17 = _r297_t16.length;
                            _r297_t18 = 0;
                            _r297_t24 = _r297_t18 < _r297_t17;
                            while (_r297_t24) {
                                _r297_t19 = _r297_t16[_r297_t18];
                                r297_gr = _r297_t19[0];
                                r297_fromParts = _r297_t19[1];
                                r297_toParts = _r297_t19[2];
                                (function () {
                                    var r305_fromGn = r275_CircNameNoCheck(r297_unicode, r294_prefix, r297_fromParts, r294_suffix);
                                    var r305_toGn = r275_CircName(r297_unicode, r294_prefix, r297_toParts, r294_suffix);
                                    r294_nonDecomposable.push([
                                        r305_toGn,
                                        null,
                                        r297_toParts
                                    ].concat(r297_restInfo));
                                    return r294_relApplications.push([
                                        r297_gr,
                                        r305_fromGn,
                                        r305_toGn
                                    ]);
                                }());
                                _r297_t25 = _r297_t18 = _r297_t18 + 1;
                                _r297_t24 = _r297_t18 < _r297_t17;
                            }
                            _r297_t21 = _r297_t25;
                        }
                        _r297_t20 = _r297_t21;
                    }
                    return _r297_t20;
                }());
                _r294_t2 = _r294_t2 + 1;
            }
            return {
                'nonDecomposable': r294_nonDecomposable,
                'decomposableJobs': r294_decomposableJobs,
                'decomposableRelGlyphs': r294_decomposableRelGlyphs,
                'relApplications': r294_relApplications
            };
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r307_t0, _r307_t1;
            return { 'CreateDerivedFontFromJobs': r275_CreateDerivedFontFromJobs };
        });
        var r275_CreateDerivedFontFromJobs = function (r308_aj, r308_restGids, r308_fn) {
            var r308_gn, r308_gnf, r308_unicode, r308_parts, _r308_t6, _r308_t7, _r308_t8, _r308_t9, _r308_t13, _r308_t14, _r308_t15, _r308_t16, _r308_t17, _r308_t18;
            var _r308_t0 = r308_aj;
            var r308_nonDecomposable = _r308_t0.nonDecomposable;
            var r308_decomposableJobs = _r308_t0.decomposableJobs;
            var r308_decomposableRelGlyphs = _r308_t0.decomposableRelGlyphs;
            var r308_pendingGlyphs = new r1_Set(r308_restGids);
            var _r308_t1 = r308_decomposableRelGlyphs[Symbol.iterator]();
            var _r308_t2 = void 0;
            while (!(_r308_t2 = _r308_t1.next()).done) {
                r308_gn = _r308_t2.value;
                r308_pendingGlyphs.add(r308_gn);
            }
            var _r308_t3 = r308_nonDecomposable;
            var _r308_t4 = _r308_t3.length;
            var _r308_t5 = 0;
            while (_r308_t5 < _r308_t4) {
                _r308_t6 = _r308_t3[_r308_t5];
                r308_gnf = _r308_t6[0];
                r308_unicode = _r308_t6[1];
                r308_parts = _r308_t6[2];
                _r308_t7 = r308_parts;
                _r308_t8 = _r308_t7.length;
                _r308_t9 = 0;
                while (_r308_t9 < _r308_t8) {
                    r308_gn = _r308_t7[_r308_t9];
                    r308_pendingGlyphs.add(r308_gn);
                    _r308_t9 = _r308_t9 + 1;
                }
                _r308_t5 = _r308_t5 + 1;
            }
            var _r308_t10 = r308_decomposableJobs;
            var _r308_t11 = _r308_t10.length;
            var _r308_t12 = 0;
            while (_r308_t12 < _r308_t11) {
                _r308_t13 = _r308_t10[_r308_t12];
                r308_gnf = _r308_t13[0];
                r308_unicode = _r308_t13[1];
                r308_parts = _r308_t13[2];
                _r308_t14 = r308_parts;
                _r308_t15 = _r308_t14.length;
                _r308_t16 = 0;
                while (_r308_t16 < _r308_t15) {
                    r308_gn = _r308_t14[_r308_t16];
                    r308_pendingGlyphs.add(r308_gn);
                    _r308_t16 = _r308_t16 + 1;
                }
                _r308_t12 = _r308_t12 + 1;
            }
            return r308_fn(Array.from(r308_pendingGlyphs));
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r315_t0, _r315_t1;
            return { 'applyRelations': r275_applyRelations };
        });
        return r275_applyRelations = function (r316_relApplications) {
            var r316_gr, r316_f, r316_t, _r316_t3, _r316_t4, _r316_t5, _r316_t7;
            var r316_rs = new r1_Set();
            var _r316_t0 = r316_relApplications;
            var _r316_t1 = _r316_t0.length;
            var _r316_t2 = 0;
            var _r316_t6 = _r316_t2 < _r316_t1;
            while (_r316_t6) {
                _r316_t7 = (_r316_t3 = _r316_t0[_r316_t2], r316_gr = _r316_t3[0], r316_f = _r316_t3[1], r316_t = _r316_t3[2], r275_xn$queryglyph$1aao(r316_f) ? (r316_gr.set(r275_xn$queryglyph$1aao(r316_f), r316_t), r275_xn$queryglyph$1aao(r316_t) ? r275_xn$queryglyph$1aao(r316_t).tryBecomeMirrorOf(r275_xn$queryglyph$1aao(r316_f), r316_rs) : void 0) : void 0, _r316_t2 = _r316_t2 + 1);
                _r316_t6 = _r316_t2 < _r316_t1;
            }
            return _r316_t7;
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r320_xn$Capture_Ext$2Lrc2b) {
    var _r320_t0, _r320_t1;
    r320_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r320_xn$Capture_Ext$2Lrc2b, 'AutoBuild-Enclosure', function (r321_xn$Capture$2Lrc8, r321_xn$ExportCapture$2Lrc4b) {
        var _r321_t8, _r321_t9, _r321_t10, _r321_tag11, _r321_t12, _r321_tag13, _r321_t14, _r321_tag15, _r321_t16, _r321_tag17, _r321_t18, _r321_tag19, _r321_t20, _r321_tag21, _r321_t22, _r321_tag23, _r321_t24, _r321_tag25, _r321_t26, _r321_tag27, _r321_t28, _r321_tag29, _r321_t30, _r321_tag31, _r321_t32, _r321_tag33, _r321_t34, _r321_tag35, _r321_t36, _r321_tag37, _r321_t38, _r321_tag39, _r321_t40, _r321_tag41, _r321_t42, _r321_tag43, _r321_t44, _r321_tag45, _r321_t46, _r321_tag47, _r321_t48, _r321_tag49, _r321_t50, _r321_tag51, _r321_t52, _r321_tag53, _r321_t54, _r321_tag55, _r321_t56, _r321_tag57, _r321_t58, _r321_tag59, _r321_t60, _r321_tag61, _r321_t62, _r321_tag63, _r321_t64, _r321_tag65, _r321_t66, _r321_tag67;
        var _r321_t0 = r321_xn$Capture$2Lrc8;
        var r321_xn$createAndSaveGlyphImpl$2Lrc3c = _r321_t0['$createAndSaveGlyphImpl$'];
        var r321_xn$NamedParameterPair$2Lrc9b = _r321_t0['$NamedParameterPair$'];
        var r321_xn$assignUnicodeImpl$2Lrc8b = _r321_t0['$assignUnicodeImpl$'];
        var r321_xn$execState$2Lrc0b = _r321_t0['$execState$'];
        var r321_para = _r321_t0.para;
        var r321_glyphStore = _r321_t0.glyphStore;
        var r321_fontMetrics = _r321_t0.fontMetrics;
        var _r321_t1 = r321_xn$Capture$2Lrc8.Metrics;
        var r321_UPM = _r321_t1.UPM;
        var r321_HalfUPM = _r321_t1.HalfUPM;
        var r321_Width = _r321_t1.Width;
        var r321_SB = _r321_t1.SB;
        var r321_CAP = _r321_t1.CAP;
        var r321_XH = _r321_t1.XH;
        var r321_SymbolMid = _r321_t1.SymbolMid;
        var r321_ParenTop = _r321_t1.ParenTop;
        var r321_ParenBot = _r321_t1.ParenBot;
        var r321_Scale = _r321_t1.Scale;
        var r321_Translate = _r321_t1.Translate;
        var r321_TanSlope = _r321_t1.TanSlope;
        var r321_HVContrast = _r321_t1.HVContrast;
        var r321_O = _r321_t1.O;
        var r321_SmallArchDepth = _r321_t1.SmallArchDepth;
        var r321_Stroke = _r321_t1.Stroke;
        var r321_WideWidth0 = _r321_t1.WideWidth0;
        var r321_WideWidth1 = _r321_t1.WideWidth1;
        var r321_WideWidth2 = _r321_t1.WideWidth2;
        var r321_WideWidth4 = _r321_t1.WideWidth4;
        var r321_RightSB = _r321_t1.RightSB;
        var r321_AdviceStroke = _r321_t1.AdviceStroke;
        var r321_ArchDepthAOf = _r321_t1.ArchDepthAOf;
        var r321_ArchDepthBOf = _r321_t1.ArchDepthBOf;
        var _r321_t2 = r321_xn$Capture$2Lrc8.SpiroFns;
        var r321_g4 = _r321_t2.g4;
        var r321_corner = _r321_t2.corner;
        var r321_flat = _r321_t2.flat;
        var r321_curl = _r321_t2.curl;
        var r321_close = _r321_t2.close;
        var r321_widths = _r321_t2.widths;
        var r321_dispiro = _r321_t2.dispiro;
        var r321_xn$spirooutline$1aao = _r321_t2['spiro-outline'];
        var _r321_t3 = r321_xn$Capture$2Lrc8.BooleFns;
        var r321_union = _r321_t3.union;
        var r321_intersection = _r321_t3.intersection;
        var r321_difference = _r321_t3.difference;
        var _r321_t4 = r321_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r321_OShape = _r321_t4.OShape;
        var r321_OShapeOutline = _r321_t4.OShapeOutline;
        var r321_HBar = _r321_t4.HBar;
        var r321_VBar = _r321_t4.VBar;
        var r321_Ungizmo = _r321_t4.Ungizmo;
        var r321_Regizmo = _r321_t4.Regizmo;
        var r321_ForceUpright = _r321_t4.ForceUpright;
        var r321_WithTransform = _r321_t4.WithTransform;
        var _r321_t5 = r321_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r321_xn$referglyph$1aao = _r321_t5['refer-glyph'];
        var r321_xn$queryglyph$1aao = _r321_t5['query-glyph'];
        var _r321_t6 = r321_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r321_Fork = _r321_t6.Fork;
        var r321_Miniature = _r321_t6.Miniature;
        var r321_MiniatureParaT = _r321_t6.MiniatureParaT;
        var _r321_t7 = r321_xn$Capture$2Lrc8['Autobuild-Enclosure-Shared'].resolve();
        var r321_CircNameNoCheck = _r321_t7.CircNameNoCheck;
        var r321_CircName = _r321_t7.CircName;
        var r321_CollectJobs = _r321_t7.CollectJobs;
        var r321_EnsureComponentGlyphT = _r321_t7.EnsureComponentGlyphT;
        var r321_CreateDerivedFontFromJobs = _r321_t7.CreateDerivedFontFromJobs;
        var r321_applyRelations = _r321_t7.applyRelations;
        var r321_getGlyphDefaultShift = _r321_t7.getGlyphDefaultShift;
        var r321_circleWidthClasses = [
            [
                'NWID',
                r321_Width,
                0.12
            ],
            [
                'WWID',
                r321_WideWidth0,
                0.08
            ]
        ];
        var r321_AdjustDigitCount = function (r326_digits, r326_width) {
            var _r326_t0, _r326_t1;
            return Math.max(1, r326_digits * r321_Width / r326_width);
        };
        var r321_EnclosureStrokeScale = function (r327_dscale, r327_digits, r327_width) {
            var _r327_t0, _r327_t1;
            return r327_dscale / Math.pow(r321_AdjustDigitCount(r327_digits, r327_width), 0.66);
        };
        var r321_enclosureInnerPartActualWidth = new r1_Map();
        var r321_GlyphNameInnerOf = function (r328_gniPrefix, r328_subGlyph, r328_mp, r328_actualWidth, r328_accumulatedTfm) {
            var _r328_t0, _r328_t1;
            var r328_nameParts = [
                r328_mp,
                r328_actualWidth,
                r328_accumulatedTfm,
                r1_hashGeometry(r328_subGlyph.geometry),
                r1_hashCv(r328_subGlyph)
            ];
            return '.ci.' + r328_gniPrefix + '/' + r328_nameParts.join('/');
        };
        var r321_EnsureInnerSubGlyphImpl = function (r329_gniPrefix, r329_markClass, r329_miniatureFont, r329_mp, r329_actualWidth, r329_accumulatedTfm) {
            var _r329_t0, _r329_t1;
            return function (r330_gidPart) {
                var _r330_t0, _r330_t1;
                var r330_subGlyph = r329_miniatureFont.queryByNameEnsured(r330_gidPart);
                var r330_gniPart = r321_GlyphNameInnerOf(r329_gniPrefix, r330_subGlyph, r329_mp, r329_actualWidth, r329_accumulatedTfm);
                if (!r321_xn$queryglyph$1aao(r330_gniPart)) {
                    r321_enclosureInnerPartActualWidth.set(r330_gniPart, r329_actualWidth);
                    r321_xn$createAndSaveGlyphImpl$2Lrc3c(r330_gniPart, null, function () {
                        var _r333_t1;
                        var _r333_t0 = this;
                        var r333_currentGlyph = _r333_t0;
                        r333_currentGlyph.setWidth(0);
                        r333_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                        r333_currentGlyph.include(r330_subGlyph);
                        r333_currentGlyph.include(r329_accumulatedTfm);
                        if (r329_mp)
                            r333_currentGlyph.setMarkAnchor(r329_markClass, 0, 0, r329_actualWidth, 0);
                        else
                            r333_currentGlyph.setMarkAnchor(r329_markClass, r329_actualWidth / 2, 0);
                        return void 0;
                    });
                }
                return r330_gniPart;
            };
        };
        var r321_EnsureInnerSubGlyphSeq = function (r340_gniPrefix, r340_markClass, r340_miniatureFont, r340_job, r340_dimens, r340_yCompress, r340_kExtraYShift) {
            var r340_gidPart, _r340_t7, _r340_t8, _r340_t9, _r340_tag10, _r340_t11, _r340_tag12;
            var _r340_t0 = r340_job;
            var r340_gn = _r340_t0[0];
            var r340_unicode = _r340_t0[1];
            var r340_parts = _r340_t0[2];
            var r340_w = _r340_t0[3];
            var r340_bal = _r340_t0[4];
            var r340_baly = _r340_t0[5];
            var _r340_t1 = r340_dimens;
            var r340_width = _r340_t1.width;
            var r340_mockInnerWidth = _r340_t1.mockInnerWidth;
            var r340_dscale = _r340_t1.dscale;
            var r340_totalWidth = 0;
            var r340_firstDerivedGyph = null;
            var _r340_t2 = r340_parts;
            var _r340_t3 = _r340_t2.length;
            var _r340_t4 = 0;
            while (_r340_t4 < _r340_t3) {
                r340_gidPart = _r340_t2[_r340_t4];
                (function () {
                    var r344_derivedGlyph = r340_miniatureFont.queryByNameEnsured(r340_gidPart);
                    if (!r340_firstDerivedGyph)
                        r340_firstDerivedGyph = r344_derivedGlyph;
                    return r340_totalWidth = r340_totalWidth + r344_derivedGlyph.advanceWidth;
                }());
                _r340_t4 = _r340_t4 + 1;
            }
            var r340_xCompress = Math.min(1, r340_mockInnerWidth / r340_totalWidth);
            r340_totalWidth = Math.min(r340_mockInnerWidth, r340_totalWidth);
            var r340_shift = r321_getGlyphDefaultShift(r340_bal, r340_baly, r340_firstDerivedGyph);
            var r340_accumulatedTfm = r1_Transform.Combine(r340_firstDerivedGyph.gizmo.inverse(), r321_Scale(r340_dscale * r340_xCompress, r340_dscale * r340_yCompress), r321_Translate(0, r340_dscale * r340_shift + r321_SymbolMid + (r340_kExtraYShift - 0.5) * r321_CAP * r340_dscale), r340_firstDerivedGyph.gizmo);
            var r340_finalParts = [];
            var _r340_t5 = 0;
            var _r340_t6 = r340_parts.length;
            var r340_partIndex = _r340_t5;
            while (r340_partIndex < _r340_t6) {
                (function () {
                    var r347_gidPart = r340_parts[r340_partIndex];
                    var r347_actualWidth = r340_miniatureFont.queryByNameEnsured(r347_gidPart).advanceWidth * r340_dscale * r340_xCompress;
                    return r340_finalParts.push(r321_EnsureComponentGlyphT(r347_gidPart, r321_EnsureInnerSubGlyphImpl(r340_gniPrefix, r340_markClass, r340_miniatureFont, r340_parts.length > 1, r347_actualWidth, r340_accumulatedTfm)));
                }());
                r340_partIndex = r340_partIndex + 1;
            }
            return r340_finalParts;
        };
        var r321_EnclosureInnerImpl = function (r348_dimens, r348_finalParts) {
            var _r348_t0, _r348_t1;
            return function () {
                var r350_gniPart, _r350_t8;
                var _r350_t7 = this;
                var r350_currentGlyph = _r350_t7;
                var _r350_t0 = r348_dimens;
                var r350_width = _r350_t0.width;
                var r350_dscale = _r350_t0.dscale;
                var r350_mockInnerWidth = _r350_t0.mockInnerWidth;
                var r350_totalInnerWidth = 0;
                var _r350_t1 = r348_finalParts;
                var _r350_t2 = _r350_t1.length;
                var _r350_t3 = 0;
                while (_r350_t3 < _r350_t2) {
                    r350_gniPart = _r350_t1[_r350_t3];
                    r350_totalInnerWidth = r350_totalInnerWidth + (r321_enclosureInnerPartActualWidth.get(r350_gniPart) || 0);
                    _r350_t3 = _r350_t3 + 1;
                }
                var r350_x = 0.5 * r350_width - 0.5 * r350_totalInnerWidth;
                var _r350_t4 = r348_finalParts;
                var _r350_t5 = _r350_t4.length;
                var _r350_t6 = 0;
                while (_r350_t6 < _r350_t5) {
                    r350_gniPart = _r350_t4[_r350_t6];
                    r350_currentGlyph.include(r321_WithTransform(r321_Translate(r350_x, 0), r321_xn$referglyph$1aao(r350_gniPart)));
                    r350_x = r350_x + (r321_enclosureInnerPartActualWidth.get(r350_gniPart) || 0);
                    _r350_t6 = _r350_t6 + 1;
                }
                return void 0;
            };
        };
        var r321_EnclosureInner = function (r356_gniPrefix, r356_gnEnclosure, r356_miniatureFont, r356_job, r356_dimens) {
            var _r356_t2, _r356_t3, _r356_t4;
            var _r356_t0 = r356_job;
            var r356_gn = _r356_t0[0];
            var r356_unicode = _r356_t0[1];
            var r356_parts = _r356_t0[2];
            var r356_w = _r356_t0[3];
            var r356_bal = _r356_t0[4];
            var r356_baly = _r356_t0[5];
            var _r356_t1 = r356_dimens;
            var r356_width = _r356_t1.width;
            var r356_mockInnerWidth = _r356_t1.mockInnerWidth;
            var r356_dscale = _r356_t1.dscale;
            var r356_finalParts = r321_EnsureInnerSubGlyphSeq(r356_gniPrefix, 'enclosureInner', r356_miniatureFont, r356_job, r356_dimens, 1, 0);
            if (r356_gnEnclosure)
                return function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    r358_currentGlyph.include(r321_EnclosureInnerImpl(r356_dimens, r356_finalParts));
                    r1_CvDecompose.set(r358_currentGlyph, [r356_gnEnclosure].concat(r356_finalParts));
                    return void 0;
                };
            else
                return r321_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r321_EnclosureInnerImpl(r356_dimens, r356_finalParts));
        };
        var r321_TwoRowEnclosureInner = function (r361_gniPrefix, r361_gnEnclosure, r361_miniatureFont, r361_job, r361_dimens) {
            var _r361_t2, _r361_t3, _r361_t4;
            var _r361_t0 = r361_job;
            var r361_gn = _r361_t0[0];
            var r361_unicode = _r361_t0[1];
            var r361_parts = _r361_t0[2];
            var r361_w = _r361_t0[3];
            var r361_bal = _r361_t0[4];
            var r361_baly = _r361_t0[5];
            var _r361_t1 = r361_dimens;
            var r361_width = _r361_t1.width;
            var r361_mockInnerWidth = _r361_t1.mockInnerWidth;
            var r361_dscale = _r361_t1.dscale;
            var r361_jobFirstHalf = [
                r361_gn,
                r361_unicode,
                r361_parts.slice(0, r361_parts.length / 2),
                r361_w,
                r361_bal,
                r361_baly
            ];
            var r361_jobSecondHalf = [
                r361_gn,
                r361_unicode,
                r361_parts.slice(r361_parts.length / 2),
                r361_w,
                r361_bal,
                r361_baly
            ];
            var r361_finalPartsFirstHalf = r321_EnsureInnerSubGlyphSeq(r361_gniPrefix, 'enclosureInnerFirstHalf', r361_miniatureFont, r361_jobFirstHalf, r361_dimens, 0.45, +0.55);
            var r361_finalPartsSecondHalf = r321_EnsureInnerSubGlyphSeq(r361_gniPrefix, 'enclosureInnerSecondHalf', r361_miniatureFont, r361_jobSecondHalf, r361_dimens, 0.45, +0);
            if (r361_gnEnclosure)
                return function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    r363_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsFirstHalf));
                    r363_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsSecondHalf));
                    r1_CvDecompose.set(r363_currentGlyph, [r361_gnEnclosure].concat(r361_finalPartsFirstHalf, r361_finalPartsSecondHalf));
                    return void 0;
                };
            else
                return r321_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r368_t1;
                    var _r368_t0 = this;
                    var r368_currentGlyph = _r368_t0;
                    r368_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsFirstHalf));
                    r368_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsSecondHalf));
                    return void 0;
                });
        };
        var r321_CircCrowd = function (r371_digits, r371_width) {
            var _r371_t0, _r371_t1;
            return 2 + 2 * Math.pow(r321_AdjustDigitCount(r371_digits, r371_width), 2 / 3) * Math.max(1, r321_HalfUPM / r321_Width);
        };
        var r321_CircScale = function (r372_digits, r372_width) {
            var _r372_t0, _r372_t1;
            return 0.65 / Math.pow(r321_AdjustDigitCount(r372_digits, r372_width), 0.5);
        };
        var r321_circleDimens = function (r373_digits, r373_w, r373_m) {
            var _r373_t0, _r373_t1;
            var r373_width = r1_fallback(r373_w, r321_Width);
            var r373_dscale = r1_linreg(r321_HalfUPM, 0.55, r321_UPM, 0.6, r373_width);
            var r373_spatt = r1_linreg(r321_HalfUPM, 0.22, r321_UPM, 0.27, r373_width) * (r321_Width / r321_HalfUPM);
            var r373_sw0 = r321_EnclosureStrokeScale(r373_dscale, r373_digits, r373_width) * r321_AdviceStroke(r321_CircCrowd(r373_digits, r373_width)) / r321_CircScale(r373_digits, r373_width);
            var r373_sw = Math.max(r373_sw0, r1_fallback(r373_m, 0));
            var r373_top = r321_SymbolMid + r321_CAP * r373_dscale / 2 + r321_CAP * r373_spatt;
            var r373_bot = r321_SymbolMid - r321_CAP * r373_dscale / 2 - r321_CAP * r373_spatt;
            var r373_mosaicLeft = 0;
            var r373_mosaicRight = r373_width;
            var r373_mosaicBot = r321_fontMetrics.os2.sTypoDescender;
            var r373_mosaicTop = r321_fontMetrics.os2.sTypoAscender;
            var r373_left = Math.max(r321_SB + r321_O * 3, Math.min(r373_width / 2 - (r373_top - r373_bot) / 2, r373_width / 2 - r321_CAP / 2 * r373_dscale - r373_sw * 2.5));
            var r373_right = Math.min(r373_width - r321_SB - r321_O * 3, Math.max(r373_width / 2 + (r373_top - r373_bot) / 2, r373_width / 2 + r321_CAP / 2 * r373_dscale + r373_sw * 2.5));
            var r373_mockInnerWidth = r373_width + 2 * (r321_Stroke - r373_sw) * r373_dscale;
            var r373_archDepthA = r321_ArchDepthAOf(r321_SmallArchDepth * (r373_right - r373_left) / (r321_RightSB - r321_SB), r373_width);
            var r373_archDepthB = r321_ArchDepthBOf(r321_SmallArchDepth * (r373_right - r373_left) / (r321_RightSB - r321_SB), r373_width);
            return {
                'width': r373_width,
                'mockInnerWidth': r373_mockInnerWidth,
                'dscale': r373_dscale,
                'sw0': r373_sw0,
                'sw': r373_sw,
                'top': r373_top,
                'bot': r373_bot,
                'left': r373_left,
                'right': r373_right,
                'mosaicTop': r373_mosaicTop,
                'mosaicBot': r373_mosaicBot,
                'mosaicLeft': r373_mosaicLeft,
                'mosaicRight': r373_mosaicRight,
                'archDepthA': r373_archDepthA,
                'archDepthB': r373_archDepthB
            };
        };
        var r321_StandardSpacing = {
            'gniPrefix': '',
            'getPara': function (r374_pp, r374_digits, r374_rows, r374_width) {
                var _r374_t0, _r374_t1;
                return r321_MiniatureParaT(r374_pp, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_CircCrowd(r374_digits / r374_rows, r374_width)), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_CircScale(r374_digits / r374_rows, r374_width)), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1), new r321_xn$NamedParameterPair$2Lrc9b('mono', r374_digits > 1), new r321_xn$NamedParameterPair$2Lrc9b('mono2', r374_digits > 1));
            }
        };
        var r321_ItalicSpacing = {
            'gniPrefix': 'i',
            'getPara': function (r380_pp, r380_digits, r380_rows, r380_width) {
                var _r380_t0, _r380_t1;
                var r380_pp1 = r380_pp.reinit(function (r381_a) {
                    var _r381_t0, _r381_t1;
                    r381_a.shape.slope = 'italic';
                    return r381_a.shape.slopeAngle = r1_mix(r321_para.slopeAngle || 0, 15, 95 / 150);
                });
                return r321_StandardSpacing.getPara(r380_pp1, r380_digits, r380_rows, r380_width);
            }
        };
        var r321_SansSerifSpacing = {
            'gniPrefix': 'ss',
            'getPara': function (r382_pp, r382_digits, r382_rows, r382_width) {
                var _r382_t0, _r382_t1;
                var r382_pp1 = r382_pp.reinit(function (r383_a) {
                    var _r383_t0, _r383_t1;
                    return r383_a.shape.serifs = 'sans';
                });
                return r321_StandardSpacing.getPara(r382_pp1, r382_digits, r382_rows, r382_width);
            }
        };
        var r321_EnclosureT = function (r384_prefix, r384_builder, r384_spacing, r384_digits, r384_rows, r384_demands, r384_fnEnclosure) {
            var r384_suffix, r384_ww, r384_gap, _r384_t3, _r384_t4, _r384_t5, _r384_t7, _r384_t8, _r384_tag9;
            var _r384_t0 = r321_circleWidthClasses;
            var _r384_t1 = _r384_t0.length;
            var _r384_t2 = 0;
            var _r384_t6 = _r384_t2 < _r384_t1;
            while (_r384_t6) {
                _r384_t3 = _r384_t0[_r384_t2];
                r384_suffix = _r384_t3[0];
                r384_ww = _r384_t3[1];
                r384_gap = _r384_t3[2];
                (function () {
                    var r387_job;
                    var r387_allowProportional = r384_digits > 1 ? r1_xn$MONOSPACEONLY$5Frx : r1_xn$ALLOWPROPORTIONAL$1aao;
                    var r387_jobs = r321_CollectJobs(r384_builder.decomposable, r1_CENTERED, r387_allowProportional, r384_prefix + r384_digits, r384_suffix, r384_demands);
                    var r387_forkedPara = r384_spacing.getPara(r321_para, r384_digits, r384_rows, r384_ww);
                    var r387_miniatureFont = r321_CreateDerivedFontFromJobs(r387_jobs, [], function (r388_gs) {
                        var _r388_t0, _r388_t1;
                        return r321_Fork(r388_gs, r387_forkedPara);
                    });
                    var r387_gnEnclosure = r321_CircName(null, r384_prefix + r384_digits + '.enclosure', [], r384_suffix);
                    if (!r321_xn$queryglyph$1aao(r387_gnEnclosure))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r387_gnEnclosure, null, r384_fnEnclosure(r384_digits, r384_ww, r384_gap));
                    var _r387_t0 = r387_jobs.decomposableJobs;
                    var _r387_t1 = _r387_t0.length;
                    var _r387_t2 = 0;
                    while (_r387_t2 < _r387_t1) {
                        r387_job = _r387_t0[_r387_t2];
                        r384_builder.build(r384_prefix + r384_digits, r384_spacing.gniPrefix, r384_digits, r384_ww, r384_gap, r387_job, r387_miniatureFont, r387_gnEnclosure, true);
                        _r387_t2 = _r387_t2 + 1;
                    }
                    var _r387_t3 = r387_jobs.nonDecomposable;
                    var _r387_t4 = _r387_t3.length;
                    var _r387_t5 = 0;
                    while (_r387_t5 < _r387_t4) {
                        r387_job = _r387_t3[_r387_t5];
                        r384_builder.build(r384_prefix + r384_digits, r384_spacing.gniPrefix, r384_digits, r384_ww, r384_gap, r387_job, r387_miniatureFont, r387_gnEnclosure, false);
                        _r387_t5 = _r387_t5 + 1;
                    }
                    return r321_applyRelations(r387_jobs.relApplications);
                }());
                _r384_t7 = _r384_t2 = _r384_t2 + 1;
                _r384_t6 = _r384_t2 < _r384_t1;
            }
            return _r384_t7;
        };
        var r321_CircledBuilder = {
            'decomposable': true,
            'build': function (r392_prefix, r392_gniPrefix, r392_digits, r392_ww, r392_gap, r392_job, r392_miniatureFont, r392_gnEnclosure, r392_decomposable) {
                var _r392_t2, _r392_t3;
                var _r392_t0 = r392_job;
                var r392_gn = _r392_t0[0];
                var r392_unicode = _r392_t0[1];
                var r392_parts = _r392_t0[2];
                var r392_w = _r392_t0[3];
                var r392_bal = _r392_t0[4];
                var r392_baly = _r392_t0[5];
                var r392_dimens = r321_circleDimens(r392_digits, r392_ww);
                var _r392_t1 = r392_dimens;
                var r392_width = _r392_t1.width;
                var r392_mockInnerWidth = _r392_t1.mockInnerWidth;
                var r392_dscale = _r392_t1.dscale;
                return !r321_xn$queryglyph$1aao(r392_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r392_gn, r392_w === r392_ww ? r392_unicode : null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.setWidth(r392_width);
                    r395_currentGlyph.include(r321_EnclosureInner(r392_gniPrefix, r392_decomposable ? r392_gnEnclosure : null, r392_miniatureFont, r392_job, r392_dimens));
                    r395_currentGlyph.include(r321_xn$referglyph$1aao(r392_gnEnclosure));
                    return void 0;
                }) : void 0;
            }
        };
        var r321_TwoRowBoxedBuilder = {
            'decomposable': true,
            'build': function (r399_prefix, r399_gniPrefix, r399_digits, r399_ww, r399_gap, r399_job, r399_miniatureFont, r399_gnEnclosure, r399_decomposable) {
                var _r399_t2, _r399_t3;
                var _r399_t0 = r399_job;
                var r399_gn = _r399_t0[0];
                var r399_unicode = _r399_t0[1];
                var r399_parts = _r399_t0[2];
                var r399_w = _r399_t0[3];
                var r399_bal = _r399_t0[4];
                var r399_baly = _r399_t0[5];
                var r399_dimens = r321_circleDimens(r399_digits, r399_ww);
                var _r399_t1 = r399_dimens;
                var r399_width = _r399_t1.width;
                var r399_mockInnerWidth = _r399_t1.mockInnerWidth;
                var r399_dscale = _r399_t1.dscale;
                return !r321_xn$queryglyph$1aao(r399_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r399_gn, r399_w === r399_ww ? r399_unicode : null, function () {
                    var _r402_t1;
                    var _r402_t0 = this;
                    var r402_currentGlyph = _r402_t0;
                    r402_currentGlyph.setWidth(r399_width);
                    r402_currentGlyph.include(r321_TwoRowEnclosureInner(r399_gniPrefix, r399_decomposable ? r399_gnEnclosure : null, r399_miniatureFont, r399_job, r399_dimens));
                    r402_currentGlyph.include(r321_xn$referglyph$1aao(r399_gnEnclosure));
                    return void 0;
                }) : void 0;
            }
        };
        var r321_InsetBuilder = {
            'decomposable': false,
            'build': function (r406_prefix, r406_gniPrefix, r406_digits, r406_ww, r406_gap, r406_job, r406_miniatureFont, r406_gnEnclosure, r406_decomposable) {
                var _r406_t2, _r406_t3;
                var _r406_t0 = r406_job;
                var r406_gn = _r406_t0[0];
                var r406_unicode = _r406_t0[1];
                var r406_parts = _r406_t0[2];
                var r406_w = _r406_t0[3];
                var r406_bal = _r406_t0[4];
                var r406_baly = _r406_t0[5];
                var r406_dimens = r321_circleDimens(r406_digits, r406_ww);
                var _r406_t1 = r406_dimens;
                var r406_width = _r406_t1.width;
                var r406_mockInnerWidth = _r406_t1.mockInnerWidth;
                var r406_dscale = _r406_t1.dscale;
                return !r321_xn$queryglyph$1aao(r406_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r406_gn, r406_w === r406_ww ? r406_unicode : null, function () {
                    var _r409_t1;
                    var _r409_t0 = this;
                    var r409_currentGlyph = _r409_t0;
                    r409_currentGlyph.setWidth(r406_width);
                    r409_currentGlyph.include(r321_difference(r321_xn$referglyph$1aao(r406_gnEnclosure), r321_EnclosureInner(r406_gniPrefix, r406_decomposable ? r406_gnEnclosure : null, r406_miniatureFont, r406_job, r406_dimens)));
                    return void 0;
                }) : void 0;
            }
        };
        var r321_AddEnclosureMark = function (r412_digits, r412_dimens) {
            var _r412_t0, _r412_t1;
            return function () {
                var _r414_t2;
                var _r414_t1 = this;
                var r414_currentGlyph = _r414_t1;
                var _r414_t0 = r412_dimens;
                var r414_width = _r414_t0.width;
                var r414_dscale = _r414_t0.dscale;
                var r414_mockInnerWidth = _r414_t0.mockInnerWidth;
                if (r412_digits > 1)
                    r414_currentGlyph.setBaseAnchor('enclosureInner', 0.5 * r414_width - 0.5 * r414_dscale * Math.min(r321_Width * r412_digits, r414_mockInnerWidth), 0);
                else
                    r414_currentGlyph.setBaseAnchor('enclosureInner', 0.5 * r414_width, 0);
                return void 0;
            };
        };
        var r321_AddEnclosureMarkTwoLine = function (r417_digits, r417_dimens) {
            var _r417_t0, _r417_t1;
            return function () {
                var _r419_t2;
                var _r419_t1 = this;
                var r419_currentGlyph = _r419_t1;
                var _r419_t0 = r417_dimens;
                var r419_width = _r419_t0.width;
                var r419_dscale = _r419_t0.dscale;
                var r419_mockInnerWidth = _r419_t0.mockInnerWidth;
                if (r417_digits > 1) {
                    r419_currentGlyph.setBaseAnchor('enclosureInnerFirstHalf', 0.5 * r419_width - 0.5 * r419_dscale * Math.min(r321_Width * r417_digits, r419_mockInnerWidth), 0);
                    r419_currentGlyph.setBaseAnchor('enclosureInnerSecondHalf', 0.5 * r419_width - 0.5 * r419_dscale * Math.min(r321_Width * r417_digits, r419_mockInnerWidth), 0);
                }
                return void 0;
            };
        };
        var r321_createCircledGlyphs = function (r422_digits, r422_demands) {
            var _r422_t0, _r422_t1;
            return r321_EnclosureT('circle', r321_CircledBuilder, r321_StandardSpacing, r422_digits, 1, r422_demands, r321_CircleEnclosureShape);
        };
        var r321_createBackslashCircledGlyphs = function (r423_digits, r423_demands) {
            var _r423_t0, _r423_t1;
            return r321_EnclosureT('circle-slashed', r321_CircledBuilder, r321_StandardSpacing, r423_digits, 1, r423_demands, r321_BackslashCircleEnclosureShape);
        };
        var r321_createItalicCircledGlyphs = function (r424_digits, r424_demands) {
            var _r424_t0, _r424_t1;
            return r321_EnclosureT('circle-italic', r321_CircledBuilder, r321_ItalicSpacing, r424_digits, 1, r424_demands, r321_CircleEnclosureShape);
        };
        var r321_createSansSerifCircledGlyphs = function (r425_digits, r425_demands) {
            var _r425_t0, _r425_t1;
            return r321_EnclosureT('circle-ss', r321_CircledBuilder, r321_SansSerifSpacing, r425_digits, 1, r425_demands, r321_CircleEnclosureShape);
        };
        var r321_CircleEnclosureShape = function (r426_digits, r426_ww, r426_gap) {
            var _r426_t0, _r426_t1;
            return function () {
                var _r428_t2;
                var _r428_t1 = this;
                var r428_currentGlyph = _r428_t1;
                var _r428_t0 = r321_circleDimens(r426_digits, r426_ww);
                var r428_width = _r428_t0.width;
                var r428_sw = _r428_t0.sw;
                var r428_top = _r428_t0.top;
                var r428_bot = _r428_t0.bot;
                var r428_left = _r428_t0.left;
                var r428_right = _r428_t0.right;
                var r428_archDepthA = _r428_t0.archDepthA;
                var r428_archDepthB = _r428_t0.archDepthB;
                r428_currentGlyph.setWidth(r428_width);
                r428_currentGlyph.include(r321_OShape(r428_top, r428_bot, r428_left, r428_right, r428_sw, r428_archDepthA, r428_archDepthB));
                r428_currentGlyph.include(r321_AddEnclosureMark(r426_digits, r321_circleDimens(r426_digits, r426_ww)));
                return void 0;
            };
        };
        var r321_BackslashCircleEnclosureShape = function (r432_digits, r432_ww, r432_gap) {
            var _r432_t0, _r432_t1;
            return function () {
                var _r434_t2;
                var _r434_t1 = this;
                var r434_currentGlyph = _r434_t1;
                r434_currentGlyph.include(r321_CircleEnclosureShape(r432_digits, r432_ww, r432_gap));
                var _r434_t0 = r321_circleDimens(r432_digits, r432_ww);
                var r434_width = _r434_t0.width;
                var r434_sw = _r434_t0.sw;
                var r434_top = _r434_t0.top;
                var r434_bot = _r434_t0.bot;
                var r434_left = _r434_t0.left;
                var r434_right = _r434_t0.right;
                var r434_archDepthA = _r434_t0.archDepthA;
                var r434_archDepthB = _r434_t0.archDepthB;
                r434_currentGlyph.include(r321_intersection(r321_OShapeOutline(r434_top, r434_bot, r434_left, r434_right, r434_sw, r434_archDepthA, r434_archDepthB), r321_dispiro(r321_flat(0, r1_mix(r434_bot, r434_top, 0.77), r321_widths.center(r434_sw)), r321_curl(r434_width, r1_mix(r434_bot, r434_top, 1 - 0.77)))));
                return void 0;
            };
        };
        var r321_createBoxedGlyphs = function (r437_digits, r437_demands) {
            var _r437_t0, _r437_t1;
            return r321_EnclosureT('boxed', r321_CircledBuilder, r321_StandardSpacing, r437_digits, 1, r437_demands, r321_BoxEnclosureShape);
        };
        var r321_BoxEnclosureShape = function (r438_digits, r438_ww, r438_gap) {
            var _r438_t0, _r438_t1;
            return function () {
                var _r440_t2;
                var _r440_t1 = this;
                var r440_currentGlyph = _r440_t1;
                var _r440_t0 = r321_circleDimens(r438_digits, r438_ww);
                var r440_width = _r440_t0.width;
                var r440_mockInnerWidth = _r440_t0.mockInnerWidth;
                var r440_sw = _r440_t0.sw;
                var r440_top = _r440_t0.top;
                var r440_bot = _r440_t0.bot;
                var r440_left = _r440_t0.left;
                var r440_right = _r440_t0.right;
                r440_currentGlyph.setWidth(r440_width);
                r440_currentGlyph.include(r321_union(r321_HBar.t(r440_left, r440_right, r440_top, r440_sw), r321_HBar.b(r440_left, r440_right, r440_bot, r440_sw), r321_VBar.l(r440_left, r440_bot, r440_top, r440_sw), r321_VBar.r(r440_right, r440_bot, r440_top, r440_sw)));
                r440_currentGlyph.include(r321_AddEnclosureMark(r438_digits, r321_circleDimens(r438_digits, r438_ww)));
                return void 0;
            };
        };
        var r321_createTwoRowBoxedGlyphs = function (r444_digits, r444_demands) {
            var _r444_t0, _r444_t1;
            return r321_EnclosureT('twoRowBoxed', r321_TwoRowBoxedBuilder, r321_StandardSpacing, r444_digits, 2, r444_demands, r321_TwoRowBoxEnclosureShape);
        };
        var r321_TwoRowBoxEnclosureShape = function (r445_digits, r445_ww, r445_gap) {
            var _r445_t0, _r445_t1;
            return function () {
                var _r447_t2;
                var _r447_t1 = this;
                var r447_currentGlyph = _r447_t1;
                var _r447_t0 = r321_circleDimens(r445_digits, r445_ww);
                var r447_width = _r447_t0.width;
                var r447_mockInnerWidth = _r447_t0.mockInnerWidth;
                var r447_sw = _r447_t0.sw;
                var r447_top = _r447_t0.top;
                var r447_bot = _r447_t0.bot;
                var r447_left = _r447_t0.left;
                var r447_right = _r447_t0.right;
                r447_currentGlyph.setWidth(r447_width);
                r447_currentGlyph.include(r321_union(r321_HBar.t(r447_left, r447_right, r447_top, r447_sw), r321_HBar.b(r447_left, r447_right, r447_bot, r447_sw), r321_VBar.l(r447_left, r447_bot, r447_top, r447_sw), r321_VBar.r(r447_right, r447_bot, r447_top, r447_sw)));
                r447_currentGlyph.include(r321_AddEnclosureMarkTwoLine(r445_digits, r321_circleDimens(r445_digits, r445_ww)));
                return void 0;
            };
        };
        var r321_createDashedBoxedGlyphs = function (r451_digits, r451_demands) {
            var _r451_t0, _r451_t1;
            return r321_EnclosureT('dashed-boxed', r321_CircledBuilder, r321_StandardSpacing, r451_digits, 1, r451_demands, r321_DashedBoxEnclosureShape);
        };
        var r321_DashedBoxEnclosureShape = function (r452_digits, r452_ww, r452_cap) {
            var _r452_t0, _r452_t1;
            return function () {
                var _r454_t2;
                var _r454_t1 = this;
                var r454_currentGlyph = _r454_t1;
                var _r454_t0 = r321_circleDimens(r452_digits, r452_ww);
                var r454_width = _r454_t0.width;
                var r454_mockInnerWidth = _r454_t0.mockInnerWidth;
                var r454_sw = _r454_t0.sw;
                var r454_top = _r454_t0.top;
                var r454_bot = _r454_t0.bot;
                var r454_left = _r454_t0.left;
                var r454_right = _r454_t0.right;
                r454_currentGlyph.setWidth(r454_width);
                r454_currentGlyph.include(r321_difference(r321_union(r321_HBar.t(r454_left, r454_right, r454_top, r454_sw), r321_HBar.b(r454_left, r454_right, r454_bot, r454_sw), r321_VBar.l(r454_left, r454_bot, r454_top, r454_sw), r321_VBar.r(r454_right, r454_bot, r454_top, r454_sw)), r321_union(r321_VBar.m(r1_mix(r454_left, r454_right, 0.25), r454_bot, r454_top, r454_sw), r321_VBar.m(r1_mix(r454_left, r454_right, 0.5), r454_bot, r454_top, r454_sw), r321_VBar.m(r1_mix(r454_left, r454_right, 0.75), r454_bot, r454_top, r454_sw), r321_HBar.m(r454_left, r454_right, r1_mix(r454_bot, r454_top, 0.25), r454_sw), r321_HBar.m(r454_left, r454_right, r1_mix(r454_bot, r454_top, 0.5), r454_sw), r321_HBar.m(r454_left, r454_right, r1_mix(r454_bot, r454_top, 0.75), r454_sw))));
                r454_currentGlyph.include(r321_AddEnclosureMark(r452_digits, r321_circleDimens(r452_digits, r452_ww)));
                return void 0;
            };
        };
        var r321_createInsetCircledGlyphs = function (r458_digits, r458_demands) {
            var _r458_t0, _r458_t1;
            return r321_EnclosureT('inset-circle', r321_InsetBuilder, r321_StandardSpacing, r458_digits, 1, r458_demands, r321_InsetCircleEnclosureShape);
        };
        var r321_createInsetSansSerifCircledGlyphs = function (r459_digits, r459_demands) {
            var _r459_t0, _r459_t1;
            return r321_EnclosureT('inset-circle-ss', r321_InsetBuilder, r321_SansSerifSpacing, r459_digits, 1, r459_demands, r321_InsetCircleEnclosureShape);
        };
        var r321_InsetCircleEnclosureShape = function (r460_digits, r460_ww, r460_gap) {
            var _r460_t0, _r460_t1;
            return function () {
                var _r462_t2;
                var _r462_t1 = this;
                var r462_currentGlyph = _r462_t1;
                var _r462_t0 = r321_circleDimens(r460_digits, r460_ww);
                var r462_width = _r462_t0.width;
                var r462_sw = _r462_t0.sw;
                var r462_top = _r462_t0.top;
                var r462_bot = _r462_t0.bot;
                var r462_left = _r462_t0.left;
                var r462_right = _r462_t0.right;
                var r462_archDepthA = _r462_t0.archDepthA;
                var r462_archDepthB = _r462_t0.archDepthB;
                r462_currentGlyph.setWidth(r462_width);
                r462_currentGlyph.include(r321_OShapeOutline(r462_top, r462_bot, r462_left, r462_right, r462_sw, r462_archDepthA, r462_archDepthB));
                r462_currentGlyph.include(r321_AddEnclosureMark(r460_digits, r321_circleDimens(r460_digits, r460_ww)));
                return void 0;
            };
        };
        var r321_createInsetBoxedGlyphs = function (r466_digits, r466_demands) {
            var _r466_t0, _r466_t1;
            return r321_EnclosureT('inset-boxed', r321_InsetBuilder, r321_StandardSpacing, r466_digits, 1, r466_demands, r321_InsetBoxEnclosureShape);
        };
        var r321_InsetBoxEnclosureShape = function (r467_digits, r467_ww, r467_gap) {
            var _r467_t0, _r467_t1;
            return function () {
                var _r469_t2;
                var _r469_t1 = this;
                var r469_currentGlyph = _r469_t1;
                var _r469_t0 = r321_circleDimens(r467_digits, r467_ww);
                var r469_width = _r469_t0.width;
                var r469_top = _r469_t0.top;
                var r469_bot = _r469_t0.bot;
                var r469_left = _r469_t0.left;
                var r469_right = _r469_t0.right;
                r469_currentGlyph.setWidth(r469_width);
                r469_currentGlyph.include(r321_xn$spirooutline$1aao(r321_corner(r469_left, r469_top), r321_corner(r469_left, r469_bot), r321_corner(r469_right, r469_bot), r321_corner(r469_right, r469_top), r321_close()));
                r469_currentGlyph.include(r321_AddEnclosureMark(r467_digits, r321_circleDimens(r467_digits, r467_ww)));
                return void 0;
            };
        };
        var r321_createInsetDiamondGlyphs = function (r473_digits, r473_demands) {
            var _r473_t0, _r473_t1;
            return r321_EnclosureT('inset-diamond', r321_InsetBuilder, r321_StandardSpacing, r473_digits, 1, r473_demands, r321_InsetDiamondEnclosureShape);
        };
        var r321_InsetDiamondEnclosureShape = function (r474_digits, r474_ww, r474_gap) {
            var _r474_t0, _r474_t1;
            return function () {
                var _r476_t2;
                var _r476_t1 = this;
                var r476_currentGlyph = _r476_t1;
                var _r476_t0 = r321_circleDimens(r474_digits, r474_ww);
                var r476_width = _r476_t0.width;
                var r476_top = _r476_t0.top;
                var r476_bot = _r476_t0.bot;
                var r476_left = _r476_t0.left;
                var r476_right = _r476_t0.right;
                r476_currentGlyph.setWidth(r476_width);
                r476_currentGlyph.include(r321_xn$spirooutline$1aao(r321_corner(r476_left + r321_O, r1_mix(r476_bot, r476_top, 0.5)), r321_corner(r1_mix(r476_left, r476_right, 0.5), r476_bot + r321_O), r321_corner(r476_right - r321_O, r1_mix(r476_bot, r476_top, 0.5)), r321_corner(r1_mix(r476_left, r476_right, 0.5), r476_top - r321_O), r321_close()));
                r476_currentGlyph.include(r321_AddEnclosureMark(r474_digits, r321_circleDimens(r474_digits, r474_ww)));
                return void 0;
            };
        };
        var r321_createInsetMosaicGlyphs = function (r480_digits, r480_demands) {
            var _r480_t0, _r480_t1;
            return r321_EnclosureT('inset-mosaic', r321_InsetBuilder, r321_StandardSpacing, r480_digits, 1, r480_demands, r321_InsetMosaicEnclosureShape);
        };
        var r321_InsetMosaicEnclosureShape = function (r481_digits, r481_ww, r481_gap) {
            var _r481_t0, _r481_t1;
            return function () {
                var _r483_t2;
                var _r483_t1 = this;
                var r483_currentGlyph = _r483_t1;
                var _r483_t0 = r321_circleDimens(r481_digits, r481_ww);
                var r483_width = _r483_t0.width;
                var r483_mockInnerWidth = _r483_t0.mockInnerWidth;
                var r483_mosaicTop = _r483_t0.mosaicTop;
                var r483_mosaicBot = _r483_t0.mosaicBot;
                var r483_mosaicLeft = _r483_t0.mosaicLeft;
                var r483_mosaicRight = _r483_t0.mosaicRight;
                r483_currentGlyph.setWidth(r483_width);
                r483_currentGlyph.include(r321_ForceUpright());
                r483_currentGlyph.include(r321_xn$spirooutline$1aao(r321_corner(r483_mosaicLeft, r483_mosaicTop), r321_corner(r483_mosaicLeft, r483_mosaicBot), r321_corner(r483_mosaicRight, r483_mosaicBot), r321_corner(r483_mosaicRight, r483_mosaicTop), r321_close()));
                r483_currentGlyph.include(r321_AddEnclosureMark(r481_digits, r321_circleDimens(r481_digits, r481_ww)));
                return void 0;
            };
        };
        var r321_createDoubleCircledGlyphs = function (r488_digits, r488_demands) {
            var _r488_t0, _r488_t1;
            return r321_EnclosureT('double-circle', r321_CircledBuilder, r321_StandardSpacing, r488_digits, 1, r488_demands, r321_DoubleCircledEnclosureShape);
        };
        var r321_DoubleCircledEnclosureShape = function (r489_digits, r489_ww, r489_gap) {
            var _r489_t0, _r489_t1;
            return function () {
                var _r491_t2;
                var _r491_t1 = this;
                var r491_currentGlyph = _r491_t1;
                var _r491_t0 = r321_circleDimens(r489_digits, r489_ww, r489_ww * r489_gap);
                var r491_width = _r491_t0.width;
                var r491_mockInnerWidth = _r491_t0.mockInnerWidth;
                var r491_sw0 = _r491_t0.sw0;
                var r491_sw = _r491_t0.sw;
                var r491_top = _r491_t0.top;
                var r491_bot = _r491_t0.bot;
                var r491_left = _r491_t0.left;
                var r491_right = _r491_t0.right;
                var r491_archDepthA = _r491_t0.archDepthA;
                var r491_archDepthB = _r491_t0.archDepthB;
                r491_currentGlyph.setWidth(r491_width);
                var r491_sw1 = Math.min(r491_sw0, r491_sw / 3);
                r491_currentGlyph.include(r321_OShape(r491_top, r491_bot, r491_left, r491_right, r491_sw1, r491_archDepthA, r491_archDepthB));
                r491_currentGlyph.include(r321_OShape(r491_top - r491_sw + r491_sw1, r491_bot + r491_sw - r491_sw1, r491_left + r491_sw * r321_HVContrast - r491_sw1 * r321_HVContrast, r491_right - r491_sw * r321_HVContrast + r491_sw1 * r321_HVContrast, r491_sw1, r491_archDepthA - r491_sw + r491_sw1, r491_archDepthB - r491_sw + r491_sw1));
                r491_currentGlyph.include(r321_AddEnclosureMark(r489_digits, r321_circleDimens(r489_digits, r489_ww)));
                return void 0;
            };
        };
        var r321_BraceCrowd = function (r496_digits, r496_width) {
            var _r496_t0, _r496_t1;
            return 2.75 + r321_AdjustDigitCount(r496_digits, r496_width);
        };
        var r321_BraceScale = function (r497_digits, r497_width) {
            var _r497_t0, _r497_t1;
            return 0.65 / Math.pow(r321_AdjustDigitCount(r497_digits, r497_width), 0.5);
        };
        var r321_bracedDottdeDimens = function (r498_digits, r498_width) {
            var _r498_t0, _r498_t1;
            var r498_dscale = r1_linreg(r321_Width, 0.55, r321_UPM, 0.65, r498_width);
            var r498_pscale = r1_linreg(r321_Width, 0.6, r321_UPM, 0.75, r498_width);
            var r498_sw0 = r321_EnclosureStrokeScale(r498_dscale, r498_digits, r498_width) * r321_AdviceStroke(r321_BraceCrowd(r498_digits, r498_width)) / r321_BraceScale(r498_digits, r498_width);
            var r498_sw = Math.min(r321_Stroke, r498_sw0);
            var r498_l = Math.max(r321_SB + r321_O * 3, r498_width / 2 - Math.max(r321_Width * r498_digits, r321_CAP) / 2);
            var r498_r = r498_width - r498_l;
            var r498_mockInnerWidth = r498_width + 2 * (r321_Stroke - r498_sw) * r498_dscale;
            return {
                'width': r498_width,
                'sw': r498_sw,
                'dscale': r498_dscale,
                'pscale': r498_pscale,
                'l': r498_l,
                'r': r498_r,
                'mockInnerWidth': r498_mockInnerWidth
            };
        };
        var r321_BracedT = function (r499_rawPrefix, r499_digits, r499_demands, r499_fnBraceShape) {
            var r499_suffix, r499_ww, _r499_t3, _r499_t4, _r499_t5, _r499_t7, _r499_t8, _r499_tag9;
            var _r499_t0 = r321_circleWidthClasses;
            var _r499_t1 = _r499_t0.length;
            var _r499_t2 = 0;
            var _r499_t6 = _r499_t2 < _r499_t1;
            while (_r499_t6) {
                _r499_t3 = _r499_t0[_r499_t2];
                r499_suffix = _r499_t3[0];
                r499_ww = _r499_t3[1];
                (function () {
                    var r502_job;
                    var r502_prefix = r499_rawPrefix + r499_digits;
                    var r502_jobs = r321_CollectJobs(r1_DECOMPOSABLE, r1_CENTERED, r1_xn$ALLOWPROPORTIONAL$1aao, r502_prefix, r499_suffix, r499_demands);
                    var r502_miniatureFont = r321_CreateDerivedFontFromJobs(r502_jobs, [], function (r503_gs) {
                        var _r503_t0, _r503_t1;
                        return r321_Miniature(r503_gs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_BraceCrowd(r499_digits, r499_ww)), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_BraceScale(r499_digits, r499_ww)), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1));
                    });
                    var r502_gnb = r321_CircName(r502_prefix, '.braced-brace' + r499_digits, [], r499_suffix);
                    if (!r321_xn$queryglyph$1aao(r502_gnb))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r502_gnb, null, r499_fnBraceShape(r499_digits, r499_ww));
                    var r502_CreateGlyphImpl = function (r508_jobDecomposable, r508_job) {
                        var _r508_t1, _r508_t2;
                        var _r508_t0 = r508_job;
                        var r508_gn = _r508_t0[0];
                        var r508_unicode = _r508_t0[1];
                        var r508_parts = _r508_t0[2];
                        var r508_w = _r508_t0[3];
                        var r508_bal = _r508_t0[4];
                        var r508_baly = _r508_t0[5];
                        return !r321_xn$queryglyph$1aao(r508_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r508_gn, r508_w === r499_ww ? r508_unicode : null, function () {
                            var _r511_t2;
                            var _r511_t1 = this;
                            var r511_currentGlyph = _r511_t1;
                            var r511_dimens = r321_bracedDottdeDimens(r499_digits, r499_ww);
                            var _r511_t0 = r511_dimens;
                            var r511_width = _r511_t0.width;
                            var r511_mockInnerWidth = _r511_t0.mockInnerWidth;
                            var r511_dscale = _r511_t0.dscale;
                            r511_currentGlyph.setWidth(r511_width);
                            r511_currentGlyph.include(r321_EnclosureInner('', r508_jobDecomposable ? r502_gnb : null, r502_miniatureFont, r508_job, r511_dimens));
                            r511_currentGlyph.include(r321_xn$referglyph$1aao(r502_gnb));
                            return void 0;
                        }) : void 0;
                    };
                    var _r502_t0 = r502_jobs.decomposableJobs;
                    var _r502_t1 = _r502_t0.length;
                    var _r502_t2 = 0;
                    while (_r502_t2 < _r502_t1) {
                        r502_job = _r502_t0[_r502_t2];
                        r502_CreateGlyphImpl(true, r502_job);
                        _r502_t2 = _r502_t2 + 1;
                    }
                    var _r502_t3 = r502_jobs.nonDecomposable;
                    var _r502_t4 = _r502_t3.length;
                    var _r502_t5 = 0;
                    while (_r502_t5 < _r502_t4) {
                        r502_job = _r502_t3[_r502_t5];
                        r502_CreateGlyphImpl(false, r502_job);
                        _r502_t5 = _r502_t5 + 1;
                    }
                    return r321_applyRelations(r502_jobs.relApplications);
                }());
                _r499_t7 = _r499_t2 = _r499_t2 + 1;
                _r499_t6 = _r499_t2 < _r499_t1;
            }
            return _r499_t7;
        };
        var r321_createBracedGlyphs = function (r517_digits, r517_demands) {
            var _r517_t0, _r517_t1;
            return r321_BracedT('braced', r517_digits, r517_demands, r321_BraceShape);
        };
        var r321_BraceShape = function (r518_digits, r518_ww) {
            var _r518_t0, _r518_t1;
            return function () {
                var _r520_t2;
                var _r520_t1 = this;
                var r520_currentGlyph = _r520_t1;
                var _r520_t0 = r321_bracedDottdeDimens(r518_digits, r518_ww);
                var r520_width = _r520_t0.width;
                var r520_dscale = _r520_t0.dscale;
                var r520_pscale = _r520_t0.pscale;
                var r520_sw = _r520_t0.sw;
                var r520_l = _r520_t0.l;
                var r520_r = _r520_t0.r;
                var r520_s = r321_TanSlope * r321_SymbolMid / 2;
                var r520_p = 0.1 * Math.sqrt(Math.min(1, r520_width / (r518_digits * r321_Width)));
                r520_currentGlyph.setWidth(r520_width);
                r520_currentGlyph.include(r321_dispiro(r321_widths.lhs(r520_sw), r321_g4(r1_mix(r520_l, r520_r, r520_p) - r520_s, r321_ParenTop * r520_pscale), r321_g4.down.mid(r520_l - r520_s + r321_O, r321_SymbolMid * r520_pscale), r321_g4(r1_mix(r520_l, r520_r, r520_p) - r520_s, r321_ParenBot * r520_pscale)));
                r520_currentGlyph.include(r321_dispiro(r321_widths.rhs(r520_sw), r321_g4(r1_mix(r520_r, r520_l, r520_p) + r520_s, r321_ParenTop * r520_pscale), r321_g4.down.mid(r520_r + r520_s - r321_O, r321_SymbolMid * r520_pscale), r321_g4(r1_mix(r520_r, r520_l, r520_p) + r520_s, r321_ParenBot * r520_pscale)));
                r520_currentGlyph.include(r321_Ungizmo());
                r520_currentGlyph.include(r321_Translate(0, r321_SymbolMid - r321_SymbolMid * r520_pscale));
                r520_currentGlyph.include(r321_Regizmo());
                r520_currentGlyph.include(r321_AddEnclosureMark(r518_digits, r321_bracedDottdeDimens(r518_digits, r518_ww)));
                return void 0;
            };
        };
        var r321_createHexBracedGlyphs = function (r528_digits, r528_demands) {
            var _r528_t0, _r528_t1;
            return r321_BracedT('hex-braced', r528_digits, r528_demands, r321_HexBracedShape);
        };
        var r321_HexBracedShape = function (r529_digits, r529_ww) {
            var _r529_t0, _r529_t1;
            return function () {
                var _r531_t2;
                var _r531_t1 = this;
                var r531_currentGlyph = _r531_t1;
                var _r531_t0 = r321_bracedDottdeDimens(r529_digits, r529_ww);
                var r531_width = _r531_t0.width;
                var r531_dscale = _r531_t0.dscale;
                var r531_pscale = _r531_t0.pscale;
                var r531_sw = _r531_t0.sw;
                var r531_l = _r531_t0.l;
                var r531_r = _r531_t0.r;
                var r531_s = r321_TanSlope * r321_SymbolMid / 2;
                var r531_p = 1 / 6 * Math.sqrt(Math.min(1, r531_width / (r529_digits * r321_Width)));
                r531_currentGlyph.setWidth(r531_width);
                r531_currentGlyph.include(r321_dispiro(r321_widths.lhs(r531_sw), r321_corner(r1_mix(r531_l, r531_r, r531_p) - r531_s, r321_ParenTop * r531_pscale), r321_corner(r531_l - r531_s + r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.lhs(r531_sw), r321_corner(r531_l - r531_s + r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l)), r321_corner(r531_l - r531_s + r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.lhs(r531_sw), r321_corner(r531_l - r531_s + r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l)), r321_corner(r1_mix(r531_l, r531_r, r531_p) - r531_s, r321_ParenBot * r531_pscale)));
                r531_currentGlyph.include(r321_dispiro(r321_widths.rhs(r531_sw), r321_corner(r1_mix(r531_r, r531_l, r531_p) + r531_s, r321_ParenTop * r531_pscale), r321_corner(r531_r + r531_s - r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.rhs(r531_sw), r321_corner(r531_r + r531_s - r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l)), r321_corner(r531_r + r531_s - r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.rhs(r531_sw), r321_corner(r531_r + r531_s - r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l)), r321_corner(r1_mix(r531_r, r531_l, r531_p) + r531_s, r321_ParenBot * r531_pscale)));
                r531_currentGlyph.include(r321_Ungizmo());
                r531_currentGlyph.include(r321_Translate(0, r321_SymbolMid - r321_SymbolMid * r531_pscale));
                r531_currentGlyph.include(r321_Regizmo());
                r531_currentGlyph.include(r321_AddEnclosureMark(r529_digits, r321_bracedDottdeDimens(r529_digits, r529_ww)));
                return void 0;
            };
        };
        var r321_DottedCrowd = function (r543_digits, r543_width) {
            var _r543_t0, _r543_t1;
            return 2 + r321_AdjustDigitCount(r543_digits, r543_width);
        };
        var r321_DottedScale = function (r544_digits, r544_width) {
            var _r544_t0, _r544_t1;
            return 1 / Math.pow(r321_AdjustDigitCount(r544_digits, r544_width), 0.5);
        };
        var r321_createDottedGlyphs = function (r545_digits, r545_demands) {
            var r545_suffix, r545_ww, _r545_t3, _r545_t4, _r545_t5, _r545_t7, _r545_t8, _r545_tag9;
            var _r545_t0 = r321_circleWidthClasses;
            var _r545_t1 = _r545_t0.length;
            var _r545_t2 = 0;
            var _r545_t6 = _r545_t2 < _r545_t1;
            while (_r545_t6) {
                _r545_t3 = _r545_t0[_r545_t2];
                r545_suffix = _r545_t3[0];
                r545_ww = _r545_t3[1];
                (function () {
                    var r548_job;
                    var r548_jobs = r321_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, 'dotted' + r545_digits, r545_suffix, r545_demands);
                    var r548_miniatureFont = r321_CreateDerivedFontFromJobs(r548_jobs, [], function (r549_gs) {
                        var _r549_t0, _r549_t1;
                        return r321_Miniature(r549_gs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_DottedCrowd(r545_digits, r545_ww)), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_DottedScale(r545_digits, r545_ww)), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1));
                    });
                    var r548_ensureDottedPartImpl = function (r553_item, r553_offset, r553_xCompress, r553_xTranslate) {
                        var _r553_t0, _r553_t1;
                        return function (r554_gidPart) {
                            var _r554_t0, _r554_t1;
                            var r554_gniPart = '.dotted-inner.' + r554_gidPart + '@' + [
                                r553_item,
                                r545_digits,
                                r553_offset,
                                r553_xCompress,
                                r553_xTranslate
                            ].join('/');
                            if (r321_xn$queryglyph$1aao(r554_gniPart))
                                return r554_gniPart;
                            r321_xn$createAndSaveGlyphImpl$2Lrc3c(r554_gniPart, null, function () {
                                var _r557_t1;
                                var _r557_t0 = this;
                                var r557_currentGlyph = _r557_t0;
                                r557_currentGlyph.setWidth(0);
                                r557_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                                r557_currentGlyph.include(r548_miniatureFont.queryByNameEnsured(r554_gidPart));
                                r557_currentGlyph.include(r321_Ungizmo());
                                r557_currentGlyph.include(r321_Translate(r553_offset, 0));
                                r557_currentGlyph.include(r321_Scale(r553_xCompress, 1));
                                r557_currentGlyph.include(r321_Translate(r553_xTranslate, 0));
                                r557_currentGlyph.include(r321_Regizmo());
                                return void 0;
                            });
                            return r554_gniPart;
                        };
                    };
                    var r548_createDottedGlyphImpl = function (r566_job, r566_jobDecomposable) {
                        var r566_gidPart, _r566_t4, _r566_t5;
                        var _r566_t0 = r566_job;
                        var r566_gn = _r566_t0[0];
                        var r566_unicode = _r566_t0[1];
                        var r566_partsWithDot = _r566_t0[2];
                        var r566_w = _r566_t0[3];
                        var _r566_t1 = r321_bracedDottdeDimens(1, r545_ww);
                        var r566_width = _r566_t1.width;
                        var r566_dscale = _r566_t1.dscale;
                        var r566_pscale = _r566_t1.pscale;
                        var r566_sw = _r566_t1.sw;
                        var r566_l = _r566_t1.l;
                        var r566_r = _r566_t1.r;
                        var r566_totalWidth = 0;
                        var r566_offsets = [];
                        var _r566_t2 = 0;
                        var _r566_t3 = r566_partsWithDot.length;
                        var r566_j = _r566_t2;
                        while (r566_j < _r566_t3) {
                            r566_gidPart = r566_partsWithDot[r566_j];
                            if (r566_j)
                                r566_totalWidth = r566_totalWidth - r321_SB;
                            r566_offsets[r566_j] = r566_totalWidth;
                            r566_totalWidth = r566_totalWidth + r548_miniatureFont.queryByNameEnsured(r566_gidPart).advanceWidth;
                            r566_j = r566_j + 1;
                        }
                        r566_totalWidth = r566_totalWidth - r321_SB;
                        var r566_xCompress = r566_totalWidth > r566_width ? r566_width / r566_totalWidth : 1;
                        var r566_xTranslate = (r566_totalWidth > r566_width ? 0 : r566_width / 2 - r566_totalWidth / 2) - r566_width;
                        return !r321_xn$queryglyph$1aao(r566_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r566_gn, r566_w === r545_ww ? r566_unicode : null, function () {
                            var r571_gidPart, r571_p, _r571_t3;
                            var _r571_t2 = this;
                            var r571_currentGlyph = _r571_t2;
                            r571_currentGlyph.setWidth(r566_width);
                            var r571_ps = [r548_gnSpace];
                            var _r571_t0 = 0;
                            var _r571_t1 = r566_partsWithDot.length;
                            var r571_j = _r571_t0;
                            while (r571_j < _r571_t1) {
                                r571_gidPart = r566_partsWithDot[r571_j];
                                r571_p = r321_EnsureComponentGlyphT(r571_gidPart, r548_ensureDottedPartImpl(r571_j, r566_offsets[r571_j], r566_xCompress, r566_xTranslate));
                                r571_currentGlyph.include(r321_xn$referglyph$1aao(r571_p));
                                r571_ps.push(r571_p);
                                r571_j = r571_j + 1;
                            }
                            r571_currentGlyph.include(r321_Translate(r566_width, 0));
                            if (r566_jobDecomposable)
                                r1_CvDecompose.set(r571_currentGlyph, r571_ps);
                            return void 0;
                        }) : void 0;
                    };
                    var r548_gnSpace = '.dotted-space.' + [
                        r545_digits,
                        r545_suffix
                    ].join('/');
                    if (!r321_xn$queryglyph$1aao(r548_gnSpace))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r548_gnSpace, null, function () {
                            var _r579_t1;
                            var _r579_t0 = this;
                            var r579_currentGlyph = _r579_t0;
                            r579_currentGlyph.setWidth(r545_ww);
                            return void 0;
                        });
                    var _r548_t0 = r548_jobs.nonDecomposable;
                    var _r548_t1 = _r548_t0.length;
                    var _r548_t2 = 0;
                    while (_r548_t2 < _r548_t1) {
                        r548_job = _r548_t0[_r548_t2];
                        r548_createDottedGlyphImpl(r548_job, false);
                        _r548_t2 = _r548_t2 + 1;
                    }
                    var _r548_t3 = r548_jobs.decomposableJobs;
                    var _r548_t4 = _r548_t3.length;
                    var _r548_t5 = 0;
                    while (_r548_t5 < _r548_t4) {
                        r548_job = _r548_t3[_r548_t5];
                        r548_createDottedGlyphImpl(r548_job, true);
                        _r548_t5 = _r548_t5 + 1;
                    }
                    return r321_applyRelations(r548_jobs.relApplications);
                }());
                _r545_t7 = _r545_t2 = _r545_t2 + 1;
                _r545_t6 = _r545_t2 < _r545_t1;
            }
            return _r545_t7;
        };
        var r321_digitGlyphNames = function (r583_j) {
            var _r583_t0, _r583_t1;
            return (r583_j + '').split('').map(function (r584_c) {
                var _r584_t0, _r584_t1;
                return r321_glyphStore.queryNameOfUnicode('0'.charCodeAt(0) + (r584_c - 0));
            });
        };
        var r321_digitHasSerif = function (r585_d) {
            var _r585_t0, _r585_t1;
            return !(r585_d === 6 || r585_d === 8 || r585_d === 9);
        };
        (function () {
            var r587_compositions = [
                [
                    169,
                    ['C'],
                    r321_WideWidth2
                ],
                [
                    127279,
                    ['revC'],
                    r321_WideWidth2
                ],
                [
                    8471,
                    ['P'],
                    r321_WideWidth2
                ],
                [
                    127405,
                    ['M'],
                    r321_WideWidth2
                ],
                [
                    9450,
                    ['zero.lnum'],
                    r321_WideWidth1
                ],
                [
                    127243,
                    ['zero.lnum'],
                    r321_WideWidth1
                ],
                [
                    127245,
                    ['zero.lnum/forceSlashed'],
                    r321_WideWidth2
                ]
            ];
            var _r587_t0 = 1;
            var _r587_t1 = 9;
            var r587_j = _r587_t0;
            while (r587_j <= _r587_t1) {
                r587_compositions.push([
                    9312 + r587_j - 1,
                    r321_digitGlyphNames(r587_j),
                    r321_WideWidth1
                ]);
                r587_j = r587_j + 1;
            }
            var _r587_t2 = 1;
            var _r587_t3 = 9;
            r587_j = _r587_t2;
            while (r587_j <= _r587_t3) {
                if (!r321_digitHasSerif(r587_j))
                    r587_compositions.push([
                        10112 + r587_j - 1,
                        r321_digitGlyphNames(r587_j),
                        r321_WideWidth1
                    ]);
                r587_j = r587_j + 1;
            }
            var _r587_t4 = 0;
            var _r587_t5 = 26;
            r587_j = _r587_t4;
            while (r587_j < _r587_t5) {
                r587_compositions.push([
                    9398 + r587_j,
                    [r321_glyphStore.queryNameOfUnicode('A'.charCodeAt(0) + r587_j)],
                    r321_WideWidth1
                ]);
                r587_j = r587_j + 1;
            }
            var _r587_t6 = 0;
            var _r587_t7 = 26;
            r587_j = _r587_t6;
            while (r587_j < _r587_t7) {
                r587_compositions.push([
                    9424 + r587_j,
                    [r321_glyphStore.queryNameOfUnicode('a'.charCodeAt(0) + r587_j)],
                    r321_WideWidth1,
                    0.5,
                    r321_XH / 2
                ]);
                r587_j = r587_j + 1;
            }
            return r321_createCircledGlyphs(1, r587_compositions);
        }());
        (function () {
            return r321_createBackslashCircledGlyphs(1, [
                [
                    127247,
                    ['dollar'],
                    r321_WideWidth2
                ],
                [
                    127342,
                    ['C'],
                    r321_WideWidth2
                ]
            ]);
        }());
        (function () {
            return r321_createItalicCircledGlyphs(1, [
                [
                    127275,
                    ['C'],
                    r321_WideWidth1
                ],
                [
                    127276,
                    ['R'],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            var r601_compositions = [];
            var _r601_t0 = 1;
            var _r601_t1 = 9;
            var r601_j = _r601_t0;
            while (r601_j <= _r601_t1) {
                if (r321_digitHasSerif(r601_j))
                    r601_compositions.push([
                        10112 + r601_j - 1,
                        r321_digitGlyphNames(r601_j),
                        r321_WideWidth1
                    ]);
                r601_j = r601_j + 1;
            }
            return r321_createSansSerifCircledGlyphs(1, r601_compositions);
        }());
        (function () {
            var r605_compositions = [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127341,
                    [
                        'C',
                        'C'
                    ],
                    r321_WideWidth2
                ],
                [
                    127277,
                    [
                        'C',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127278,
                    [
                        'W',
                        'z'
                    ],
                    r321_WideWidth1
                ]
            ];
            var _r605_t0 = 10;
            var _r605_t1 = 20;
            var r605_j = _r605_t0;
            while (r605_j <= _r605_t1) {
                r605_compositions.push([
                    9312 + r605_j - 1,
                    r321_digitGlyphNames(r605_j),
                    r321_WideWidth1
                ]);
                r605_j = r605_j + 1;
            }
            var _r605_t2 = 21;
            var _r605_t3 = 35;
            r605_j = _r605_t2;
            while (r605_j <= _r605_t3) {
                r605_compositions.push([
                    12881 + r605_j - 21,
                    r321_digitGlyphNames(r605_j),
                    r321_WideWidth1
                ]);
                r605_j = r605_j + 1;
            }
            var _r605_t4 = 36;
            var _r605_t5 = 50;
            r605_j = _r605_t4;
            while (r605_j <= _r605_t5) {
                r605_compositions.push([
                    12977 + r605_j - 36,
                    r321_digitGlyphNames(r605_j),
                    r321_WideWidth1
                ]);
                r605_j = r605_j + 1;
            }
            return r321_createCircledGlyphs(2, r605_compositions);
        }());
        (function () {
            var r613_compositions = [];
            var _r613_t0 = 10;
            var _r613_t1 = 10;
            var r613_j = _r613_t0;
            while (r613_j <= _r613_t1) {
                r613_compositions.push([
                    10121 + r613_j - 10,
                    r321_digitGlyphNames(r613_j),
                    r321_WideWidth1
                ]);
                r613_j = r613_j + 1;
            }
            return r321_createSansSerifCircledGlyphs(2, r613_compositions);
        }());
        (function () {
            var r617_compositions = [
                [
                    9471,
                    ['zero.lnum'],
                    r321_WideWidth1
                ],
                [
                    127244,
                    ['zero.lnum'],
                    r321_WideWidth1
                ]
            ];
            var _r617_t0 = 1;
            var _r617_t1 = 9;
            var r617_j = _r617_t0;
            while (r617_j <= _r617_t1) {
                r617_compositions.push([
                    10102 + r617_j - 1,
                    r321_digitGlyphNames(r617_j),
                    r321_WideWidth1
                ]);
                r617_j = r617_j + 1;
            }
            var _r617_t2 = 1;
            var _r617_t3 = 9;
            r617_j = _r617_t2;
            while (r617_j <= _r617_t3) {
                if (!r321_digitHasSerif(r617_j))
                    r617_compositions.push([
                        10122 + r617_j - 1,
                        r321_digitGlyphNames(r617_j),
                        r321_WideWidth1
                    ]);
                r617_j = r617_j + 1;
            }
            var _r617_t4 = 0;
            var _r617_t5 = 26;
            r617_j = _r617_t4;
            while (r617_j < _r617_t5) {
                r617_compositions.push([
                    127312 + r617_j,
                    [r321_glyphStore.queryNameOfUnicode('A'.charCodeAt(0) + r617_j)],
                    r321_WideWidth1
                ]);
                r617_j = r617_j + 1;
            }
            return r321_createInsetCircledGlyphs(1, r617_compositions);
        }());
        (function () {
            var r625_compositions = [];
            var _r625_t0 = 1;
            var _r625_t1 = 9;
            var r625_j = _r625_t0;
            while (r625_j <= _r625_t1) {
                if (r321_digitHasSerif(r625_j))
                    r625_compositions.push([
                        10122 + r625_j - 1,
                        r321_digitGlyphNames(r625_j),
                        r321_WideWidth1
                    ]);
                r625_j = r625_j + 1;
            }
            return r321_createInsetSansSerifCircledGlyphs(1, r625_compositions);
        }());
        (function () {
            var r629_compositions = [];
            var _r629_t0 = 10;
            var _r629_t1 = 10;
            var r629_j = _r629_t0;
            while (r629_j <= _r629_t1) {
                r629_compositions.push([
                    10102 + r629_j - 1,
                    r321_digitGlyphNames(r629_j),
                    r321_WideWidth1
                ]);
                r629_j = r629_j + 1;
            }
            var _r629_t2 = 11;
            var _r629_t3 = 20;
            r629_j = _r629_t2;
            while (r629_j <= _r629_t3) {
                r629_compositions.push([
                    9451 + r629_j - 11,
                    r321_digitGlyphNames(r629_j),
                    r321_WideWidth1
                ]);
                r629_j = r629_j + 1;
            }
            return r321_createInsetCircledGlyphs(2, r629_compositions);
        }());
        (function () {
            var r635_compositions = [];
            var _r635_t0 = 10;
            var _r635_t1 = 10;
            var r635_j = _r635_t0;
            while (r635_j <= _r635_t1) {
                r635_compositions.push([
                    10131 + r635_j - 10,
                    r321_digitGlyphNames(r635_j),
                    r321_WideWidth1
                ]);
                r635_j = r635_j + 1;
            }
            return r321_createInsetSansSerifCircledGlyphs(2, r635_compositions);
        }());
        (function () {
            var r639_compositions = [];
            r639_compositions.push([
                null,
                ['markBaseSpace'],
                r321_WideWidth1
            ]);
            var _r639_t0 = 0;
            var _r639_t1 = 26;
            var r639_j = _r639_t0;
            while (r639_j < _r639_t1) {
                r639_compositions.push([
                    127280 + r639_j,
                    [r321_glyphStore.queryNameOfUnicode('A'.charCodeAt(0) + r639_j)],
                    r321_WideWidth1
                ]);
                r639_j = r639_j + 1;
            }
            r639_compositions.push([
                127397,
                ['d'],
                r321_WideWidth1
            ]);
            return r321_createBoxedGlyphs(1, r639_compositions);
        }());
        (function () {
            return r321_createBoxedGlyphs(2, [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127306,
                    [
                        'H',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127307,
                    [
                        'M',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127308,
                    [
                        'S',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127309,
                    [
                        'S',
                        'S'
                    ],
                    r321_WideWidth1
                ],
                [
                    127311,
                    [
                        'W',
                        'C'
                    ],
                    r321_WideWidth1
                ],
                [
                    127377,
                    [
                        'C',
                        'L'
                    ],
                    r321_WideWidth1
                ],
                [
                    127380,
                    [
                        'I',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127382,
                    [
                        'N',
                        'G'
                    ],
                    r321_WideWidth1
                ],
                [
                    127383,
                    [
                        'O',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127386,
                    [
                        'V',
                        'S'
                    ],
                    r321_WideWidth1
                ],
                [
                    127387,
                    [
                        'three.lnum',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127389,
                    [
                        'two.lnum',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127390,
                    [
                        'four.lnum',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127391,
                    [
                        'eight.lnum',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127398,
                    [
                        'H',
                        'C'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createBoxedGlyphs(3, [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127310,
                    [
                        'P',
                        'P',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127381,
                    [
                        'N',
                        'E',
                        'W'
                    ],
                    r321_WideWidth1
                ],
                [
                    127384,
                    [
                        'S',
                        'O',
                        'S'
                    ],
                    r321_WideWidth1
                ],
                [
                    127385,
                    [
                        'U',
                        'P',
                        'exclam'
                    ],
                    r321_WideWidth1
                ],
                [
                    127392,
                    [
                        'five.lnum',
                        'period',
                        'one.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127393,
                    [
                        'seven.lnum',
                        'period',
                        'one.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127395,
                    [
                        'six.lnum',
                        'zero.lnum',
                        'P'
                    ],
                    r321_WideWidth1
                ],
                [
                    127399,
                    [
                        'H',
                        'D',
                        'R'
                    ],
                    r321_WideWidth1
                ],
                [
                    127402,
                    [
                        'S',
                        'H',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127403,
                    [
                        'U',
                        'H',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127404,
                    [
                        'V',
                        'O',
                        'D'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createBoxedGlyphs(4, [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127378,
                    [
                        'C',
                        'O',
                        'O',
                        'L'
                    ],
                    r321_WideWidth1
                ],
                [
                    127379,
                    [
                        'F',
                        'R',
                        'E',
                        'E'
                    ],
                    r321_WideWidth1
                ],
                [
                    127394,
                    [
                        'two.lnum',
                        'two.lnum',
                        'period',
                        'two.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127396,
                    [
                        'one.lnum',
                        'two.lnum',
                        'zero.lnum',
                        'P'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createTwoRowBoxedGlyphs(3, [
                [
                    null,
                    [
                        'markBaseSpace',
                        'markBaseSpace'
                    ],
                    r321_WideWidth1
                ],
                [
                    127388,
                    [
                        'two.lnum',
                        'N',
                        'D',
                        'S',
                        'C',
                        'R'
                    ],
                    r321_WideWidth1
                ],
                [
                    127400,
                    [
                        'H',
                        'I',
                        'hyphen',
                        'R',
                        'E',
                        'S'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createTwoRowBoxedGlyphs(4, [
                [
                    null,
                    [
                        'markBaseSpace',
                        'markBaseSpace'
                    ],
                    r321_WideWidth1
                ],
                [
                    127401,
                    [
                        'L',
                        'O',
                        'S',
                        'S',
                        'L',
                        'E',
                        'S',
                        'S'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createDashedBoxedGlyphs(3, [[
                    65532,
                    [
                        'O',
                        'B',
                        'J/noDescend'
                    ],
                    r321_WideWidth1
                ]]);
        }());
        (function () {
            var r655_compositions = [];
            var _r655_t0 = 0;
            var _r655_t1 = 26;
            var r655_j = _r655_t0;
            while (r655_j < _r655_t1) {
                r655_compositions.push([
                    127344 + r655_j,
                    [r321_glyphStore.queryNameOfUnicode('A'.charCodeAt(0) + r655_j)],
                    r321_WideWidth1
                ]);
                r655_j = r655_j + 1;
            }
            return r321_createInsetBoxedGlyphs(1, r655_compositions);
        }());
        (function () {
            return r321_createInsetDiamondGlyphs(1, [[
                    65533,
                    ['question'],
                    r321_WideWidth2
                ]]);
        }());
        (function () {
            return r321_createInsetBoxedGlyphs(2, [
                [
                    127371,
                    [
                        'I',
                        'C'
                    ],
                    r321_WideWidth1
                ],
                [
                    127372,
                    [
                        'P',
                        'A'
                    ],
                    r321_WideWidth1
                ],
                [
                    127373,
                    [
                        'S',
                        'A'
                    ],
                    r321_WideWidth1
                ],
                [
                    127374,
                    [
                        'A',
                        'B'
                    ],
                    r321_WideWidth1
                ],
                [
                    127375,
                    [
                        'W',
                        'C'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            var r663_compositions = [];
            r663_compositions.push([
                129969,
                [r321_glyphStore.queryNameOfUnicode(10004).replace(/.WWID$/, '.NWID')],
                r321_WideWidth4
            ]);
            r663_compositions.push([
                129972,
                [r321_glyphStore.queryNameOfUnicode(8626).replace(/.WWID$/, '.NWID')],
                r321_WideWidth4
            ]);
            r663_compositions.push([
                129988,
                ['question'],
                r321_WideWidth4
            ]);
            return r321_createInsetMosaicGlyphs(1, r663_compositions);
        }());
        (function () {
            var r665_compositions = [];
            r665_compositions.push([
                null,
                ['markBaseSpace'],
                r321_WideWidth1
            ]);
            var _r665_t0 = 1;
            var _r665_t1 = 9;
            var r665_j = _r665_t0;
            while (r665_j <= _r665_t1) {
                r665_compositions.push([
                    9461 + r665_j - 1,
                    r321_digitGlyphNames(r665_j),
                    r321_WideWidth1
                ]);
                r665_j = r665_j + 1;
            }
            return r321_createDoubleCircledGlyphs(1, r665_compositions);
        }());
        (function () {
            var r669_compositions = [];
            r669_compositions.push([
                null,
                ['markBaseSpace'],
                r321_WideWidth1
            ]);
            var _r669_t0 = 10;
            var _r669_t1 = 10;
            var r669_j = _r669_t0;
            while (r669_j <= _r669_t1) {
                r669_compositions.push([
                    9461 + r669_j - 1,
                    r321_digitGlyphNames(r669_j),
                    r321_WideWidth1
                ]);
                r669_j = r669_j + 1;
            }
            return r321_createDoubleCircledGlyphs(2, r669_compositions);
        }());
        (function () {
            var r673_compositions = [];
            var _r673_t0 = 1;
            var _r673_t1 = 9;
            var r673_j = _r673_t0;
            while (r673_j <= _r673_t1) {
                r673_compositions.push([
                    9332 + r673_j - 1,
                    r321_digitGlyphNames(r673_j),
                    r321_WideWidth1
                ]);
                r673_j = r673_j + 1;
            }
            var _r673_t2 = 0;
            var _r673_t3 = 26;
            r673_j = _r673_t2;
            while (r673_j < _r673_t3) {
                r673_compositions.push([
                    9372 + r673_j,
                    [r321_glyphStore.queryNameOfUnicode('a'.charCodeAt(0) + r673_j)],
                    r321_WideWidth1,
                    0.5,
                    r321_XH / 2
                ]);
                r673_j = r673_j + 1;
            }
            var _r673_t4 = 0;
            var _r673_t5 = 26;
            r673_j = _r673_t4;
            while (r673_j < _r673_t5) {
                r673_compositions.push([
                    127248 + r673_j,
                    [r321_glyphStore.queryNameOfUnicode('A'.charCodeAt(0) + r673_j)],
                    r321_WideWidth1
                ]);
                r673_j = r673_j + 1;
            }
            return r321_createBracedGlyphs(1, r673_compositions);
        }());
        (function () {
            var r681_compositions = [];
            var _r681_t0 = 10;
            var _r681_t1 = 20;
            var r681_j = _r681_t0;
            while (r681_j <= _r681_t1) {
                r681_compositions.push([
                    9332 + r681_j - 1,
                    r321_digitGlyphNames(r681_j),
                    r321_WideWidth1
                ]);
                r681_j = r681_j + 1;
            }
            return r321_createBracedGlyphs(2, r681_compositions);
        }());
        (function () {
            return r321_createHexBracedGlyphs(1, [[
                    127274,
                    ['S'],
                    r321_WideWidth1
                ]]);
        }());
        (function () {
            var r687_compositions = [[
                    127232,
                    [
                        'zero.lnum',
                        'period'
                    ],
                    r321_WideWidth1
                ]];
            var _r687_t0 = 1;
            var _r687_t1 = 9;
            var r687_j = _r687_t0;
            while (r687_j <= _r687_t1) {
                r687_compositions.push([
                    9352 + r687_j - 1,
                    r321_digitGlyphNames(r687_j).concat(['period']),
                    r321_WideWidth1
                ]);
                r687_j = r687_j + 1;
            }
            return r321_createDottedGlyphs(1, r687_compositions);
        }());
        (function () {
            var r691_compositions = [];
            var _r691_t0 = 0;
            var _r691_t1 = 9;
            var r691_j = _r691_t0;
            while (r691_j <= _r691_t1) {
                r691_compositions.push([
                    127233 + r691_j,
                    r321_digitGlyphNames(r691_j).concat(['comma']),
                    r321_WideWidth1
                ]);
                r691_j = r691_j + 1;
            }
            return r321_createDottedGlyphs(1, r691_compositions);
        }());
        return function () {
            var r695_compositions = [];
            var _r695_t0 = 10;
            var _r695_t1 = 20;
            var r695_j = _r695_t0;
            while (r695_j <= _r695_t1) {
                r695_compositions.push([
                    9352 + r695_j - 1,
                    r321_digitGlyphNames(r695_j).concat(['period']),
                    r321_WideWidth1
                ]);
                r695_j = r695_j + 1;
            }
            return r321_createDottedGlyphs(2, r695_compositions);
        }();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r700_xn$Capture_Ext$2Lrc2b) {
    var _r700_t0, _r700_t1;
    r700_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r700_xn$Capture_Ext$2Lrc2b, 'Autobuild-Fractions', function (r701_xn$Capture$2Lrc8, r701_xn$ExportCapture$2Lrc4b) {
        var _r701_t8, _r701_t9;
        var _r701_t0 = r701_xn$Capture$2Lrc8;
        var r701_xn$createAndSaveGlyphImpl$2Lrc3c = _r701_t0['$createAndSaveGlyphImpl$'];
        var r701_xn$NamedParameterPair$2Lrc9b = _r701_t0['$NamedParameterPair$'];
        var r701_xn$assignUnicodeImpl$2Lrc8b = _r701_t0['$assignUnicodeImpl$'];
        var r701_xn$execState$2Lrc0b = _r701_t0['$execState$'];
        var r701_AS_BASE = _r701_t0.AS_BASE;
        var r701_ALSO_METRICS = _r701_t0.ALSO_METRICS;
        var _r701_t1 = r701_xn$Capture$2Lrc8.Metrics;
        var r701_Width = _r701_t1.Width;
        var r701_SB = _r701_t1.SB;
        var r701_CAP = _r701_t1.CAP;
        var r701_XH = _r701_t1.XH;
        var r701_SymbolMid = _r701_t1.SymbolMid;
        var r701_Scale = _r701_t1.Scale;
        var r701_Translate = _r701_t1.Translate;
        var r701_O = _r701_t1.O;
        var r701_RightSB = _r701_t1.RightSB;
        var r701_Middle = _r701_t1.Middle;
        var r701_AdviceStroke = _r701_t1.AdviceStroke;
        var _r701_t2 = r701_xn$Capture$2Lrc8.SpiroFns;
        var _r701_t3 = r701_xn$Capture$2Lrc8.BooleFns;
        var _r701_t4 = r701_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r701_HBar = _r701_t4.HBar;
        var r701_Ungizmo = _r701_t4.Ungizmo;
        var r701_Regizmo = _r701_t4.Regizmo;
        var _r701_t5 = r701_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r701_xn$referglyph$1aao = _r701_t5['refer-glyph'];
        var r701_xn$queryglyph$1aao = _r701_t5['query-glyph'];
        var _r701_t6 = r701_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r701_Miniature = _r701_t6.Miniature;
        var r701_Thner = _r701_t6.Thner;
        var _r701_t7 = r701_xn$Capture$2Lrc8['Autobuild-Enclosure-Shared'].resolve();
        var r701_CollectJobs = _r701_t7.CollectJobs;
        var r701_EnsureComponentGlyphT = _r701_t7.EnsureComponentGlyphT;
        var r701_CreateDerivedFontFromJobs = _r701_t7.CreateDerivedFontFromJobs;
        var r701_applyRelations = _r701_t7.applyRelations;
        var r701_createFracImpl = function (r706_prefix, r706_demands, r706_layout) {
            var r706_job, _r706_t6, _r706_t7;
            var r706_jobs = r701_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r706_prefix, '', r706_demands);
            var r706_miniatureFont = r701_CreateDerivedFontFromJobs(r706_jobs, [], function (r707_gs) {
                var _r707_t0, _r707_t1;
                return r701_Miniature(r707_gs, new r701_xn$NamedParameterPair$2Lrc9b('crowd', r706_layout.crowd), new r701_xn$NamedParameterPair$2Lrc9b('scale', r706_layout.scaleFactor + 0.05), new r701_xn$NamedParameterPair$2Lrc9b('mono', true), new r701_xn$NamedParameterPair$2Lrc9b('mono2', true));
            });
            var r706_FracBase = function (r712_nRows, r712_numWidth) {
                var _r712_t0, _r712_t1;
                var r712_gnFracBase = '.frac-base{' + r706_prefix + '}{' + r712_nRows + '}{' + r712_numWidth + '}';
                if (!r701_xn$queryglyph$1aao(r712_gnFracBase))
                    r701_xn$createAndSaveGlyphImpl$2Lrc3c(r712_gnFracBase, null, r706_layout.baseShape(r712_nRows, r712_numWidth));
                return r712_gnFracBase;
            };
            var r706_FracShift = function (r714_iRow, r714_nRows, r714_numWidth, r714_denWidth) {
                var _r714_t0, _r714_t1;
                var r714_gnFracShift = '.frac-shift{' + r706_prefix + '}{' + r714_iRow + '}{' + r714_nRows + '}{' + r714_numWidth + '}{' + r714_denWidth + '}';
                if (!r701_xn$queryglyph$1aao(r714_gnFracShift))
                    r701_xn$createAndSaveGlyphImpl$2Lrc3c(r714_gnFracShift, null, r706_layout.shiftShape(r714_iRow, r714_nRows, r714_numWidth, r714_denWidth));
                return r714_gnFracShift;
            };
            var r706_FracPartImpl = function (r716_subGlyphName) {
                var _r716_t0, _r716_t1;
                var r716_gnn = '.frac-inner{' + r706_prefix + '}{' + r716_subGlyphName + '}';
                if (!r701_xn$queryglyph$1aao(r716_gnn))
                    r701_xn$createAndSaveGlyphImpl$2Lrc3c(r716_gnn, null, function () {
                        var _r719_t1;
                        var _r719_t0 = this;
                        var r719_currentGlyph = _r719_t0;
                        var r719_subGlyph = r706_miniatureFont.queryByNameEnsured(r716_subGlyphName);
                        r719_currentGlyph.setWidth(0);
                        r719_currentGlyph.setMarkAnchor('fracBuildUp', 0, 0, r719_subGlyph.advanceWidth * r706_layout.scaleFactor, 0);
                        r719_currentGlyph.include(r719_subGlyph);
                        r719_currentGlyph.include(r701_Ungizmo());
                        r719_currentGlyph.include(r701_Translate(0, 0));
                        r719_currentGlyph.include(r701_Scale(r706_layout.scaleFactor));
                        r719_currentGlyph.include(r701_Regizmo());
                        return void 0;
                    });
                return r716_gnn;
            };
            var r706_createFractionImpl = function (r727_job, r727_jobDecomposable) {
                var _r727_t1, _r727_t2;
                var _r727_t0 = r727_job;
                var r727_gnf = _r727_t0[0];
                var r727_unicode = _r727_t0[1];
                var r727_gnParts = _r727_t0[2];
                return !r701_xn$queryglyph$1aao(r727_gnf) ? r701_xn$createAndSaveGlyphImpl$2Lrc3c(r727_gnf, r727_unicode, function () {
                    var r730_gnList, r730_thisRowWidth, r730_gnSubRowElement, r730_gnBase, r730_gnShift, r730_gnRowElement, _r730_t2, _r730_t3, _r730_t4, _r730_t5, _r730_t6, _r730_t7, _r730_t9;
                    var _r730_t8 = this;
                    var r730_currentGlyph = _r730_t8;
                    var r730_rows = r706_layout.breakRows(r727_gnParts);
                    var r730_decomposition = [];
                    var r730_lastRowWidth = 0;
                    var _r730_t0 = 0;
                    var _r730_t1 = r730_rows.length;
                    var r730_j = _r730_t0;
                    while (r730_j < _r730_t1) {
                        r730_gnList = [];
                        r730_thisRowWidth = 0;
                        _r730_t2 = r730_rows[r730_j];
                        _r730_t3 = _r730_t2.length;
                        _r730_t4 = 0;
                        while (_r730_t4 < _r730_t3) {
                            r730_gnSubRowElement = _r730_t2[_r730_t4];
                            r730_thisRowWidth = r730_thisRowWidth + r706_miniatureFont.queryByNameEnsured(r730_gnSubRowElement).advanceWidth;
                            r730_gnList.push(r701_EnsureComponentGlyphT(r730_gnSubRowElement, r706_FracPartImpl));
                            _r730_t4 = _r730_t4 + 1;
                        }
                        if (r730_j === 0) {
                            r730_gnBase = r706_FracBase(r730_rows.length, r730_thisRowWidth);
                            r730_currentGlyph.include(r701_xn$referglyph$1aao(r730_gnBase), r701_AS_BASE, r701_ALSO_METRICS);
                            r730_decomposition.push(r730_gnBase);
                        } else {
                            r730_gnShift = r706_FracShift(r730_j, r730_rows.length, r730_lastRowWidth, r730_thisRowWidth);
                            r730_currentGlyph.include(r701_xn$referglyph$1aao(r730_gnShift));
                            r730_decomposition.push(r730_gnShift);
                        }
                        _r730_t5 = r730_gnList;
                        _r730_t6 = _r730_t5.length;
                        _r730_t7 = 0;
                        while (_r730_t7 < _r730_t6) {
                            r730_gnRowElement = _r730_t5[_r730_t7];
                            r730_currentGlyph.include(r701_xn$referglyph$1aao(r730_gnRowElement));
                            r730_decomposition.push(r730_gnRowElement);
                            _r730_t7 = _r730_t7 + 1;
                        }
                        r730_lastRowWidth = r730_thisRowWidth;
                        r730_j = r730_j + 1;
                    }
                    if (r727_jobDecomposable)
                        r1_CvDecompose.set(r730_currentGlyph, r730_decomposition);
                    return void 0;
                }) : void 0;
            };
            var _r706_t0 = r706_jobs.nonDecomposable;
            var _r706_t1 = _r706_t0.length;
            var _r706_t2 = 0;
            while (_r706_t2 < _r706_t1) {
                r706_job = _r706_t0[_r706_t2];
                r706_createFractionImpl(r706_job, false);
                _r706_t2 = _r706_t2 + 1;
            }
            var _r706_t3 = r706_jobs.decomposableJobs;
            var _r706_t4 = _r706_t3.length;
            var _r706_t5 = 0;
            while (_r706_t5 < _r706_t4) {
                r706_job = _r706_t3[_r706_t5];
                r706_createFractionImpl(r706_job, true);
                _r706_t5 = _r706_t5 + 1;
            }
            return r701_applyRelations(r706_jobs.relApplications);
        };
        var r701_FractionLayout = function (r739_letterHeight, r739_fine, r739_scaleFactor, r739_closing) {
            var _r739_t0, _r739_t1;
            var r739_dist = r701_XH * (1 - r739_scaleFactor - r739_closing);
            var r739_partOffsetY = r739_letterHeight * r739_scaleFactor + r739_dist;
            return {
                'crowd': 3.5,
                'scaleFactor': r739_scaleFactor,
                'breakRows': function (r740_a) {
                    var _r740_t0, _r740_t1;
                    return [
                        [r740_a[0]],
                        r740_a.slice(1)
                    ];
                },
                'baseShape': function (r741_nRows, r741_firstRowWidth) {
                    var _r741_t0, _r741_t1;
                    return function () {
                        var _r743_t1;
                        var _r743_t0 = this;
                        var r743_currentGlyph = _r743_t0;
                        r743_currentGlyph.setWidth(r701_Width);
                        if (r739_fine)
                            r743_currentGlyph.include(r701_HBar.m(r701_SB, r701_RightSB, r701_SymbolMid, r739_fine * 0.75));
                        r743_currentGlyph.setBaseAnchor('fracBuildUp', r701_Middle - r741_firstRowWidth * r739_scaleFactor / 2, r701_SymbolMid + r739_dist / 2);
                        return void 0;
                    };
                },
                'shiftShape': function (r747_iRow, r747_nRows, r747_numWidth, r747_denWidth) {
                    var _r747_t0, _r747_t1;
                    return function () {
                        var _r749_t1;
                        var _r749_t0 = this;
                        var r749_currentGlyph = _r749_t0;
                        var r749_offset = -(r747_numWidth / 2 + r747_denWidth / 2) * r739_scaleFactor;
                        r749_currentGlyph.setWidth(0);
                        r749_currentGlyph.setMarkAnchor('fracBuildUp', 0, 0, r749_offset, -r739_partOffsetY);
                        return void 0;
                    };
                }
            };
        };
        var r701_ControlPictureLayout = function (r752_crowd, r752_scaleFactor, r752_pGap) {
            var _r752_t0, _r752_t1;
            var r752_gap = r701_XH * r752_pGap;
            return {
                'crowd': r752_crowd,
                'scaleFactor': r752_scaleFactor,
                'breakRows': function (r753_a) {
                    var _r753_t0, _r753_t1;
                    return r753_a.map(function (r754_x) {
                        var _r754_t0, _r754_t1;
                        return [r754_x];
                    });
                },
                'baseShape': function (r755_nRows, r755_firstRowWidth) {
                    var _r755_t0, _r755_t1;
                    return function () {
                        var _r757_t1;
                        var _r757_t0 = this;
                        var r757_currentGlyph = _r757_t0;
                        r757_currentGlyph.setWidth(r701_Width);
                        r757_currentGlyph.setBaseAnchor('fracBuildUp', r701_SB, r701_SymbolMid + (r701_CAP * r752_scaleFactor * r755_nRows + r752_gap * (r755_nRows - 1)) / 2 - r701_CAP * r752_scaleFactor);
                        return void 0;
                    };
                },
                'shiftShape': function (r760_iRow, r760_nRows, r760_numWidth, r760_denWidth) {
                    var _r760_t0, _r760_t1;
                    return function () {
                        var _r762_t1;
                        var _r762_t0 = this;
                        var r762_currentGlyph = _r762_t0;
                        var r762_startPos = function (r763_w, r763_p) {
                            var _r763_t0, _r763_t1;
                            return r701_SB + (r701_RightSB - r701_SB - r763_w * r752_scaleFactor) * r763_p / (r760_nRows - 1);
                        };
                        var r762_offset = r762_startPos(r760_denWidth, r760_iRow) - r762_startPos(r760_numWidth, r760_iRow - 1) - r760_numWidth * r752_scaleFactor;
                        r762_currentGlyph.setWidth(0);
                        r762_currentGlyph.setMarkAnchor('fracBuildUp', 0, 0, r762_offset, -(r701_CAP * r752_scaleFactor + r752_gap));
                        return void 0;
                    };
                }
            };
        };
        var r701_createFractions = function (r766_records) {
            var _r766_t0, _r766_t1;
            return r701_createFracImpl('frac', r766_records, r701_FractionLayout(r701_CAP, r701_AdviceStroke(3), 0.55, 0.05));
        };
        var r701_createFractionsSmall = function (r767_records) {
            var _r767_t0, _r767_t1;
            return r701_createFracImpl('fracSmall', r767_records, r701_FractionLayout(r701_XH, r701_AdviceStroke(3), 0.55, 0.05));
        };
        var r701_createControlPictures2 = function (r768_records) {
            var _r768_t0, _r768_t1;
            return r701_createFracImpl('ctrlPict2', r768_records, r701_ControlPictureLayout(3.75, 0.55, 0.2));
        };
        var r701_createControlPictures3 = function (r769_records) {
            var _r769_t0, _r769_t1;
            return r701_createFracImpl('ctrlPict3', r769_records, r701_ControlPictureLayout(5, 0.375, 0.1));
        };
        r701_createFractions([
            [
                188,
                [
                    'one.lnum',
                    'four.lnum'
                ]
            ],
            [
                189,
                [
                    'one.lnum',
                    'two.lnum'
                ]
            ],
            [
                190,
                [
                    'three.lnum',
                    'four.lnum'
                ]
            ],
            [
                8528,
                [
                    'one.lnum',
                    'seven.lnum'
                ]
            ],
            [
                8529,
                [
                    'one.lnum',
                    'nine.lnum'
                ]
            ],
            [
                8530,
                [
                    'one.lnum',
                    'one.lnum',
                    'zero.lnum'
                ]
            ],
            [
                8531,
                [
                    'one.lnum',
                    'three.lnum'
                ]
            ],
            [
                8532,
                [
                    'two.lnum',
                    'three.lnum'
                ]
            ],
            [
                8533,
                [
                    'one.lnum',
                    'five.lnum'
                ]
            ],
            [
                8534,
                [
                    'two.lnum',
                    'five.lnum'
                ]
            ],
            [
                8535,
                [
                    'three.lnum',
                    'five.lnum'
                ]
            ],
            [
                8536,
                [
                    'four.lnum',
                    'five.lnum'
                ]
            ],
            [
                8537,
                [
                    'one.lnum',
                    'six.lnum'
                ]
            ],
            [
                8538,
                [
                    'five.lnum',
                    'six.lnum'
                ]
            ],
            [
                8539,
                [
                    'one.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8540,
                [
                    'three.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8541,
                [
                    'five.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8542,
                [
                    'seven.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8585,
                [
                    'zero.lnum',
                    'three.lnum'
                ]
            ],
            [
                8525,
                [
                    'A',
                    'S'
                ]
            ]
        ]);
        r701_createFractionsSmall([
            [
                8448,
                [
                    'a',
                    'c'
                ]
            ],
            [
                8449,
                [
                    'a',
                    's'
                ]
            ],
            [
                8453,
                [
                    'c',
                    'o'
                ]
            ],
            [
                8454,
                [
                    'c',
                    'u'
                ]
            ]
        ]);
        r701_createControlPictures2([
            [
                57505,
                [
                    'L',
                    'N'
                ]
            ],
            [
                57507,
                [
                    'C',
                    'N'
                ]
            ],
            [
                9224,
                [
                    'B',
                    'S'
                ]
            ],
            [
                9225,
                [
                    'H',
                    'T'
                ]
            ],
            [
                9226,
                [
                    'L',
                    'F'
                ]
            ],
            [
                9227,
                [
                    'V',
                    'T'
                ]
            ],
            [
                9228,
                [
                    'F',
                    'F'
                ]
            ],
            [
                9229,
                [
                    'C',
                    'R'
                ]
            ],
            [
                9230,
                [
                    'S',
                    'O'
                ]
            ],
            [
                9231,
                [
                    'S',
                    'I'
                ]
            ],
            [
                9241,
                [
                    'E',
                    'M'
                ]
            ],
            [
                9244,
                [
                    'F',
                    'S'
                ]
            ],
            [
                9245,
                [
                    'G',
                    'S'
                ]
            ],
            [
                9246,
                [
                    'R',
                    'S'
                ]
            ],
            [
                9247,
                [
                    'U',
                    'S'
                ]
            ],
            [
                9248,
                [
                    'S',
                    'P'
                ]
            ],
            [
                9252,
                [
                    'N',
                    'L'
                ]
            ]
        ]);
        return r701_createControlPictures3([
            [
                9216,
                [
                    'N',
                    'U',
                    'L'
                ]
            ],
            [
                9217,
                [
                    'S',
                    'O',
                    'H'
                ]
            ],
            [
                9218,
                [
                    'S',
                    'T',
                    'X'
                ]
            ],
            [
                9219,
                [
                    'E',
                    'T',
                    'X'
                ]
            ],
            [
                9220,
                [
                    'E',
                    'O',
                    'T'
                ]
            ],
            [
                9221,
                [
                    'E',
                    'N',
                    'Q'
                ]
            ],
            [
                9222,
                [
                    'A',
                    'C',
                    'K'
                ]
            ],
            [
                9223,
                [
                    'B',
                    'E',
                    'L'
                ]
            ],
            [
                9232,
                [
                    'D',
                    'L',
                    'E'
                ]
            ],
            [
                9233,
                [
                    'D',
                    'C',
                    'one.lnum'
                ]
            ],
            [
                9234,
                [
                    'D',
                    'C',
                    'two.lnum'
                ]
            ],
            [
                9235,
                [
                    'D',
                    'C',
                    'three.lnum'
                ]
            ],
            [
                9236,
                [
                    'D',
                    'C',
                    'four.lnum'
                ]
            ],
            [
                9237,
                [
                    'N',
                    'A',
                    'K'
                ]
            ],
            [
                9238,
                [
                    'S',
                    'Y',
                    'N'
                ]
            ],
            [
                9239,
                [
                    'E',
                    'T',
                    'B'
                ]
            ],
            [
                9240,
                [
                    'C',
                    'A',
                    'N'
                ]
            ],
            [
                9242,
                [
                    'S',
                    'U',
                    'B'
                ]
            ],
            [
                9243,
                [
                    'E',
                    'S',
                    'C'
                ]
            ],
            [
                9249,
                [
                    'D',
                    'E',
                    'L'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r772_xn$Capture_Ext$2Lrc2b) {
    var _r772_t0, _r772_t1;
    r772_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r772_xn$Capture_Ext$2Lrc2b, 'AutoBuild-Accented-Equal', function (r773_xn$Capture$2Lrc8, r773_xn$ExportCapture$2Lrc4b) {
        var _r773_t9, _r773_t10;
        var _r773_t0 = r773_xn$Capture$2Lrc8;
        var r773_xn$createAndSaveGlyphImpl$2Lrc3c = _r773_t0['$createAndSaveGlyphImpl$'];
        var r773_xn$NamedParameterPair$2Lrc9b = _r773_t0['$NamedParameterPair$'];
        var r773_xn$assignUnicodeImpl$2Lrc8b = _r773_t0['$assignUnicodeImpl$'];
        var r773_xn$execState$2Lrc0b = _r773_t0['$execState$'];
        var _r773_t1 = r773_xn$Capture$2Lrc8.Metrics;
        var r773_Width = _r773_t1.Width;
        var r773_CAP = _r773_t1.CAP;
        var r773_XH = _r773_t1.XH;
        var r773_SymbolMid = _r773_t1.SymbolMid;
        var r773_OperTop = _r773_t1.OperTop;
        var r773_OperBot = _r773_t1.OperBot;
        var r773_Scale = _r773_t1.Scale;
        var r773_Translate = _r773_t1.Translate;
        var r773_Middle = _r773_t1.Middle;
        var _r773_t2 = r773_xn$Capture$2Lrc8.SpiroFns;
        var _r773_t3 = r773_xn$Capture$2Lrc8.BooleFns;
        var _r773_t4 = r773_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r773_Ungizmo = _r773_t4.Ungizmo;
        var r773_Regizmo = _r773_t4.Regizmo;
        var _r773_t5 = r773_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r773_xn$referglyph$1aao = _r773_t5['refer-glyph'];
        var r773_xn$queryglyph$1aao = _r773_t5['query-glyph'];
        var _r773_t6 = r773_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r773_Miniature = _r773_t6.Miniature;
        var _r773_t7 = r773_xn$Capture$2Lrc8['Mark-Above'].resolve();
        var r773_aboveMarkBot = _r773_t7.aboveMarkBot;
        var _r773_t8 = r773_xn$Capture$2Lrc8['Autobuild-Enclosure-Shared'].resolve();
        var r773_CollectJobs = _r773_t8.CollectJobs;
        var r773_CreateDerivedFontFromJobs = _r773_t8.CreateDerivedFontFromJobs;
        var r773_EnsureComponentGlyphT = _r773_t8.EnsureComponentGlyphT;
        var r773_applyRelations = _r773_t8.applyRelations;
        var r773_createAccentedOp = function (r779_gnBase, r779_crowd, r779_scale, r779_shiftX, r779_shiftY, r779_demands) {
            var r779_job, _r779_t6, _r779_t7;
            var r779_prefix = 'accent-op{' + r779_gnBase + '}{' + [
                r779_crowd,
                r779_scale,
                r779_shiftX,
                r779_shiftY
            ].join('-') + '}';
            var r779_jobs = r773_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$MONOSPACEONLY$5Frx, r779_prefix, '', r779_demands);
            var r779_dFont = r773_CreateDerivedFontFromJobs(r779_jobs, [], function (r780_gs) {
                var _r780_t0, _r780_t1;
                return r773_Miniature(r780_gs, new r773_xn$NamedParameterPair$2Lrc9b('crowd', r779_crowd), new r773_xn$NamedParameterPair$2Lrc9b('scale', r779_scale), new r773_xn$NamedParameterPair$2Lrc9b('mono', true), new r773_xn$NamedParameterPair$2Lrc9b('mono2', true));
            });
            var r779_ComponentImpl = function (r785_offset, r785_totalWidth) {
                var _r785_t0, _r785_t1;
                return function (r786_gidPart) {
                    var _r786_t0, _r786_t1;
                    var r786_gni = '.accented-op-part.' + r786_gidPart + '@' + [
                        r779_prefix,
                        r785_offset,
                        r785_totalWidth
                    ].join('/');
                    if (r773_xn$queryglyph$1aao(r786_gni))
                        return r786_gni;
                    r773_xn$createAndSaveGlyphImpl$2Lrc3c(r786_gni, null, function () {
                        var _r789_t1;
                        var _r789_t0 = this;
                        var r789_currentGlyph = _r789_t0;
                        r789_currentGlyph.setWidth(0);
                        r789_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                        r789_currentGlyph.include(r779_dFont.queryByNameEnsured(r786_gidPart));
                        r789_currentGlyph.include(r773_Ungizmo());
                        r789_currentGlyph.include(r773_Translate(-r785_totalWidth / 2 + r785_offset, 0));
                        r789_currentGlyph.include(r773_Scale(r779_scale));
                        r789_currentGlyph.include(r773_Translate(r773_Middle + r779_shiftX - r773_Width, r779_shiftY));
                        r789_currentGlyph.include(r773_Regizmo());
                        return void 0;
                    });
                    return r786_gni;
                };
            };
            var r779_createAccentedOpImpl = function (r798_job, r798_decomposable) {
                var r798_gidPart, _r798_t3, _r798_t4;
                var _r798_t0 = r798_job;
                var r798_gn = _r798_t0[0];
                var r798_unicode = _r798_t0[1];
                var r798_parts = _r798_t0[2];
                var r798_totalWidth = 0;
                var r798_offsets = [];
                var _r798_t1 = 0;
                var _r798_t2 = r798_parts.length;
                var r798_j = _r798_t1;
                while (r798_j < _r798_t2) {
                    r798_gidPart = r798_parts[r798_j];
                    r798_offsets[r798_j] = r798_totalWidth;
                    r798_totalWidth = r798_totalWidth + r779_dFont.queryByNameEnsured(r798_gidPart).advanceWidth;
                    r798_j = r798_j + 1;
                }
                return !r773_xn$queryglyph$1aao(r798_gn) ? r773_xn$createAndSaveGlyphImpl$2Lrc3c(r798_gn, r798_unicode, function () {
                    var r803_gidPart, r803_p, _r803_t3;
                    var _r803_t2 = this;
                    var r803_currentGlyph = _r803_t2;
                    r803_currentGlyph.setWidth(r773_Width);
                    var r803_ps = [r779_gnBase];
                    var _r803_t0 = 0;
                    var _r803_t1 = r798_parts.length;
                    var r803_j = _r803_t0;
                    while (r803_j < _r803_t1) {
                        r803_gidPart = r798_parts[r803_j];
                        r803_p = r773_EnsureComponentGlyphT(r803_gidPart, r779_ComponentImpl(r798_offsets[r803_j], r798_totalWidth));
                        r803_currentGlyph.include(r773_xn$referglyph$1aao(r803_p));
                        r803_ps.push(r803_p);
                        r803_j = r803_j + 1;
                    }
                    r803_currentGlyph.include(r773_Translate(r773_Width, 0));
                    r803_currentGlyph.include(r773_xn$referglyph$1aao(r779_gnBase));
                    if (r798_decomposable)
                        r1_CvDecompose.set(r803_currentGlyph, r803_ps);
                    return void 0;
                }) : void 0;
            };
            var _r779_t0 = r779_jobs.nonDecomposable;
            var _r779_t1 = _r779_t0.length;
            var _r779_t2 = 0;
            while (_r779_t2 < _r779_t1) {
                r779_job = _r779_t0[_r779_t2];
                r779_createAccentedOpImpl(r779_job, false);
                _r779_t2 = _r779_t2 + 1;
            }
            var _r779_t3 = r779_jobs.decomposableJobs;
            var _r779_t4 = _r779_t3.length;
            var _r779_t5 = 0;
            while (_r779_t5 < _r779_t4) {
                r779_job = _r779_t3[_r779_t5];
                r779_createAccentedOpImpl(r779_job, true);
                _r779_t5 = _r779_t5 + 1;
            }
            return r773_applyRelations(r779_jobs.relApplications);
        };
        r773_createAccentedOp('equal', 7, 0.4, 0, r773_aboveMarkBot, [
            [
                8798,
                ['m']
            ],
            [
                8799,
                [
                    'question/hookPart',
                    'question/dotPart'
                ]
            ]
        ]);
        r773_createAccentedOp('equal', 5, 0.8, 0, r773_aboveMarkBot, [[
                8792,
                ['symbolMidTie']
            ]]);
        r773_createAccentedOp('equal', 7, 0.5, 0, r773_aboveMarkBot - (r773_SymbolMid - r773_XH / 2), [
            [
                8793,
                ['triangularWedge.NWID']
            ],
            [
                8794,
                ['triangularVee.NWID']
            ],
            [
                8795,
                ['blackStar.NWID']
            ],
            [
                8796,
                ['whiteTriangleUp.NWID']
            ],
            [
                10862,
                ['mathAsterisk']
            ]
        ]);
        r773_createAccentedOp('sqrt', 5, 0.5, -r773_Width / 4, r1_mix(r773_OperBot, r773_OperTop, 0.6), [
            [
                8731,
                ['three.lnum']
            ],
            [
                8732,
                ['four.lnum']
            ]
        ]);
        r773_createAccentedOp('equal', 8, 0.3, 0, r773_aboveMarkBot, [[
                8797,
                [
                    'd',
                    'e',
                    'f'
                ]
            ]]);
        r773_createAccentedOp('markDemoBaseSpace', 6, 0.4, 0, r773_aboveMarkBot - (r773_CAP * 0.4 - r773_XH * 0.4), [[
                174,
                [
                    'R',
                    'combRingCapDiv1'
                ]
            ]]);
        r773_createAccentedOp('markDemoBaseSpace', 6, 0.45, 0, r773_aboveMarkBot - (r773_CAP * 0.45 - r773_XH * 0.45), [
            [
                8482,
                [
                    'T',
                    'M'
                ]
            ],
            [
                8480,
                [
                    'S',
                    'M'
                ]
            ],
            [
                127338,
                [
                    'M',
                    'C'
                ]
            ],
            [
                127339,
                [
                    'M',
                    'D'
                ]
            ],
            [
                127340,
                [
                    'M',
                    'R'
                ]
            ]
        ]);
        return r773_createAccentedOp('markDemoBaseSpace', 6.5, 0.35, 0, r773_aboveMarkBot - (r773_CAP * 0.35 - r773_XH * 0.35), [
            [
                8481,
                [
                    'T',
                    'E',
                    'L'
                ]
            ],
            [
                8507,
                [
                    'F',
                    'A',
                    'X'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r814_xn$Capture_Ext$2Lrc2b) {
    var _r814_t0, _r814_t1;
    r814_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r814_xn$Capture_Ext$2Lrc2b, 'Autobuild-Ligatures', function (r815_xn$Capture$2Lrc8, r815_xn$ExportCapture$2Lrc4b) {
        var _r815_t8, _r815_t9;
        var _r815_t0 = r815_xn$Capture$2Lrc8;
        var r815_xn$createAndSaveGlyphImpl$2Lrc3c = _r815_t0['$createAndSaveGlyphImpl$'];
        var r815_xn$NamedParameterPair$2Lrc9b = _r815_t0['$NamedParameterPair$'];
        var r815_xn$assignUnicodeImpl$2Lrc8b = _r815_t0['$assignUnicodeImpl$'];
        var r815_xn$execState$2Lrc0b = _r815_t0['$execState$'];
        var r815_para = _r815_t0.para;
        var r815_AS_BASE = _r815_t0.AS_BASE;
        var r815_ALSO_METRICS = _r815_t0.ALSO_METRICS;
        var _r815_t1 = r815_xn$Capture$2Lrc8.Metrics;
        var r815_Width = _r815_t1.Width;
        var r815_SB = _r815_t1.SB;
        var r815_Scale = _r815_t1.Scale;
        var r815_Translate = _r815_t1.Translate;
        var r815_O = _r815_t1.O;
        var r815_WideWidth1 = _r815_t1.WideWidth1;
        var r815_WideWidth2 = _r815_t1.WideWidth2;
        var r815_StrokeWidthBlend = _r815_t1.StrokeWidthBlend;
        var _r815_t2 = r815_xn$Capture$2Lrc8.SpiroFns;
        var _r815_t3 = r815_xn$Capture$2Lrc8.BooleFns;
        var _r815_t4 = r815_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r815_Ungizmo = _r815_t4.Ungizmo;
        var r815_Regizmo = _r815_t4.Regizmo;
        var r815_WithTransform = _r815_t4.WithTransform;
        var _r815_t5 = r815_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r815_xn$referglyph$1aao = _r815_t5['refer-glyph'];
        var r815_xn$queryglyph$1aao = _r815_t5['query-glyph'];
        var _r815_t6 = r815_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r815_Thinner = _r815_t6.Thinner;
        var _r815_t7 = r815_xn$Capture$2Lrc8['Autobuild-Enclosure-Shared'].resolve();
        var r815_CollectJobs = _r815_t7.CollectJobs;
        var r815_CreateDerivedFontFromJobs = _r815_t7.CreateDerivedFontFromJobs;
        var r815_EnsureComponentGlyphT = _r815_t7.EnsureComponentGlyphT;
        var r815_applyRelations = _r815_t7.applyRelations;
        var r815_createLigatures = function (r820_prefix, r820_fAlwaysCompress, r820__shrink1, r820__shrinkN, r820_wadj1, r820_wadjN, r820_kKern, r820_demands) {
            var _r820_t0, _r820_t1, _r820_t2, _r820_tag3;
            return function () {
                var r823_FMosaicWide, r823_MosaicNameSuffix, r823_MosaicWidth, r823_MosaicWidthScalar, _r823_t3, _r823_t5, _r823_t6, _r823_tag7;
                var r823_WidthKinds = [
                    [
                        0,
                        '.NWID',
                        r815_xn$Capture$2Lrc8.Metrics.Width,
                        1
                    ],
                    [
                        1,
                        '.WWID',
                        r815_xn$Capture$2Lrc8.Metrics.WideWidth0,
                        2
                    ]
                ];
                var _r823_t0 = r823_WidthKinds;
                var _r823_t1 = _r823_t0.length;
                var _r823_t2 = 0;
                var _r823_t4 = _r823_t2 < _r823_t1;
                while (_r823_t4) {
                    _r823_t3 = _r823_t0[_r823_t2];
                    r823_FMosaicWide = _r823_t3[0];
                    r823_MosaicNameSuffix = _r823_t3[1];
                    r823_MosaicWidth = _r823_t3[2];
                    r823_MosaicWidthScalar = _r823_t3[3];
                    (function () {
                        var r826_job;
                        var r826_MosaicDesiredWidth = r815_WideWidth2;
                        var r826_MosaicMiddle = r823_MosaicWidth / 2;
                        var r826_MosaicUnitWidth = r823_MosaicWidth / r823_MosaicWidthScalar;
                        var r826_MangleUnicode = function (r827_unicode, r827__desiredOverride) {
                            var _r827_t0, _r827_t1;
                            return r823_MosaicWidth === (r827__desiredOverride || r826_MosaicDesiredWidth) ? r827_unicode : void 0;
                        };
                        var r826_MangleName = function (r828_name) {
                            var _r828_t0, _r828_t1;
                            return r828_name + r823_MosaicNameSuffix;
                        };
                        var r826_ww = r823_FMosaicWide ? r823_MosaicWidth : r823_MosaicWidth * r815_para.diversityM;
                        var r826_jobs = r815_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r820_prefix, r823_MosaicNameSuffix, r820_demands);
                        var r826_shrink1 = r823_FMosaicWide && !r820_fAlwaysCompress ? 1 : r1_clamp(0, 1, r820__shrink1 * r1_mix(r815_Width, r826_ww, 0.5) / r815_Width);
                        var r826_shrinkN = r823_FMosaicWide && !r820_fAlwaysCompress ? 1 : r1_clamp(0, 1, r820__shrinkN * r1_mix(r815_Width, r826_ww, 0.5) / r815_Width);
                        var r826_df1 = r815_CreateDerivedFontFromJobs(r826_jobs, [], function (r829_gs) {
                            var _r829_t0, _r829_t1;
                            return r815_Thinner(r829_gs, r826_shrink1);
                        });
                        var r826_dfN = r815_CreateDerivedFontFromJobs(r826_jobs, [], function (r830_gs) {
                            var _r830_t0, _r830_t1;
                            return r815_Thinner(r830_gs, r826_shrinkN);
                        });
                        var r826_LigaturePlaceholderImpl = function (r831_aw, r831_markPlacement) {
                            var _r831_t0, _r831_t1;
                            var r831_gni = '.ligature-placeholder@' + [
                                r831_aw,
                                r831_markPlacement
                            ].join('/');
                            if (r815_xn$queryglyph$1aao(r831_gni))
                                return r831_gni;
                            r815_xn$createAndSaveGlyphImpl$2Lrc3c(r831_gni, null, function () {
                                var _r834_t1;
                                var _r834_t0 = this;
                                var r834_currentGlyph = _r834_t0;
                                r834_currentGlyph.setWidth(r831_aw);
                                r834_currentGlyph.setBaseAnchor('enclosureInner', r831_markPlacement, 0);
                                return void 0;
                            });
                            return r831_gni;
                        };
                        var r826_LigaturePartImpl = function (r837_df, r837_offset1, r837_compress, r837_markDist) {
                            var _r837_t0, _r837_t1;
                            return function (r838_gidPart) {
                                var _r838_t0, _r838_t1;
                                var r838_gni = '.ligature-part.' + r838_gidPart + '@' + [
                                    r820_prefix,
                                    r837_compress,
                                    r837_offset1,
                                    r837_markDist
                                ].join('/');
                                if (r815_xn$queryglyph$1aao(r838_gni))
                                    return r838_gni;
                                r815_xn$createAndSaveGlyphImpl$2Lrc3c(r838_gni, null, function () {
                                    var _r841_t1;
                                    var _r841_t0 = this;
                                    var r841_currentGlyph = _r841_t0;
                                    r841_currentGlyph.setWidth(0);
                                    r841_currentGlyph.include(r837_df.queryByNameEnsured(r838_gidPart));
                                    r841_currentGlyph.include(r815_Ungizmo());
                                    r841_currentGlyph.include(r815_Translate(r837_offset1, 0));
                                    r841_currentGlyph.include(r815_Scale(r837_compress, 1));
                                    r841_currentGlyph.include(r815_Regizmo());
                                    r841_currentGlyph.setMarkAnchor('enclosureInner', 0, 0, r837_markDist, 0);
                                    return void 0;
                                });
                                return r838_gni;
                            };
                        };
                        var r826_LigatureImpl = function (r849_job, r849_decomposable) {
                            var r849_i, r849_component, r849_sumChildrenWidth, r849_dfg, r849_compRefWw, r849_kern, r849_refW, r849_cycle, r849_compress, _r849_t3, _r849_t4, _r849_t5, _r849_t6, _r849_t7, _r849_t8, _r849_t9, _r849_t10, _r849_t11, _r849_t12;
                            var _r849_t0 = r849_job;
                            var r849_gn = _r849_t0[0];
                            var r849_unicode = _r849_t0[1];
                            var r849_components = _r849_t0[2];
                            var r849_desiredWidth = _r849_t0[3];
                            var r849_ps = [];
                            var r849_dfgs = [];
                            var _r849_t1 = r849_components.entries()[Symbol.iterator]();
                            var _r849_t2 = void 0;
                            while (!(_r849_t2 = _r849_t1.next()).done) {
                                _r849_t3 = _r849_t2.value;
                                r849_i = _r849_t3[0];
                                r849_component = _r849_t3[1];
                                r849_dfgs[r849_i] = (r849_i ? r826_dfN : r826_df1).queryByNameEnsured(r849_component);
                            }
                            if (!r815_xn$queryglyph$1aao(r849_gn))
                                if (r823_FMosaicWide && !r820_fAlwaysCompress)
                                    return r815_xn$createAndSaveGlyphImpl$2Lrc3c(r849_gn, r826_MangleUnicode(r849_unicode, r849_desiredWidth), function () {
                                        var r853_i, r853_component, _r853_t2, _r853_t4, _r853_t5, _r853_tag6;
                                        var _r853_t3 = this;
                                        var r853_currentGlyph = _r853_t3;
                                        var r853_decomposition = [];
                                        var r853_aw = 0;
                                        var _r853_t0 = r849_components.entries()[Symbol.iterator]();
                                        var _r853_t1 = void 0;
                                        while (!(_r853_t1 = _r853_t0.next()).done) {
                                            _r853_t2 = _r853_t1.value;
                                            r853_i = _r853_t2[0];
                                            r853_component = _r853_t2[1];
                                            (function () {
                                                var r856_componentG = r815_xn$queryglyph$1aao(r853_component);
                                                r853_currentGlyph.include(r815_WithTransform(r815_Translate(r853_aw, 0), r815_xn$referglyph$1aao(r853_component)));
                                                r853_aw = r853_aw + r856_componentG.advanceWidth;
                                                return r853_decomposition.push(r853_component);
                                            }());
                                        }
                                        r853_currentGlyph.setWidth(r853_aw);
                                        if (r849_decomposable)
                                            r1_CvDecompose.set(r853_currentGlyph, r853_decomposition);
                                        return void 0;
                                    });
                                else {
                                    r849_sumChildrenWidth = 0;
                                    _r849_t4 = r849_dfgs.entries()[Symbol.iterator]();
                                    _r849_t5 = void 0;
                                    while (!(_r849_t5 = _r849_t4.next()).done) {
                                        _r849_t6 = _r849_t5.value;
                                        r849_i = _r849_t6[0];
                                        r849_dfg = _r849_t6[1];
                                        r849_sumChildrenWidth = r849_sumChildrenWidth + r849_dfg.advanceWidth * (r849_i ? r820_wadjN : r820_wadj1);
                                    }
                                    r849_compRefWw = (r826_ww - r815_SB * 1.25) / (r826_ww - r815_SB * 2) * r826_ww;
                                    r849_kern = r820_kKern * r826_ww;
                                    r849_refW = r849_sumChildrenWidth - r849_kern * (r849_dfgs.length - 1);
                                    if (r849_dfgs.length > 1) {
                                        _r849_t7 = 0;
                                        _r849_t8 = 4;
                                        r849_cycle = _r849_t7;
                                        while (r849_cycle < _r849_t8) {
                                            r849_kern = r1_clamp(0, r815_SB * 7 / 8, (r849_refW - r849_compRefWw) / (r849_dfgs.length - 1));
                                            r849_refW = r849_sumChildrenWidth - r849_kern * (r849_dfgs.length - 1);
                                            r849_cycle = r849_cycle + 1;
                                        }
                                    }
                                    r849_compress = r1_clamp(0, 1, r849_compRefWw / r849_refW);
                                    return r815_xn$createAndSaveGlyphImpl$2Lrc3c(r849_gn, r826_MangleUnicode(r849_unicode, r849_desiredWidth), function () {
                                        var r864_i, r864_component, _r864_t2, _r864_t4, _r864_t5, _r864_tag6;
                                        var _r864_t3 = this;
                                        var r864_currentGlyph = _r864_t3;
                                        var r864_decomposition = [];
                                        var r864_baseOffset = r826_ww / 2 - r849_refW * r849_compress / 2;
                                        var _r864_t0 = r849_components.entries()[Symbol.iterator]();
                                        var _r864_t1 = void 0;
                                        while (!(_r864_t1 = _r864_t0.next()).done) {
                                            _r864_t2 = _r864_t1.value;
                                            r864_i = _r864_t2[0];
                                            r864_component = _r864_t2[1];
                                            (function () {
                                                var r867_placeholder;
                                                var r867_componentAdvance = r849_compress * (r849_dfgs[r864_i].advanceWidth * (r864_i ? r820_wadjN : r820_wadj1) - r849_kern);
                                                var r867_componentRefOffset = r849_dfgs[r864_i].advanceWidth * ((r864_i ? r820_wadjN : r820_wadj1) - 1) / 2;
                                                if (r864_i === 0) {
                                                    r867_placeholder = r826_LigaturePlaceholderImpl(r826_ww, r864_baseOffset);
                                                    r864_decomposition.push(r867_placeholder);
                                                    r864_currentGlyph.include(r815_xn$referglyph$1aao(r867_placeholder), r815_AS_BASE, r815_ALSO_METRICS);
                                                }
                                                var r867_part = r815_EnsureComponentGlyphT(r864_component, r826_LigaturePartImpl(r826_dfN, r867_componentRefOffset, r849_compress, r867_componentAdvance));
                                                r864_decomposition.push(r867_part);
                                                return r864_currentGlyph.include(r815_xn$referglyph$1aao(r867_part));
                                            }());
                                        }
                                        if (r849_decomposable)
                                            r1_CvDecompose.set(r864_currentGlyph, r864_decomposition);
                                        return void 0;
                                    });
                                }
                            else
                                return void 0;
                        };
                        var _r826_t0 = r826_jobs.nonDecomposable;
                        var _r826_t1 = _r826_t0.length;
                        var _r826_t2 = 0;
                        while (_r826_t2 < _r826_t1) {
                            r826_job = _r826_t0[_r826_t2];
                            r826_LigatureImpl(r826_job, false);
                            _r826_t2 = _r826_t2 + 1;
                        }
                        var _r826_t3 = r826_jobs.decomposableJobs;
                        var _r826_t4 = _r826_t3.length;
                        var _r826_t5 = 0;
                        while (_r826_t5 < _r826_t4) {
                            r826_job = _r826_t3[_r826_t5];
                            r826_LigatureImpl(r826_job, true);
                            _r826_t5 = _r826_t5 + 1;
                        }
                        return r815_applyRelations(r826_jobs.relApplications);
                    }());
                    _r823_t5 = _r823_t2 = _r823_t2 + 1;
                    _r823_t4 = _r823_t2 < _r823_t1;
                }
                return _r823_t5;
            }();
        };
        var r815_ijShrink = r1_clamp(0.65, 0.9, r815_StrokeWidthBlend(0.7, 0.9));
        r815_createLigatures('compatLigature1', false, r815_ijShrink, r815_ijShrink, 1, 1, 0.05, [
            [
                306,
                [
                    'I',
                    'J'
                ]
            ],
            [
                307,
                [
                    'i',
                    'j'
                ]
            ]
        ]);
        var r815_stdShrink = r1_clamp(0.75, 0.9, r815_StrokeWidthBlend(0.75, 0.9));
        r815_createLigatures('compatLigature2', false, r815_stdShrink, r815_stdShrink, 1, 1, 0, [
            [
                452,
                [
                    'D',
                    'ZCaron'
                ]
            ],
            [
                453,
                [
                    'D',
                    'zCaron'
                ]
            ],
            [
                454,
                [
                    'd',
                    'zCaron'
                ]
            ],
            [
                455,
                [
                    'L',
                    'J'
                ]
            ],
            [
                456,
                [
                    'L',
                    'j'
                ]
            ],
            [
                457,
                [
                    'l',
                    'j'
                ]
            ],
            [
                458,
                [
                    'N',
                    'J'
                ]
            ],
            [
                459,
                [
                    'N',
                    'j'
                ]
            ],
            [
                460,
                [
                    'n',
                    'j'
                ]
            ],
            [
                497,
                [
                    'D',
                    'Z'
                ]
            ],
            [
                498,
                [
                    'D',
                    'z'
                ]
            ],
            [
                499,
                [
                    'd',
                    'z'
                ]
            ],
            [
                1144,
                [
                    'O',
                    'y'
                ]
            ],
            [
                1145,
                [
                    'o',
                    'y'
                ]
            ],
            [
                8359,
                [
                    'P',
                    't'
                ]
            ],
            [
                8360,
                [
                    'R',
                    's'
                ]
            ],
            [
                8367,
                [
                    'D',
                    'grek/rho'
                ]
            ],
            [
                8470,
                [
                    'N',
                    'numeroRightHalf'
                ]
            ],
            [
                127376,
                [
                    'D',
                    'J'
                ],
                r815_WideWidth1
            ]
        ]);
        r815_createLigatures('romanNumerals1', true, 1, 1, 1, 1, 0, [
            [
                8544,
                ['I']
            ],
            [
                8548,
                ['V']
            ],
            [
                8553,
                ['X']
            ],
            [
                8556,
                ['L']
            ],
            [
                8557,
                ['C']
            ],
            [
                8558,
                ['D']
            ],
            [
                8559,
                ['M']
            ],
            [
                8560,
                ['i']
            ],
            [
                8564,
                ['v']
            ],
            [
                8569,
                ['x']
            ],
            [
                8572,
                ['l']
            ],
            [
                8573,
                ['c']
            ],
            [
                8574,
                ['d']
            ],
            [
                8575,
                ['m']
            ]
        ]);
        r815_createLigatures('romanNumerals2', true, r815_stdShrink, r815_stdShrink, 1, 1, 0, [
            [
                8545,
                [
                    'I',
                    'I'
                ]
            ],
            [
                8547,
                [
                    'I',
                    'V'
                ]
            ],
            [
                8549,
                [
                    'V',
                    'I'
                ]
            ],
            [
                8552,
                [
                    'I',
                    'X'
                ]
            ],
            [
                8554,
                [
                    'X',
                    'I'
                ]
            ],
            [
                8561,
                [
                    'i',
                    'i'
                ]
            ],
            [
                8563,
                [
                    'i',
                    'v'
                ]
            ],
            [
                8565,
                [
                    'v',
                    'i'
                ]
            ],
            [
                8568,
                [
                    'i',
                    'x'
                ]
            ],
            [
                8570,
                [
                    'x',
                    'i'
                ]
            ]
        ]);
        var r815_romanShrink = r1_clamp(0.625, 0.875, r815_StrokeWidthBlend(0.625, 0.875));
        r815_createLigatures('romanNumerals3', true, r815_romanShrink, r815_romanShrink, 1, 1, 0, [
            [
                8546,
                [
                    'I',
                    'I',
                    'I'
                ]
            ],
            [
                8550,
                [
                    'V',
                    'I',
                    'I'
                ]
            ],
            [
                8555,
                [
                    'X',
                    'I',
                    'I'
                ]
            ],
            [
                8562,
                [
                    'i',
                    'i',
                    'i'
                ]
            ],
            [
                8566,
                [
                    'v',
                    'i',
                    'i'
                ]
            ],
            [
                8571,
                [
                    'x',
                    'i',
                    'i'
                ]
            ]
        ]);
        var r815_romanShrink4 = r1_clamp(0.5, 0.875, r815_StrokeWidthBlend(0.5, 0.875));
        r815_createLigatures('romanNumerals4', true, r815_romanShrink4, r815_romanShrink4, 1, 1, 0, [
            [
                8551,
                [
                    'V',
                    'I',
                    'I',
                    'I'
                ]
            ],
            [
                8567,
                [
                    'v',
                    'i',
                    'i',
                    'i'
                ]
            ]
        ]);
        return r815_createLigatures('temperature', false, 0.7, 0.8, 0.75, 0.9, 0, [
            [
                8451,
                [
                    'degree',
                    'C'
                ]
            ],
            [
                8457,
                [
                    'degree',
                    'F'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r874_xn$Capture_Ext$2Lrc2b) {
    var _r874_t0, _r874_t1;
    r874_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r874_xn$Capture_Ext$2Lrc2b, 'Autobuild-Pnonetic-Ligatures', function (r875_xn$Capture$2Lrc8, r875_xn$ExportCapture$2Lrc4b) {
        var _r875_t9, _r875_t10;
        var _r875_t0 = r875_xn$Capture$2Lrc8;
        var r875_xn$createAndSaveGlyphImpl$2Lrc3c = _r875_t0['$createAndSaveGlyphImpl$'];
        var r875_xn$NamedParameterPair$2Lrc9b = _r875_t0['$NamedParameterPair$'];
        var r875_xn$assignUnicodeImpl$2Lrc8b = _r875_t0['$assignUnicodeImpl$'];
        var r875_xn$execState$2Lrc0b = _r875_t0['$execState$'];
        var r875_para = _r875_t0.para;
        var r875_AS_BASE = _r875_t0.AS_BASE;
        var r875_ALSO_METRICS = _r875_t0.ALSO_METRICS;
        var r875_DivFrame = _r875_t0.DivFrame;
        var _r875_t1 = r875_xn$Capture$2Lrc8.Metrics;
        var r875_Width = _r875_t1.Width;
        var r875_SB = _r875_t1.SB;
        var r875_Ascender = _r875_t1.Ascender;
        var r875_Scale = _r875_t1.Scale;
        var r875_HVContrast = _r875_t1.HVContrast;
        var r875_OX = _r875_t1.OX;
        var r875_Stroke = _r875_t1.Stroke;
        var r875_StrokeWidthBlend = _r875_t1.StrokeWidthBlend;
        var _r875_t2 = r875_xn$Capture$2Lrc8.SpiroFns;
        var _r875_t3 = r875_xn$Capture$2Lrc8.BooleFns;
        var r875_difference = _r875_t3.difference;
        var _r875_t4 = r875_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r875_Ungizmo = _r875_t4.Ungizmo;
        var r875_Regizmo = _r875_t4.Regizmo;
        var r875_MaskRight = _r875_t4.MaskRight;
        var _r875_t5 = r875_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r875_xn$referglyph$1aao = _r875_t5['refer-glyph'];
        var r875_xn$queryglyph$1aao = _r875_t5['query-glyph'];
        var _r875_t6 = r875_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r875_Thinner = _r875_t6.Thinner;
        var _r875_t7 = r875_xn$Capture$2Lrc8['Autobuild-Enclosure-Shared'].resolve();
        var r875_CollectJobs = _r875_t7.CollectJobs;
        var r875_CreateDerivedFontFromJobs = _r875_t7.CreateDerivedFontFromJobs;
        var r875_EnsureComponentGlyphT = _r875_t7.EnsureComponentGlyphT;
        var r875_applyRelations = _r875_t7.applyRelations;
        var _r875_t8 = r875_xn$Capture$2Lrc8['Autobuild-Transformed-Shared'].resolve();
        var r875_ToSuperscript = _r875_t8.ToSuperscript;
        var r875_ToSubscript = _r875_t8.ToSubscript;
        var r875_createPhoneticLigatures = function (r881_tfm, r881_prefix, r881_div, r881_mockNParts, r881__shrink, r881_kKern, r881_demands) {
            var r881_tmpShrink, r881_job, _r881_t8, _r881_t9;
            var r881_ww0 = r875_Width * r881_div;
            var r881_wwM = r881_ww0 / r1_fallback(r881_tfm.crowdAdjScale, 1);
            var r881_jobs = r875_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r881_prefix, '', r881_demands);
            var r881_shrink = r1_clamp(0, 1, r881__shrink);
            var r881_kern = 0;
            var _r881_t0 = 0;
            var _r881_t1 = 8;
            var r881_cycle = _r881_t0;
            while (r881_cycle < _r881_t1) {
                r881_kern = r881_kKern * (2 * r875_SB * r881_shrink + (0.5 * r875_Stroke * r881_shrink * r875_HVContrast - r875_OX * 2));
                r881_tmpShrink = (r881_wwM + r881_kern * (r881_mockNParts - 1)) / (r881_mockNParts * r875_Width);
                r881_shrink = Math.max(r881__shrink, r1_clamp(0, 1, r881_tmpShrink));
                r881_cycle = r881_cycle + 1;
            }
            var r881_thinFont = r875_CreateDerivedFontFromJobs(r881_jobs, [], function (r884_gs) {
                var _r884_t0, _r884_t1;
                return r875_Thinner(r884_gs, r881_shrink, true, r881_tfm.crowd, r881_tfm.crowdAdjScale);
            });
            var r881_LigaturePlaceholderImpl = function (r885_aw, r885_markPlacement, r885_mak) {
                var _r885_t0, _r885_t1;
                var r885_gni = '.phonetic-ligature-placeholder@' + [
                    r881_prefix,
                    r885_aw,
                    r885_markPlacement,
                    r885_mak
                ].join('/');
                if (r875_xn$queryglyph$1aao(r885_gni))
                    return r885_gni;
                r875_xn$createAndSaveGlyphImpl$2Lrc3c(r885_gni, null, function () {
                    var _r888_t1;
                    var _r888_t0 = this;
                    var r888_currentGlyph = _r888_t0;
                    r888_currentGlyph.setWidth(r885_aw);
                    if (r885_mak)
                        r888_currentGlyph.include(r875_DivFrame(r881_div).markSet[r885_mak]());
                    r888_currentGlyph.setBaseAnchor('enclosureInner', r885_markPlacement, 0);
                    r888_currentGlyph.setBaseAnchor('slash', r885_aw / 2, r875_Ascender / 2);
                    r888_currentGlyph.include(r881_tfm(r881_div));
                    return void 0;
                });
                return r885_gni;
            };
            var r881_LigaturePartImpl = function (r894_thinFont, r894_compress, r894_markDist, r894_maskPos) {
                var _r894_t0, _r894_t1;
                return function (r895_gidPart) {
                    var _r895_t0, _r895_t1;
                    var r895_gni = '.phonetic-ligature-part.' + r895_gidPart + '@' + [
                        r881_prefix,
                        r894_compress,
                        r894_markDist,
                        r894_maskPos
                    ].join('/');
                    if (r875_xn$queryglyph$1aao(r895_gni))
                        return r895_gni;
                    r875_xn$createAndSaveGlyphImpl$2Lrc3c(r895_gni, null, function () {
                        var _r898_t1;
                        var _r898_t0 = this;
                        var r898_currentGlyph = _r898_t0;
                        r898_currentGlyph.setWidth(0);
                        r898_currentGlyph.include(r875_difference(r894_thinFont.queryByNameEnsured(r895_gidPart), r875_MaskRight(r894_maskPos)));
                        r898_currentGlyph.include(r875_Ungizmo());
                        r898_currentGlyph.include(r875_Scale(r894_compress, 1));
                        r898_currentGlyph.include(r875_Regizmo());
                        r898_currentGlyph.setMarkAnchor('enclosureInner', 0, 0, r894_markDist, 0);
                        r898_currentGlyph.include(r881_tfm(r881_div));
                        return void 0;
                    });
                    return r895_gni;
                };
            };
            var r881_LigatureImpl = function (r906_job, r906_decomposable) {
                var r906_gn, r906_unicode, r906_components, r906_mak, r906_sumChildrenWidth, r906_effectiveGlyphCount, r906_originals, r906_dfgs, r906_i, r906_component, r906_refW, r906_compRefWw, r906_compress, _r906_t0, _r906_t1, _r906_t2, _r906_t3, _r906_t4, _r906_t5, _r906_t6;
                if (!r875_xn$queryglyph$1aao(r906_gn)) {
                    _r906_t0 = r906_job;
                    r906_gn = _r906_t0[0];
                    r906_unicode = _r906_t0[1];
                    r906_components = _r906_t0[2];
                    r906_mak = _r906_t0[3];
                    r906_sumChildrenWidth = 0;
                    r906_effectiveGlyphCount = 0;
                    r906_originals = [];
                    r906_dfgs = [];
                    _r906_t1 = r906_components.entries()[Symbol.iterator]();
                    _r906_t2 = void 0;
                    while (!(_r906_t2 = _r906_t1.next()).done) {
                        _r906_t3 = _r906_t2.value;
                        r906_i = _r906_t3[0];
                        r906_component = _r906_t3[1];
                        r906_originals[r906_i] = r875_xn$queryglyph$1aao(r906_component);
                        r906_dfgs[r906_i] = r881_thinFont.queryByNameEnsured(r906_component);
                        if (r906_originals[r906_i].advanceWidth > 0)
                            r906_effectiveGlyphCount = r906_effectiveGlyphCount + 1;
                        r906_sumChildrenWidth = r906_sumChildrenWidth + r906_dfgs[r906_i].advanceWidth;
                    }
                    r906_refW = r906_sumChildrenWidth - r881_kern * (r906_effectiveGlyphCount - 1);
                    r906_compRefWw = r881_wwM;
                    r906_compress = r1_clamp(0, 1, r906_compRefWw / r906_refW);
                    return !r875_xn$queryglyph$1aao(r906_gn) ? r875_xn$createAndSaveGlyphImpl$2Lrc3c(r906_gn, r906_unicode, function () {
                        var r910_i, r910_component, _r910_t2, _r910_t4, _r910_t5, _r910_tag6;
                        var _r910_t3 = this;
                        var r910_currentGlyph = _r910_t3;
                        var r910_decomposition = [];
                        var r910_baseOffset = r881_ww0 / 2 - r906_refW * r906_compress / 2;
                        var _r910_t0 = r906_components.entries()[Symbol.iterator]();
                        var _r910_t1 = void 0;
                        while (!(_r910_t1 = _r910_t0.next()).done) {
                            _r910_t2 = _r910_t1.value;
                            r910_i = _r910_t2[0];
                            r910_component = _r910_t2[1];
                            (function () {
                                var r913_placeholder, r913_part;
                                var r913_currentIsMark = 0 === r906_originals[r910_i].advanceWidth;
                                var r913_componentAdvance = r913_currentIsMark ? 0 : r906_compress * (r906_dfgs[r910_i].advanceWidth - r881_kern);
                                var r913_maskPos = r906_dfgs[r910_i].advanceWidth - r881_kern + (r910_i + 1 < r906_effectiveGlyphCount ? r906_dfgs[r910_i + 1].advanceWidth / 2 : r881_ww0);
                                if (r910_i === 0) {
                                    r913_placeholder = r881_LigaturePlaceholderImpl(r881_ww0, r910_baseOffset, r906_mak);
                                    r910_decomposition.push(r913_placeholder);
                                    r910_currentGlyph.include(r875_xn$referglyph$1aao(r913_placeholder), r875_AS_BASE, r875_ALSO_METRICS);
                                }
                                return r913_currentIsMark ? r910_currentGlyph.include(r875_xn$referglyph$1aao(r910_component)) : (r913_part = r875_EnsureComponentGlyphT(r910_component, r881_LigaturePartImpl(r881_thinFont, r906_compress, r913_componentAdvance, r913_maskPos)), r910_decomposition.push(r913_part), r910_currentGlyph.include(r875_xn$referglyph$1aao(r913_part)));
                            }());
                        }
                        if (r906_decomposable)
                            r1_CvDecompose.set(r910_currentGlyph, r910_decomposition);
                        return void 0;
                    }) : void 0;
                } else
                    return void 0;
            };
            var _r881_t2 = r881_jobs.nonDecomposable;
            var _r881_t3 = _r881_t2.length;
            var _r881_t4 = 0;
            while (_r881_t4 < _r881_t3) {
                r881_job = _r881_t2[_r881_t4];
                r881_LigatureImpl(r881_job, false);
                _r881_t4 = _r881_t4 + 1;
            }
            var _r881_t5 = r881_jobs.decomposableJobs;
            var _r881_t6 = _r881_t5.length;
            var _r881_t7 = 0;
            while (_r881_t7 < _r881_t6) {
                r881_job = _r881_t5[_r881_t7];
                r881_LigatureImpl(r881_job, true);
                _r881_t7 = _r881_t7 + 1;
            }
            return r875_applyRelations(r881_jobs.relApplications);
        };
        var r875_ToLetter = function () {
            var _r919_t0, _r919_t1;
            return function () {
                var _r921_t1;
                var _r921_t0 = this;
                var r921_currentGlyph = _r921_t0;
                return void 0;
            };
        };
        var r875_stdShrink = r1_clamp(0.625, 0.9, r875_StrokeWidthBlend(0.625, 0.9));
        r875_createPhoneticLigatures(r875_ToLetter, 'phonetic', r875_para.diversityM, 2, r875_stdShrink, 1, [
            [
                675,
                [
                    'd/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                676,
                [
                    'd/phoneticLeft',
                    'ezh'
                ],
                'bp'
            ],
            [
                677,
                [
                    'd/phoneticLeft',
                    'zCurlyTail'
                ],
                'b'
            ],
            [
                678,
                [
                    't/phoneticLeft2',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                679,
                [
                    't/teshLeft',
                    'esh'
                ],
                'bp'
            ],
            [
                680,
                [
                    't/phoneticLeft1',
                    'cCurlyTail'
                ],
                'b'
            ],
            [
                681,
                [
                    'f/phoneticLeft',
                    'eng/phoneticRight'
                ],
                'bp'
            ],
            [
                682,
                [
                    'l/phoneticLeft',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                683,
                [
                    'l/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                43878,
                [
                    'd/phoneticLeft',
                    'zRTailBR'
                ],
                'bp'
            ],
            [
                43879,
                [
                    't/phoneticLeft1',
                    'sRTail'
                ],
                'bp'
            ],
            [
                64256,
                [
                    'f',
                    'f'
                ],
                null
            ],
            [
                64257,
                [
                    'f/compLigLeft1',
                    'dotlessi/compLigRight'
                ],
                null
            ],
            [
                64258,
                [
                    'f/compLigLeft2',
                    'l/compLigRight'
                ],
                null
            ],
            [
                64261,
                [
                    'longs/flatExt',
                    't/phoneticLeft2'
                ],
                null
            ],
            [
                64262,
                [
                    's/compLigLeft',
                    't/phoneticLeft3'
                ],
                null
            ]
        ]);
        r875_createPhoneticLigatures(r875_ToLetter, 'phonetic2', r875_para.diversityM, 3, r875_stdShrink, 1, [
            [
                64259,
                [
                    'f/compLigLeft1',
                    'f/compLigLeft1',
                    'dotlessi/compLigRight'
                ],
                null
            ],
            [
                64260,
                [
                    'f/compLigLeft3',
                    'f/compLigLeft2',
                    'l/compLigRight'
                ],
                null
            ]
        ]);
        r875_createPhoneticLigatures(r875_ToSuperscript, 'phoneticSuperscript', 1, 2, r875_stdShrink, 1, [
            [
                67463,
                [
                    'd/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                67466,
                [
                    'd/phoneticLeft',
                    'ezh'
                ],
                'bp'
            ],
            [
                67465,
                [
                    'd/phoneticLeft',
                    'zCurlyTail'
                ],
                'bp'
            ],
            [
                67500,
                [
                    't/phoneticLeft2',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                67502,
                [
                    't/teshLeft',
                    'esh'
                ],
                'bp'
            ],
            [
                67499,
                [
                    't/phoneticLeft1',
                    'cCurlyTail'
                ],
                'b'
            ],
            [
                67472,
                [
                    'f/phoneticLeft',
                    'eng/phoneticRight'
                ],
                'bp'
            ],
            [
                67481,
                [
                    'l/phoneticLeft',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                67482,
                [
                    'l/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                67464,
                [
                    'd/phoneticLeft',
                    'zRTailBR'
                ],
                'bp'
            ],
            [
                67501,
                [
                    't/phoneticLeft1',
                    'sRTail'
                ],
                'p'
            ]
        ]);
        r875_createPhoneticLigatures(r875_ToSubscript, 'tenSubscript', 1, 2, 1, 0.5, [[
                9192,
                [
                    'one.lnum',
                    'zero.lnum'
                ],
                'capital'
            ]]);
        return r875_createPhoneticLigatures(r875_ToLetter, 'thSlash', 1, 2, r875_stdShrink, 1, [[
                7546,
                [
                    't/phoneticLeft1',
                    'h',
                    'wideSlash'
                ],
                'b'
            ]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r924_xn$Capture_Ext$2Lrc2b) {
    var _r924_t0, _r924_t1;
    r924_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r924_xn$Capture_Ext$2Lrc2b, 'Autobuild-Double-Emotions', function (r925_xn$Capture$2Lrc8, r925_xn$ExportCapture$2Lrc4b) {
        var _r925_t8, _r925_t9;
        var _r925_t0 = r925_xn$Capture$2Lrc8;
        var r925_xn$createAndSaveGlyphImpl$2Lrc3c = _r925_t0['$createAndSaveGlyphImpl$'];
        var r925_xn$NamedParameterPair$2Lrc9b = _r925_t0['$NamedParameterPair$'];
        var r925_xn$assignUnicodeImpl$2Lrc8b = _r925_t0['$assignUnicodeImpl$'];
        var r925_xn$execState$2Lrc0b = _r925_t0['$execState$'];
        var r925_para = _r925_t0.para;
        var r925_DivFrame = _r925_t0.DivFrame;
        var _r925_t1 = r925_xn$Capture$2Lrc8.Metrics;
        var r925_Width = _r925_t1.Width;
        var r925_SB = _r925_t1.SB;
        var r925_Scale = _r925_t1.Scale;
        var r925_Translate = _r925_t1.Translate;
        var r925_OX = _r925_t1.OX;
        var r925_Stroke = _r925_t1.Stroke;
        var r925_WideWidth2 = _r925_t1.WideWidth2;
        var r925_StrokeWidthBlend = _r925_t1.StrokeWidthBlend;
        var _r925_t2 = r925_xn$Capture$2Lrc8.SpiroFns;
        var _r925_t3 = r925_xn$Capture$2Lrc8.BooleFns;
        var r925_union = _r925_t3.union;
        var _r925_t4 = r925_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r925_Ungizmo = _r925_t4.Ungizmo;
        var r925_Regizmo = _r925_t4.Regizmo;
        var r925_WithTransform = _r925_t4.WithTransform;
        var _r925_t5 = r925_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r925_xn$queryglyph$1aao = _r925_t5['query-glyph'];
        var _r925_t6 = r925_xn$Capture$2Lrc8['Recursive-Build'].resolve();
        var r925_Thinner = _r925_t6.Thinner;
        var _r925_t7 = r925_xn$Capture$2Lrc8['Autobuild-Enclosure-Shared'].resolve();
        var r925_CollectJobs = _r925_t7.CollectJobs;
        var r925_CreateDerivedFontFromJobs = _r925_t7.CreateDerivedFontFromJobs;
        var r925_EnsureComponentGlyphT = _r925_t7.EnsureComponentGlyphT;
        var r925_applyRelations = _r925_t7.applyRelations;
        var r925_createDoubleEmotions = function (r930_prefix, r930_div, r930__shrink1, r930__shrink2, r930_wadj1, r930_wadj2, r930_demands) {
            var _r930_t0, _r930_t1, _r930_t2, _r930_tag3;
            return function () {
                var r933_FMosaicWide, r933_MosaicNameSuffix, r933_MosaicWidth, r933_MosaicWidthScalar, _r933_t3, _r933_t5, _r933_t6, _r933_tag7;
                var r933_WidthKinds = [
                    [
                        0,
                        '.NWID',
                        r925_xn$Capture$2Lrc8.Metrics.Width,
                        1
                    ],
                    [
                        1,
                        '.WWID',
                        r925_xn$Capture$2Lrc8.Metrics.WideWidth0,
                        2
                    ]
                ];
                var _r933_t0 = r933_WidthKinds;
                var _r933_t1 = _r933_t0.length;
                var _r933_t2 = 0;
                var _r933_t4 = _r933_t2 < _r933_t1;
                while (_r933_t4) {
                    _r933_t3 = _r933_t0[_r933_t2];
                    r933_FMosaicWide = _r933_t3[0];
                    r933_MosaicNameSuffix = _r933_t3[1];
                    r933_MosaicWidth = _r933_t3[2];
                    r933_MosaicWidthScalar = _r933_t3[3];
                    (function () {
                        var r936_gn, r936_unicode, r936_c1, r936_m1, r936_c2, r936_m2, r936_mak, _r936_t3;
                        var r936_MosaicDesiredWidth = r925_WideWidth2;
                        var r936_MosaicMiddle = r933_MosaicWidth / 2;
                        var r936_MosaicUnitWidth = r933_MosaicWidth / r933_MosaicWidthScalar;
                        var r936_MangleUnicode = function (r937_unicode, r937__desiredOverride) {
                            var _r937_t0, _r937_t1;
                            return r933_MosaicWidth === (r937__desiredOverride || r936_MosaicDesiredWidth) ? r937_unicode : void 0;
                        };
                        var r936_MangleName = function (r938_name) {
                            var _r938_t0, _r938_t1;
                            return r938_name + r933_MosaicNameSuffix;
                        };
                        var r936_CWidth = r933_FMosaicWide ? r933_MosaicWidth : r925_Width * r930_div;
                        var r936_shrink1 = r933_FMosaicWide ? 1 : r930__shrink1;
                        var r936_shrink2 = r933_FMosaicWide ? 1 : r930__shrink2;
                        var r936_kern = r925_SB * r936_shrink1 + r925_SB * r936_shrink2 + 0.5 * r925_Stroke * r1_mix(r936_shrink1, r936_shrink2, 0.5) - r925_OX * 2;
                        var r936_jobs = r925_CollectJobs(r1_xn$NONDECOMPOSABLE$9Jrj, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r930_prefix, r933_MosaicNameSuffix, r930_demands);
                        var r936_df1 = r925_CreateDerivedFontFromJobs(r936_jobs, [], function (r939_gs) {
                            var _r939_t0, _r939_t1;
                            return r925_Thinner(r939_gs, r936_shrink1, true);
                        });
                        var r936_df2 = r925_CreateDerivedFontFromJobs(r936_jobs, [], function (r940_gs) {
                            var _r940_t0, _r940_t1;
                            return r925_Thinner(r940_gs, r936_shrink2, true);
                        });
                        var _r936_t0 = r936_jobs.nonDecomposable;
                        var _r936_t1 = _r936_t0.length;
                        var _r936_t2 = 0;
                        while (_r936_t2 < _r936_t1) {
                            _r936_t3 = _r936_t0[_r936_t2];
                            r936_gn = _r936_t3[0];
                            r936_unicode = _r936_t3[1];
                            r936_c1 = _r936_t3[2][0];
                            r936_m1 = _r936_t3[2][1];
                            r936_c2 = _r936_t3[2][2];
                            r936_m2 = _r936_t3[2][3];
                            _r936_t3[2];
                            r936_mak = _r936_t3[3];
                            if (!r925_xn$queryglyph$1aao(r936_gn))
                                r925_xn$createAndSaveGlyphImpl$2Lrc3c(r936_gn, r936_MangleUnicode(r936_unicode), function () {
                                    var _r945_t1;
                                    var _r945_t0 = this;
                                    var r945_currentGlyph = _r945_t0;
                                    r945_currentGlyph.setWidth(r936_CWidth);
                                    if (r936_mak)
                                        r945_currentGlyph.include(r925_DivFrame(r936_CWidth / r925_Width).markSet[r936_mak]());
                                    var r945_dfg1 = r936_df1.queryByNameEnsured(r936_c1);
                                    var r945_dfm1 = r936_df1.queryByNameEnsured(r936_m1);
                                    var r945_dfg2 = r936_df2.queryByNameEnsured(r936_c2);
                                    var r945_dfm2 = r936_df2.queryByNameEnsured(r936_m2);
                                    var r945_sumChildrenWidth = r945_dfg1.advanceWidth * r930_wadj1 + r945_dfg2.advanceWidth * r930_wadj2;
                                    var r945_refW = r945_sumChildrenWidth - r936_kern;
                                    r945_currentGlyph.include(r925_union(r945_dfg2, r925_WithTransform(r925_Translate(r945_dfg2.advanceWidth, 0), r945_dfm2)));
                                    r945_currentGlyph.include(r925_Translate(r945_dfg1.advanceWidth * r930_wadj1 - r936_kern, 0));
                                    r945_currentGlyph.include(r925_union(r945_dfg1, r925_WithTransform(r925_Translate(r945_dfg1.advanceWidth, 0), r945_dfm1)));
                                    r945_currentGlyph.include(r925_Ungizmo());
                                    r945_currentGlyph.include(r925_Translate(-r945_refW / 2, 0));
                                    r945_currentGlyph.include(r925_Scale(r1_clamp(0, 1, (r936_CWidth - r925_SB * 1.25) / (r936_CWidth - r925_SB * 2) * r936_CWidth / r945_refW), 1));
                                    r945_currentGlyph.include(r925_Translate(r936_CWidth / 2, 0));
                                    r945_currentGlyph.include(r925_Regizmo());
                                    return void 0;
                                });
                            _r936_t2 = _r936_t2 + 1;
                        }
                        return r925_applyRelations(r936_jobs.relApplications);
                    }());
                    _r933_t5 = _r933_t2 = _r933_t2 + 1;
                    _r933_t4 = _r933_t2 < _r933_t1;
                }
                return _r933_t5;
            }();
        };
        var r925_stdShrink = r1_clamp(0.625, 0.9, r925_StrokeWidthBlend(0.625, 0.9));
        return r925_createDoubleEmotions('doubleemotion', r925_para.diversityM, r925_stdShrink, r925_stdShrink, 1, 1, [
            [
                8252,
                [
                    'exclam',
                    'zwsp',
                    'exclam',
                    'zwsp'
                ]
            ],
            [
                8263,
                [
                    'question/hookPart',
                    'question/dotPart',
                    'question/hookPart',
                    'question/dotPart'
                ]
            ],
            [
                8264,
                [
                    'question/hookPart',
                    'question/dotPart',
                    'exclam',
                    'zwsp'
                ]
            ],
            [
                8265,
                [
                    'exclam',
                    'zwsp',
                    'question/hookPart',
                    'question/dotPart'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r958_xn$Capture_Ext$2Lrc2b) {
    var _r958_t0, _r958_t1;
    r958_xn$Capture_Ext$2Lrc2b['$defineGlyphBlockImpl$'](r958_xn$Capture_Ext$2Lrc2b, 'Autobuild-Grouped-Digits', function (r959_xn$Capture$2Lrc8, r959_xn$ExportCapture$2Lrc4b) {
        var _r959_t6, _r959_t7;
        var _r959_t0 = r959_xn$Capture$2Lrc8;
        var r959_xn$createAndSaveGlyphImpl$2Lrc3c = _r959_t0['$createAndSaveGlyphImpl$'];
        var r959_xn$NamedParameterPair$2Lrc9b = _r959_t0['$NamedParameterPair$'];
        var r959_xn$assignUnicodeImpl$2Lrc8b = _r959_t0['$assignUnicodeImpl$'];
        var r959_xn$execState$2Lrc0b = _r959_t0['$execState$'];
        var _r959_t1 = r959_xn$Capture$2Lrc8.Metrics;
        var r959_Width = _r959_t1.Width;
        var r959_Descender = _r959_t1.Descender;
        var r959_Translate = _r959_t1.Translate;
        var r959_AdviceStroke = _r959_t1.AdviceStroke;
        var _r959_t2 = r959_xn$Capture$2Lrc8.SpiroFns;
        var _r959_t3 = r959_xn$Capture$2Lrc8.BooleFns;
        var r959_intersection = _r959_t3.intersection;
        var _r959_t4 = r959_xn$Capture$2Lrc8.CommonShapes.resolve();
        var r959_HBar = _r959_t4.HBar;
        var r959_WithTransform = _r959_t4.WithTransform;
        var _r959_t5 = r959_xn$Capture$2Lrc8['Common-Derivatives'].resolve();
        var r959_xn$referglyph$1aao = _r959_t5['refer-glyph'];
        var r959_createGroupedDigits = function (r962_shrink, r962_crowd, r962_numberGlyphIDs) {
            var r962_gid, r962_nd, _r962_t3, _r962_t4, _r962_t5, _r962_t6, _r962_t7, _r962_t9;
            r959_xn$createAndSaveGlyphImpl$2Lrc3c('.nd-shade', null, function () {
                var _r965_t1;
                var _r965_t0 = this;
                var r965_currentGlyph = _r965_t0;
                r965_currentGlyph.setWidth(0);
                r965_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                r965_currentGlyph.include(r959_intersection(r959_HBar.b(0, r959_Width, r959_Descender * 0.75, r959_AdviceStroke(4)), function () {
                    var _r970_t1;
                    var _r970_t0 = this;
                    var r970_currentGlyph = _r970_t0;
                    r970_currentGlyph.include(r959_xn$referglyph$1aao('denseShade.WWID'));
                    r970_currentGlyph.include(r959_Translate(-r959_Width / 2, 0));
                    return void 0;
                }));
                r965_currentGlyph.include(r959_Translate(-r959_Width, 0));
                return void 0;
            });
            var _r962_t0 = r962_numberGlyphIDs;
            var _r962_t1 = _r962_t0.length;
            var _r962_t2 = 0;
            var _r962_t8 = _r962_t2 < _r962_t1;
            while (_r962_t8) {
                r962_gid = _r962_t0[_r962_t2];
                _r962_t3 = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ];
                _r962_t4 = _r962_t3.length;
                _r962_t5 = 0;
                while (_r962_t5 < _r962_t4) {
                    r962_nd = _r962_t3[_r962_t5];
                    r959_xn$createAndSaveGlyphImpl$2Lrc3c(r962_gid + '.nd' + r962_nd, null, function () {
                        var _r980_t1;
                        var _r980_t0 = this;
                        var r980_currentGlyph = _r980_t0;
                        r980_currentGlyph.include(r959_xn$referglyph$1aao(r962_gid));
                        if (r962_nd >= 3 && r962_nd <= 5) {
                            r980_currentGlyph.include(r959_WithTransform(r959_Translate(r959_Width, 0), r959_xn$referglyph$1aao('.nd-shade')));
                            r1_CvDecompose.set(r980_currentGlyph, [
                                r962_gid,
                                '.nd-shade'
                            ]);
                        } else
                            r1_CvDecompose.set(r980_currentGlyph, [r962_gid]);
                        return void 0;
                    });
                    _r962_t5 = _r962_t5 + 1;
                }
                _r962_t9 = _r962_t2 = _r962_t2 + 1;
                _r962_t8 = _r962_t2 < _r962_t1;
            }
            return _r962_t9;
        };
        return r959_createGroupedDigits(0.9, 3, [
            'zero.lnum',
            'one.lnum',
            'two.lnum',
            'three.lnum',
            'four.lnum',
            'five.lnum',
            'six.lnum',
            'seven.lnum',
            'eight.lnum',
            'nine.lnum'
        ]);
    });
    return void 0;
});
