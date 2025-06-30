/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: Cn,
  setPrototypeOf: Wt,
  isFrozen: Fn,
  getPrototypeOf: zn,
  getOwnPropertyDescriptor: Gn
} = Object;
let {
  freeze: ce,
  seal: ge,
  create: wn
} = Object, {
  apply: Lt,
  construct: Mt
} = typeof Reflect < "u" && Reflect;
ce || (ce = function(o) {
  return o;
});
ge || (ge = function(o) {
  return o;
});
Lt || (Lt = function(o, d, c) {
  return o.apply(d, c);
});
Mt || (Mt = function(o, d) {
  return new o(...d);
});
const _t = fe(Array.prototype.forEach), Bn = fe(Array.prototype.lastIndexOf), Xt = fe(Array.prototype.pop), rt = fe(Array.prototype.push), qn = fe(Array.prototype.splice), At = fe(String.prototype.toLowerCase), Ot = fe(String.prototype.toString), Vt = fe(String.prototype.match), ot = fe(String.prototype.replace), $n = fe(String.prototype.indexOf), Yn = fe(String.prototype.trim), ve = fe(Object.prototype.hasOwnProperty), le = fe(RegExp.prototype.test), it = Wn(TypeError);
function fe(i) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var d = arguments.length, c = new Array(d > 1 ? d - 1 : 0), v = 1; v < d; v++)
      c[v - 1] = arguments[v];
    return Lt(i, o, c);
  };
}
function Wn(i) {
  return function() {
    for (var o = arguments.length, d = new Array(o), c = 0; c < o; c++)
      d[c] = arguments[c];
    return Mt(i, d);
  };
}
function W(i, o) {
  let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : At;
  Wt && Wt(i, null);
  let c = o.length;
  for (; c--; ) {
    let v = o[c];
    if (typeof v == "string") {
      const T = d(v);
      T !== v && (Fn(o) || (o[c] = T), v = T);
    }
    i[v] = !0;
  }
  return i;
}
function Xn(i) {
  for (let o = 0; o < i.length; o++)
    ve(i, o) || (i[o] = null);
  return i;
}
function Pe(i) {
  const o = wn(null);
  for (const [d, c] of Cn(i))
    ve(i, d) && (Array.isArray(c) ? o[d] = Xn(c) : c && typeof c == "object" && c.constructor === Object ? o[d] = Pe(c) : o[d] = c);
  return o;
}
function at(i, o) {
  for (; i !== null; ) {
    const c = Gn(i, o);
    if (c) {
      if (c.get)
        return fe(c.get);
      if (typeof c.value == "function")
        return fe(c.value);
    }
    i = zn(i);
  }
  function d() {
    return null;
  }
  return d;
}
const Kt = ce(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ct = ce(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wt = ce(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Vn = ce(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Nt = ce(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Kn = ce(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Zt = ce(["#text"]), Qt = ce(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), kt = ce(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Jt = ce(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), vt = ce(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Zn = ge(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Qn = ge(/<%[\w\W]*|[\w\W]*%>/gm), Jn = ge(/\$\{[\w\W]*/gm), er = ge(/^data-[\-\w.\u00B7-\uFFFF]+$/), tr = ge(/^aria-[\-\w]+$/), Nn = ge(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), nr = ge(/^(?:\w+script|data):/i), rr = ge(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), kn = ge(/^html$/i), or = ge(/^[a-z][.\w]*(-[.\w]+)+$/i);
var en = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: tr,
  ATTR_WHITESPACE: rr,
  CUSTOM_ELEMENT: or,
  DATA_ATTR: er,
  DOCTYPE_NAME: kn,
  ERB_EXPR: Qn,
  IS_ALLOWED_URI: Nn,
  IS_SCRIPT_OR_DATA: nr,
  MUSTACHE_EXPR: Zn,
  TMPLIT_EXPR: Jn
});
const st = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ir = function() {
  return typeof window > "u" ? null : window;
}, ar = function(o, d) {
  if (typeof o != "object" || typeof o.createPolicy != "function")
    return null;
  let c = null;
  const v = "data-tt-policy-suffix";
  d && d.hasAttribute(v) && (c = d.getAttribute(v));
  const T = "dompurify" + (c ? "#" + c : "");
  try {
    return o.createPolicy(T, {
      createHTML(k) {
        return k;
      },
      createScriptURL(k) {
        return k;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + T + " could not be created."), null;
  }
}, tn = function() {
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
function Pn() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ir();
  const o = (O) => Pn(O);
  if (o.version = "3.2.6", o.removed = [], !i || !i.document || i.document.nodeType !== st.document || !i.Element)
    return o.isSupported = !1, o;
  let {
    document: d
  } = i;
  const c = d, v = c.currentScript, {
    DocumentFragment: T,
    HTMLTemplateElement: k,
    Node: E,
    Element: s,
    NodeFilter: u,
    NamedNodeMap: g = i.NamedNodeMap || i.MozNamedAttrMap,
    HTMLFormElement: R,
    DOMParser: I,
    trustedTypes: Z
  } = i, X = s.prototype, M = at(X, "cloneNode"), C = at(X, "remove"), U = at(X, "nextSibling"), L = at(X, "childNodes"), K = at(X, "parentNode");
  if (typeof k == "function") {
    const O = d.createElement("template");
    O.content && O.content.ownerDocument && (d = O.content.ownerDocument);
  }
  let V, t = "";
  const {
    implementation: l,
    createNodeIterator: p,
    createDocumentFragment: P,
    getElementsByTagName: j
  } = d, {
    importNode: ee
  } = c;
  let w = tn();
  o.isSupported = typeof Cn == "function" && typeof K == "function" && l && l.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: oe,
    ERB_EXPR: z,
    TMPLIT_EXPR: N,
    DATA_ATTR: te,
    ARIA_ATTR: he,
    IS_SCRIPT_OR_DATA: Me,
    ATTR_WHITESPACE: Se,
    CUSTOM_ELEMENT: Ge
  } = en;
  let {
    IS_ALLOWED_URI: r
  } = en, f = null;
  const D = W({}, [...Kt, ...Ct, ...wt, ...Nt, ...Zt]);
  let y = null;
  const Y = W({}, [...Qt, ...kt, ...Jt, ...vt]);
  let x = Object.seal(wn(null, {
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
  })), H = null, pe = null, J = !0, Te = !0, mt = !1, Ze = !0, be = !1, xe = !0, ye = !1, Ue = !1, ie = !1, _e = !1, He = !1, Be = !1, $ = !0, je = !1;
  const ht = "user-content-";
  let qe = !0, De = !1, Oe = {}, Ie = null;
  const Et = W({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Qe = null;
  const Je = W({}, ["audio", "video", "img", "source", "image", "track"]);
  let $e = null;
  const et = W({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ce = "http://www.w3.org/1998/Math/MathML", we = "http://www.w3.org/2000/svg", de = "http://www.w3.org/1999/xhtml";
  let Re = de, Ye = !1, e = null;
  const a = W({}, [Ce, we, de], Ot);
  let h = W({}, ["mi", "mo", "mn", "ms", "mtext"]), _ = W({}, ["annotation-xml"]);
  const S = W({}, ["title", "style", "font", "a", "script"]);
  let F = null;
  const G = ["application/xhtml+xml", "text/html"], Q = "text/html";
  let b = null, ue = null;
  const Le = d.createElement("form"), gt = function(n) {
    return n instanceof RegExp || n instanceof Function;
  }, tt = function() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ue && ue === n)) {
      if ((!n || typeof n != "object") && (n = {}), n = Pe(n), F = // eslint-disable-next-line unicorn/prefer-includes
      G.indexOf(n.PARSER_MEDIA_TYPE) === -1 ? Q : n.PARSER_MEDIA_TYPE, b = F === "application/xhtml+xml" ? Ot : At, f = ve(n, "ALLOWED_TAGS") ? W({}, n.ALLOWED_TAGS, b) : D, y = ve(n, "ALLOWED_ATTR") ? W({}, n.ALLOWED_ATTR, b) : Y, e = ve(n, "ALLOWED_NAMESPACES") ? W({}, n.ALLOWED_NAMESPACES, Ot) : a, $e = ve(n, "ADD_URI_SAFE_ATTR") ? W(Pe(et), n.ADD_URI_SAFE_ATTR, b) : et, Qe = ve(n, "ADD_DATA_URI_TAGS") ? W(Pe(Je), n.ADD_DATA_URI_TAGS, b) : Je, Ie = ve(n, "FORBID_CONTENTS") ? W({}, n.FORBID_CONTENTS, b) : Et, H = ve(n, "FORBID_TAGS") ? W({}, n.FORBID_TAGS, b) : Pe({}), pe = ve(n, "FORBID_ATTR") ? W({}, n.FORBID_ATTR, b) : Pe({}), Oe = ve(n, "USE_PROFILES") ? n.USE_PROFILES : !1, J = n.ALLOW_ARIA_ATTR !== !1, Te = n.ALLOW_DATA_ATTR !== !1, mt = n.ALLOW_UNKNOWN_PROTOCOLS || !1, Ze = n.ALLOW_SELF_CLOSE_IN_ATTR !== !1, be = n.SAFE_FOR_TEMPLATES || !1, xe = n.SAFE_FOR_XML !== !1, ye = n.WHOLE_DOCUMENT || !1, _e = n.RETURN_DOM || !1, He = n.RETURN_DOM_FRAGMENT || !1, Be = n.RETURN_TRUSTED_TYPE || !1, ie = n.FORCE_BODY || !1, $ = n.SANITIZE_DOM !== !1, je = n.SANITIZE_NAMED_PROPS || !1, qe = n.KEEP_CONTENT !== !1, De = n.IN_PLACE || !1, r = n.ALLOWED_URI_REGEXP || Nn, Re = n.NAMESPACE || de, h = n.MATHML_TEXT_INTEGRATION_POINTS || h, _ = n.HTML_INTEGRATION_POINTS || _, x = n.CUSTOM_ELEMENT_HANDLING || {}, n.CUSTOM_ELEMENT_HANDLING && gt(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (x.tagNameCheck = n.CUSTOM_ELEMENT_HANDLING.tagNameCheck), n.CUSTOM_ELEMENT_HANDLING && gt(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (x.attributeNameCheck = n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), n.CUSTOM_ELEMENT_HANDLING && typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), be && (Te = !1), He && (_e = !0), Oe && (f = W({}, Zt), y = [], Oe.html === !0 && (W(f, Kt), W(y, Qt)), Oe.svg === !0 && (W(f, Ct), W(y, kt), W(y, vt)), Oe.svgFilters === !0 && (W(f, wt), W(y, kt), W(y, vt)), Oe.mathMl === !0 && (W(f, Nt), W(y, Jt), W(y, vt))), n.ADD_TAGS && (f === D && (f = Pe(f)), W(f, n.ADD_TAGS, b)), n.ADD_ATTR && (y === Y && (y = Pe(y)), W(y, n.ADD_ATTR, b)), n.ADD_URI_SAFE_ATTR && W($e, n.ADD_URI_SAFE_ATTR, b), n.FORBID_CONTENTS && (Ie === Et && (Ie = Pe(Ie)), W(Ie, n.FORBID_CONTENTS, b)), qe && (f["#text"] = !0), ye && W(f, ["html", "head", "body"]), f.table && (W(f, ["tbody"]), delete H.tbody), n.TRUSTED_TYPES_POLICY) {
        if (typeof n.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw it('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof n.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw it('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        V = n.TRUSTED_TYPES_POLICY, t = V.createHTML("");
      } else
        V === void 0 && (V = ar(Z, v)), V !== null && typeof t == "string" && (t = V.createHTML(""));
      ce && ce(n), ue = n;
    }
  }, xt = W({}, [...Ct, ...wt, ...Vn]), Ut = W({}, [...Nt, ...Kn]), Hn = function(n) {
    let m = K(n);
    (!m || !m.tagName) && (m = {
      namespaceURI: Re,
      tagName: "template"
    });
    const A = At(n.tagName), ne = At(m.tagName);
    return e[n.namespaceURI] ? n.namespaceURI === we ? m.namespaceURI === de ? A === "svg" : m.namespaceURI === Ce ? A === "svg" && (ne === "annotation-xml" || h[ne]) : !!xt[A] : n.namespaceURI === Ce ? m.namespaceURI === de ? A === "math" : m.namespaceURI === we ? A === "math" && _[ne] : !!Ut[A] : n.namespaceURI === de ? m.namespaceURI === we && !_[ne] || m.namespaceURI === Ce && !h[ne] ? !1 : !Ut[A] && (S[A] || !xt[A]) : !!(F === "application/xhtml+xml" && e[n.namespaceURI]) : !1;
  }, Ae = function(n) {
    rt(o.removed, {
      element: n
    });
    try {
      K(n).removeChild(n);
    } catch {
      C(n);
    }
  }, We = function(n, m) {
    try {
      rt(o.removed, {
        attribute: m.getAttributeNode(n),
        from: m
      });
    } catch {
      rt(o.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(n), n === "is")
      if (_e || He)
        try {
          Ae(m);
        } catch {
        }
      else
        try {
          m.setAttribute(n, "");
        } catch {
        }
  }, Ht = function(n) {
    let m = null, A = null;
    if (ie)
      n = "<remove></remove>" + n;
    else {
      const re = Vt(n, /^[\r\n\t ]+/);
      A = re && re[0];
    }
    F === "application/xhtml+xml" && Re === de && (n = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + n + "</body></html>");
    const ne = V ? V.createHTML(n) : n;
    if (Re === de)
      try {
        m = new I().parseFromString(ne, F);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = l.createDocument(Re, "template", null);
      try {
        m.documentElement.innerHTML = Ye ? t : ne;
      } catch {
      }
    }
    const ae = m.body || m.documentElement;
    return n && A && ae.insertBefore(d.createTextNode(A), ae.childNodes[0] || null), Re === de ? j.call(m, ye ? "html" : "body")[0] : ye ? m.documentElement : ae;
  }, jt = function(n) {
    return p.call(
      n.ownerDocument || n,
      n,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, St = function(n) {
    return n instanceof R && (typeof n.nodeName != "string" || typeof n.textContent != "string" || typeof n.removeChild != "function" || !(n.attributes instanceof g) || typeof n.removeAttribute != "function" || typeof n.setAttribute != "function" || typeof n.namespaceURI != "string" || typeof n.insertBefore != "function" || typeof n.hasChildNodes != "function");
  }, Ft = function(n) {
    return typeof E == "function" && n instanceof E;
  };
  function Ne(O, n, m) {
    _t(O, (A) => {
      A.call(o, n, m, ue);
    });
  }
  const zt = function(n) {
    let m = null;
    if (Ne(w.beforeSanitizeElements, n, null), St(n))
      return Ae(n), !0;
    const A = b(n.nodeName);
    if (Ne(w.uponSanitizeElement, n, {
      tagName: A,
      allowedTags: f
    }), xe && n.hasChildNodes() && !Ft(n.firstElementChild) && le(/<[/\w!]/g, n.innerHTML) && le(/<[/\w!]/g, n.textContent) || n.nodeType === st.progressingInstruction || xe && n.nodeType === st.comment && le(/<[/\w]/g, n.data))
      return Ae(n), !0;
    if (!f[A] || H[A]) {
      if (!H[A] && Bt(A) && (x.tagNameCheck instanceof RegExp && le(x.tagNameCheck, A) || x.tagNameCheck instanceof Function && x.tagNameCheck(A)))
        return !1;
      if (qe && !Ie[A]) {
        const ne = K(n) || n.parentNode, ae = L(n) || n.childNodes;
        if (ae && ne) {
          const re = ae.length;
          for (let me = re - 1; me >= 0; --me) {
            const ke = M(ae[me], !0);
            ke.__removalCount = (n.__removalCount || 0) + 1, ne.insertBefore(ke, U(n));
          }
        }
      }
      return Ae(n), !0;
    }
    return n instanceof s && !Hn(n) || (A === "noscript" || A === "noembed" || A === "noframes") && le(/<\/no(script|embed|frames)/i, n.innerHTML) ? (Ae(n), !0) : (be && n.nodeType === st.text && (m = n.textContent, _t([oe, z, N], (ne) => {
      m = ot(m, ne, " ");
    }), n.textContent !== m && (rt(o.removed, {
      element: n.cloneNode()
    }), n.textContent = m)), Ne(w.afterSanitizeElements, n, null), !1);
  }, Gt = function(n, m, A) {
    if ($ && (m === "id" || m === "name") && (A in d || A in Le))
      return !1;
    if (!(Te && !pe[m] && le(te, m))) {
      if (!(J && le(he, m))) {
        if (!y[m] || pe[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Bt(n) && (x.tagNameCheck instanceof RegExp && le(x.tagNameCheck, n) || x.tagNameCheck instanceof Function && x.tagNameCheck(n)) && (x.attributeNameCheck instanceof RegExp && le(x.attributeNameCheck, m) || x.attributeNameCheck instanceof Function && x.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && x.allowCustomizedBuiltInElements && (x.tagNameCheck instanceof RegExp && le(x.tagNameCheck, A) || x.tagNameCheck instanceof Function && x.tagNameCheck(A)))
          ) return !1;
        } else if (!$e[m]) {
          if (!le(r, ot(A, Se, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && n !== "script" && $n(A, "data:") === 0 && Qe[n])) {
              if (!(mt && !le(Me, ot(A, Se, "")))) {
                if (A)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Bt = function(n) {
    return n !== "annotation-xml" && Vt(n, Ge);
  }, qt = function(n) {
    Ne(w.beforeSanitizeAttributes, n, null);
    const {
      attributes: m
    } = n;
    if (!m || St(n))
      return;
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: y,
      forceKeepAttr: void 0
    };
    let ne = m.length;
    for (; ne--; ) {
      const ae = m[ne], {
        name: re,
        namespaceURI: me,
        value: ke
      } = ae, nt = b(re), bt = ke;
      let se = re === "value" ? bt : Yn(bt);
      if (A.attrName = nt, A.attrValue = se, A.keepAttr = !0, A.forceKeepAttr = void 0, Ne(w.uponSanitizeAttribute, n, A), se = A.attrValue, je && (nt === "id" || nt === "name") && (We(re, n), se = ht + se), xe && le(/((--!?|])>)|<\/(style|title)/i, se)) {
        We(re, n);
        continue;
      }
      if (A.forceKeepAttr)
        continue;
      if (!A.keepAttr) {
        We(re, n);
        continue;
      }
      if (!Ze && le(/\/>/i, se)) {
        We(re, n);
        continue;
      }
      be && _t([oe, z, N], (Yt) => {
        se = ot(se, Yt, " ");
      });
      const $t = b(n.nodeName);
      if (!Gt($t, nt, se)) {
        We(re, n);
        continue;
      }
      if (V && typeof Z == "object" && typeof Z.getAttributeType == "function" && !me)
        switch (Z.getAttributeType($t, nt)) {
          case "TrustedHTML": {
            se = V.createHTML(se);
            break;
          }
          case "TrustedScriptURL": {
            se = V.createScriptURL(se);
            break;
          }
        }
      if (se !== bt)
        try {
          me ? n.setAttributeNS(me, re, se) : n.setAttribute(re, se), St(n) ? Ae(n) : Xt(o.removed);
        } catch {
          We(re, n);
        }
    }
    Ne(w.afterSanitizeAttributes, n, null);
  }, jn = function O(n) {
    let m = null;
    const A = jt(n);
    for (Ne(w.beforeSanitizeShadowDOM, n, null); m = A.nextNode(); )
      Ne(w.uponSanitizeShadowNode, m, null), zt(m), qt(m), m.content instanceof T && O(m.content);
    Ne(w.afterSanitizeShadowDOM, n, null);
  };
  return o.sanitize = function(O) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = null, A = null, ne = null, ae = null;
    if (Ye = !O, Ye && (O = "<!-->"), typeof O != "string" && !Ft(O))
      if (typeof O.toString == "function") {
        if (O = O.toString(), typeof O != "string")
          throw it("dirty is not a string, aborting");
      } else
        throw it("toString is not a function");
    if (!o.isSupported)
      return O;
    if (Ue || tt(n), o.removed = [], typeof O == "string" && (De = !1), De) {
      if (O.nodeName) {
        const ke = b(O.nodeName);
        if (!f[ke] || H[ke])
          throw it("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (O instanceof E)
      m = Ht("<!---->"), A = m.ownerDocument.importNode(O, !0), A.nodeType === st.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? m = A : m.appendChild(A);
    else {
      if (!_e && !be && !ye && // eslint-disable-next-line unicorn/prefer-includes
      O.indexOf("<") === -1)
        return V && Be ? V.createHTML(O) : O;
      if (m = Ht(O), !m)
        return _e ? null : Be ? t : "";
    }
    m && ie && Ae(m.firstChild);
    const re = jt(De ? O : m);
    for (; ne = re.nextNode(); )
      zt(ne), qt(ne), ne.content instanceof T && jn(ne.content);
    if (De)
      return O;
    if (_e) {
      if (He)
        for (ae = P.call(m.ownerDocument); m.firstChild; )
          ae.appendChild(m.firstChild);
      else
        ae = m;
      return (y.shadowroot || y.shadowrootmode) && (ae = ee.call(c, ae, !0)), ae;
    }
    let me = ye ? m.outerHTML : m.innerHTML;
    return ye && f["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && le(kn, m.ownerDocument.doctype.name) && (me = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + me), be && _t([oe, z, N], (ke) => {
      me = ot(me, ke, " ");
    }), V && Be ? V.createHTML(me) : me;
  }, o.setConfig = function() {
    let O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tt(O), Ue = !0;
  }, o.clearConfig = function() {
    ue = null, Ue = !1;
  }, o.isValidAttribute = function(O, n, m) {
    ue || tt({});
    const A = b(O), ne = b(n);
    return Gt(A, ne, m);
  }, o.addHook = function(O, n) {
    typeof n == "function" && rt(w[O], n);
  }, o.removeHook = function(O, n) {
    if (n !== void 0) {
      const m = Bn(w[O], n);
      return m === -1 ? void 0 : qn(w[O], m, 1)[0];
    }
    return Xt(w[O]);
  }, o.removeHooks = function(O) {
    w[O] = [];
  }, o.removeAllHooks = function() {
    w = tn();
  }, o;
}
var nn = Pn();
function sr(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ut = {}, Xe = {}, Tt = {}, Fe = {}, ze = {}, Pt = {}, rn;
function Dn() {
  return rn || (rn = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.Doctype = i.CDATA = i.Tag = i.Style = i.Script = i.Comment = i.Directive = i.Text = i.Root = i.isTag = i.ElementType = void 0;
    var o;
    (function(c) {
      c.Root = "root", c.Text = "text", c.Directive = "directive", c.Comment = "comment", c.Script = "script", c.Style = "style", c.Tag = "tag", c.CDATA = "cdata", c.Doctype = "doctype";
    })(o = i.ElementType || (i.ElementType = {}));
    function d(c) {
      return c.type === o.Tag || c.type === o.Script || c.type === o.Style;
    }
    i.isTag = d, i.Root = o.Root, i.Text = o.Text, i.Directive = o.Directive, i.Comment = o.Comment, i.Script = o.Script, i.Style = o.Style, i.Tag = o.Tag, i.CDATA = o.CDATA, i.Doctype = o.Doctype;
  }(Pt)), Pt;
}
var B = {}, on;
function an() {
  if (on) return B;
  on = 1;
  var i = B && B.__extends || /* @__PURE__ */ function() {
    var t = function(l, p) {
      return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(P, j) {
        P.__proto__ = j;
      } || function(P, j) {
        for (var ee in j) Object.prototype.hasOwnProperty.call(j, ee) && (P[ee] = j[ee]);
      }, t(l, p);
    };
    return function(l, p) {
      if (typeof p != "function" && p !== null)
        throw new TypeError("Class extends value " + String(p) + " is not a constructor or null");
      t(l, p);
      function P() {
        this.constructor = l;
      }
      l.prototype = p === null ? Object.create(p) : (P.prototype = p.prototype, new P());
    };
  }(), o = B && B.__assign || function() {
    return o = Object.assign || function(t) {
      for (var l, p = 1, P = arguments.length; p < P; p++) {
        l = arguments[p];
        for (var j in l) Object.prototype.hasOwnProperty.call(l, j) && (t[j] = l[j]);
      }
      return t;
    }, o.apply(this, arguments);
  };
  Object.defineProperty(B, "__esModule", { value: !0 }), B.cloneNode = B.hasChildren = B.isDocument = B.isDirective = B.isComment = B.isText = B.isCDATA = B.isTag = B.Element = B.Document = B.CDATA = B.NodeWithChildren = B.ProcessingInstruction = B.Comment = B.Text = B.DataNode = B.Node = void 0;
  var d = /* @__PURE__ */ Dn(), c = (
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
        set: function(l) {
          this.parent = l;
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
        set: function(l) {
          this.prev = l;
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
        set: function(l) {
          this.next = l;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.cloneNode = function(l) {
        return l === void 0 && (l = !1), K(this, l);
      }, t;
    }()
  );
  B.Node = c;
  var v = (
    /** @class */
    function(t) {
      i(l, t);
      function l(p) {
        var P = t.call(this) || this;
        return P.data = p, P;
      }
      return Object.defineProperty(l.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.data;
        },
        set: function(p) {
          this.data = p;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(c)
  );
  B.DataNode = v;
  var T = (
    /** @class */
    function(t) {
      i(l, t);
      function l() {
        var p = t !== null && t.apply(this, arguments) || this;
        return p.type = d.ElementType.Text, p;
      }
      return Object.defineProperty(l.prototype, "nodeType", {
        get: function() {
          return 3;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(v)
  );
  B.Text = T;
  var k = (
    /** @class */
    function(t) {
      i(l, t);
      function l() {
        var p = t !== null && t.apply(this, arguments) || this;
        return p.type = d.ElementType.Comment, p;
      }
      return Object.defineProperty(l.prototype, "nodeType", {
        get: function() {
          return 8;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(v)
  );
  B.Comment = k;
  var E = (
    /** @class */
    function(t) {
      i(l, t);
      function l(p, P) {
        var j = t.call(this, P) || this;
        return j.name = p, j.type = d.ElementType.Directive, j;
      }
      return Object.defineProperty(l.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(v)
  );
  B.ProcessingInstruction = E;
  var s = (
    /** @class */
    function(t) {
      i(l, t);
      function l(p) {
        var P = t.call(this) || this;
        return P.children = p, P;
      }
      return Object.defineProperty(l.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function() {
          var p;
          return (p = this.children[0]) !== null && p !== void 0 ? p : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "lastChild", {
        /** Last child of the node. */
        get: function() {
          return this.children.length > 0 ? this.children[this.children.length - 1] : null;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.children;
        },
        set: function(p) {
          this.children = p;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(c)
  );
  B.NodeWithChildren = s;
  var u = (
    /** @class */
    function(t) {
      i(l, t);
      function l() {
        var p = t !== null && t.apply(this, arguments) || this;
        return p.type = d.ElementType.CDATA, p;
      }
      return Object.defineProperty(l.prototype, "nodeType", {
        get: function() {
          return 4;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(s)
  );
  B.CDATA = u;
  var g = (
    /** @class */
    function(t) {
      i(l, t);
      function l() {
        var p = t !== null && t.apply(this, arguments) || this;
        return p.type = d.ElementType.Root, p;
      }
      return Object.defineProperty(l.prototype, "nodeType", {
        get: function() {
          return 9;
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(s)
  );
  B.Document = g;
  var R = (
    /** @class */
    function(t) {
      i(l, t);
      function l(p, P, j, ee) {
        j === void 0 && (j = []), ee === void 0 && (ee = p === "script" ? d.ElementType.Script : p === "style" ? d.ElementType.Style : d.ElementType.Tag);
        var w = t.call(this, j) || this;
        return w.name = p, w.attribs = P, w.type = ee, w;
      }
      return Object.defineProperty(l.prototype, "nodeType", {
        get: function() {
          return 1;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function() {
          return this.name;
        },
        set: function(p) {
          this.name = p;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(l.prototype, "attributes", {
        get: function() {
          var p = this;
          return Object.keys(this.attribs).map(function(P) {
            var j, ee;
            return {
              name: P,
              value: p.attribs[P],
              namespace: (j = p["x-attribsNamespace"]) === null || j === void 0 ? void 0 : j[P],
              prefix: (ee = p["x-attribsPrefix"]) === null || ee === void 0 ? void 0 : ee[P]
            };
          });
        },
        enumerable: !1,
        configurable: !0
      }), l;
    }(s)
  );
  B.Element = R;
  function I(t) {
    return (0, d.isTag)(t);
  }
  B.isTag = I;
  function Z(t) {
    return t.type === d.ElementType.CDATA;
  }
  B.isCDATA = Z;
  function X(t) {
    return t.type === d.ElementType.Text;
  }
  B.isText = X;
  function M(t) {
    return t.type === d.ElementType.Comment;
  }
  B.isComment = M;
  function C(t) {
    return t.type === d.ElementType.Directive;
  }
  B.isDirective = C;
  function U(t) {
    return t.type === d.ElementType.Root;
  }
  B.isDocument = U;
  function L(t) {
    return Object.prototype.hasOwnProperty.call(t, "children");
  }
  B.hasChildren = L;
  function K(t, l) {
    l === void 0 && (l = !1);
    var p;
    if (X(t))
      p = new T(t.data);
    else if (M(t))
      p = new k(t.data);
    else if (I(t)) {
      var P = l ? V(t.children) : [], j = new R(t.name, o({}, t.attribs), P);
      P.forEach(function(z) {
        return z.parent = j;
      }), t.namespace != null && (j.namespace = t.namespace), t["x-attribsNamespace"] && (j["x-attribsNamespace"] = o({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (j["x-attribsPrefix"] = o({}, t["x-attribsPrefix"])), p = j;
    } else if (Z(t)) {
      var P = l ? V(t.children) : [], ee = new u(P);
      P.forEach(function(N) {
        return N.parent = ee;
      }), p = ee;
    } else if (U(t)) {
      var P = l ? V(t.children) : [], w = new g(P);
      P.forEach(function(N) {
        return N.parent = w;
      }), t["x-mode"] && (w["x-mode"] = t["x-mode"]), p = w;
    } else if (C(t)) {
      var oe = new E(t.name, t.data);
      t["x-name"] != null && (oe["x-name"] = t["x-name"], oe["x-publicId"] = t["x-publicId"], oe["x-systemId"] = t["x-systemId"]), p = oe;
    } else
      throw new Error("Not implemented yet: ".concat(t.type));
    return p.startIndex = t.startIndex, p.endIndex = t.endIndex, t.sourceCodeLocation != null && (p.sourceCodeLocation = t.sourceCodeLocation), p;
  }
  B.cloneNode = K;
  function V(t) {
    for (var l = t.map(function(P) {
      return K(P, !0);
    }), p = 1; p < l.length; p++)
      l[p].prev = l[p - 1], l[p - 1].next = l[p];
    return l;
  }
  return B;
}
var sn;
function In() {
  return sn || (sn = 1, function(i) {
    var o = ze && ze.__createBinding || (Object.create ? function(E, s, u, g) {
      g === void 0 && (g = u);
      var R = Object.getOwnPropertyDescriptor(s, u);
      (!R || ("get" in R ? !s.__esModule : R.writable || R.configurable)) && (R = { enumerable: !0, get: function() {
        return s[u];
      } }), Object.defineProperty(E, g, R);
    } : function(E, s, u, g) {
      g === void 0 && (g = u), E[g] = s[u];
    }), d = ze && ze.__exportStar || function(E, s) {
      for (var u in E) u !== "default" && !Object.prototype.hasOwnProperty.call(s, u) && o(s, E, u);
    };
    Object.defineProperty(i, "__esModule", { value: !0 }), i.DomHandler = void 0;
    var c = /* @__PURE__ */ Dn(), v = /* @__PURE__ */ an();
    d(/* @__PURE__ */ an(), i);
    var T = {
      withStartIndices: !1,
      withEndIndices: !1,
      xmlMode: !1
    }, k = (
      /** @class */
      function() {
        function E(s, u, g) {
          this.dom = [], this.root = new v.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (g = u, u = T), typeof s == "object" && (u = s, s = void 0), this.callback = s ?? null, this.options = u ?? T, this.elementCB = g ?? null;
        }
        return E.prototype.onparserinit = function(s) {
          this.parser = s;
        }, E.prototype.onreset = function() {
          this.dom = [], this.root = new v.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
        }, E.prototype.onend = function() {
          this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
        }, E.prototype.onerror = function(s) {
          this.handleCallback(s);
        }, E.prototype.onclosetag = function() {
          this.lastNode = null;
          var s = this.tagStack.pop();
          this.options.withEndIndices && (s.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(s);
        }, E.prototype.onopentag = function(s, u) {
          var g = this.options.xmlMode ? c.ElementType.Tag : void 0, R = new v.Element(s, u, void 0, g);
          this.addNode(R), this.tagStack.push(R);
        }, E.prototype.ontext = function(s) {
          var u = this.lastNode;
          if (u && u.type === c.ElementType.Text)
            u.data += s, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
          else {
            var g = new v.Text(s);
            this.addNode(g), this.lastNode = g;
          }
        }, E.prototype.oncomment = function(s) {
          if (this.lastNode && this.lastNode.type === c.ElementType.Comment) {
            this.lastNode.data += s;
            return;
          }
          var u = new v.Comment(s);
          this.addNode(u), this.lastNode = u;
        }, E.prototype.oncommentend = function() {
          this.lastNode = null;
        }, E.prototype.oncdatastart = function() {
          var s = new v.Text(""), u = new v.CDATA([s]);
          this.addNode(u), s.parent = u, this.lastNode = s;
        }, E.prototype.oncdataend = function() {
          this.lastNode = null;
        }, E.prototype.onprocessinginstruction = function(s, u) {
          var g = new v.ProcessingInstruction(s, u);
          this.addNode(g);
        }, E.prototype.handleCallback = function(s) {
          if (typeof this.callback == "function")
            this.callback(s, this.dom);
          else if (s)
            throw s;
        }, E.prototype.addNode = function(s) {
          var u = this.tagStack[this.tagStack.length - 1], g = u.children[u.children.length - 1];
          this.options.withStartIndices && (s.startIndex = this.parser.startIndex), this.options.withEndIndices && (s.endIndex = this.parser.endIndex), u.children.push(s), g && (s.prev = g, g.next = s), s.parent = u, this.lastNode = null;
        }, E;
      }()
    );
    i.DomHandler = k, i.default = k;
  }(ze)), ze;
}
var Dt = {}, un;
function ur() {
  return un || (un = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.CARRIAGE_RETURN_PLACEHOLDER_REGEX = i.CARRIAGE_RETURN_PLACEHOLDER = i.CARRIAGE_RETURN_REGEX = i.CARRIAGE_RETURN = i.CASE_SENSITIVE_TAG_NAMES_MAP = i.CASE_SENSITIVE_TAG_NAMES = void 0, i.CASE_SENSITIVE_TAG_NAMES = [
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
    ], i.CASE_SENSITIVE_TAG_NAMES_MAP = i.CASE_SENSITIVE_TAG_NAMES.reduce(function(o, d) {
      return o[d.toLowerCase()] = d, o;
    }, {}), i.CARRIAGE_RETURN = "\r", i.CARRIAGE_RETURN_REGEX = new RegExp(i.CARRIAGE_RETURN, "g"), i.CARRIAGE_RETURN_PLACEHOLDER = "__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(), "__"), i.CARRIAGE_RETURN_PLACEHOLDER_REGEX = new RegExp(i.CARRIAGE_RETURN_PLACEHOLDER, "g");
  }(Dt)), Dt;
}
var ln;
function Ln() {
  if (ln) return Fe;
  ln = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.formatAttributes = c, Fe.escapeSpecialCharacters = T, Fe.revertEscapedCharacters = k, Fe.formatDOM = E;
  var i = /* @__PURE__ */ In(), o = ur();
  function d(s) {
    return o.CASE_SENSITIVE_TAG_NAMES_MAP[s];
  }
  function c(s) {
    for (var u = {}, g = 0, R = s.length; g < R; g++) {
      var I = s[g];
      u[I.name] = I.value;
    }
    return u;
  }
  function v(s) {
    s = s.toLowerCase();
    var u = d(s);
    return u || s;
  }
  function T(s) {
    return s.replace(o.CARRIAGE_RETURN_REGEX, o.CARRIAGE_RETURN_PLACEHOLDER);
  }
  function k(s) {
    return s.replace(o.CARRIAGE_RETURN_PLACEHOLDER_REGEX, o.CARRIAGE_RETURN);
  }
  function E(s, u, g) {
    u === void 0 && (u = null);
    for (var R = [], I, Z = 0, X = s.length; Z < X; Z++) {
      var M = s[Z];
      switch (M.nodeType) {
        case 1: {
          var C = v(M.nodeName);
          I = new i.Element(C, c(M.attributes)), I.children = E(
            // template children are on content
            C === "template" ? M.content.childNodes : M.childNodes,
            I
          );
          break;
        }
        case 3:
          I = new i.Text(k(M.nodeValue));
          break;
        case 8:
          I = new i.Comment(M.nodeValue);
          break;
        default:
          continue;
      }
      var U = R[Z - 1] || null;
      U && (U.next = I), I.parent = u, I.prev = U, I.next = null, R.push(I);
    }
    return g && (I = new i.ProcessingInstruction(g.substring(0, g.indexOf(" ")).toLowerCase(), g), I.next = R[0] || null, I.parent = u, R.unshift(I), R[1] && (R[1].prev = R[0])), R;
  }
  return Fe;
}
var cn;
function lr() {
  if (cn) return Tt;
  cn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.default = M;
  var i = Ln(), o = "html", d = "head", c = "body", v = /<([a-zA-Z]+[0-9]?)/, T = /<head[^]*>/i, k = /<body[^]*>/i, E = function(C, U) {
    throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
  }, s = function(C, U) {
    throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
  }, u = typeof window == "object" && window.DOMParser;
  if (typeof u == "function") {
    var g = new u(), R = "text/html";
    s = function(C, U) {
      return U && (C = "<".concat(U, ">").concat(C, "</").concat(U, ">")), g.parseFromString(C, R);
    }, E = s;
  }
  if (typeof document == "object" && document.implementation) {
    var I = document.implementation.createHTMLDocument();
    E = function(C, U) {
      if (U) {
        var L = I.documentElement.querySelector(U);
        return L && (L.innerHTML = C), I;
      }
      return I.documentElement.innerHTML = C, I;
    };
  }
  var Z = typeof document == "object" && document.createElement("template"), X;
  Z && Z.content && (X = function(C) {
    return Z.innerHTML = C, Z.content.childNodes;
  });
  function M(C) {
    var U, L;
    C = (0, i.escapeSpecialCharacters)(C);
    var K = C.match(v), V = K && K[1] ? K[1].toLowerCase() : "";
    switch (V) {
      case o: {
        var t = s(C);
        if (!T.test(C)) {
          var l = t.querySelector(d);
          (U = l == null ? void 0 : l.parentNode) === null || U === void 0 || U.removeChild(l);
        }
        if (!k.test(C)) {
          var l = t.querySelector(c);
          (L = l == null ? void 0 : l.parentNode) === null || L === void 0 || L.removeChild(l);
        }
        return t.querySelectorAll(o);
      }
      case d:
      case c: {
        var p = E(C).querySelectorAll(V);
        return k.test(C) && T.test(C) ? p[0].parentNode.childNodes : p;
      }
      // low-level tag or text
      default: {
        if (X)
          return X(C);
        var l = E(C, c).querySelector(c);
        return l.childNodes;
      }
    }
  }
  return Tt;
}
var fn;
function cr() {
  if (fn) return Xe;
  fn = 1;
  var i = Xe && Xe.__importDefault || function(T) {
    return T && T.__esModule ? T : { default: T };
  };
  Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.default = v;
  var o = i(lr()), d = Ln(), c = /<(![a-zA-Z\s]+)>/;
  function v(T) {
    if (typeof T != "string")
      throw new TypeError("First argument must be a string");
    if (!T)
      return [];
    var k = T.match(c), E = k ? k[1] : void 0;
    return (0, d.formatDOM)((0, o.default)(T), null, E);
  }
  return Xe;
}
var yt = {}, Ee = {}, lt = {}, pn;
function fr() {
  if (pn) return lt;
  pn = 1;
  var i = 0;
  lt.SAME = i;
  var o = 1;
  return lt.CAMELCASE = o, lt.possibleStandardNames = {
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
  }, lt;
}
var dn;
function pr() {
  if (dn) return Ee;
  dn = 1;
  const i = 0, o = 1, d = 2, c = 3, v = 4, T = 5, k = 6;
  function E(t) {
    return u.hasOwnProperty(t) ? u[t] : null;
  }
  function s(t, l, p, P, j, ee, w) {
    this.acceptsBooleans = l === d || l === c || l === v, this.attributeName = P, this.attributeNamespace = j, this.mustUseProperty = p, this.propertyName = t, this.type = l, this.sanitizeURL = ee, this.removeEmptyString = w;
  }
  const u = {};
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
    u[t] = new s(
      t,
      i,
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
  ].forEach(([t, l]) => {
    u[t] = new s(
      t,
      o,
      !1,
      // mustUseProperty
      l,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
      // removeEmptyString
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach((t) => {
    u[t] = new s(
      t,
      d,
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
    u[t] = new s(
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
    u[t] = new s(
      t,
      c,
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
    u[t] = new s(
      t,
      c,
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
    u[t] = new s(
      t,
      v,
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
    u[t] = new s(
      t,
      k,
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
    u[t] = new s(
      t,
      T,
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
  const R = /[\-\:]([a-z])/g, I = (t) => t[1].toUpperCase();
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
    const l = t.replace(R, I);
    u[l] = new s(
      l,
      o,
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
    const l = t.replace(R, I);
    u[l] = new s(
      l,
      o,
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
    const l = t.replace(R, I);
    u[l] = new s(
      l,
      o,
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
    u[t] = new s(
      t,
      o,
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
  const Z = "xlinkHref";
  u[Z] = new s(
    "xlinkHref",
    o,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
    // removeEmptyString
  ), ["src", "href", "action", "formAction"].forEach((t) => {
    u[t] = new s(
      t,
      o,
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
    CAMELCASE: X,
    SAME: M,
    possibleStandardNames: C
  } = fr(), L = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD" + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", K = RegExp.prototype.test.bind(
    // eslint-disable-next-line no-misleading-character-class
    new RegExp("^(data|aria)-[" + L + "]*$")
  ), V = Object.keys(
    C
  ).reduce((t, l) => {
    const p = C[l];
    return p === M ? t[l] = l : p === X ? t[l.toLowerCase()] = l : t[l] = p, t;
  }, {});
  return Ee.BOOLEAN = c, Ee.BOOLEANISH_STRING = d, Ee.NUMERIC = T, Ee.OVERLOADED_BOOLEAN = v, Ee.POSITIVE_NUMERIC = k, Ee.RESERVED = i, Ee.STRING = o, Ee.getPropertyInfo = E, Ee.isCustomAttribute = K, Ee.possibleStandardNames = V, Ee;
}
var ct = {}, Rt = { exports: {} }, q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function dr() {
  if (mn) return q;
  mn = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), k = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), R = Symbol.iterator;
  function I(r) {
    return r === null || typeof r != "object" ? null : (r = R && r[R] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var Z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, M = {};
  function C(r, f, D) {
    this.props = r, this.context = f, this.refs = M, this.updater = D || Z;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(r, f) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, r, f, "setState");
  }, C.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function U() {
  }
  U.prototype = C.prototype;
  function L(r, f, D) {
    this.props = r, this.context = f, this.refs = M, this.updater = D || Z;
  }
  var K = L.prototype = new U();
  K.constructor = L, X(K, C.prototype), K.isPureReactComponent = !0;
  var V = Array.isArray, t = { H: null, A: null, T: null, S: null, V: null }, l = Object.prototype.hasOwnProperty;
  function p(r, f, D, y, Y, x) {
    return D = x.ref, {
      $$typeof: i,
      type: r,
      key: f,
      ref: D !== void 0 ? D : null,
      props: x
    };
  }
  function P(r, f) {
    return p(
      r.type,
      f,
      void 0,
      void 0,
      void 0,
      r.props
    );
  }
  function j(r) {
    return typeof r == "object" && r !== null && r.$$typeof === i;
  }
  function ee(r) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(D) {
      return f[D];
    });
  }
  var w = /\/+/g;
  function oe(r, f) {
    return typeof r == "object" && r !== null && r.key != null ? ee("" + r.key) : f.toString(36);
  }
  function z() {
  }
  function N(r) {
    switch (r.status) {
      case "fulfilled":
        return r.value;
      case "rejected":
        throw r.reason;
      default:
        switch (typeof r.status == "string" ? r.then(z, z) : (r.status = "pending", r.then(
          function(f) {
            r.status === "pending" && (r.status = "fulfilled", r.value = f);
          },
          function(f) {
            r.status === "pending" && (r.status = "rejected", r.reason = f);
          }
        )), r.status) {
          case "fulfilled":
            return r.value;
          case "rejected":
            throw r.reason;
        }
    }
    throw r;
  }
  function te(r, f, D, y, Y) {
    var x = typeof r;
    (x === "undefined" || x === "boolean") && (r = null);
    var H = !1;
    if (r === null) H = !0;
    else
      switch (x) {
        case "bigint":
        case "string":
        case "number":
          H = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case i:
            case o:
              H = !0;
              break;
            case g:
              return H = r._init, te(
                H(r._payload),
                f,
                D,
                y,
                Y
              );
          }
      }
    if (H)
      return Y = Y(r), H = y === "" ? "." + oe(r, 0) : y, V(Y) ? (D = "", H != null && (D = H.replace(w, "$&/") + "/"), te(Y, f, D, "", function(Te) {
        return Te;
      })) : Y != null && (j(Y) && (Y = P(
        Y,
        D + (Y.key == null || r && r.key === Y.key ? "" : ("" + Y.key).replace(
          w,
          "$&/"
        ) + "/") + H
      )), f.push(Y)), 1;
    H = 0;
    var pe = y === "" ? "." : y + ":";
    if (V(r))
      for (var J = 0; J < r.length; J++)
        y = r[J], x = pe + oe(y, J), H += te(
          y,
          f,
          D,
          x,
          Y
        );
    else if (J = I(r), typeof J == "function")
      for (r = J.call(r), J = 0; !(y = r.next()).done; )
        y = y.value, x = pe + oe(y, J++), H += te(
          y,
          f,
          D,
          x,
          Y
        );
    else if (x === "object") {
      if (typeof r.then == "function")
        return te(
          N(r),
          f,
          D,
          y,
          Y
        );
      throw f = String(r), Error(
        "Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return H;
  }
  function he(r, f, D) {
    if (r == null) return r;
    var y = [], Y = 0;
    return te(r, y, "", "", function(x) {
      return f.call(D, x, Y++);
    }), y;
  }
  function Me(r) {
    if (r._status === -1) {
      var f = r._result;
      f = f(), f.then(
        function(D) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = D);
        },
        function(D) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = D);
        }
      ), r._status === -1 && (r._status = 0, r._result = f);
    }
    if (r._status === 1) return r._result.default;
    throw r._result;
  }
  var Se = typeof reportError == "function" ? reportError : function(r) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var f = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
        error: r
      });
      if (!window.dispatchEvent(f)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", r);
      return;
    }
    console.error(r);
  };
  function Ge() {
  }
  return q.Children = {
    map: he,
    forEach: function(r, f, D) {
      he(
        r,
        function() {
          f.apply(this, arguments);
        },
        D
      );
    },
    count: function(r) {
      var f = 0;
      return he(r, function() {
        f++;
      }), f;
    },
    toArray: function(r) {
      return he(r, function(f) {
        return f;
      }) || [];
    },
    only: function(r) {
      if (!j(r))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return r;
    }
  }, q.Component = C, q.Fragment = d, q.Profiler = v, q.PureComponent = L, q.StrictMode = c, q.Suspense = s, q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = t, q.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(r) {
      return t.H.useMemoCache(r);
    }
  }, q.cache = function(r) {
    return function() {
      return r.apply(null, arguments);
    };
  }, q.cloneElement = function(r, f, D) {
    if (r == null)
      throw Error(
        "The argument must be a React element, but you passed " + r + "."
      );
    var y = X({}, r.props), Y = r.key, x = void 0;
    if (f != null)
      for (H in f.ref !== void 0 && (x = void 0), f.key !== void 0 && (Y = "" + f.key), f)
        !l.call(f, H) || H === "key" || H === "__self" || H === "__source" || H === "ref" && f.ref === void 0 || (y[H] = f[H]);
    var H = arguments.length - 2;
    if (H === 1) y.children = D;
    else if (1 < H) {
      for (var pe = Array(H), J = 0; J < H; J++)
        pe[J] = arguments[J + 2];
      y.children = pe;
    }
    return p(r.type, Y, void 0, void 0, x, y);
  }, q.createContext = function(r) {
    return r = {
      $$typeof: k,
      _currentValue: r,
      _currentValue2: r,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, r.Provider = r, r.Consumer = {
      $$typeof: T,
      _context: r
    }, r;
  }, q.createElement = function(r, f, D) {
    var y, Y = {}, x = null;
    if (f != null)
      for (y in f.key !== void 0 && (x = "" + f.key), f)
        l.call(f, y) && y !== "key" && y !== "__self" && y !== "__source" && (Y[y] = f[y]);
    var H = arguments.length - 2;
    if (H === 1) Y.children = D;
    else if (1 < H) {
      for (var pe = Array(H), J = 0; J < H; J++)
        pe[J] = arguments[J + 2];
      Y.children = pe;
    }
    if (r && r.defaultProps)
      for (y in H = r.defaultProps, H)
        Y[y] === void 0 && (Y[y] = H[y]);
    return p(r, x, void 0, void 0, null, Y);
  }, q.createRef = function() {
    return { current: null };
  }, q.forwardRef = function(r) {
    return { $$typeof: E, render: r };
  }, q.isValidElement = j, q.lazy = function(r) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: r },
      _init: Me
    };
  }, q.memo = function(r, f) {
    return {
      $$typeof: u,
      type: r,
      compare: f === void 0 ? null : f
    };
  }, q.startTransition = function(r) {
    var f = t.T, D = {};
    t.T = D;
    try {
      var y = r(), Y = t.S;
      Y !== null && Y(D, y), typeof y == "object" && y !== null && typeof y.then == "function" && y.then(Ge, Se);
    } catch (x) {
      Se(x);
    } finally {
      t.T = f;
    }
  }, q.unstable_useCacheRefresh = function() {
    return t.H.useCacheRefresh();
  }, q.use = function(r) {
    return t.H.use(r);
  }, q.useActionState = function(r, f, D) {
    return t.H.useActionState(r, f, D);
  }, q.useCallback = function(r, f) {
    return t.H.useCallback(r, f);
  }, q.useContext = function(r) {
    return t.H.useContext(r);
  }, q.useDebugValue = function() {
  }, q.useDeferredValue = function(r, f) {
    return t.H.useDeferredValue(r, f);
  }, q.useEffect = function(r, f, D) {
    var y = t.H;
    if (typeof D == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return y.useEffect(r, f);
  }, q.useId = function() {
    return t.H.useId();
  }, q.useImperativeHandle = function(r, f, D) {
    return t.H.useImperativeHandle(r, f, D);
  }, q.useInsertionEffect = function(r, f) {
    return t.H.useInsertionEffect(r, f);
  }, q.useLayoutEffect = function(r, f) {
    return t.H.useLayoutEffect(r, f);
  }, q.useMemo = function(r, f) {
    return t.H.useMemo(r, f);
  }, q.useOptimistic = function(r, f) {
    return t.H.useOptimistic(r, f);
  }, q.useReducer = function(r, f, D) {
    return t.H.useReducer(r, f, D);
  }, q.useRef = function(r) {
    return t.H.useRef(r);
  }, q.useState = function(r) {
    return t.H.useState(r);
  }, q.useSyncExternalStore = function(r, f, D) {
    return t.H.useSyncExternalStore(
      r,
      f,
      D
    );
  }, q.useTransition = function() {
    return t.H.useTransition();
  }, q.version = "19.1.0", q;
}
var dt = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
dt.exports;
var hn;
function mr() {
  return hn || (hn = 1, function(i, o) {
    process.env.NODE_ENV !== "production" && function() {
      function d(e, a) {
        Object.defineProperty(T.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              a[0],
              a[1]
            );
          }
        });
      }
      function c(e) {
        return e === null || typeof e != "object" ? null : (e = Ze && e[Ze] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function v(e, a) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var h = e + "." + a;
        be[h] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          a,
          e
        ), be[h] = !0);
      }
      function T(e, a, h) {
        this.props = e, this.context = a, this.refs = Ue, this.updater = h || xe;
      }
      function k() {
      }
      function E(e, a, h) {
        this.props = e, this.context = a, this.refs = Ue, this.updater = h || xe;
      }
      function s(e) {
        return "" + e;
      }
      function u(e) {
        try {
          s(e);
          var a = !1;
        } catch {
          a = !0;
        }
        if (a) {
          a = console;
          var h = a.error, _ = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return h.call(
            a,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            _
          ), s(e);
        }
      }
      function g(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Be ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case r:
            return "Fragment";
          case D:
            return "Profiler";
          case f:
            return "StrictMode";
          case H:
            return "Suspense";
          case pe:
            return "SuspenseList";
          case mt:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case Ge:
              return "Portal";
            case Y:
              return (e.displayName || "Context") + ".Provider";
            case y:
              return (e._context.displayName || "Context") + ".Consumer";
            case x:
              var a = e.render;
              return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case J:
              return a = e.displayName || null, a !== null ? a : g(e.type) || "Memo";
            case Te:
              a = e._payload, e = e._init;
              try {
                return g(e(a));
              } catch {
              }
          }
        return null;
      }
      function R(e) {
        if (e === r) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === Te)
          return "<...>";
        try {
          var a = g(e);
          return a ? "<" + a + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function I() {
        var e = $.A;
        return e === null ? null : e.getOwner();
      }
      function Z() {
        return Error("react-stack-top-frame");
      }
      function X(e) {
        if (je.call(e, "key")) {
          var a = Object.getOwnPropertyDescriptor(e, "key").get;
          if (a && a.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function M(e, a) {
        function h() {
          qe || (qe = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            a
          ));
        }
        h.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: h,
          configurable: !0
        });
      }
      function C() {
        var e = g(this.type);
        return Oe[e] || (Oe[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function U(e, a, h, _, S, F, G, Q) {
        return h = F.ref, e = {
          $$typeof: Se,
          type: e,
          key: a,
          props: F,
          _owner: S
        }, (h !== void 0 ? h : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: C
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(e, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: G
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Q
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function L(e, a) {
        return a = U(
          e.type,
          a,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (a._store.validated = e._store.validated), a;
      }
      function K(e) {
        return typeof e == "object" && e !== null && e.$$typeof === Se;
      }
      function V(e) {
        var a = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(h) {
          return a[h];
        });
      }
      function t(e, a) {
        return typeof e == "object" && e !== null && e.key != null ? (u(e.key), V("" + e.key)) : a.toString(36);
      }
      function l() {
      }
      function p(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(l, l) : (e.status = "pending", e.then(
              function(a) {
                e.status === "pending" && (e.status = "fulfilled", e.value = a);
              },
              function(a) {
                e.status === "pending" && (e.status = "rejected", e.reason = a);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function P(e, a, h, _, S) {
        var F = typeof e;
        (F === "undefined" || F === "boolean") && (e = null);
        var G = !1;
        if (e === null) G = !0;
        else
          switch (F) {
            case "bigint":
            case "string":
            case "number":
              G = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case Se:
                case Ge:
                  G = !0;
                  break;
                case Te:
                  return G = e._init, P(
                    G(e._payload),
                    a,
                    h,
                    _,
                    S
                  );
              }
          }
        if (G) {
          G = e, S = S(G);
          var Q = _ === "" ? "." + t(G, 0) : _;
          return He(S) ? (h = "", Q != null && (h = Q.replace(Je, "$&/") + "/"), P(S, a, h, "", function(ue) {
            return ue;
          })) : S != null && (K(S) && (S.key != null && (G && G.key === S.key || u(S.key)), h = L(
            S,
            h + (S.key == null || G && G.key === S.key ? "" : ("" + S.key).replace(
              Je,
              "$&/"
            ) + "/") + Q
          ), _ !== "" && G != null && K(G) && G.key == null && G._store && !G._store.validated && (h._store.validated = 2), S = h), a.push(S)), 1;
        }
        if (G = 0, Q = _ === "" ? "." : _ + ":", He(e))
          for (var b = 0; b < e.length; b++)
            _ = e[b], F = Q + t(_, b), G += P(
              _,
              a,
              h,
              F,
              S
            );
        else if (b = c(e), typeof b == "function")
          for (b === e.entries && (Qe || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Qe = !0), e = b.call(e), b = 0; !(_ = e.next()).done; )
            _ = _.value, F = Q + t(_, b++), G += P(
              _,
              a,
              h,
              F,
              S
            );
        else if (F === "object") {
          if (typeof e.then == "function")
            return P(
              p(e),
              a,
              h,
              _,
              S
            );
          throw a = String(e), Error(
            "Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return G;
      }
      function j(e, a, h) {
        if (e == null) return e;
        var _ = [], S = 0;
        return P(e, _, "", "", function(F) {
          return a.call(h, F, S++);
        }), _;
      }
      function ee(e) {
        if (e._status === -1) {
          var a = e._result;
          a = a(), a.then(
            function(h) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = h);
            },
            function(h) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = h);
            }
          ), e._status === -1 && (e._status = 0, e._result = a);
        }
        if (e._status === 1)
          return a = e._result, a === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            a
          ), "default" in a || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            a
          ), a.default;
        throw e._result;
      }
      function w() {
        var e = $.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function oe() {
      }
      function z(e) {
        if (Ce === null)
          try {
            var a = ("require" + Math.random()).slice(0, 7);
            Ce = (i && i[a]).call(
              i,
              "timers"
            ).setImmediate;
          } catch {
            Ce = function(_) {
              et === !1 && (et = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var S = new MessageChannel();
              S.port1.onmessage = _, S.port2.postMessage(void 0);
            };
          }
        return Ce(e);
      }
      function N(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function te(e, a) {
        a !== we - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), we = a;
      }
      function he(e, a, h) {
        var _ = $.actQueue;
        if (_ !== null)
          if (_.length !== 0)
            try {
              Me(_), z(function() {
                return he(e, a, h);
              });
              return;
            } catch (S) {
              $.thrownErrors.push(S);
            }
          else $.actQueue = null;
        0 < $.thrownErrors.length ? (_ = N($.thrownErrors), $.thrownErrors.length = 0, h(_)) : a(e);
      }
      function Me(e) {
        if (!Re) {
          Re = !0;
          var a = 0;
          try {
            for (; a < e.length; a++) {
              var h = e[a];
              do {
                $.didUsePromise = !1;
                var _ = h(!1);
                if (_ !== null) {
                  if ($.didUsePromise) {
                    e[a] = h, e.splice(0, a);
                    return;
                  }
                  h = _;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (S) {
            e.splice(0, a + 1), $.thrownErrors.push(S);
          } finally {
            Re = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Se = Symbol.for("react.transitional.element"), Ge = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), mt = Symbol.for("react.activity"), Ze = Symbol.iterator, be = {}, xe = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          v(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          v(e, "replaceState");
        },
        enqueueSetState: function(e) {
          v(e, "setState");
        }
      }, ye = Object.assign, Ue = {};
      Object.freeze(Ue), T.prototype.isReactComponent = {}, T.prototype.setState = function(e, a) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, a, "setState");
      }, T.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var ie = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, _e;
      for (_e in ie)
        ie.hasOwnProperty(_e) && d(_e, ie[_e]);
      k.prototype = T.prototype, ie = E.prototype = new k(), ie.constructor = E, ye(ie, T.prototype), ie.isPureReactComponent = !0;
      var He = Array.isArray, Be = Symbol.for("react.client.reference"), $ = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, je = Object.prototype.hasOwnProperty, ht = console.createTask ? console.createTask : function() {
        return null;
      };
      ie = {
        "react-stack-bottom-frame": function(e) {
          return e();
        }
      };
      var qe, De, Oe = {}, Ie = ie["react-stack-bottom-frame"].bind(ie, Z)(), Et = ht(R(Z)), Qe = !1, Je = /\/+/g, $e = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var a = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(a)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, et = !1, Ce = null, we = 0, de = !1, Re = !1, Ye = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : z;
      ie = Object.freeze({
        __proto__: null,
        c: function(e) {
          return w().useMemoCache(e);
        }
      }), o.Children = {
        map: j,
        forEach: function(e, a, h) {
          j(
            e,
            function() {
              a.apply(this, arguments);
            },
            h
          );
        },
        count: function(e) {
          var a = 0;
          return j(e, function() {
            a++;
          }), a;
        },
        toArray: function(e) {
          return j(e, function(a) {
            return a;
          }) || [];
        },
        only: function(e) {
          if (!K(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, o.Component = T, o.Fragment = r, o.Profiler = D, o.PureComponent = E, o.StrictMode = f, o.Suspense = H, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, o.__COMPILER_RUNTIME = ie, o.act = function(e) {
        var a = $.actQueue, h = we;
        we++;
        var _ = $.actQueue = a !== null ? a : [], S = !1;
        try {
          var F = e();
        } catch (b) {
          $.thrownErrors.push(b);
        }
        if (0 < $.thrownErrors.length)
          throw te(a, h), e = N($.thrownErrors), $.thrownErrors.length = 0, e;
        if (F !== null && typeof F == "object" && typeof F.then == "function") {
          var G = F;
          return Ye(function() {
            S || de || (de = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(b, ue) {
              S = !0, G.then(
                function(Le) {
                  if (te(a, h), h === 0) {
                    try {
                      Me(_), z(function() {
                        return he(
                          Le,
                          b,
                          ue
                        );
                      });
                    } catch (tt) {
                      $.thrownErrors.push(tt);
                    }
                    if (0 < $.thrownErrors.length) {
                      var gt = N(
                        $.thrownErrors
                      );
                      $.thrownErrors.length = 0, ue(gt);
                    }
                  } else b(Le);
                },
                function(Le) {
                  te(a, h), 0 < $.thrownErrors.length && (Le = N(
                    $.thrownErrors
                  ), $.thrownErrors.length = 0), ue(Le);
                }
              );
            }
          };
        }
        var Q = F;
        if (te(a, h), h === 0 && (Me(_), _.length !== 0 && Ye(function() {
          S || de || (de = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), $.actQueue = null), 0 < $.thrownErrors.length)
          throw e = N($.thrownErrors), $.thrownErrors.length = 0, e;
        return {
          then: function(b, ue) {
            S = !0, h === 0 ? ($.actQueue = _, z(function() {
              return he(
                Q,
                b,
                ue
              );
            })) : b(Q);
          }
        };
      }, o.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, o.captureOwnerStack = function() {
        var e = $.getCurrentStack;
        return e === null ? null : e();
      }, o.cloneElement = function(e, a, h) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var _ = ye({}, e.props), S = e.key, F = e._owner;
        if (a != null) {
          var G;
          e: {
            if (je.call(a, "ref") && (G = Object.getOwnPropertyDescriptor(
              a,
              "ref"
            ).get) && G.isReactWarning) {
              G = !1;
              break e;
            }
            G = a.ref !== void 0;
          }
          G && (F = I()), X(a) && (u(a.key), S = "" + a.key);
          for (Q in a)
            !je.call(a, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && a.ref === void 0 || (_[Q] = a[Q]);
        }
        var Q = arguments.length - 2;
        if (Q === 1) _.children = h;
        else if (1 < Q) {
          G = Array(Q);
          for (var b = 0; b < Q; b++)
            G[b] = arguments[b + 2];
          _.children = G;
        }
        for (_ = U(
          e.type,
          S,
          void 0,
          void 0,
          F,
          _,
          e._debugStack,
          e._debugTask
        ), S = 2; S < arguments.length; S++)
          F = arguments[S], K(F) && F._store && (F._store.validated = 1);
        return _;
      }, o.createContext = function(e) {
        return e = {
          $$typeof: Y,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: y,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, o.createElement = function(e, a, h) {
        for (var _ = 2; _ < arguments.length; _++) {
          var S = arguments[_];
          K(S) && S._store && (S._store.validated = 1);
        }
        if (_ = {}, S = null, a != null)
          for (b in De || !("__self" in a) || "key" in a || (De = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), X(a) && (u(a.key), S = "" + a.key), a)
            je.call(a, b) && b !== "key" && b !== "__self" && b !== "__source" && (_[b] = a[b]);
        var F = arguments.length - 2;
        if (F === 1) _.children = h;
        else if (1 < F) {
          for (var G = Array(F), Q = 0; Q < F; Q++)
            G[Q] = arguments[Q + 2];
          Object.freeze && Object.freeze(G), _.children = G;
        }
        if (e && e.defaultProps)
          for (b in F = e.defaultProps, F)
            _[b] === void 0 && (_[b] = F[b]);
        S && M(
          _,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var b = 1e4 > $.recentlyCreatedOwnerStacks++;
        return U(
          e,
          S,
          void 0,
          void 0,
          I(),
          _,
          b ? Error("react-stack-top-frame") : Ie,
          b ? ht(R(e)) : Et
        );
      }, o.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, o.forwardRef = function(e) {
        e != null && e.$$typeof === J ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var a = { $$typeof: x, render: e }, h;
        return Object.defineProperty(a, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return h;
          },
          set: function(_) {
            h = _, e.name || e.displayName || (Object.defineProperty(e, "name", { value: _ }), e.displayName = _);
          }
        }), a;
      }, o.isValidElement = K, o.lazy = function(e) {
        return {
          $$typeof: Te,
          _payload: { _status: -1, _result: e },
          _init: ee
        };
      }, o.memo = function(e, a) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), a = {
          $$typeof: J,
          type: e,
          compare: a === void 0 ? null : a
        };
        var h;
        return Object.defineProperty(a, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return h;
          },
          set: function(_) {
            h = _, e.name || e.displayName || (Object.defineProperty(e, "name", { value: _ }), e.displayName = _);
          }
        }), a;
      }, o.startTransition = function(e) {
        var a = $.T, h = {};
        $.T = h, h._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var _ = e(), S = $.S;
          S !== null && S(h, _), typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(oe, $e);
        } catch (F) {
          $e(F);
        } finally {
          a === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), $.T = a;
        }
      }, o.unstable_useCacheRefresh = function() {
        return w().useCacheRefresh();
      }, o.use = function(e) {
        return w().use(e);
      }, o.useActionState = function(e, a, h) {
        return w().useActionState(
          e,
          a,
          h
        );
      }, o.useCallback = function(e, a) {
        return w().useCallback(e, a);
      }, o.useContext = function(e) {
        var a = w();
        return e.$$typeof === y && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), a.useContext(e);
      }, o.useDebugValue = function(e, a) {
        return w().useDebugValue(e, a);
      }, o.useDeferredValue = function(e, a) {
        return w().useDeferredValue(e, a);
      }, o.useEffect = function(e, a, h) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var _ = w();
        if (typeof h == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return _.useEffect(e, a);
      }, o.useId = function() {
        return w().useId();
      }, o.useImperativeHandle = function(e, a, h) {
        return w().useImperativeHandle(e, a, h);
      }, o.useInsertionEffect = function(e, a) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), w().useInsertionEffect(e, a);
      }, o.useLayoutEffect = function(e, a) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), w().useLayoutEffect(e, a);
      }, o.useMemo = function(e, a) {
        return w().useMemo(e, a);
      }, o.useOptimistic = function(e, a) {
        return w().useOptimistic(e, a);
      }, o.useReducer = function(e, a, h) {
        return w().useReducer(e, a, h);
      }, o.useRef = function(e) {
        return w().useRef(e);
      }, o.useState = function(e) {
        return w().useState(e);
      }, o.useSyncExternalStore = function(e, a, h) {
        return w().useSyncExternalStore(
          e,
          a,
          h
        );
      }, o.useTransition = function() {
        return w().useTransition();
      }, o.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(dt, dt.exports)), dt.exports;
}
var En;
function Mn() {
  return En || (En = 1, process.env.NODE_ENV === "production" ? Rt.exports = dr() : Rt.exports = mr()), Rt.exports;
}
var Ve = {}, It, gn;
function hr() {
  if (gn) return It;
  gn = 1;
  var i = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, o = /\n/g, d = /^\s*/, c = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, v = /^:\s*/, T = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, k = /^[;\s]*/, E = /^\s+|\s+$/g, s = `
`, u = "/", g = "*", R = "", I = "comment", Z = "declaration";
  It = function(M, C) {
    if (typeof M != "string")
      throw new TypeError("First argument must be a string");
    if (!M) return [];
    C = C || {};
    var U = 1, L = 1;
    function K(z) {
      var N = z.match(o);
      N && (U += N.length);
      var te = z.lastIndexOf(s);
      L = ~te ? z.length - te : L + z.length;
    }
    function V() {
      var z = { line: U, column: L };
      return function(N) {
        return N.position = new t(z), P(), N;
      };
    }
    function t(z) {
      this.start = z, this.end = { line: U, column: L }, this.source = C.source;
    }
    t.prototype.content = M;
    function l(z) {
      var N = new Error(
        C.source + ":" + U + ":" + L + ": " + z
      );
      if (N.reason = z, N.filename = C.source, N.line = U, N.column = L, N.source = M, !C.silent) throw N;
    }
    function p(z) {
      var N = z.exec(M);
      if (N) {
        var te = N[0];
        return K(te), M = M.slice(te.length), N;
      }
    }
    function P() {
      p(d);
    }
    function j(z) {
      var N;
      for (z = z || []; N = ee(); )
        N !== !1 && z.push(N);
      return z;
    }
    function ee() {
      var z = V();
      if (!(u != M.charAt(0) || g != M.charAt(1))) {
        for (var N = 2; R != M.charAt(N) && (g != M.charAt(N) || u != M.charAt(N + 1)); )
          ++N;
        if (N += 2, R === M.charAt(N - 1))
          return l("End of comment missing");
        var te = M.slice(2, N - 2);
        return L += 2, K(te), M = M.slice(N), L += 2, z({
          type: I,
          comment: te
        });
      }
    }
    function w() {
      var z = V(), N = p(c);
      if (N) {
        if (ee(), !p(v)) return l("property missing ':'");
        var te = p(T), he = z({
          type: Z,
          property: X(N[0].replace(i, R)),
          value: te ? X(te[0].replace(i, R)) : R
        });
        return p(k), he;
      }
    }
    function oe() {
      var z = [];
      j(z);
      for (var N; N = w(); )
        N !== !1 && (z.push(N), j(z));
      return z;
    }
    return P(), oe();
  };
  function X(M) {
    return M ? M.replace(E, R) : R;
  }
  return It;
}
var _n;
function Er() {
  if (_n) return Ve;
  _n = 1;
  var i = Ve && Ve.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(Ve, "__esModule", { value: !0 }), Ve.default = d;
  var o = i(hr());
  function d(c, v) {
    var T = null;
    if (!c || typeof c != "string")
      return T;
    var k = (0, o.default)(c), E = typeof v == "function";
    return k.forEach(function(s) {
      if (s.type === "declaration") {
        var u = s.property, g = s.value;
        E ? v(u, g, s) : g && (T = T || {}, T[u] = g);
      }
    }), T;
  }
  return Ve;
}
var ft = {}, vn;
function gr() {
  if (vn) return ft;
  vn = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.camelCase = void 0;
  var i = /^--[a-zA-Z0-9_-]+$/, o = /-([a-z])/g, d = /^[^-]+$/, c = /^-(webkit|moz|ms|o|khtml)-/, v = /^-(ms)-/, T = function(u) {
    return !u || d.test(u) || i.test(u);
  }, k = function(u, g) {
    return g.toUpperCase();
  }, E = function(u, g) {
    return "".concat(g, "-");
  }, s = function(u, g) {
    return g === void 0 && (g = {}), T(u) ? u : (u = u.toLowerCase(), g.reactCompat ? u = u.replace(v, E) : u = u.replace(c, E), u.replace(o, k));
  };
  return ft.camelCase = s, ft;
}
var pt, Tn;
function _r() {
  if (Tn) return pt;
  Tn = 1;
  var i = pt && pt.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  }, o = i(Er()), d = gr();
  function c(v, T) {
    var k = {};
    return !v || typeof v != "string" || (0, o.default)(v, function(E, s) {
      E && s && (k[(0, d.camelCase)(E, T)] = s);
    }), k;
  }
  return c.default = c, pt = c, pt;
}
var yn;
function xn() {
  return yn || (yn = 1, function(i) {
    var o = ct && ct.__importDefault || function(g) {
      return g && g.__esModule ? g : { default: g };
    };
    Object.defineProperty(i, "__esModule", { value: !0 }), i.returnFirstArg = i.canTextBeChildOfNode = i.ELEMENTS_WITH_NO_TEXT_CHILDREN = i.PRESERVE_CUSTOM_ATTRIBUTES = void 0, i.isCustomComponent = T, i.setStyleProp = E;
    var d = Mn(), c = o(_r()), v = /* @__PURE__ */ new Set([
      "annotation-xml",
      "color-profile",
      "font-face",
      "font-face-src",
      "font-face-uri",
      "font-face-format",
      "font-face-name",
      "missing-glyph"
    ]);
    function T(g, R) {
      return g.includes("-") ? !v.has(g) : !!(R && typeof R.is == "string");
    }
    var k = {
      reactCompat: !0
    };
    function E(g, R) {
      if (typeof g == "string") {
        if (!g.trim()) {
          R.style = {};
          return;
        }
        try {
          R.style = (0, c.default)(g, k);
        } catch {
          R.style = {};
        }
      }
    }
    i.PRESERVE_CUSTOM_ATTRIBUTES = Number(d.version.split(".")[0]) >= 16, i.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
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
    var s = function(g) {
      return !i.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(g.name);
    };
    i.canTextBeChildOfNode = s;
    var u = function(g) {
      return g;
    };
    i.returnFirstArg = u;
  }(ct)), ct;
}
var Rn;
function Un() {
  if (Rn) return yt;
  Rn = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.default = T;
  var i = pr(), o = xn(), d = ["checked", "value"], c = ["input", "select", "textarea"], v = {
    reset: !0,
    submit: !0
  };
  function T(E, s) {
    E === void 0 && (E = {});
    var u = {}, g = !!(E.type && v[E.type]);
    for (var R in E) {
      var I = E[R];
      if ((0, i.isCustomAttribute)(R)) {
        u[R] = I;
        continue;
      }
      var Z = R.toLowerCase(), X = k(Z);
      if (X) {
        var M = (0, i.getPropertyInfo)(X);
        switch (d.includes(X) && c.includes(s) && !g && (X = k("default" + Z)), u[X] = I, M && M.type) {
          case i.BOOLEAN:
            u[X] = !0;
            break;
          case i.OVERLOADED_BOOLEAN:
            I === "" && (u[X] = !0);
            break;
        }
        continue;
      }
      o.PRESERVE_CUSTOM_ATTRIBUTES && (u[R] = I);
    }
    return (0, o.setStyleProp)(E.style, u), u;
  }
  function k(E) {
    return i.possibleStandardNames[E];
  }
  return yt;
}
var Ke = {}, An;
function vr() {
  if (An) return Ke;
  An = 1;
  var i = Ke && Ke.__importDefault || function(E) {
    return E && E.__esModule ? E : { default: E };
  };
  Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.default = T;
  var o = Mn(), d = i(Un()), c = xn(), v = {
    cloneElement: o.cloneElement,
    createElement: o.createElement,
    isValidElement: o.isValidElement
  };
  function T(E, s) {
    s === void 0 && (s = {});
    for (var u = [], g = typeof s.replace == "function", R = s.transform || c.returnFirstArg, I = s.library || v, Z = I.cloneElement, X = I.createElement, M = I.isValidElement, C = E.length, U = 0; U < C; U++) {
      var L = E[U];
      if (g) {
        var K = s.replace(L, U);
        if (M(K)) {
          C > 1 && (K = Z(K, {
            key: K.key || U
          })), u.push(R(K, L, U));
          continue;
        }
      }
      if (L.type === "text") {
        var V = !L.data.trim().length;
        if (V && L.parent && !(0, c.canTextBeChildOfNode)(L.parent) || s.trim && V)
          continue;
        u.push(R(L.data, L, U));
        continue;
      }
      var t = L, l = {};
      k(t) ? ((0, c.setStyleProp)(t.attribs.style, t.attribs), l = t.attribs) : t.attribs && (l = (0, d.default)(t.attribs, t.name));
      var p = void 0;
      switch (L.type) {
        case "script":
        case "style":
          L.children[0] && (l.dangerouslySetInnerHTML = {
            __html: L.children[0].data
          });
          break;
        case "tag":
          L.name === "textarea" && L.children[0] ? l.defaultValue = L.children[0].data : L.children && L.children.length && (p = T(L.children, s));
          break;
        // skip all other cases (e.g., comment)
        default:
          continue;
      }
      C > 1 && (l.key = U), u.push(R(X(L.name, l, p), L, U));
    }
    return u.length === 1 ? u[0] : u;
  }
  function k(E) {
    return c.PRESERVE_CUSTOM_ATTRIBUTES && E.type === "tag" && (0, c.isCustomComponent)(E.name, E.attribs);
  }
  return Ke;
}
var Sn;
function Tr() {
  return Sn || (Sn = 1, function(i) {
    var o = ut && ut.__importDefault || function(s) {
      return s && s.__esModule ? s : { default: s };
    };
    Object.defineProperty(i, "__esModule", { value: !0 }), i.htmlToDOM = i.domToReact = i.attributesToProps = i.Text = i.ProcessingInstruction = i.Element = i.Comment = void 0, i.default = E;
    var d = o(cr());
    i.htmlToDOM = d.default;
    var c = o(Un());
    i.attributesToProps = c.default;
    var v = o(vr());
    i.domToReact = v.default;
    var T = /* @__PURE__ */ In();
    Object.defineProperty(i, "Comment", { enumerable: !0, get: function() {
      return T.Comment;
    } }), Object.defineProperty(i, "Element", { enumerable: !0, get: function() {
      return T.Element;
    } }), Object.defineProperty(i, "ProcessingInstruction", { enumerable: !0, get: function() {
      return T.ProcessingInstruction;
    } }), Object.defineProperty(i, "Text", { enumerable: !0, get: function() {
      return T.Text;
    } });
    var k = { lowerCaseAttributeNames: !1 };
    function E(s, u) {
      if (typeof s != "string")
        throw new TypeError("First argument must be a string");
      return s ? (0, v.default)((0, d.default)(s, (u == null ? void 0 : u.htmlparser2) || k), u) : [];
    }
  }(ut)), ut;
}
var yr = Tr();
const bn = /* @__PURE__ */ sr(yr), On = bn.default || bn, Rr = (i) => {
  if (i) {
    const o = i.content, d = [...o.querySelectorAll("[slot]")], c = /* @__PURE__ */ new Map();
    for (const T of d) {
      const k = nn.sanitize(T), E = T.getAttribute("slot");
      k && E && c.set(E, On(k));
    }
    const v = nn.sanitize(o);
    return c.set("allSlots", On(v)), Object.fromEntries(c);
  }
  return { allSlots: "" };
};
export {
  Rr as getSlotsForReact
};
