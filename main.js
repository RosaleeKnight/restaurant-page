(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t);const c=document.createElement("span");return c.textContent=e,n.appendChild(c),n.classList.add("tab"),n}const e=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="";const e=function(){const t=document.createElement("section");t.classList.add("section");const e=document.createElement("h2");e.classList.add("section-title"),e.textContent="About",t.appendChild(e);const n=document.createElement("p");return n.classList.add("section-description"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",t.appendChild(n),t}();!function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("home").classList.add("active")}(),t.appendChild(e)};function n(t,e,n,c){const o=document.createElement("div");o.classList.add("food");const d=document.createElement("img");d.setAttribute("src",t),d.setAttribute("alt",c);const s=document.createElement("div");s.classList.add("description");const a=document.createElement("h3");a.textContent=e;const i=document.createElement("h2");return i.textContent=n,s.appendChild(a),s.appendChild(i),o.appendChild(d),o.appendChild(s),o}const c=function(){const t=document.getElementById("tab-content");t.classList.add("grid-lay"),t.classList.remove("flex-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("menu").classList.add("active")}(),[n("../dist/imgs/icecream.jpg","Ice Cream","$10.00","Ice cream"),n("../dist/imgs/coffee.jpg","Coffee","$4.00","Coffee"),n("../dist/imgs/cookies.jpg","Cookies","$7.00","Cookies"),n("../dist/imgs/tarts.jpg","Tarts","$4.00","Tarts")].forEach((e=>{t.appendChild(e)}))};function o(t,e){const n=document.createElement("section");n.classList.add("section");const c=document.createElement("h2");return c.classList.add("section-title"),c.textContent=t,n.appendChild(c),e.forEach((t=>{const e=document.createElement("p");e.classList.add("section-description"),e.textContent=t,n.appendChild(e)})),n}const d=function(){const t=document.getElementById("tab-content");t.classList.add("flex-lay"),t.classList.remove("grid-lay"),t.textContent="",function(t){const e=document.querySelector(".tab.active");e&&e.classList.remove("active"),document.getElementById("contact").classList.add("active")}();const e=o("Phone",["P 111-111-1111","F 222-222-2222"]),n=o("Address",["1 Fake Address Lane"]);t.appendChild(e),t.appendChild(n)};(function(){const e=document.getElementById("content"),n=function(t,e){const n=document.createElement("header");n.setAttribute("id","header");const c=document.createElement("h1");return c.textContent="Restaurant Page",n.appendChild(c),n}();e.appendChild(n);const c=function(e){const n=document.createElement("nav");n.setAttribute("id","nav");const c=t("home","home"),o=t("menu","menu"),d=t("contact","contact");return n.appendChild(c),n.appendChild(o),n.appendChild(d),n}();e.appendChild(c);const o=function(t){const e=document.createElement("main");return e.setAttribute("id","tab-content"),e}();e.appendChild(o);const d=function(t,e){const n=document.createElement("footer");n.setAttribute("id","footer");const c=document.createElement("h3");return c.textContent="Order Now! DoorDash, Skip the Dishes and Uber Eats",n.appendChild(c),n}();e.appendChild(d)})(),e(),function(){const t=document.getElementById("home"),n=document.getElementById("menu"),o=document.getElementById("contact");t.addEventListener("click",e),n.addEventListener("click",c),o.addEventListener("click",d)}()})();