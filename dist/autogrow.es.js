const d = ["font", "fontFamily", "fontKerning", "fontSize", "fontStretch", "fontStyle", "fontVariant", "fontVariantLigatures", "fontVariantCaps", "fontVariantNumeric", "fontVariantEastAsian", "fontWeight", "lineHeight", "letterSpacing", "padding", "margin", "textAlign", "textAlignLast", "textDecoration", "textDecorationLine", "textDecorationStyle", "textDecorationColor", "textDecorationSkipInk", "textDecorationPosition", "textIndent", "textRendering", "textShadow", "textSizeAdjust", "textOverflow", "textTransform", "width", "wordBreak", "wordSpacing", "wordWrap"];
function l(t) {
  const e = document.createElement("textarea");
  return e.textContent = t, e.innerHTML;
}
function c(t) {
  return typeof t == "number" ? t : !t || !t.replace ? 0 : parseInt(t.replace(/[^\d.]+/g, "")) || 0;
}
function a(t, e, n, o) {
  t.innerHTML = l(e.value).replace(/(?:\r\n|\r|\n)/g, "<br />") + "&nbsp;";
  let i = Math.max(n, u(t));
  t.innerHTML.match(/(<br\s?\/?\>)+/) && (i += c(s(e, "lineHeight"))), e.style.height = (!o || i < o ? i : o) + "px";
}
function u(t) {
  return c(s(t, "height"));
}
function s(t, e) {
  return window.getComputedStyle(t)[e];
}
function p(t, e) {
  const n = document.createElement("div"), o = window.getComputedStyle(t);
  return n.style.position = "absolute", n.style.zIndex = -1, n.style.visibility = "hidden", t.parentNode.insertBefore(n, t.nextSibling), d.forEach((i) => n.style[i] = o[i]), n;
}
function g(t, e, n) {
  const o = u(t), i = p(t), r = e.value !== !0 ? e.value : 0;
  t.addEventListener("input", (f) => {
    a(i, f.target, o, r);
  }), a(i, t, o, r);
}
const x = {
  mounted(t, e, n) {
    e.value !== !1 && (g(t, e), t.resize = function() {
      n.context.$nextTick(() => {
        t.dispatchEvent(new Event("input"));
      });
    });
  }
};
export {
  x as Autogrow
};
