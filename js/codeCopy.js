window.addEventListener("DOMContentLoaded",e);let t=null;function e(){const t=document.querySelectorAll("figure"),e=document.createElement("i");e.classList="iconfont icon-copy";const o=document.createElement("span");o.classList="pin-copy",o.setAttribute("data-text","copy"),o.appendChild(e),t.length&&t.forEach((t=>{t.addEventListener("mouseenter",(()=>{t.setAttribute("id","copy-target");const e=t.querySelector("table tbody tr .code");t.setAttribute("data-clipboard-text",e&&e.innerText||""),t.appendChild(o),o.addEventListener("click",n)})),t.addEventListener("mouseleave",(()=>{t.setAttribute("id",""),t.setAttribute("data-clipboard-text",""),o.removeEventListener("click",n),o.setAttribute("data-text","copy")}))}))}function n(){t||(t=new ClipboardJS("#copy-target"));const e=document.querySelector(".pin-copy");t.on("success",(function(n){console.warn("clipboard success",n),t.destroy(),t=null,e&&e.setAttribute("data-text","copied")})),t.on("error",(function(n){console.warn("clipboard error",n),t.destroy(),t=null,e&&e.setAttribute("data-text","fail to copy")}))}