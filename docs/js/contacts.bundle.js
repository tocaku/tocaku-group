!function(){var e={699:function(){const e=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>=50?e.style.display="flex":e.style.display="none"}),{passive:!0}),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}!function(){"use strict";function e(e,t){const n=JSON.stringify(t);localStorage.setItem(e,n)}function t(){return{themeToggler:document.querySelector(".theme-toggler-wrap"),themeCircle:document.querySelector(".theme__circle"),sunRays:document.querySelectorAll(".circle__ray"),sunIcon:document.querySelector(".circle__sun"),moonIcon:document.querySelector(".circle__moon")}}const r={LIGHT:"light",DARK:"dark"};let o=function(e){const t=localStorage.getItem("theme");return JSON.parse(t)}()||r.LIGHT;function c(){const{themeToggler:e,themeCircle:n,sunRays:c,sunIcon:a,moonIcon:i}=t(),s=document.querySelector("body");o===r.DARK?(s.classList.add("active-dark-theme"),e.classList.add("theme-toggler-wrap--dark"),e.classList.remove("theme-toggler-wrap--light"),n.classList.add("theme__circle--dark"),n.classList.remove("theme__circle--light"),a.classList.add("circle__sun--hidden"),i.classList.remove("circle__moon--hidden"),c.forEach((e=>e.classList.add("circle__ray--hidden")))):(s.classList.remove("active-dark-theme"),e.classList.remove("theme-toggler-wrap--dark"),e.classList.add("theme-toggler-wrap--light"),n.classList.remove("theme__circle--dark"),n.classList.add("theme__circle--light"),a.classList.remove("circle__sun--hidden"),i.classList.add("circle__moon--hidden"),c.forEach((e=>e.classList.remove("circle__ray--hidden"))))}const a={home:["/comfort-group-cleaning/","/comfort-group-cleaning/index.html"],office:["/comfort-group-cleaning/office.html"],afterRepair:["/comfort-group-cleaning/after-repair.html"],calcOrder:["/comfort-group-cleaning/calc-order.html"],contacts:["/comfort-group-cleaning/contacts.html"],successOr404:["/comfort-group-cleaning/success-order.html","/comfort-group-cleaning/404.html"]},i={home:()=>{l([".nav__link",".nav--aside-menu .nav__link"]),s("index.html#order-cleaning-block")},office:()=>{l([".nav__list .nav__item:nth-child(2) .nav__link",".nav--aside-menu  .nav__list .nav__item:nth-child(2) .nav__link"]),s("office.html#office-calc-block"),d("calc(100% / 3)"),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.remove("isHidden"))),document.querySelector(".element--calculator-page").classList.add("isHidden")},afterRepair:()=>{!function(){const e=document.querySelector(".data-order .data-order__title");document.querySelector(".buildings").style.display="none",e.style.display="none"}(),document.querySelectorAll(".add-services-list__item:nth-child(n+3)").forEach((e=>e.classList.add("isHidden"))),s("after-repair.html#office-calc-block")},calcOrder:()=>{document.querySelector(".footer").classList.add("footer--calc-order"),d("calc(100% / 2)"),document.querySelectorAll(".block").forEach((e=>e.classList.add("block--white"))),document.querySelectorAll(".element--office-page").forEach((e=>e.classList.add("isHidden"))),document.querySelector(".element--calculator-page").classList.remove("isHidden")},contacts:()=>{document.querySelector(".connection").classList.remove("no-padding-top"),document.querySelector(".connection--second-block").classList.add("block-with-image"),u()},successOr404:()=>{u(),window.addEventListener("beforeunload",(function(){localStorage.removeItem("userOrderDataObj")}))}};function s(e){[...document.querySelectorAll(".dynamic-link")].forEach((t=>t.href=e))}function l(e){e.forEach((e=>{const t=document.querySelector(e);t&&t.classList.add("nav__link--current")}))}function u(){document.querySelector("main").classList.add("section--dark-background")}function d(e){document.querySelectorAll(".buildings__element").forEach((t=>t.style.flexBasis=e))}document.addEventListener("DOMContentLoaded",(function(){const n=window.location.pathname,s=document.querySelector("body"),{themeToggler:l}=t();l.addEventListener("click",(()=>{var t;t=s.classList.contains("active-dark-theme")?r.LIGHT:r.DARK,o=t,e("theme",t),c()})),c();const u=Object.keys(i).find((e=>a[e].includes(n)));u&&i[u]()}));var m=!1;if("undefined"!=typeof window){var y={get passive(){m=!0}};window.addEventListener("testPassive",null,y),window.removeEventListener("testPassive",null,y)}var f="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),g=[],p=!1,b=-1,v=void 0,q=void 0,h=void 0,_=function(e){return g.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},L=function(e){var t=e||window.event;return!!_(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},S=function(e,t){if(e){if(!g.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};g=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(g),[n]),f?window.requestAnimationFrame((function(){if(void 0===q){q={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=r-window.innerHeight;e&&t>=r&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===h){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);h=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}void 0===v&&(v=document.body.style.overflow,document.body.style.overflow="hidden")}(t),f&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(b=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-b;!_(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?L(e):e.stopPropagation())}(t,e)},p||(document.addEventListener("touchmove",L,m?{passive:!1}:void 0),p=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},w=function(e){e?(g=g.filter((function(t){return t.targetElement!==e})),f&&(e.ontouchstart=null,e.ontouchmove=null,p&&0===g.length&&(document.removeEventListener("touchmove",L,m?{passive:!1}:void 0),p=!1)),f?function(){if(void 0!==q){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=q.position,document.body.style.top=q.top,document.body.style.left=q.left,window.scrollTo(t,e),q=void 0}}():(void 0!==h&&(document.body.style.paddingRight=h,h=void 0),void 0!==v&&(document.body.style.overflow=v,v=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};(()=>{const e=document.querySelector(".aside-menu"),t=document.querySelector(".open-menu-btn"),n=document.querySelector(".close-menu-btn"),r=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),(n?w:S)(document.body)};t.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),w(document.body))}))})();const E=[{name:"Христофор Кацевич",experience:"10 років",memberID:"member-19",quote:"У царстві чистоти ми мрійники, які перетворюють звичайне на надзвичайне",category:"CEO"},{name:"Марина Миронова",experience:"8 років",memberID:"member-7",quote:"З кожним підмітанням і чищенням ми створюємо історію трансформації та оновлення",category:"CEO"},{name:"Барбара Маліновська",experience:"9 років",memberID:"member-22",quote:"Будуємо світ, де чистота не знає меж",category:"CEO"},{name:"Іван Стефанюк",memberID:"member-1",experience:"3 роки",quote:"Прибирання – це не просто робота, це спосіб зробити світ кращим",category:"windowCleaner"},{name:"Наталя Ковальська",memberID:"member-2",experience:"5 років",quote:"Чистий дім - щасливий дім",category:"windowCleaner"},{name:"Олена Новак",experience:"7 років",memberID:"member-3",quote:"У чистому просторі можна знайти спокій і ясність",category:"windowCleaner"},{name:"Катерина Войчик",experience:"2 роки",memberID:"member-4",quote:"Чистий дім допомагає активізувати продуктивні думки",category:"windowCleaner"},{name:"Роман Пятаковський",experience:"4 роки",memberID:"member-5",quote:"Чистота є найкращим відображенням добре організованого розуму",category:"windowCleaner"},{name:"Міхал Горбач",experience:"4 роки",memberID:"member-6",quote:"Чистота поруч із благочестям",category:"windowCleaner"},{name:"Джоана Охтирська",experience:"6 років",memberID:"member-9",quote:"Дбайливе прибирання створює затишну атмосферу",category:"dryCleaner"},{name:"Агнешка Лисенко",experience:"8 років",memberID:"member-24",quote:"Чисті будинки - щасливі серця",category:"dryCleaner"},{name:"Томаш Дубровський",memberID:"member-12",experience:"5 років",quote:"Чисте сьогодні для світлого завтра",category:"dryCleaner"},{name:"Анна Гопченко",experience:"6 років",memberID:"member-15",quote:"Блискучий простір викликає посмішку на кожному обличчі",category:"dryCleaner"},{name:"Адам Новицький",experience:"1 рік",memberID:"member-28",quote:"Подаруйте нове життя своїм улюбленим меблям",category:"dryCleaner"},{name:"Марк Куцевич",experience:"1 рік",memberID:"member-17",quote:"Чистота - це полотно для красивого життя",category:"dryCleaner"},{name:"Петро Зелінський",experience:"2 роки",memberID:"member-16",quote:"Бруд, сміття та безлад  не матимуть ні шансу",category:"universalCleaner"},{name:"Марк Зінчук",experience:"3 роки",memberID:"member-27",quote:"Прибирання — це процес перетворення хаосу на спокій",category:"universalCleaner"},{name:"Лукаш Камінський",experience:"4 роки",memberID:"member-18",quote:"Чистота – найкраща прикраса",category:"universalCleaner"},{name:"Ніколь Садович",experience:"7 років",memberID:"member-21",quote:"Чистота – головний закон здоров’я",category:"universalCleaner"},{name:"Борис Сизов",experience:"5 років",memberID:"member-20",quote:"Скажіть бруду 'Ні!'",category:"universalCleaner"},{name:"Сара Гнатович",experience:"4 роки",memberID:"member-14",quote:"Прибирання – це мистецтво збереження краси навколо",category:"universalCleaner"},{name:"Магдалена Садовська",experience:"6 років",memberID:"member-23",quote:"Прибирання — це не клопіт, це форма медитації",category:"universalCleaner"},{name:"Ніна Рудаська",experience:"6 років",memberID:"member-25",quote:"Безлад — ворог спокою, а прибирання — це боротьба",category:"universalCleaner"},{name:"Василиса Острозька",experience:"2 роки",memberID:"member-26",quote:"Прибирання — це акт любові до себе та тих, хто поруч",category:"universalCleaner"},{name:"Марія Пятровська",experience:"3 роки",memberID:"member-8",quote:"Клієнти — це серцебиття будь-якого бізнесу, а їхнє задоволення — наша життєва сила",category:"contactManager"},{name:"Моніка Нікольська",experience:"3 роки",memberID:"member-10",quote:"Клієнти — як пазли; кожен унікальний, і вирішення їхніх проблем — це виклик",category:"contactManager"},{name:"Кароліна Сидориш",experience:"3 роки",memberID:"member-11",quote:"Відгуки клієнтів — це компас, який веде нас до вдосконалення",category:"contactManager"},{name:"Ева Мажевська",experience:"3 роки",memberID:"member-13",quote:"Клієнти можуть забути, що ви сказали, але вони ніколи не забудуть, як ви викликали у них почуття",category:"contactManager"}];const k=document.querySelector(".team__btn-prev"),x=document.querySelector(".team__btn-next"),C=document.querySelector(".team__category-list"),A=document.querySelector(".team__members-name-list"),I=document.querySelector(".team__circular-slider"),D=document.querySelector(".member-info__title"),T=document.querySelector(".member-info__exp"),H=document.querySelector(".member-info__quote"),O={chosenCategory:"CEO",slideClasses:null,currentIndex:0,teamCategories:[],membersByCategory:[]};var M;function N(e){I.innerHTML="",A.innerHTML="",function(e){e===O.chosenCategory&&(k.addEventListener("click",n),x.addEventListener("click",r))}(e),function(e){O.chosenCategory=e,O.currentIndex=0,O.slideClasses=function(e,t){const n=t.filter((t=>t.category===e)).length;let r=[];for(let e=1;e<=n;e++)r.push("slide-"+e);return r}(e,E)}(e),function(e,t){const n=document.querySelector(".team__circular-slider"),r=t.filter((t=>t.category===e)),o=document.createDocumentFragment();r.forEach((({memberID:e,name:t,category:n},r)=>{const c=document.createElement("li"),a=`slide-${r+1}`;1===r?c.classList.add("team__circular-section",a,"team-active-slide"):c.classList.add("team__circular-section",a),c.setAttribute("data-member",e),c.setAttribute("data-category",n);const i=function(e,t){const n=`images/team/${e}.webp`,r=`images/team/${e}.png`,o=document.createElement("picture");o.className="team__image";const c=document.createElement("source");c.setAttribute("srcset",n),c.setAttribute("type","image/webp");const a=document.createElement("source");a.setAttribute("srcset",r),a.setAttribute("type","image/png");const i=document.createElement("img");return i.setAttribute("src",r),i.setAttribute("width","200"),i.setAttribute("height","200"),i.setAttribute("alt",`Фото члена команди на ім'я ${t}`),o.appendChild(c),o.appendChild(a),o.appendChild(i),o}(e,t);c.appendChild(i),o.appendChild(c)})),n.appendChild(o)}(e,E);const t=B();function n(){o(-1)}function r(){o(1)}function o(e){O.currentIndex=(O.currentIndex+e+O.slideClasses.length)%O.slideClasses.length,function(e){const t=B();!function(e){e.forEach((e=>e.classList.remove("team-active-slide")))}(t);const n=1===e?0:2;(function(e,t){const n=e.length;n<=1||e.forEach(((e,r)=>{const o=(r+t+n)%n;e.classList.replace(O.slideClasses[r],O.slideClasses[o])}))})(t,e),function(e,t){e[t].classList.add("team-active-slide")}(t,n),$(t,n),function(e,t){const n=document.querySelectorAll(".team__name"),r=[...n].find((e=>e.classList.contains("name--active")));if(r){r.classList.remove("name--active");let o=([...n].indexOf(r)+e+t)%t;o<0&&(o+=t),n[o].classList.add("name--active")}}(e,t.length)}(e)}!function(e,t){const n=document.querySelector(".team__members-name-list"),r=document.createDocumentFragment();(function(e){if(e.length<2)return e.slice();const t=[...e];[t[0],t[1]]=[t[1],t[0]];for(let n=2,r=e.length-1;n<r;n++,r--)[t[n],t[r]]=[t[r],t[n]];return t})(e.find((e=>e.name===t)).members).forEach((({name:e,memberID:t},n)=>{const o=document.createElement("li");o.className=0===n?"team__name name--active":"team__name",o.textContent=e,o.setAttribute("data-id",t),r.appendChild(o)})),n.appendChild(r)}(O.membersByCategory,e),$(t,O.currentIndex+1),I.addEventListener("click",(function(e){const t=e.target;if("IMG"!==t.tagName)return;const n=t.closest("li");if(!n||n.classList.contains("team-active-slide"))return;const r=n.classList[1],c=O.slideClasses.indexOf(r);-1!==c&&o(2===c?-1:1)})),A.addEventListener("click",(function(e){const t=e.target;if("LI"!==t.tagName)return;if(!t||t.classList.contains("name--active"))return;const n=t.getAttribute("data-id"),r=function(e,t){return[...e].find((e=>e.getAttribute("data-member")===t))}(B(),n),c=function(e){const t=[...e.classList].find((e=>e.startsWith("slide-")));return t?parseInt(t.split("-")[1],10):0}(r);!function(e){const t=e<0?-1:1;for(let n=0;n<Math.abs(e);n++)o(t)}(function(e,t){return 6===t?function(t){const n=e-2;return n>3?2:n<0?1:3===n?3:-n}():9===t?function(t){const n=e-2;switch(n){case 7:return n+4;case 6:return-n;case 5:return 4;case 4:return 5;case 3:return 6;case 2:return-2;case 1:return-1;default:return n<0?1:0}}():3===t?function(t){const n=e-2;return-1===n?1:1===n?-1:void 0}():4===t?function(t){const n=e-2;return-1===n?1:1===n?-1:2===n?2:void 0}():void 0}(c,O.slideClasses.length))}))}function $(e,t){const{name:n,experience:r,quote:o}=function(e,t){const n=e[t].getAttribute("data-member");return E.find((e=>e.memberID===n))}(e,t);D.innerHTML=n,T.innerHTML=`Досвід роботи: ${r}`,H.innerHTML=`<i class="fa-solid fa-quote-left"></i> ${o} <i class="fa-solid fa-quote-right"></i>`}function B(){return O.slideClasses.map((e=>document.querySelector(`.team__circular-section.${e}`)))}O.teamCategories=function(e){const t=new Set;return e.forEach((({category:e})=>{t.add(e)})),Array.from(t)}(E),O.membersByCategory=(M=E,Object.values(M.reduce(((e,t)=>{const{category:n,name:r,memberID:o}=t;return e[n]||(e[n]={name:n,members:[]}),e[n].members.push({name:r,memberID:o}),e}),{}))),function(e,t){const n=document.querySelector(".team__category-list"),r=document.createDocumentFragment();e.forEach(((e,n)=>{const o=document.createElement("li");o.className=0===n?"team__category-item category--active":"team__category-item",o.textContent=t[e],o.setAttribute("data-category",e),r.appendChild(o)})),n.appendChild(r)}(O.teamCategories,{windowCleaner:"Клінери вікон",dryCleaner:"Спеціалісти із хімчистки",universalCleaner:"Універсали",contactManager:"Менеджери",CEO:"CEO"}),N(O.chosenCategory),C.addEventListener("click",(function(e){const t=e.target;if("LI"!==t.tagName||t.classList.contains("category--active"))return;const n=t.getAttribute("data-category");N(n),function(e){const t=document.querySelectorAll(".team__category-item"),n=[...t].find((e=>e.classList.contains("category--active")));n&&n.classList.remove("category--active");[...t].find((t=>t.getAttribute("data-category")===e)).classList.add("category--active")}(n)})),n(699);const R={name:"subscription",openModalBtn:document.querySelector("[data-subscription-modal-open]"),closeModalBtn:document.querySelector("[data-subscription-modal-close]"),modal:document.querySelector("[data-subscription-modal]"),backdrop:document.querySelector(".backdrop--subscr")};Ee(R);const F=document.querySelectorAll(".buildings__element"),j=document.querySelector(".control-quantity-btn--plus"),P=document.querySelector(".control-quantity-btn--minus"),G=document.querySelectorAll(".service-element .checkbox"),K=document.querySelector(".table__data"),W=document.querySelector("#take-keys-btn"),z=document.querySelector("#give-keys-btn"),Y=document.querySelector(".keys-address-block"),J=document.querySelector(".keys-address-block__take-item"),X=document.querySelector(".keys-address-block__give-item");j?.addEventListener("click",ee),P?.addEventListener("click",ee),W?.addEventListener("click",se),z?.addEventListener("click",se),F.forEach((e=>{e.addEventListener("click",(e=>{ve(e.target),function(e){const t=e.target;t.classList.contains("buildings__element--current")||[...F].forEach((e=>{e===t?(e.id,e.classList.add("buildings__element--current")):e.classList.remove("buildings__element--current")}))}(e)}))})),G.forEach((e=>{e.addEventListener("change",(e=>{!function(e){const t=e.currentTarget,n=t.closest("label"),r=n.nextElementSibling,o=t.checked;(function(e,t){e.classList.toggle("isHidden",!t)})(r,o),function(e){const t=e.querySelector(".control-quantity-btn--plus"),n=e.querySelector(".control-quantity-btn--minus");t.addEventListener("click",Z),n.addEventListener("click",Z)}(r);const c=function(e){const t=e.querySelector(".service-element__text").textContent,n=e.querySelector(".service-element__accent").getAttribute("data-value"),r=e.getAttribute("data-id"),o=document.createElement("li");o.id=r,o.className="table__item table__block";const c=ce("item__name",`${t}`),a=ce("","x"),i=ce("name-wrapper"),s=ce("quantity-wrapper");ae(s,[a,ce("item__quantity service-quantity",U[r].quantity)]),ae(i,[c,s]);const l=ce("service-value",`${n}zł`);return l.setAttribute("data-service",r),ae(o,[i,l]),o}(n),a=n.getAttribute("data-id");(function(e,t){const n=t.id,r=function(e){return[...K.querySelectorAll("li")].find((t=>t.id===e))}(n);e&&!r?(function(e){K.insertAdjacentElement("beforeend",e)}(t),re(n)):!e&&r&&(re(n,0),function(e){K.removeChild(e)}(r))})(o,c),te(a),oe(V)}(e)}))}));const U={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:1,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:1,price:40},microWave:{name:"Мікрохвильовка",quantity:1,price:15},refrigerator:{name:"Холодильник",quantity:1,price:40},plate:{name:"Плита",quantity:1,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:1,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:1,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:1,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:1,price:149.99}},V={square:{name:"Площа",quantity:1,price:2},windowsStandard:{name:"Миття вікон (стандартні)",quantity:0,price:35},windowsLarge:{name:"Миття вікон (до підлоги)",quantity:0,price:40},microWave:{name:"Мікрохвильовка",quantity:0,price:15},refrigerator:{name:"Холодильник",quantity:0,price:40},plate:{name:"Плита",quantity:0,price:35},officeChair:{name:"Хімчистка офісних стільців",quantity:0,price:20},sofaDry2x:{name:"Хімчистка дивану 2х",quantity:0,price:109.99},sofaDry3x:{name:"Хімчистка дивану 3х",quantity:0,price:129.99},sofaDry4x:{name:"Хімчистка дивану 4х",quantity:0,price:149.99}};function Q(e){const t=ie(e),n=function(e){return e.currentTarget.getAttribute("data-type")}(e);!function(e,t){if("plus"===t)U[e].quantity+=1;else if("minus"===t){if(1===U[e].quantity)return;U[e].quantity-=1}}(t,n),function(e){const t=[...document.querySelectorAll(".service-element")].find((t=>t.getAttribute("data-id")===e)),n=t?.nextElementSibling.querySelector(`[data-name="${e}"]`),r=document.querySelector(".wrap--square").querySelector(`[data-name="${e}"]`);n&&(n.textContent=U[e].quantity),r&&(r.textContent=U[e].quantity,document.querySelector(".square-value-total").textContent=U[e].quantity)}(t),function(e){const t=document.querySelector(`[data-name="${e}"]`).parentNode?.parentNode?.querySelector(".control-quantity-btn--minus .icon--minus");1===U[e].quantity?t.style.fill="rgba(\t77, 18, 153, 0.3)":t.style.fill="#4D1299"}(t)}function Z(e){const t=ie(e);Q(e),te(t),oe(V)}function ee(e){Q(e),function(){const e=document.querySelector('[data-service="square"]');V.square.quantity=U.square.quantity,e.textContent=V.square.quantity*V.square.price+"zł"}(),oe(V)}function te(e){const t=document.querySelector(`[data-service="${e}"]`),n=document.querySelector(`#${e} .service-quantity`),r=U[e].price;if(t&&n){const o=re(e),c=ne(o,r);t.textContent=c,n.textContent=o}else re(e,0)}function ne(e,t){return`${(e*t).toFixed(2)}zł`}function re(e,t){const n=void 0!==t?t:U[e].quantity;return V[e].quantity=n,n}function oe(e){const t=(n=e,Object.keys(n).reduce(((e,t)=>{const r=n[t];return e+r.quantity*r.price}),0).toFixed(2));var n;document.querySelector(".total-order-value").textContent=`${t}zł`}function ce(e,t){const n=document.createElement("span");return e&&(n.className=e),t&&(n.textContent=t),n}function ae(e,t){t.forEach((t=>{e.appendChild(t)}))}function ie(e){const t=e.currentTarget?.closest(".wrap--service")?.parentNode.querySelector("label")?.getAttribute("data-id"),n=e.currentTarget?.closest(".wrap--square")?.getAttribute("data-id");return t||n}function se(e){const t=e.currentTarget;t.classList.toggle("active"),"take-keys-btn"===t.id?J.classList.toggle("isHidden"):X.classList.toggle("isHidden"),function(){const e=J.classList.contains("isHidden"),t=X.classList.contains("isHidden");e&&t?Y.classList.add("isHidden"):Y.classList.remove("isHidden")}()}const le=document.querySelector(".subscr__form"),ue=document.querySelectorAll(".payment__btn"),de=document.querySelector(".form__payment-error-text"),me=document.querySelectorAll(".form__input"),ye=document.querySelector(".calc-btn"),fe=document.querySelector('[name="studio-policy-check"]');let ge;fe&&(ge=new MutationObserver(((e,t)=>{e.forEach((e=>{"attributes"===e.type&&"data-checked"===e.attributeName&&(fe.getAttribute("data-checked"),Se())}))})),ge.observe(fe,{attributes:!0,attributeFilter:["data-checked"]}),fe.addEventListener("change",(()=>{fe.setAttribute("data-checked",fe.checked)}))),le?.addEventListener("submit",we),ye?.addEventListener("click",(e=>{e.preventDefault(),we(e)})),ue.forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=e.target.closest("button");ve(t),t.classList.contains("active")||[...ue].forEach((e=>{e===t?e.classList.add("active"):e.classList.remove("active")}))}(e),Le()}))})),me.forEach((e=>{e.addEventListener("focus",(()=>{e.classList.remove("error")}))}));const pe=["userName","userSurname","userTel","userEmail","userLocation","userDate","userTime"],be={userPaymentType:"",userBuildingType:"",userTakeKeyAddress:"",userGiveKeyAddress:"",userSquare:{quantity:"",cost:""},userServices:{}};function ve(e){const t=e.getAttribute("data-type"),n=e.getAttribute("data-id")??"";be[t]=n}function qe(e){[...e].forEach((e=>{e.classList.remove("error")}))}function he(){return document.querySelector('[name="studio-policy-check"]').checked}function _e(){document.querySelector(".form__payment-error-text").classList.toggle("isHidden")}function Le(){!de.classList.contains("isHidden")&&_e()}function Se(){document.querySelector(".form__policy-error-text").classList.add("isHidden")}function we(t){t.preventDefault();const n="BUTTON"===t.currentTarget.tagName,r=n?le.elements:t.currentTarget.elements,o=function(e,t){return t.filter((t=>""===e[t].value.trim())).map((t=>e[t]))}(r,pe);qe(r),function(e){e.forEach((e=>{e.classList.add("error")}))}(o);const c=[...ue].some((e=>e.classList.contains("active"))),a=o.length>0;c||_e(),function(){const e=document.querySelector(".form__policy-error-text");e.classList.add("isHidden"),he()||e.classList.remove("isHidden")}();const i=he();if(!c||a||!i)return;const s=n?le:t.target;var l,u,d;n&&(function(){const e=document.querySelector('[data-type="userTakeKeyAddress"]'),t=document.querySelector('[data-type="userGiveKeyAddress"]');ve(e),ve(t)}(),l=be,u=V.square.quantity,d=V.square.price,l.userSquare={quantity:`${u}`,cost:ne(u,d)},function(e){const t=(n=V,Object.keys(n).filter((e=>n[e].quantity>0)).reduce(((e,t)=>(e[t]={...n[t]},delete e[t].square,e)),{}));var n;e.userServices=Object.keys(t).filter((e=>"square"!==e)).map((e=>{const{name:n,quantity:r,price:o}=t[e];return{name:n,quantity:r,cost:ne(r,o)}}))}(be)),function(e){new FormData(e).forEach(((e,t)=>{t.startsWith("user")&&(be[t]=e)}))}(s),e("userOrderDataObj",be),function(e){[...e].forEach((e=>{"text"===e.type||"email"===e.type||"tel"===e.type||"TEXTAREA"===e.tagName?e.value="":"checkbox"===e.type&&(e.checked=!0)}))}(r),[...ue].forEach((e=>{e.classList.remove("active")})),ge.disconnect(),n||ke(R),window.location.href=window.location.href="https://marynashavlak.github.io/comfort-group-cleaning/success-order.html"}function Ee(e){e.openModalBtn?.addEventListener("click",(()=>ke(e))),e.closeModalBtn?.addEventListener("click",(t=>{t.stopPropagation(),ke(e)})),e.backdrop?.addEventListener("click",(t=>{t.target===e.backdrop&&ke(e)}))}function ke(e){document.body.classList.toggle(`${e.name}-modal-open`),e.modal?.classList.toggle("backdrop--hidden"),"subscription"===e.name&&(qe(le?.elements),Le(),Se())}Ee({name:"location",openModalBtn:document.querySelector("[data-location-modal-open]"),closeModalBtn:document.querySelector("[data-location-modal-close]"),modal:document.querySelector("[data-location-modal]"),backdrop:document.querySelector(".backdrop--location")})}()}();