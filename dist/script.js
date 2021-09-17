!function(t){var e={};function o(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);const n=function(t){return new n.prototype.init(t)};n.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},n.prototype.init.prototype=n.prototype,window.$=n;var s=n;s.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},s.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},s.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&((this[t].style.display="none")?this[t].style.display="":this[t].style.display="none");return this},s.prototype.addClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.add(...t);return this},s.prototype.removeClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.remove(...t);return this},s.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.toggle(t);return this},s.prototype.on=function(t,e){if(!t||!e)return this;for(let o=0;o<this.length;o++)return this[o].addEventListener(t,e),this},s.prototype.off=function(t,e){if(!t||!e)return this;for(let o=0;o<this.length;o++)return this[o].removeEventListener(t,e),this},s.prototype.click=function(t){for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},s.prototype.html=function(t){for(let e=0;e<this.length;e++){if(!t)return this[e].innerHTML;this[e].innerHTML=t}return this},s.prototype.eq=function(t){const e=this[t],o=Object.keys(this).length;for(let t=0;t<o;t++)delete this[t];return this[0]=e,this.length=1,this},s.prototype.index=function(){const t=this[0].parentNode;return Array.from(t.children).findIndex(t=>t==this[0])},s.prototype.find=function(t){let e=0,o=0;const n=Object.assign({},this);for(let s=0;s<n.length;s++){const i=n[s].querySelectorAll(t);if(0!=i.length){for(let t=0;t<i.length;t++)this[o]=i[t],o++;e+=i.length}}this.length=e;const s=Object.keys(this).length;for(;e<s;e++)delete this[e];return this},s.prototype.closest=function(t){let e=0;for(let o=0;o<this.length;o++)this[o]=this[o].closest(t),e++;0==e&&console.log("error");const o=Object.keys(this).length;for(;e<o;e++)delete this[e];return this},s.prototype.siblings=function(){let t=0,e=0;const o=Object.assign({},this);for(let n=0;n<o.length;n++){const s=o[n].parentNode.children;for(let t=0;t<s.length;t++)o[n]!==s[t]&&(this[e]=s[t],e++);t+=s.length-1}this.length=t;const n=Object.keys(this).length;for(;t<n;t++)delete this[t];return this},s.prototype.animateOverTime=function(t,e,o){let n;return function s(i){n||(n=i);let r=i-n,l=Math.min(r/t,1);e(l),r<t?requestAnimationFrame(s):"function"==typeof o&&o()}},s.prototype.fadeIn=function(t,e,o){for(let n=0;n<this.length;n++){this[n].style.display=e||"block";const s=t=>{this[n].style.opacity=t},i=this.animateOverTime(t,s,o);requestAnimationFrame(i)}return this},s.prototype.fadeOut=function(t,e){for(let o=0;o<this.length;o++){const n=t=>{this[o].style.opacity=1-t,1===t&&(this[o].style.display="none")},s=this.animateOverTime(t,n,e);requestAnimationFrame(s)}return this},s.prototype.fadeToggle=function(t,e,o){for(let n=0;n<this.length;n++)if(window.getComputedStyle("none"===this[n].display)){this[n].style.display=e||"block";const s=t=>{this[n].style.opacity=t},i=this.animateOverTime(t,s,o);requestAnimationFrame(i)}return this},s.prototype.dropdown=function(){for(let t=0;t<this.length;t++){const e=this[t].getAttribute("id");s(this[t]).click(()=>{s(`[data-dropdown-id='${e}']`).toggleClass("m-opened")})}},s.prototype.dropdown_attribute=function(){for(let t=0;t<this.length;t++){const e=this[t].querySelector("[data-dropdown-control]");this[t].querySelector("[data-dropdown-menu]");s(e).click(()=>{s(this[t]).toggleClass("m-opened")})}},s.prototype.modal=function(t){for(let e=0;e<this.length;e++){const o=this[e].getAttribute("data-target");s(this[e]).click(t=>{t.preventDefault(),s(`[data-modal-id='${o}']`).fadeIn(500),document.body.style.overflow="hidden"});document.querySelectorAll(`[data-modal-id='${o}'] [data-modal-close]`).forEach(e=>{s(e).click(()=>{s(`[data-modal-id='${o}']`).fadeOut(500),document.body.style.overflow="",t&&setTimeout(()=>{document.querySelector(`[data-modal-id='${o}']`).remove()},500)})}),s(`[data-modal-id='${o}']`).click(e=>{e.target.classList.contains("l-popup")&&(s(`[data-modal-id='${o}']`).fadeOut(500),document.body.style.overflow="",t&&setTimeout(()=>{document.querySelector(`[data-modal-id='${o}']`).remove()},500))})}},s.prototype.createModal=function({text:t,btns:e}={}){for(let o=0;o<this.length;o++){let n=document.createElement("div");n.classList.add("l-popup"),console.log(this[o].getAttribute("data-target")),n.setAttribute("data-modal-id",this[o].getAttribute("data-target"));const i=[];for(let t=0;t<e.count;t++){let o=document.createElement("button");o.textContent=e.settings[t][0],o.classList.add("g-button",...e.settings[t][1]),e.settings[t][2]&&o.setAttribute("data-modal-close","true"),e.settings[t][3]&&(e.settings[t][3],1)&&o.addEventListener("click",e.settings[t][3]),i.push(o)}n.innerHTML=`\n            <div class="l-popup-container">\n                <div class="l-popup-content">\n                    <h3>${t.title}</h3>\n                    <p>${t.content}</p>  \n                </div>\n                <div class="l-popup-footer">\n                \n                </div>\n            </div>\n        `,n.querySelector(".l-popup-footer").append(...i),document.body.appendChild(n),s(this[o]).modal(!0),s(n).fadeIn(500)}},s.prototype.tab=function(){for(let t=0;t<this.length;t++)s(this[t]).on("click",()=>{s(this[t]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closest(".tab").find(".tab-content").removeClass("tab-content--active").eq(s(this[t]).index()).addClass("tab-content--active")})},s("[data-tabpanel] .tab-item").tab(),s.prototype.accordeon=function(t="according-head--active",e="according-content-active"){for(let o=0;o<this.length;o++)s(this[o]).on("click",()=>{s(this[o]).toggleClass(t),s(this[o].nextElementSibling).toggleClass(e)})},s(".accordion-head").accordeon(),s.prototype.carousel=function(){for(let t=0;t<this.length;t++){const e=window.getComputedStyle(this[t].querySelector(".g-carousel-wrap")).width,o=this[t].querySelectorAll(".g-carousel-item"),n=this[t].querySelector(".g-carousel-list"),i=this[t].querySelectorAll(".g-carousel-indicators_item");n.style.width=100*o.length+"%",n.style.transition="all ease 0.3s",o.forEach(t=>{t.style.width=e});let r=0,l=0;for(let t=0;t<o.length;t++)i[t].setAttribute("data-slide-n",""+t);s(this[t].querySelector('[data-slide="next"]')).click(t=>{t.preventDefault(),r==+e.replace(/\D/g,"")*(o.length-1)?(r=0,l=0):(r+=+e.replace(/\D/g,""),l++),console.log(l),n.style.transform=`translateX(-${r}px)`,i.forEach(t=>t.classList.remove("m-active")),i[l].classList.add("m-active")}),s(this[t].querySelector('[data-slide="prev"]')).click(t=>{t.preventDefault(),0==r?(r=+e.replace(/\D/g,"")*(o.length-1),l=0):(r-=+e.replace(/\D/g,""),l++),console.log(l),n.style.transform=`translateX(-${r}px)`,i.forEach(t=>t.classList.remove("m-active")),i[l].classList.add("m-active")});const a=this[t].getAttribute("id");s(`#${a} [data-slide-n]`).click(t=>{const o=t.target.getAttribute("data-slide-n");l=o,r=+e.replace(/\D/g,"")*o,n.style.transform=`translateX(-${r}px)`,i.forEach(t=>t.classList.remove("m-active")),i[l].classList.add("m-active")})}},s(".g-carousel").carousel(),s.prototype.get=async function(t,e="json"){let o=await fetch(t);if(!o.ok)throw new Error(`Could not fetch ${t}, status: ${o.status}`);switch(e){case"json":return await o.json();case"text":return await o.text();case"blob":return await o.blob()}},s.prototype.post=async function(t,e,o="text"){let n=await fetch(t,{method:"POST",body:e});switch(o){case"json":return await n.json();case"text":return await n.text();case"blob":return await n.blob()}if(!n.ok)throw new Error(`Could not fetch ${t}, status: ${n.status}`)};var i=s;i(".g-dropdown").dropdown_attribute(),i('[data-toggle="modal"]').modal(),i('[data-target="modal-3"]').click(()=>i('[data-target="modal-3"]').createModal({text:{title:"MOdal Title",content:"Some Body"},btns:{count:2,settings:[["close",["g-button","close-modal"],!0],["Save changes",["g-button","btn-send"],!1,()=>{alert("Data Saved")}]]}})),i().get("https://jsonplaceholder.typicode.com/todos/1").then(t=>console.log(t))}]);