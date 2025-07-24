import fn from "react";
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: pn,
  setPrototypeOf: xt,
  isFrozen: wn,
  getPrototypeOf: Mn,
  getOwnPropertyDescriptor: Pn
} = Object;
let {
  freeze: q,
  seal: Z,
  create: dn
} = Object, {
  apply: ct,
  construct: ut
} = typeof Reflect < "u" && Reflect;
q || (q = function(i) {
  return i;
});
Z || (Z = function(i) {
  return i;
});
ct || (ct = function(i, u, l) {
  return i.apply(u, l);
});
ut || (ut = function(i, u) {
  return new i(...u);
});
const Fe = X(Array.prototype.forEach), kn = X(Array.prototype.lastIndexOf), Ut = X(Array.prototype.pop), ye = X(Array.prototype.push), xn = X(Array.prototype.splice), je = X(String.prototype.toLowerCase), tt = X(String.prototype.toString), Ft = X(String.prototype.match), Ae = X(String.prototype.replace), Un = X(String.prototype.indexOf), Fn = X(String.prototype.trim), K = X(Object.prototype.hasOwnProperty), W = X(RegExp.prototype.test), Re = Hn(TypeError);
function X(n) {
  return function(i) {
    i instanceof RegExp && (i.lastIndex = 0);
    for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), d = 1; d < u; d++)
      l[d - 1] = arguments[d];
    return ct(n, i, l);
  };
}
function Hn(n) {
  return function() {
    for (var i = arguments.length, u = new Array(i), l = 0; l < i; l++)
      u[l] = arguments[l];
    return ut(n, u);
  };
}
function C(n, i) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : je;
  xt && xt(n, null);
  let l = i.length;
  for (; l--; ) {
    let d = i[l];
    if (typeof d == "string") {
      const m = u(d);
      m !== d && (wn(i) || (i[l] = m), d = m);
    }
    n[d] = !0;
  }
  return n;
}
function Gn(n) {
  for (let i = 0; i < n.length; i++)
    K(n, i) || (n[i] = null);
  return n;
}
function re(n) {
  const i = dn(null);
  for (const [u, l] of pn(n))
    K(n, u) && (Array.isArray(l) ? i[u] = Gn(l) : l && typeof l == "object" && l.constructor === Object ? i[u] = re(l) : i[u] = l);
  return i;
}
function Se(n, i) {
  for (; n !== null; ) {
    const l = Pn(n, i);
    if (l) {
      if (l.get)
        return X(l.get);
      if (typeof l.value == "function")
        return X(l.value);
    }
    n = Mn(n);
  }
  function u() {
    return null;
  }
  return u;
}
const Ht = q(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), nt = q(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), rt = q(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), zn = q(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), it = q(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jn = q(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gt = q(["#text"]), zt = q(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), at = q(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), jt = q(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), He = q(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Bn = Z(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Wn = Z(/<%[\w\W]*|[\w\W]*%>/gm), qn = Z(/\$\{[\w\W]*/gm), Xn = Z(/^data-[\-\w.\u00B7-\uFFFF]+$/), Vn = Z(/^aria-[\-\w]+$/), mn = Z(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Yn = Z(/^(?:\w+script|data):/i), $n = Z(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), hn = Z(/^html$/i), Zn = Z(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Bt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Vn,
  ATTR_WHITESPACE: $n,
  CUSTOM_ELEMENT: Zn,
  DATA_ATTR: Xn,
  DOCTYPE_NAME: hn,
  ERB_EXPR: Wn,
  IS_ALLOWED_URI: mn,
  IS_SCRIPT_OR_DATA: Yn,
  MUSTACHE_EXPR: Bn,
  TMPLIT_EXPR: qn
});
const be = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Kn = function() {
  return typeof window > "u" ? null : window;
}, Jn = function(i, u) {
  if (typeof i != "object" || typeof i.createPolicy != "function")
    return null;
  let l = null;
  const d = "data-tt-policy-suffix";
  u && u.hasAttribute(d) && (l = u.getAttribute(d));
  const m = "dompurify" + (l ? "#" + l : "");
  try {
    return i.createPolicy(m, {
      createHTML(T) {
        return T;
      },
      createScriptURL(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + m + " could not be created."), null;
  }
}, Wt = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function gn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Kn();
  const i = (E) => gn(E);
  if (i.version = "3.2.6", i.removed = [], !n || !n.document || n.document.nodeType !== be.document || !n.Element)
    return i.isSupported = !1, i;
  let {
    document: u
  } = n;
  const l = u, d = l.currentScript, {
    DocumentFragment: m,
    HTMLTemplateElement: T,
    Node: f,
    Element: r,
    NodeFilter: a,
    NamedNodeMap: p = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: g,
    DOMParser: y,
    trustedTypes: M
  } = n, L = r.prototype, R = Se(L, "cloneNode"), _ = Se(L, "remove"), O = Se(L, "nextSibling"), A = Se(L, "childNodes"), k = Se(L, "parentNode");
  if (typeof T == "function") {
    const E = u.createElement("template");
    E.content && E.content.ownerDocument && (u = E.content.ownerDocument);
  }
  let I, t = "";
  const {
    implementation: o,
    createNodeIterator: c,
    createDocumentFragment: S,
    getElementsByTagName: N
  } = u, {
    importNode: x
  } = l;
  let w = Wt();
  i.isSupported = typeof pn == "function" && typeof k == "function" && o && o.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: J,
    ERB_EXPR: D,
    TMPLIT_EXPR: v,
    DATA_ATTR: Y,
    ARIA_ATTR: Be,
    IS_SCRIPT_OR_DATA: An,
    ATTR_WHITESPACE: ft,
    CUSTOM_ELEMENT: Rn
  } = Bt;
  let {
    IS_ALLOWED_URI: pt
  } = Bt, H = null;
  const dt = C({}, [...Ht, ...nt, ...rt, ...it, ...Gt]);
  let z = null;
  const mt = C({}, [...zt, ...at, ...jt, ...He]);
  let U = Object.seal(dn(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ee = null, We = null, ht = !0, qe = !0, gt = !1, Et = !0, le = !1, Le = !0, ie = !1, Xe = !1, Ve = !1, se = !1, we = !1, Me = !1, Tt = !0, _t = !1;
  const Sn = "user-content-";
  let Ye = !0, Te = !1, ce = {}, ue = null;
  const vt = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let yt = null;
  const At = C({}, ["audio", "video", "img", "source", "image", "track"]);
  let $e = null;
  const Rt = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pe = "http://www.w3.org/1998/Math/MathML", ke = "http://www.w3.org/2000/svg", ee = "http://www.w3.org/1999/xhtml";
  let fe = ee, Ze = !1, Ke = null;
  const bn = C({}, [Pe, ke, ee], tt);
  let xe = C({}, ["mi", "mo", "mn", "ms", "mtext"]), Ue = C({}, ["annotation-xml"]);
  const On = C({}, ["title", "style", "font", "a", "script"]);
  let _e = null;
  const Cn = ["application/xhtml+xml", "text/html"], Nn = "text/html";
  let G = null, pe = null;
  const Dn = u.createElement("form"), St = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Je = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(pe && pe === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = re(e), _e = // eslint-disable-next-line unicorn/prefer-includes
      Cn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Nn : e.PARSER_MEDIA_TYPE, G = _e === "application/xhtml+xml" ? tt : je, H = K(e, "ALLOWED_TAGS") ? C({}, e.ALLOWED_TAGS, G) : dt, z = K(e, "ALLOWED_ATTR") ? C({}, e.ALLOWED_ATTR, G) : mt, Ke = K(e, "ALLOWED_NAMESPACES") ? C({}, e.ALLOWED_NAMESPACES, tt) : bn, $e = K(e, "ADD_URI_SAFE_ATTR") ? C(re(Rt), e.ADD_URI_SAFE_ATTR, G) : Rt, yt = K(e, "ADD_DATA_URI_TAGS") ? C(re(At), e.ADD_DATA_URI_TAGS, G) : At, ue = K(e, "FORBID_CONTENTS") ? C({}, e.FORBID_CONTENTS, G) : vt, Ee = K(e, "FORBID_TAGS") ? C({}, e.FORBID_TAGS, G) : re({}), We = K(e, "FORBID_ATTR") ? C({}, e.FORBID_ATTR, G) : re({}), ce = K(e, "USE_PROFILES") ? e.USE_PROFILES : !1, ht = e.ALLOW_ARIA_ATTR !== !1, qe = e.ALLOW_DATA_ATTR !== !1, gt = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Et = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, le = e.SAFE_FOR_TEMPLATES || !1, Le = e.SAFE_FOR_XML !== !1, ie = e.WHOLE_DOCUMENT || !1, se = e.RETURN_DOM || !1, we = e.RETURN_DOM_FRAGMENT || !1, Me = e.RETURN_TRUSTED_TYPE || !1, Ve = e.FORCE_BODY || !1, Tt = e.SANITIZE_DOM !== !1, _t = e.SANITIZE_NAMED_PROPS || !1, Ye = e.KEEP_CONTENT !== !1, Te = e.IN_PLACE || !1, pt = e.ALLOWED_URI_REGEXP || mn, fe = e.NAMESPACE || ee, xe = e.MATHML_TEXT_INTEGRATION_POINTS || xe, Ue = e.HTML_INTEGRATION_POINTS || Ue, U = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && St(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (U.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && St(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (U.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (U.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), le && (qe = !1), we && (se = !0), ce && (H = C({}, Gt), z = [], ce.html === !0 && (C(H, Ht), C(z, zt)), ce.svg === !0 && (C(H, nt), C(z, at), C(z, He)), ce.svgFilters === !0 && (C(H, rt), C(z, at), C(z, He)), ce.mathMl === !0 && (C(H, it), C(z, jt), C(z, He))), e.ADD_TAGS && (H === dt && (H = re(H)), C(H, e.ADD_TAGS, G)), e.ADD_ATTR && (z === mt && (z = re(z)), C(z, e.ADD_ATTR, G)), e.ADD_URI_SAFE_ATTR && C($e, e.ADD_URI_SAFE_ATTR, G), e.FORBID_CONTENTS && (ue === vt && (ue = re(ue)), C(ue, e.FORBID_CONTENTS, G)), Ye && (H["#text"] = !0), ie && C(H, ["html", "head", "body"]), H.table && (C(H, ["tbody"]), delete Ee.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Re('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Re('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        I = e.TRUSTED_TYPES_POLICY, t = I.createHTML("");
      } else
        I === void 0 && (I = Jn(M, d)), I !== null && typeof t == "string" && (t = I.createHTML(""));
      q && q(e), pe = e;
    }
  }, bt = C({}, [...nt, ...rt, ...zn]), Ot = C({}, [...it, ...jn]), In = function(e) {
    let s = k(e);
    (!s || !s.tagName) && (s = {
      namespaceURI: fe,
      tagName: "template"
    });
    const h = je(e.tagName), P = je(s.tagName);
    return Ke[e.namespaceURI] ? e.namespaceURI === ke ? s.namespaceURI === ee ? h === "svg" : s.namespaceURI === Pe ? h === "svg" && (P === "annotation-xml" || xe[P]) : !!bt[h] : e.namespaceURI === Pe ? s.namespaceURI === ee ? h === "math" : s.namespaceURI === ke ? h === "math" && Ue[P] : !!Ot[h] : e.namespaceURI === ee ? s.namespaceURI === ke && !Ue[P] || s.namespaceURI === Pe && !xe[P] ? !1 : !Ot[h] && (On[h] || !bt[h]) : !!(_e === "application/xhtml+xml" && Ke[e.namespaceURI]) : !1;
  }, Q = function(e) {
    ye(i.removed, {
      element: e
    });
    try {
      k(e).removeChild(e);
    } catch {
      _(e);
    }
  }, de = function(e, s) {
    try {
      ye(i.removed, {
        attribute: s.getAttributeNode(e),
        from: s
      });
    } catch {
      ye(i.removed, {
        attribute: null,
        from: s
      });
    }
    if (s.removeAttribute(e), e === "is")
      if (se || we)
        try {
          Q(s);
        } catch {
        }
      else
        try {
          s.setAttribute(e, "");
        } catch {
        }
  }, Ct = function(e) {
    let s = null, h = null;
    if (Ve)
      e = "<remove></remove>" + e;
    else {
      const F = Ft(e, /^[\r\n\t ]+/);
      h = F && F[0];
    }
    _e === "application/xhtml+xml" && fe === ee && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const P = I ? I.createHTML(e) : e;
    if (fe === ee)
      try {
        s = new y().parseFromString(P, _e);
      } catch {
      }
    if (!s || !s.documentElement) {
      s = o.createDocument(fe, "template", null);
      try {
        s.documentElement.innerHTML = Ze ? t : P;
      } catch {
      }
    }
    const j = s.body || s.documentElement;
    return e && h && j.insertBefore(u.createTextNode(h), j.childNodes[0] || null), fe === ee ? N.call(s, ie ? "html" : "body")[0] : ie ? s.documentElement : j;
  }, Nt = function(e) {
    return c.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      a.SHOW_ELEMENT | a.SHOW_COMMENT | a.SHOW_TEXT | a.SHOW_PROCESSING_INSTRUCTION | a.SHOW_CDATA_SECTION,
      null
    );
  }, Qe = function(e) {
    return e instanceof g && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof p) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Dt = function(e) {
    return typeof f == "function" && e instanceof f;
  };
  function te(E, e, s) {
    Fe(E, (h) => {
      h.call(i, e, s, pe);
    });
  }
  const It = function(e) {
    let s = null;
    if (te(w.beforeSanitizeElements, e, null), Qe(e))
      return Q(e), !0;
    const h = G(e.nodeName);
    if (te(w.uponSanitizeElement, e, {
      tagName: h,
      allowedTags: H
    }), Le && e.hasChildNodes() && !Dt(e.firstElementChild) && W(/<[/\w!]/g, e.innerHTML) && W(/<[/\w!]/g, e.textContent) || e.nodeType === be.progressingInstruction || Le && e.nodeType === be.comment && W(/<[/\w]/g, e.data))
      return Q(e), !0;
    if (!H[h] || Ee[h]) {
      if (!Ee[h] && wt(h) && (U.tagNameCheck instanceof RegExp && W(U.tagNameCheck, h) || U.tagNameCheck instanceof Function && U.tagNameCheck(h)))
        return !1;
      if (Ye && !ue[h]) {
        const P = k(e) || e.parentNode, j = A(e) || e.childNodes;
        if (j && P) {
          const F = j.length;
          for (let V = F - 1; V >= 0; --V) {
            const ne = R(j[V], !0);
            ne.__removalCount = (e.__removalCount || 0) + 1, P.insertBefore(ne, O(e));
          }
        }
      }
      return Q(e), !0;
    }
    return e instanceof r && !In(e) || (h === "noscript" || h === "noembed" || h === "noframes") && W(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Q(e), !0) : (le && e.nodeType === be.text && (s = e.textContent, Fe([J, D, v], (P) => {
      s = Ae(s, P, " ");
    }), e.textContent !== s && (ye(i.removed, {
      element: e.cloneNode()
    }), e.textContent = s)), te(w.afterSanitizeElements, e, null), !1);
  }, Lt = function(e, s, h) {
    if (Tt && (s === "id" || s === "name") && (h in u || h in Dn))
      return !1;
    if (!(qe && !We[s] && W(Y, s))) {
      if (!(ht && W(Be, s))) {
        if (!z[s] || We[s]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(wt(e) && (U.tagNameCheck instanceof RegExp && W(U.tagNameCheck, e) || U.tagNameCheck instanceof Function && U.tagNameCheck(e)) && (U.attributeNameCheck instanceof RegExp && W(U.attributeNameCheck, s) || U.attributeNameCheck instanceof Function && U.attributeNameCheck(s)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            s === "is" && U.allowCustomizedBuiltInElements && (U.tagNameCheck instanceof RegExp && W(U.tagNameCheck, h) || U.tagNameCheck instanceof Function && U.tagNameCheck(h)))
          ) return !1;
        } else if (!$e[s]) {
          if (!W(pt, Ae(h, ft, ""))) {
            if (!((s === "src" || s === "xlink:href" || s === "href") && e !== "script" && Un(h, "data:") === 0 && yt[e])) {
              if (!(gt && !W(An, Ae(h, ft, "")))) {
                if (h)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, wt = function(e) {
    return e !== "annotation-xml" && Ft(e, Rn);
  }, Mt = function(e) {
    te(w.beforeSanitizeAttributes, e, null);
    const {
      attributes: s
    } = e;
    if (!s || Qe(e))
      return;
    const h = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: z,
      forceKeepAttr: void 0
    };
    let P = s.length;
    for (; P--; ) {
      const j = s[P], {
        name: F,
        namespaceURI: V,
        value: ne
      } = j, ve = G(F), et = ne;
      let B = F === "value" ? et : Fn(et);
      if (h.attrName = ve, h.attrValue = B, h.keepAttr = !0, h.forceKeepAttr = void 0, te(w.uponSanitizeAttribute, e, h), B = h.attrValue, _t && (ve === "id" || ve === "name") && (de(F, e), B = Sn + B), Le && W(/((--!?|])>)|<\/(style|title)/i, B)) {
        de(F, e);
        continue;
      }
      if (h.forceKeepAttr)
        continue;
      if (!h.keepAttr) {
        de(F, e);
        continue;
      }
      if (!Et && W(/\/>/i, B)) {
        de(F, e);
        continue;
      }
      le && Fe([J, D, v], (kt) => {
        B = Ae(B, kt, " ");
      });
      const Pt = G(e.nodeName);
      if (!Lt(Pt, ve, B)) {
        de(F, e);
        continue;
      }
      if (I && typeof M == "object" && typeof M.getAttributeType == "function" && !V)
        switch (M.getAttributeType(Pt, ve)) {
          case "TrustedHTML": {
            B = I.createHTML(B);
            break;
          }
          case "TrustedScriptURL": {
            B = I.createScriptURL(B);
            break;
          }
        }
      if (B !== et)
        try {
          V ? e.setAttributeNS(V, F, B) : e.setAttribute(F, B), Qe(e) ? Q(e) : Ut(i.removed);
        } catch {
          de(F, e);
        }
    }
    te(w.afterSanitizeAttributes, e, null);
  }, Ln = function E(e) {
    let s = null;
    const h = Nt(e);
    for (te(w.beforeSanitizeShadowDOM, e, null); s = h.nextNode(); )
      te(w.uponSanitizeShadowNode, s, null), It(s), Mt(s), s.content instanceof m && E(s.content);
    te(w.afterSanitizeShadowDOM, e, null);
  };
  return i.sanitize = function(E) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = null, h = null, P = null, j = null;
    if (Ze = !E, Ze && (E = "<!-->"), typeof E != "string" && !Dt(E))
      if (typeof E.toString == "function") {
        if (E = E.toString(), typeof E != "string")
          throw Re("dirty is not a string, aborting");
      } else
        throw Re("toString is not a function");
    if (!i.isSupported)
      return E;
    if (Xe || Je(e), i.removed = [], typeof E == "string" && (Te = !1), Te) {
      if (E.nodeName) {
        const ne = G(E.nodeName);
        if (!H[ne] || Ee[ne])
          throw Re("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (E instanceof f)
      s = Ct("<!---->"), h = s.ownerDocument.importNode(E, !0), h.nodeType === be.element && h.nodeName === "BODY" || h.nodeName === "HTML" ? s = h : s.appendChild(h);
    else {
      if (!se && !le && !ie && // eslint-disable-next-line unicorn/prefer-includes
      E.indexOf("<") === -1)
        return I && Me ? I.createHTML(E) : E;
      if (s = Ct(E), !s)
        return se ? null : Me ? t : "";
    }
    s && Ve && Q(s.firstChild);
    const F = Nt(Te ? E : s);
    for (; P = F.nextNode(); )
      It(P), Mt(P), P.content instanceof m && Ln(P.content);
    if (Te)
      return E;
    if (se) {
      if (we)
        for (j = S.call(s.ownerDocument); s.firstChild; )
          j.appendChild(s.firstChild);
      else
        j = s;
      return (z.shadowroot || z.shadowrootmode) && (j = x.call(l, j, !0)), j;
    }
    let V = ie ? s.outerHTML : s.innerHTML;
    return ie && H["!doctype"] && s.ownerDocument && s.ownerDocument.doctype && s.ownerDocument.doctype.name && W(hn, s.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + s.ownerDocument.doctype.name + `>
` + V), le && Fe([J, D, v], (ne) => {
      V = Ae(V, ne, " ");
    }), I && Me ? I.createHTML(V) : V;
  }, i.setConfig = function() {
    let E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Je(E), Xe = !0;
  }, i.clearConfig = function() {
    pe = null, Xe = !1;
  }, i.isValidAttribute = function(E, e, s) {
    pe || Je({});
    const h = G(E), P = G(e);
    return Lt(h, P, s);
  }, i.addHook = function(E, e) {
    typeof e == "function" && ye(w[E], e);
  }, i.removeHook = function(E, e) {
    if (e !== void 0) {
      const s = kn(w[E], e);
      return s === -1 ? void 0 : xn(w[E], s, 1)[0];
    }
    return Ut(w[E]);
  }, i.removeHooks = function(E) {
    w[E] = [];
  }, i.removeAllHooks = function() {
    w = Wt();
  }, i;
}
var Qn = gn();
function er(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Oe = {}, me = {}, Ge = {}, ae = {}, oe = {}, ot = {}, qt;
function En() {
  return qt || (qt = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), n.Doctype = n.CDATA = n.Tag = n.Style = n.Script = n.Comment = n.Directive = n.Text = n.Root = n.isTag = n.ElementType = void 0;
    var i;
    (function(l) {
      l.Root = "root", l.Text = "text", l.Directive = "directive", l.Comment = "comment", l.Script = "script", l.Style = "style", l.Tag = "tag", l.CDATA = "cdata", l.Doctype = "doctype";
    })(i = n.ElementType || (n.ElementType = {}));
    function u(l) {
      return l.type === i.Tag || l.type === i.Script || l.type === i.Style;
    }
    n.isTag = u, n.Root = i.Root, n.Text = i.Text, n.Directive = i.Directive, n.Comment = i.Comment, n.Script = i.Script, n.Style = i.Style, n.Tag = i.Tag, n.CDATA = i.CDATA, n.Doctype = i.Doctype;
  }(ot)), ot;
}
var b = {}, Xt;
function Vt() {
  if (Xt) return b;
  Xt = 1;
  var n = b && b.__extends || /* @__PURE__ */ function() {
    var t = function(o, c) {
      return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, N) {
        S.__proto__ = N;
      } || function(S, N) {
        for (var x in N) Object.prototype.hasOwnProperty.call(N, x) && (S[x] = N[x]);
      }, t(o, c);
    };
    return function(o, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
      t(o, c);
      function S() {
        this.constructor = o;
      }
      o.prototype = c === null ? Object.create(c) : (S.prototype = c.prototype, new S());
    };
  }(), i = b && b.__assign || function() {
    return i = Object.assign || function(t) {
      for (var o, c = 1, S = arguments.length; c < S; c++) {
        o = arguments[c];
        for (var N in o) Object.prototype.hasOwnProperty.call(o, N) && (t[N] = o[N]);
      }
      return t;
    }, i.apply(this, arguments);
  };
  Object.defineProperty(b, "__esModule", { value: !0 }), b.cloneNode = b.hasChildren = b.isDocument = b.isDirective = b.isComment = b.isText = b.isCDATA = b.isTag = b.Element = b.Document = b.CDATA = b.NodeWithChildren = b.ProcessingInstruction = b.Comment = b.Text = b.DataNode = b.Node = void 0;
  var u = /* @__PURE__ */ En(), l = (
    /** @class */
    function() {
      function t() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
      }
      return Object.defineProperty(t.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.parent;
        },
        set: function(o) {
          this.parent = o;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.prev;
        },
        set: function(o) {
          this.prev = o;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.next;
        },
        set: function(o) {
          this.next = o;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.cloneNode = function(o) {
        return o === void 0 && (o = !1), k(this, o);
      }, t;
    }()
  );
  b.Node = l;
  var d = (
    /** @class */
    function(t) {
      n(o, t);
      function o(c) {
        var S = t.call(this) || this;
        return S.data = c, S;
      }
      return Object.defineProperty(o.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(c) {
          this.data = c;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(l)
  );
  b.DataNode = d;
  var m = (
    /** @class */
    function(t) {
      n(o, t);
      function o() {
        var c = t !== null && t.apply(this, arguments) || this;
        return c.type = u.ElementType.Text, c;
      }
      return Object.defineProperty(o.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(d)
  );
  b.Text = m;
  var T = (
    /** @class */
    function(t) {
      n(o, t);
      function o() {
        var c = t !== null && t.apply(this, arguments) || this;
        return c.type = u.ElementType.Comment, c;
      }
      return Object.defineProperty(o.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(d)
  );
  b.Comment = T;
  var f = (
    /** @class */
    function(t) {
      n(o, t);
      function o(c, S) {
        var N = t.call(this, S) || this;
        return N.name = c, N.type = u.ElementType.Directive, N;
      }
      return Object.defineProperty(o.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(d)
  );
  b.ProcessingInstruction = f;
  var r = (
    /** @class */
    function(t) {
      n(o, t);
      function o(c) {
        var S = t.call(this) || this;
        return S.children = c, S;
      }
      return Object.defineProperty(o.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var c;
          return (c = this.children[0]) !== null && c !== void 0 ? c : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(o.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(o.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(c) {
          this.children = c;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(l)
  );
  b.NodeWithChildren = r;
  var a = (
    /** @class */
    function(t) {
      n(o, t);
      function o() {
        var c = t !== null && t.apply(this, arguments) || this;
        return c.type = u.ElementType.CDATA, c;
      }
      return Object.defineProperty(o.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(r)
  );
  b.CDATA = a;
  var p = (
    /** @class */
    function(t) {
      n(o, t);
      function o() {
        var c = t !== null && t.apply(this, arguments) || this;
        return c.type = u.ElementType.Root, c;
      }
      return Object.defineProperty(o.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(r)
  );
  b.Document = p;
  var g = (
    /** @class */
    function(t) {
      n(o, t);
      function o(c, S, N, x) {
        N === void 0 && (N = []), x === void 0 && (x = c === "script" ? u.ElementType.Script : c === "style" ? u.ElementType.Style : u.ElementType.Tag);
        var w = t.call(this, N) || this;
        return w.name = c, w.attribs = S, w.type = x, w;
      }
      return Object.defineProperty(o.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(o.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(c) {
          this.name = c;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(o.prototype, "attributes", {
        get: function() {
          var c = this;
          return Object.keys(this.attribs).map(function(S) {
            var N, x;
            return {
              name: S,
              value: c.attribs[S],
              namespace: (N = c["x-attribsNamespace"]) === null || N === void 0 ? void 0 : N[S],
              prefix: (x = c["x-attribsPrefix"]) === null || x === void 0 ? void 0 : x[S]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), o;
    }(r)
  );
  b.Element = g;
  function y(t) {
    return (0, u.isTag)(t);
  }
  b.isTag = y;
  function M(t) {
    return t.type === u.ElementType.CDATA;
  }
  b.isCDATA = M;
  function L(t) {
    return t.type === u.ElementType.Text;
  }
  b.isText = L;
  function R(t) {
    return t.type === u.ElementType.Comment;
  }
  b.isComment = R;
  function _(t) {
    return t.type === u.ElementType.Directive;
  }
  b.isDirective = _;
  function O(t) {
    return t.type === u.ElementType.Root;
  }
  b.isDocument = O;
  function A(t) {
    return Object.prototype.hasOwnProperty.call(t, "children");
  }
  b.hasChildren = A;
  function k(t, o) {
    o === void 0 && (o = !1);
    var c;
    if (L(t))
      c = new m(t.data);
    else if (R(t))
      c = new T(t.data);
    else if (y(t)) {
      var S = o ? I(t.children) : [], N = new g(t.name, i({}, t.attribs), S);
      S.forEach(function(D) {
        return D.parent = N;
      }), t.namespace != null && (N.namespace = t.namespace), t["x-attribsNamespace"] && (N["x-attribsNamespace"] = i({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (N["x-attribsPrefix"] = i({}, t["x-attribsPrefix"])), c = N;
    } else if (M(t)) {
      var S = o ? I(t.children) : [], x = new a(S);
      S.forEach(function(v) {
        return v.parent = x;
      }), c = x;
    } else if (O(t)) {
      var S = o ? I(t.children) : [], w = new p(S);
      S.forEach(function(v) {
        return v.parent = w;
      }), t["x-mode"] && (w["x-mode"] = t["x-mode"]), c = w;
    } else if (_(t)) {
      var J = new f(t.name, t.data);
      t["x-name"] != null && (J["x-name"] = t["x-name"], J["x-publicId"] = t["x-publicId"], J["x-systemId"] = t["x-systemId"]), c = J;
    } else
      throw new Error("Not implemented yet: ".concat(t.type));
    return c.startIndex = t.startIndex, c.endIndex = t.endIndex, t.sourceCodeLocation != null && (c.sourceCodeLocation = t.sourceCodeLocation), c;
  }
  b.cloneNode = k;
  function I(t) {
    for (var o = t.map(function(S) {
      return k(S, !0);
    }), c = 1; c < o.length; c++)
      o[c].prev = o[c - 1], o[c - 1].next = o[c];
    return o;
  }
  return b;
}
var Yt;
function Tn() {
  return Yt || (Yt = 1, function(n) {
    var i = oe && oe.__createBinding || (Object.create ? function(f, r, a, p) {
      p === void 0 && (p = a);
      var g = Object.getOwnPropertyDescriptor(r, a);
      (!g || ("get" in g ? !r.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
        return r[a];
      } }), Object.defineProperty(f, p, g);
    } : function(f, r, a, p) {
      p === void 0 && (p = a), f[p] = r[a];
    }), u = oe && oe.__exportStar || function(f, r) {
      for (var a in f) a !== "default" && !Object.prototype.hasOwnProperty.call(r, a) && i(r, f, a);
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.DomHandler = void 0;
    var l = /* @__PURE__ */ En(), d = /* @__PURE__ */ Vt();
    u(/* @__PURE__ */ Vt(), n);
    var m = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, T = (
      /** @class */
      function() {
        function f(r, a, p) {
          this.dom = [], this.root = new d.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof a == "function" && (p = a, a = m), typeof r == "object" && (a = r, r = void 0), this.callback = r ?? null, this.options = a ?? m, this.elementCB = p ?? null;
        }
        return f.prototype.onparserinit = function(r) {
          this.parser = r;
        }, f.prototype.onreset = function() {
          this.dom = [], this.root = new d.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, f.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, f.prototype.onerror = function(r) {
          this.handleCallback(r);
        }, f.prototype.onclosetag = function() {
          this.lastNode = null;
          var r = this.tagStack.pop();
          this.options.withEndIndices && (r.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(r);
        }, f.prototype.onopentag = function(r, a) {
          var p = this.options.xmlMode ? l.ElementType.Tag : void 0, g = new d.Element(r, a, void 0, p);
          this.addNode(g), this.tagStack.push(g);
        }, f.prototype.ontext = function(r) {
          var a = this.lastNode;
          if (a && a.type === l.ElementType.Text)
            a.data += r, this.options.withEndIndices && (a.endIndex = this.parser.endIndex);
          else {
            var p = new d.Text(r);
            this.addNode(p), this.lastNode = p;
          }
        }, f.prototype.oncomment = function(r) {
          if (this.lastNode && this.lastNode.type === l.ElementType.Comment) {
            this.lastNode.data += r;
            return;
          }
          var a = new d.Comment(r);
          this.addNode(a), this.lastNode = a;
        }, f.prototype.oncommentend = function() {
          this.lastNode = null;
        }, f.prototype.oncdatastart = function() {
          var r = new d.Text(""), a = new d.CDATA([r]);
          this.addNode(a), r.parent = a, this.lastNode = r;
        }, f.prototype.oncdataend = function() {
          this.lastNode = null;
        }, f.prototype.onprocessinginstruction = function(r, a) {
          var p = new d.ProcessingInstruction(r, a);
          this.addNode(p);
        }, f.prototype.handleCallback = function(r) {
          if (typeof this.callback == "function")
            this.callback(r, this.dom);
          else if (r)
            throw r;
        }, f.prototype.addNode = function(r) {
          var a = this.tagStack[this.tagStack.length - 1], p = a.children[a.children.length - 1];
          this.options.withStartIndices && (r.startIndex = this.parser.startIndex), this.options.withEndIndices && (r.endIndex = this.parser.endIndex), a.children.push(r), p && (r.prev = p, p.next = r), r.parent = a, this.lastNode = null;
        }, f;
      }()
    );
    n.DomHandler = T, n.default = T;
  }(oe)), oe;
}
var lt = {}, $t;
function tr() {
  return $t || ($t = 1, function(n) {
    Object.defineProperty(n, "__esModule", { value: !0 }), n.CARRIAGE_RETURN_PLACEHOLDER_REGEX = n.CARRIAGE_RETURN_PLACEHOLDER = n.CARRIAGE_RETURN_REGEX = n.CARRIAGE_RETURN = n.CASE_SENSITIVE_TAG_NAMES_MAP = n.CASE_SENSITIVE_TAG_NAMES = void 0, n.CASE_SENSITIVE_TAG_NAMES = [
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "linearGradient",
      "radialGradient",
      "textPath"
    ], n.CASE_SENSITIVE_TAG_NAMES_MAP = n.CASE_SENSITIVE_TAG_NAMES.reduce(function(i, u) {
      return i[u.toLowerCase()] = u, i;
    }, {}), n.CARRIAGE_RETURN = "\r", n.CARRIAGE_RETURN_REGEX = new RegExp(n.CARRIAGE_RETURN, "g"), n.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(), "__"), n.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(n.CARRIAGE_RETURN_PLACEHOLDER, "g");
  }(lt)), lt;
}
var Zt;
function _n() {
  if (Zt) return ae;
  Zt = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.formatAttributes = l, ae.escapeSpecialCharacters = m, ae.revertEscapedCharacters = T, ae.formatDOM = f;
  var n = /* @__PURE__ */ Tn(), i = tr();
  function u(r) {
    return i.CASE_SENSITIVE_TAG_NAMES_MAP[r];
  }
  function l(r) {
    for (var a = {}, p = 0, g = r.length; p < g; p++) {
      var y = r[p];
      a[y.name] = y.value;
    }
    return a;
  }
  function d(r) {
    r = r.toLowerCase();
    var a = u(r);
    return a || r;
  }
  function m(r) {
    return r.replace(i.CARRIAGE_RETURN_REGEX, i.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function T(r) {
    return r.replace(i.CARRIAGE_RETURN_PLACEHOLDER_REGEX, i.CARRIAGE_RETURN);
  }
  function f(r, a, p) {
    a === void 0 && (a = null);
    for (var g = [], y, M = 0, L = r.length; M < L; M++) {
      var R = r[M];
      switch (R.nodeType) {
        case 1: {
          var _ = d(R.nodeName);
          y = new n.Element(_, l(R.attributes)), y.children = f(
            // template children are on content
            _ === "template" ? R.content.childNodes : R.childNodes,
            y
          );
          break;
        }
        case 3:
          y = new n.Text(T(R.nodeValue));
          break;
        case 8:
          y = new n.Comment(R.nodeValue);
          break;
        default:
          continue;
      }
      var O = g[M - 1] || null;
      O && (O.next = y), y.parent = a, y.prev = O, y.next = null, g.push(y);
    }
    return p && (y = new n.ProcessingInstruction(p.substring(0, p.indexOf(" ")).toLowerCase(), p), y.next = g[0] || null, y.parent = a, g.unshift(y), g[1] && (g[1].prev = g[0])), g;
  }
  return ae;
}
var Kt;
function nr() {
  if (Kt) return Ge;
  Kt = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.default = R;
  var n = _n(), i = "html", u = "head", l = "body", d = /<([a-zA-Z]+[0-9]?)/, m = /<head[^]*>/i, T = /<body[^]*>/i, f = function(_, O) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, r = function(_, O) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, a = typeof window == "object" && window.DOMParser;
  if (typeof a == "function") {
    var p = new a(), g = "text/html";
    r = function(_, O) {
      return O && (_ = "<".concat(O, ">").concat(_, "</").concat(O, ">")), p.parseFromString(_, g);
    }, f = r;
  }
  if (typeof document == "object" && document.implementation) {
    var y = document.implementation.createHTMLDocument();
    f = function(_, O) {
      if (O) {
        var A = y.documentElement.querySelector(O);
        return A && (A.innerHTML = _), y;
      }
      return y.documentElement.innerHTML = _, y;
    };
  }
  var M = typeof document == "object" && document.createElement("template"), L;
  M && M.content && (L = function(_) {
    return M.innerHTML = _, M.content.childNodes;
  });
  function R(_) {
    var O, A;
    _ = (0, n.escapeSpecialCharacters)(_);
    var k = _.match(d), I = k && k[1] ? k[1].toLowerCase() : "";
    switch (I) {
      case i: {
        var t = r(_);
        if (!m.test(_)) {
          var o = t.querySelector(u);
          (O = o == null ? void 0 : o.parentNode) === null || O === void 0 || O.removeChild(o);
        }
        if (!T.test(_)) {
          var o = t.querySelector(l);
          (A = o == null ? void 0 : o.parentNode) === null || A === void 0 || A.removeChild(o);
        }
        return t.querySelectorAll(i);
      }
      case u:
      case l: {
        var c = f(_).querySelectorAll(I);
        return T.test(_) && m.test(_) ? c[0].parentNode.childNodes : c;
      }
      // low-level tag or text
      default: {
        if (L)
          return L(_);
        var o = f(_, l).querySelector(l);
        return o.childNodes;
      }
    }
  }
  return Ge;
}
var Jt;
function rr() {
  if (Jt) return me;
  Jt = 1;
  var n = me && me.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(me, "__esModule", { value: !0 }), me.default = d;
  var i = n(nr()), u = _n(), l = /<(![a-zA-Z\s]+)>/;
  function d(m) {
    if (typeof m != "string")
      throw new TypeError("First argument must be a string");
    if (!m)
      return [];
    var T = m.match(l), f = T ? T[1] : void 0;
    return (0, u.formatDOM)((0, i.default)(m), null, f);
  }
  return me;
}
var ze = {}, $ = {}, Ce = {}, Qt;
function ir() {
  if (Qt) return Ce;
  Qt = 1;
  var n = 0;
  Ce.SAME = n;
  var i = 1;
  return Ce.CAMELCASE = i, Ce.possibleStandardNames = {
    accept: 0,
    acceptCharset: 1,
    "accept-charset": "acceptCharset",
    accessKey: 1,
    action: 0,
    allowFullScreen: 1,
    alt: 0,
    as: 0,
    async: 0,
    autoCapitalize: 1,
    autoComplete: 1,
    autoCorrect: 1,
    autoFocus: 1,
    autoPlay: 1,
    autoSave: 1,
    capture: 0,
    cellPadding: 1,
    cellSpacing: 1,
    challenge: 0,
    charSet: 1,
    checked: 0,
    children: 0,
    cite: 0,
    class: "className",
    classID: 1,
    className: 1,
    cols: 0,
    colSpan: 1,
    content: 0,
    contentEditable: 1,
    contextMenu: 1,
    controls: 0,
    controlsList: 1,
    coords: 0,
    crossOrigin: 1,
    dangerouslySetInnerHTML: 1,
    data: 0,
    dateTime: 1,
    default: 0,
    defaultChecked: 1,
    defaultValue: 1,
    defer: 0,
    dir: 0,
    disabled: 0,
    disablePictureInPicture: 1,
    disableRemotePlayback: 1,
    download: 0,
    draggable: 0,
    encType: 1,
    enterKeyHint: 1,
    for: "htmlFor",
    form: 0,
    formMethod: 1,
    formAction: 1,
    formEncType: 1,
    formNoValidate: 1,
    formTarget: 1,
    frameBorder: 1,
    headers: 0,
    height: 0,
    hidden: 0,
    high: 0,
    href: 0,
    hrefLang: 1,
    htmlFor: 1,
    httpEquiv: 1,
    "http-equiv": "httpEquiv",
    icon: 0,
    id: 0,
    innerHTML: 1,
    inputMode: 1,
    integrity: 0,
    is: 0,
    itemID: 1,
    itemProp: 1,
    itemRef: 1,
    itemScope: 1,
    itemType: 1,
    keyParams: 1,
    keyType: 1,
    kind: 0,
    label: 0,
    lang: 0,
    list: 0,
    loop: 0,
    low: 0,
    manifest: 0,
    marginWidth: 1,
    marginHeight: 1,
    max: 0,
    maxLength: 1,
    media: 0,
    mediaGroup: 1,
    method: 0,
    min: 0,
    minLength: 1,
    multiple: 0,
    muted: 0,
    name: 0,
    noModule: 1,
    nonce: 0,
    noValidate: 1,
    open: 0,
    optimum: 0,
    pattern: 0,
    placeholder: 0,
    playsInline: 1,
    poster: 0,
    preload: 0,
    profile: 0,
    radioGroup: 1,
    readOnly: 1,
    referrerPolicy: 1,
    rel: 0,
    required: 0,
    reversed: 0,
    role: 0,
    rows: 0,
    rowSpan: 1,
    sandbox: 0,
    scope: 0,
    scoped: 0,
    scrolling: 0,
    seamless: 0,
    selected: 0,
    shape: 0,
    size: 0,
    sizes: 0,
    span: 0,
    spellCheck: 1,
    src: 0,
    srcDoc: 1,
    srcLang: 1,
    srcSet: 1,
    start: 0,
    step: 0,
    style: 0,
    summary: 0,
    tabIndex: 1,
    target: 0,
    title: 0,
    type: 0,
    useMap: 1,
    value: 0,
    width: 0,
    wmode: 0,
    wrap: 0,
    about: 0,
    accentHeight: 1,
    "accent-height": "accentHeight",
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 1,
    "alignment-baseline": "alignmentBaseline",
    allowReorder: 1,
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 1,
    "arabic-form": "arabicForm",
    ascent: 0,
    attributeName: 1,
    attributeType: 1,
    autoReverse: 1,
    azimuth: 0,
    baseFrequency: 1,
    baselineShift: 1,
    "baseline-shift": "baselineShift",
    baseProfile: 1,
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 1,
    capHeight: 1,
    "cap-height": "capHeight",
    clip: 0,
    clipPath: 1,
    "clip-path": "clipPath",
    clipPathUnits: 1,
    clipRule: 1,
    "clip-rule": "clipRule",
    color: 0,
    colorInterpolation: 1,
    "color-interpolation": "colorInterpolation",
    colorInterpolationFilters: 1,
    "color-interpolation-filters": "colorInterpolationFilters",
    colorProfile: 1,
    "color-profile": "colorProfile",
    colorRendering: 1,
    "color-rendering": "colorRendering",
    contentScriptType: 1,
    contentStyleType: 1,
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    datatype: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 1,
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 1,
    "dominant-baseline": "dominantBaseline",
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 1,
    elevation: 0,
    enableBackground: 1,
    "enable-background": "enableBackground",
    end: 0,
    exponent: 0,
    externalResourcesRequired: 1,
    fill: 0,
    fillOpacity: 1,
    "fill-opacity": "fillOpacity",
    fillRule: 1,
    "fill-rule": "fillRule",
    filter: 0,
    filterRes: 1,
    filterUnits: 1,
    floodOpacity: 1,
    "flood-opacity": "floodOpacity",
    floodColor: 1,
    "flood-color": "floodColor",
    focusable: 0,
    fontFamily: 1,
    "font-family": "fontFamily",
    fontSize: 1,
    "font-size": "fontSize",
    fontSizeAdjust: 1,
    "font-size-adjust": "fontSizeAdjust",
    fontStretch: 1,
    "font-stretch": "fontStretch",
    fontStyle: 1,
    "font-style": "fontStyle",
    fontVariant: 1,
    "font-variant": "fontVariant",
    fontWeight: 1,
    "font-weight": "fontWeight",
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 1,
    "glyph-name": "glyphName",
    glyphOrientationHorizontal: 1,
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphOrientationVertical: 1,
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphRef: 1,
    gradientTransform: 1,
    gradientUnits: 1,
    hanging: 0,
    horizAdvX: 1,
    "horiz-adv-x": "horizAdvX",
    horizOriginX: 1,
    "horiz-origin-x": "horizOriginX",
    ideographic: 0,
    imageRendering: 1,
    "image-rendering": "imageRendering",
    in2: 0,
    in: 0,
    inlist: 0,
    intercept: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    k: 0,
    kernelMatrix: 1,
    kernelUnitLength: 1,
    kerning: 0,
    keyPoints: 1,
    keySplines: 1,
    keyTimes: 1,
    lengthAdjust: 1,
    letterSpacing: 1,
    "letter-spacing": "letterSpacing",
    lightingColor: 1,
    "lighting-color": "lightingColor",
    limitingConeAngle: 1,
    local: 0,
    markerEnd: 1,
    "marker-end": "markerEnd",
    markerHeight: 1,
    markerMid: 1,
    "marker-mid": "markerMid",
    markerStart: 1,
    "marker-start": "markerStart",
    markerUnits: 1,
    markerWidth: 1,
    mask: 0,
    maskContentUnits: 1,
    maskUnits: 1,
    mathematical: 0,
    mode: 0,
    numOctaves: 1,
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 1,
    "overline-position": "overlinePosition",
    overlineThickness: 1,
    "overline-thickness": "overlineThickness",
    paintOrder: 1,
    "paint-order": "paintOrder",
    panose1: 0,
    "panose-1": "panose1",
    pathLength: 1,
    patternContentUnits: 1,
    patternTransform: 1,
    patternUnits: 1,
    pointerEvents: 1,
    "pointer-events": "pointerEvents",
    points: 0,
    pointsAtX: 1,
    pointsAtY: 1,
    pointsAtZ: 1,
    prefix: 0,
    preserveAlpha: 1,
    preserveAspectRatio: 1,
    primitiveUnits: 1,
    property: 0,
    r: 0,
    radius: 0,
    refX: 1,
    refY: 1,
    renderingIntent: 1,
    "rendering-intent": "renderingIntent",
    repeatCount: 1,
    repeatDur: 1,
    requiredExtensions: 1,
    requiredFeatures: 1,
    resource: 0,
    restart: 0,
    result: 0,
    results: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    security: 0,
    seed: 0,
    shapeRendering: 1,
    "shape-rendering": "shapeRendering",
    slope: 0,
    spacing: 0,
    specularConstant: 1,
    specularExponent: 1,
    speed: 0,
    spreadMethod: 1,
    startOffset: 1,
    stdDeviation: 1,
    stemh: 0,
    stemv: 0,
    stitchTiles: 1,
    stopColor: 1,
    "stop-color": "stopColor",
    stopOpacity: 1,
    "stop-opacity": "stopOpacity",
    strikethroughPosition: 1,
    "strikethrough-position": "strikethroughPosition",
    strikethroughThickness: 1,
    "strikethrough-thickness": "strikethroughThickness",
    string: 0,
    stroke: 0,
    strokeDasharray: 1,
    "stroke-dasharray": "strokeDasharray",
    strokeDashoffset: 1,
    "stroke-dashoffset": "strokeDashoffset",
    strokeLinecap: 1,
    "stroke-linecap": "strokeLinecap",
    strokeLinejoin: 1,
    "stroke-linejoin": "strokeLinejoin",
    strokeMiterlimit: 1,
    "stroke-miterlimit": "strokeMiterlimit",
    strokeWidth: 1,
    "stroke-width": "strokeWidth",
    strokeOpacity: 1,
    "stroke-opacity": "strokeOpacity",
    suppressContentEditableWarning: 1,
    suppressHydrationWarning: 1,
    surfaceScale: 1,
    systemLanguage: 1,
    tableValues: 1,
    targetX: 1,
    targetY: 1,
    textAnchor: 1,
    "text-anchor": "textAnchor",
    textDecoration: 1,
    "text-decoration": "textDecoration",
    textLength: 1,
    textRendering: 1,
    "text-rendering": "textRendering",
    to: 0,
    transform: 0,
    typeof: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 1,
    "underline-position": "underlinePosition",
    underlineThickness: 1,
    "underline-thickness": "underlineThickness",
    unicode: 0,
    unicodeBidi: 1,
    "unicode-bidi": "unicodeBidi",
    unicodeRange: 1,
    "unicode-range": "unicodeRange",
    unitsPerEm: 1,
    "units-per-em": "unitsPerEm",
    unselectable: 0,
    vAlphabetic: 1,
    "v-alphabetic": "vAlphabetic",
    values: 0,
    vectorEffect: 1,
    "vector-effect": "vectorEffect",
    version: 0,
    vertAdvY: 1,
    "vert-adv-y": "vertAdvY",
    vertOriginX: 1,
    "vert-origin-x": "vertOriginX",
    vertOriginY: 1,
    "vert-origin-y": "vertOriginY",
    vHanging: 1,
    "v-hanging": "vHanging",
    vIdeographic: 1,
    "v-ideographic": "vIdeographic",
    viewBox: 1,
    viewTarget: 1,
    visibility: 0,
    vMathematical: 1,
    "v-mathematical": "vMathematical",
    vocab: 0,
    widths: 0,
    wordSpacing: 1,
    "word-spacing": "wordSpacing",
    writingMode: 1,
    "writing-mode": "writingMode",
    x1: 0,
    x2: 0,
    x: 0,
    xChannelSelector: 1,
    xHeight: 1,
    "x-height": "xHeight",
    xlinkActuate: 1,
    "xlink:actuate": "xlinkActuate",
    xlinkArcrole: 1,
    "xlink:arcrole": "xlinkArcrole",
    xlinkHref: 1,
    "xlink:href": "xlinkHref",
    xlinkRole: 1,
    "xlink:role": "xlinkRole",
    xlinkShow: 1,
    "xlink:show": "xlinkShow",
    xlinkTitle: 1,
    "xlink:title": "xlinkTitle",
    xlinkType: 1,
    "xlink:type": "xlinkType",
    xmlBase: 1,
    "xml:base": "xmlBase",
    xmlLang: 1,
    "xml:lang": "xmlLang",
    xmlns: 0,
    "xml:space": "xmlSpace",
    xmlnsXlink: 1,
    "xmlns:xlink": "xmlnsXlink",
    xmlSpace: 1,
    y1: 0,
    y2: 0,
    y: 0,
    yChannelSelector: 1,
    z: 0,
    zoomAndPan: 1
  }, Ce;
}
var en;
function ar() {
  if (en) return $;
  en = 1;
  const n = 0, i = 1, u = 2, l = 3, d = 4, m = 5, T = 6;
  function f(t) {
    return a.hasOwnProperty(t) ? a[t] : null;
  }
  function r(t, o, c, S, N, x, w) {
    this.acceptsBooleans = o === u || o === l || o === d, this.attributeName = S, this.attributeNamespace = N, this.mustUseProperty = c, this.propertyName = t, this.type = o, this.sanitizeURL = x, this.removeEmptyString = w;
  }
  const a = {};
  [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ].forEach((t) => {
    a[t] = new r(
      t,
      n,
      !1,
      // mustUseProperty
      t,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
  ].forEach(([t, o]) => {
    a[t] = new r(
      t,
      i,
      !1,
      // mustUseProperty
      o,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((t) => {
    a[t] = new r(
      t,
      u,
      !1,
      // mustUseProperty
      t.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach((t) => {
    a[t] = new r(
      t,
      u,
      !1,
      // mustUseProperty
      t,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach((t) => {
    a[t] = new r(
      t,
      l,
      !1,
      // mustUseProperty
      t.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((t) => {
    a[t] = new r(
      t,
      l,
      !0,
      // mustUseProperty
      t,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((t) => {
    a[t] = new r(
      t,
      d,
      !1,
      // mustUseProperty
      t,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((t) => {
    a[t] = new r(
      t,
      T,
      !1,
      // mustUseProperty
      t,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["rowSpan", "start"].forEach((t) => {
    a[t] = new r(
      t,
      m,
      !1,
      // mustUseProperty
      t.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const g = /[\-\:]([a-z])/g, y = (t) => t[1].toUpperCase();
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((t) => {
    const o = t.replace(g, y);
    a[o] = new r(
      o,
      i,
      !1,
      // mustUseProperty
      t,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((t) => {
    const o = t.replace(g, y);
    a[o] = new r(
      o,
      i,
      !1,
      // mustUseProperty
      t,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach((t) => {
    const o = t.replace(g, y);
    a[o] = new r(
      o,
      i,
      !1,
      // mustUseProperty
      t,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["tabIndex", "crossOrigin"].forEach((t) => {
    a[t] = new r(
      t,
      i,
      !1,
      // mustUseProperty
      t.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  });
  const M = "xlinkHref";
  a[M] = new r(
    "xlinkHref",
    i,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
    // removeEmptyString
  ), ["src", "href", "action", "formAction"].forEach((t) => {
    a[t] = new r(
      t,
      i,
      !1,
      // mustUseProperty
      t.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
      // removeEmptyString
    );
  });
  const {
    CAMELCASE: L,
    SAME: R,
    possibleStandardNames: _
  } = ir(), A = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", k = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + A + "]*$")
  ), I = Object.keys(
    _
  ).reduce((t, o) => {
    const c = _[o];
    return c === R ? t[o] = o : c === L ? t[o.toLowerCase()] = o : t[o] = c, t;
  }, {});
  return $.BOOLEAN = l, $.BOOLEANISH_STRING = u, $.NUMERIC = m, $.OVERLOADED_BOOLEAN = d, $.POSITIVE_NUMERIC = T, $.RESERVED = n, $.STRING = i, $.getPropertyInfo = f, $.isCustomAttribute = k, $.possibleStandardNames = I, $;
}
var Ne = {}, he = {}, st, tn;
function or() {
  if (tn) return st;
  tn = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, u = /^\s*/, l = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, d = /^:\s*/, m = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, T = /^[;\s]*/, f = /^\s+|\s+$/g, r = `
`, a = "/", p = "*", g = "", y = "comment", M = "declaration";
  st = function(R, _) {
    if (typeof R != "string")
      throw new TypeError("First argument must be a string");
    if (!R) return [];
    _ = _ || {};
    var O = 1, A = 1;
    function k(D) {
      var v = D.match(i);
      v && (O += v.length);
      var Y = D.lastIndexOf(r);
      A = ~Y ? D.length - Y : A + D.length;
    }
    function I() {
      var D = { line: O, column: A };
      return function(v) {
        return v.position = new t(D), S(), v;
      };
    }
    function t(D) {
      this.start = D, this.end = { line: O, column: A }, this.source = _.source;
    }
    t.prototype.content = R;
    function o(D) {
      var v = new Error(
        _.source + ":" + O + ":" + A + ": " + D
      );
      if (v.reason = D, v.filename = _.source, v.line = O, v.column = A, v.source = R, !_.silent) throw v;
    }
    function c(D) {
      var v = D.exec(R);
      if (v) {
        var Y = v[0];
        return k(Y), R = R.slice(Y.length), v;
      }
    }
    function S() {
      c(u);
    }
    function N(D) {
      var v;
      for (D = D || []; v = x(); )
        v !== !1 && D.push(v);
      return D;
    }
    function x() {
      var D = I();
      if (!(a != R.charAt(0) || p != R.charAt(1))) {
        for (var v = 2; g != R.charAt(v) && (p != R.charAt(v) || a != R.charAt(v + 1)); )
          ++v;
        if (v += 2, g === R.charAt(v - 1))
          return o("End of comment missing");
        var Y = R.slice(2, v - 2);
        return A += 2, k(Y), R = R.slice(v), A += 2, D({
          type: y,
          comment: Y
        });
      }
    }
    function w() {
      var D = I(), v = c(l);
      if (v) {
        if (x(), !c(d)) return o("property missing ':'");
        var Y = c(m), Be = D({
          type: M,
          property: L(v[0].replace(n, g)),
          value: Y ? L(Y[0].replace(n, g)) : g
        });
        return c(T), Be;
      }
    }
    function J() {
      var D = [];
      N(D);
      for (var v; v = w(); )
        v !== !1 && (D.push(v), N(D));
      return D;
    }
    return S(), J();
  };
  function L(R) {
    return R ? R.replace(f, g) : g;
  }
  return st;
}
var nn;
function lr() {
  if (nn) return he;
  nn = 1;
  var n = he && he.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  Object.defineProperty(he, "__esModule", { value: !0 }), he.default = u;
  var i = n(or());
  function u(l, d) {
    var m = null;
    if (!l || typeof l != "string")
      return m;
    var T = (0, i.default)(l), f = typeof d == "function";
    return T.forEach(function(r) {
      if (r.type === "declaration") {
        var a = r.property, p = r.value;
        f ? d(a, p, r) : p && (m = m || {}, m[a] = p);
      }
    }), m;
  }
  return he;
}
var De = {}, rn;
function sr() {
  if (rn) return De;
  rn = 1, Object.defineProperty(De, "__esModule", { value: !0 }), De.camelCase = void 0;
  var n = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, u = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, d = /^-(ms)-/, m = function(a) {
    return !a || u.test(a) || n.test(a);
  }, T = function(a, p) {
    return p.toUpperCase();
  }, f = function(a, p) {
    return "".concat(p, "-");
  }, r = function(a, p) {
    return p === void 0 && (p = {}), m(a) ? a : (a = a.toLowerCase(), p.reactCompat ? a = a.replace(d, f) : a = a.replace(l, f), a.replace(i, T));
  };
  return De.camelCase = r, De;
}
var Ie, an;
function cr() {
  if (an) return Ie;
  an = 1;
  var n = Ie && Ie.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i = n(lr()), u = sr();
  function l(d, m) {
    var T = {};
    return !d || typeof d != "string" || (0, i.default)(d, function(f, r) {
      f && r && (T[(0, u.camelCase)(f, m)] = r);
    }), T;
  }
  return l.default = l, Ie = l, Ie;
}
var on;
function vn() {
  return on || (on = 1, function(n) {
    var i = Ne && Ne.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.returnFirstArg = n.canTextBeChildOfNode = n.ELEMENTS_WITH_NO_TEXT_CHILDREN = n.PRESERVE_CUSTOM_ATTRIBUTES = void 0, n.isCustomComponent = m, n.setStyleProp = f;
    var u = fn, l = i(cr()), d = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function m(p, g) {
      return p.includes("-") ? !d.has(p) : !!(g && typeof g.is == "string");
    }
    var T = {
      reactCompat: !0
    };
    function f(p, g) {
      if (typeof p == "string") {
        if (!p.trim()) {
          g.style = {};
          return;
        }
        try {
          g.style = (0, l.default)(p, T);
        } catch {
          g.style = {};
        }
      }
    }
    n.PRESERVE_CUSTOM_ATTRIBUTES = Number(u.version.split(".")[0]) >= 16, n.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "colgroup",
      "table",
      "head",
      "html",
      "frameset"
    ]);
    var r = function(p) {
      return !n.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(p.name);
    };
    n.canTextBeChildOfNode = r;
    var a = function(p) {
      return p;
    };
    n.returnFirstArg = a;
  }(Ne)), Ne;
}
var ln;
function yn() {
  if (ln) return ze;
  ln = 1, Object.defineProperty(ze, "__esModule", { value: !0 }), ze.default = m;
  var n = ar(), i = vn(), u = ["checked", "value"], l = ["input", "select", "textarea"], d = {
    reset: !0,
    submit: !0
  };
  function m(f, r) {
    f === void 0 && (f = {});
    var a = {}, p = !!(f.type && d[f.type]);
    for (var g in f) {
      var y = f[g];
      if ((0, n.isCustomAttribute)(g)) {
        a[g] = y;
        continue;
      }
      var M = g.toLowerCase(), L = T(M);
      if (L) {
        var R = (0, n.getPropertyInfo)(L);
        switch (u.includes(L) && l.includes(r) && !p && (L = T("default" + M)), a[L] = y, R && R.type) {
          case n.BOOLEAN:
            a[L] = !0;
            break;
          case n.OVERLOADED_BOOLEAN:
            y === "" && (a[L] = !0);
            break;
        }
        continue;
      }
      i.PRESERVE_CUSTOM_ATTRIBUTES && (a[g] = y);
    }
    return (0, i.setStyleProp)(f.style, a), a;
  }
  function T(f) {
    return n.possibleStandardNames[f];
  }
  return ze;
}
var ge = {}, sn;
function ur() {
  if (sn) return ge;
  sn = 1;
  var n = ge && ge.__importDefault || function(f) {
    return f && f.__esModule ? f : { default: f };
  };
  Object.defineProperty(ge, "__esModule", { value: !0 }), ge.default = m;
  var i = fn, u = n(yn()), l = vn(), d = {
    cloneElement: i.cloneElement,
    createElement: i.createElement,
    isValidElement: i.isValidElement
  };
  function m(f, r) {
    r === void 0 && (r = {});
    for (var a = [], p = typeof r.replace == "function", g = r.transform || l.returnFirstArg, y = r.library || d, M = y.cloneElement, L = y.createElement, R = y.isValidElement, _ = f.length, O = 0; O < _; O++) {
      var A = f[O];
      if (p) {
        var k = r.replace(A, O);
        if (R(k)) {
          _ > 1 && (k = M(k, {
            key: k.key || O
          })), a.push(g(k, A, O));
          continue;
        }
      }
      if (A.type === "text") {
        var I = !A.data.trim().length;
        if (I && A.parent && !(0, l.canTextBeChildOfNode)(A.parent) || r.trim && I)
          continue;
        a.push(g(A.data, A, O));
        continue;
      }
      var t = A, o = {};
      T(t) ? ((0, l.setStyleProp)(t.attribs.style, t.attribs), o = t.attribs) : t.attribs && (o = (0, u.default)(t.attribs, t.name));
      var c = void 0;
      switch (A.type) {
        case "script":
        case "style":
          A.children[0] && (o.dangerouslySetInnerHTML = {
            __html: A.children[0].data
          });
          break;
        case "tag":
          A.name === "textarea" && A.children[0] ? o.defaultValue = A.children[0].data : A.children && A.children.length && (c = m(A.children, r));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      _ > 1 && (o.key = O), a.push(g(L(A.name, o, c), A, O));
    }
    return a.length === 1 ? a[0] : a;
  }
  function T(f) {
    return l.PRESERVE_CUSTOM_ATTRIBUTES && f.type === "tag" && (0, l.isCustomComponent)(f.name, f.attribs);
  }
  return ge;
}
var cn;
function fr() {
  return cn || (cn = 1, function(n) {
    var i = Oe && Oe.__importDefault || function(r) {
      return r && r.__esModule ? r : { default: r };
    };
    Object.defineProperty(n, "__esModule", { value: !0 }), n.htmlToDOM = n.domToReact = n.attributesToProps = n.Text = n.ProcessingInstruction = n.Element = n.Comment = void 0, n.default = f;
    var u = i(rr());
    n.htmlToDOM = u.default;
    var l = i(yn());
    n.attributesToProps = l.default;
    var d = i(ur());
    n.domToReact = d.default;
    var m = /* @__PURE__ */ Tn();
    Object.defineProperty(n, "Comment", { enumerable: !0, get: function() {
      return m.Comment;
    } }), Object.defineProperty(n, "Element", { enumerable: !0, get: function() {
      return m.Element;
    } }), Object.defineProperty(n, "ProcessingInstruction", { enumerable: !0, get: function() {
      return m.ProcessingInstruction;
    } }), Object.defineProperty(n, "Text", { enumerable: !0, get: function() {
      return m.Text;
    } });
    var T = { lowerCaseAttributeNames: !1 };
    function f(r, a) {
      if (typeof r != "string")
        throw new TypeError("First argument must be a string");
      return r ? (0, d.default)((0, u.default)(r, (a == null ? void 0 : a.htmlparser2) || T), a) : [];
    }
  }(Oe)), Oe;
}
var pr = fr();
const un = /* @__PURE__ */ er(pr), dr = un.default || un, mr = {
  FORBID_TAGS: ["style", "script", "iframe", "object", "embed", "link", "meta"]
}, gr = (n) => {
  if (typeof document > "u" || n === null)
    return {};
  const u = [...(n instanceof HTMLTemplateElement ? n.content : n).querySelectorAll("[slot]")], l = /* @__PURE__ */ new Map();
  for (const d of u) {
    const m = d.getAttribute("slot");
    if (!m)
      continue;
    const f = d.tagName.toLocaleLowerCase() === "magic-fragment" ? d.innerHTML : d.outerHTML, r = Qn.sanitize(f, mr), a = dr(r);
    r && m && l.set(m, a);
  }
  return Object.fromEntries(l);
};
export {
  gr as getSlotsForReact
};
