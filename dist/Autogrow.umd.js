(function(r,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(r=typeof globalThis<"u"?globalThis:r||self,a(r.Autogrow={}))})(this,function(r){"use strict";const a=["font","fontFamily","fontKerning","fontSize","fontStretch","fontStyle","fontVariant","fontVariantLigatures","fontVariantCaps","fontVariantNumeric","fontVariantEastAsian","fontWeight","lineHeight","letterSpacing","padding","margin","textAlign","textAlignLast","textDecoration","textDecorationLine","textDecorationStyle","textDecorationColor","textDecorationSkipInk","textDecorationPosition","textIndent","textRendering","textShadow","textSizeAdjust","textOverflow","textTransform","width","wordBreak","wordSpacing","wordWrap"];function l(t){const e=document.createElement("textarea");return e.textContent=t,e.innerHTML}function u(t){return typeof t=="number"?t:!t||!t.replace?0:parseInt(t.replace(/[^\d.]+/g,""))||0}function c(t,e,n,o){t.innerHTML=l(e.value).replace(/(?:\r\n|\r|\n)/g,"<br />")+"&nbsp;";let i=Math.max(n,s(t));t.innerHTML.match(/(<br\s?\/?\>)+/)&&(i+=u(f(e,"lineHeight"))),e.style.height=(!o||i<o?i:o)+"px"}function s(t){return u(f(t,"height"))}function f(t,e){return window.getComputedStyle(t)[e]}function p(t,e){const n=document.createElement("div"),o=window.getComputedStyle(t);return n.style.position="absolute",n.style.zIndex="-1",n.style.visibility="hidden",t.parentNode.insertBefore(n,t.nextSibling),a.forEach(i=>n.style[i]=o[i]),n}function g(t,e,n){const o=s(t),i=p(t),d=e.value!==!0?e.value:0;t.addEventListener("input",h=>{c(i,h.target,o,d)}),c(i,t,o,d)}const x={mounted(t,e,n){e.value!==!1&&(g(t,e),t.resize=function(){n.context.$nextTick(()=>{t.dispatchEvent(new Event("input"))})})}};r.Autogrow=x,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
//# sourceMappingURL=autogrow.umd.js.map
