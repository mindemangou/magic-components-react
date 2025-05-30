import { useState as u, useEffect as d } from "react";
const m = (n) => {
  const [o, c] = u([]);
  return d(() => {
    const t = document.querySelector(n), a = (e) => {
      const s = e, { bag: r } = s.detail;
      c((i) => [...i, r]);
    };
    return t == null || t.addEventListener("incoming_data", a), () => {
      t == null || t.removeEventListener("incoming_data", a);
    };
  }, []), o;
};
export {
  m as useDataBag
};
