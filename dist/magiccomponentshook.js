import { useContext as p, useState as f, useCallback as g } from "react";
import { MagicContext as h } from "./magiccomponentsreact.js";
new IntersectionObserver((e, t) => {
  var n;
  for (const r of e)
    r.isIntersecting && ((n = r == null ? void 0 : r.target) == null || n.setAttribute("data-render", "true"), t.unobserve(r.target));
});
const b = (e, t = "") => {
  const n = location.origin, r = location.pathname, s = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let c = `?${new URLSearchParams({ ...s, ...e }).toString()}`, a = location.hash;
  return t.length > 0 && (a = `#${t}`), `${n}${r}${c}${a}`;
}, w = (e) => {
  var t;
  const n = { ...e.dataset }, r = Object.entries(n).map((a) => {
    const [o, i] = a;
    try {
      return i ? [o, JSON.parse(i)] : [o, i];
    } catch {
      return [o, i];
    }
  }), s = new Map(r), c = e.querySelector("template");
  if (c) {
    const a = (t = c == null ? void 0 : c.content.textContent) == null ? void 0 : t.trim(), o = a ? JSON.parse(a) : {};
    s.set("data", o);
  }
  return s.set("tagName", e.tagName.toLowerCase()), Object.fromEntries(s);
}, N = () => {
  const e = p(h), [t, n] = f({ contextData: e, processing: !1, error: !1 }), r = e.key, s = g(async (a = {}, o = "") => {
    const { ajax: i } = (await import("htmx.org")).default, l = e.tagName;
    if (r === void 0) {
      console.warn(`You must add the data-key attribute on each ${l}`);
      return;
    }
    n((u) => ({ ...u, processing: !0 }));
    const d = document.createElement("template");
    d.id = l, document.body.appendChild(d);
    const y = b(a, o), v = `${l}[data-key='${e.key}']`;
    return i("get", y, { target: `#${l}`, select: v, swap: "innerHTML" }).then(() => {
      const u = d.firstElementChild, m = w(u);
      n(() => ({ contextData: m, processing: !1, error: !1 }));
    }).then(() => {
      d.remove();
    }).catch((u) => {
      console.error(u), n((m) => ({ ...m, processing: !1, error: !0 }));
    });
  }, []), c = g(async (a, o) => {
    const { trigger: i } = (await import("htmx.org")).default, l = document.querySelector(a);
    l && i(l, "incoming_data", { tagName: a, data: o });
  }, []);
  return { ...t.contextData, processing: t.processing, error: t.error, refresh: s, send: c };
}, x = () => {
  const e = p(h), t = document.querySelector(e.tagName), [n, r] = f([]);
  return t == null || t.addEventListener("incoming_data", (s) => {
    const c = s, { elt: a, ...o } = c.detail;
    r(() => [...n, o]);
  }), n;
};
export {
  x as useDataBag,
  N as useMagicData
};
