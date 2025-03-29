import { useContext as g, useState as p, useCallback as u } from "react";
import { ajax as S, trigger as $ } from "htmx.org";
import { MagicContext as f } from "./magiccomponentsreact.js";
const x = (e, t) => {
  const a = location.href, s = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let o = `?${new URLSearchParams({ ...s, ...e }).toString()}`, n = location.hash;
  return t.length > 0 && (n = `#${t}`), `${a}${o}${n}`;
}, k = (e) => {
  var t;
  const a = { ...e.dataset }, s = Object.entries(a), o = new Map(s), n = e.querySelector("template");
  if (n) {
    const r = (t = n == null ? void 0 : n.content.textContent) == null ? void 0 : t.trim(), c = r ? JSON.parse(r) : {};
    o.set("data", c);
  }
  return o.set("tagName", e.tagName.toLowerCase()), Object.fromEntries(o);
}, E = () => {
  const e = g(f), [t, a] = p({ contextData: e, processing: !1, error: !1 }), s = e.key, o = u((r = {}, c = "") => {
    const i = e.tagName;
    if (s === void 0) {
      console.warn(`You must add the data-key attribute on each ${i}`);
      return;
    }
    a((l) => ({ ...l, processing: !0 }));
    const m = document.createElement("template");
    m.id = i, document.body.appendChild(m);
    const h = x(r, c), y = `${i}[data-key='${e.key}']`;
    S("GET", h, { target: `#${i}`, select: y, swap: "innerHTML" }).then(() => {
      const l = m.firstElementChild, d = k(l);
      a(() => ({ contextData: d, processing: !1, error: !1 }));
    }).then(() => {
      m.remove();
    }).catch((l) => {
      console.error(l), a((d) => ({ ...d, processing: !1, error: !0 }));
    });
  }, []), n = u((r, c) => {
    const i = document.querySelector(r);
    i && $(i, "incoming_data", { tagName: r, data: c });
  }, []);
  return { ...t.contextData, processing: t.processing, error: t.error, refresh: o, send: n };
}, N = () => {
  const e = g(f), t = document.querySelector(e.tagName), [a, s] = p([]);
  return t == null || t.addEventListener("incoming_data", (o) => {
    const n = o, { elt: r, ...c } = n.detail;
    s(() => [...a, c]);
  }), a;
};
export {
  N as useDataBag,
  E as useMagicData
};
