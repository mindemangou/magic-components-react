import { useContext as p, useState as f, useCallback as d } from "react";
import g from "htmx.org";
import { MagicContext as h } from "./magiccomponentsreact.js";
new IntersectionObserver((e, t) => {
  var n;
  console.log("first");
  for (const a of e)
    a.isIntersecting && ((n = a == null ? void 0 : a.target) == null || n.setAttribute("data-render", "true"), t.unobserve(a.target));
});
const S = (e, t = "") => {
  const n = location.origin, a = location.pathname, c = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let i = `?${new URLSearchParams({ ...c, ...e }).toString()}`, r = location.hash;
  return t.length > 0 && (r = `#${t}`), `${n}${a}${i}${r}`;
}, $ = (e) => {
  var t;
  const n = { ...e.dataset }, a = Object.entries(n).map((r) => {
    const [s, o] = r;
    try {
      return o ? [s, JSON.parse(o)] : [s, o];
    } catch {
      return [s, o];
    }
  }), c = new Map(a), i = e.querySelector("template");
  if (i) {
    const r = (t = i == null ? void 0 : i.content.textContent) == null ? void 0 : t.trim(), s = r ? JSON.parse(r) : {};
    c.set("data", s);
  }
  return c.set("tagName", e.tagName.toLowerCase()), Object.fromEntries(c);
}, x = () => {
  const e = p(h), [t, n] = f({ contextData: e, processing: !1, error: !1 }), a = e.key, c = d((r = {}, s = "") => {
    const o = e.tagName;
    if (a === void 0) {
      console.warn(`You must add the data-key attribute on each ${o}`);
      return;
    }
    n((l) => ({ ...l, processing: !0 }));
    const u = document.createElement("template");
    u.id = o, document.body.appendChild(u);
    const v = S(r, s), y = `${o}[data-key='${e.key}']`;
    return g.ajax("get", v, { target: `#${o}`, select: y, swap: "innerHTML" }).then(() => {
      const l = u.firstElementChild, m = $(l);
      n(() => ({ contextData: m, processing: !1, error: !1 }));
    }).then(() => {
      u.remove();
    }).catch((l) => {
      console.error(l), n((m) => ({ ...m, processing: !1, error: !0 }));
    });
  }, []), i = d((r, s) => {
    const o = document.querySelector(r);
    o && g.trigger(o, "incoming_data", { tagName: r, data: s });
  }, []);
  return { ...t.contextData, processing: t.processing, error: t.error, refresh: c, send: i };
}, C = () => {
  const e = p(h), t = document.querySelector(e.tagName), [n, a] = f([]);
  return t == null || t.addEventListener("incoming_data", (c) => {
    const i = c, { elt: r, ...s } = i.detail;
    a(() => [...n, s]);
  }), n;
};
export {
  C as useDataBag,
  x as useMagicData
};
