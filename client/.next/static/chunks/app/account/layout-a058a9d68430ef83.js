(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[501],{4201:(e,t,r)=>{Promise.resolve().then(r.bind(r,8759)),Promise.resolve().then(r.bind(r,6939))},8759:(e,t,r)=>{"use strict";r.d(t,{default:()=>i});var a=r(5155),n=r(6046),s=r(2115),c=r(3391),o=r(5186);let i=function(e){let{children:t}=e,{Auth:r}=(0,c.d4)(e=>e.user),[i,l]=(0,s.useState)(!1),u=(0,n.useRouter)();return((0,s.useEffect)(function(){void 0!==r&&(r||u.push("/"),l(!0))},[r,u]),i)?r?t:null:(0,a.jsx)(o.A,{})}},6939:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var a=r(5155),n=r(8173),s=r.n(n),c=r(2529),o=r(9507),i=r(5679),l=r(3240),u=r(3391),d=r(4095);let f=function(){let e=(0,u.wA)();async function t(t){t.preventDefault();let r=await (0,d.CI)();(null==r?void 0:r.data)==="success"&&e((0,l.ri)())}return(0,a.jsxs)("ul",{className:"border-r border-black pt-12 pr-12 space-y-8 h-[82vh]",children:[(0,a.jsx)("li",{children:(0,a.jsxs)(s(),{href:"/account",className:" capitalize text-xl tracking-widest flex gap-2",children:[(0,a.jsx)(c.UdD,{}),"account"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(s(),{href:"/account/orders",className:" capitalize text-xl tracking-widest flex gap-2 ",children:[(0,a.jsx)(o.ZfP,{}),"orders"]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{onClick:t,className:" capitalize text-xl tracking-widest flex gap-2",children:[(0,a.jsx)(i.JtW,{}),"logout"]})})]})}},5186:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(5155);let n=function(){return(0,a.jsxs)("div",{className:"load",children:[(0,a.jsxs)("div",{className:"hamburger",children:[(0,a.jsx)("div",{className:"top-bun"}),(0,a.jsx)("div",{className:"pickle"}),(0,a.jsx)("div",{className:"pickle"}),(0,a.jsx)("div",{className:"tomato",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"tomato",children:(0,a.jsx)("div",{})}),(0,a.jsx)("div",{className:"cheese"}),(0,a.jsx)("div",{className:"cheese"}),(0,a.jsx)("div",{className:"beef"}),(0,a.jsx)("div",{className:"bottom-bun"})]}),(0,a.jsx)("h1",{children:"Loading..."})]})}},4095:(e,t,r)=>{"use strict";r.d(t,{$5:()=>c,CI:()=>s,Jv:()=>n,_u:()=>i,s:()=>l,wB:()=>o});let a=r(2651).A.create({baseURL:"http://localhost:8080/api/v1/",withCredentials:!0});async function n(e){try{return(await a.post("auth/login",e)).data}catch(e){console.log(e)}}async function s(){try{return await a.get("auth/logout")}catch(e){console.log(e)}}async function c(e){try{return(await a.post("auth/signup",e)).data}catch(e){console.log(e)}}async function o(){try{return(await a.get("auth/current")).data}catch(e){console.log(e)}}async function i(e){try{return(await a.post("/orders",e)).data}catch(e){console.log(e)}}async function l(e){try{let t=await a.delete("/orders/".concat(e));return console.log(t),t.data}catch(e){console.log(e)}}},3240:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>i,iD:()=>s,ri:()=>c,wz:()=>o});let{createSlice:a}=r(4281),n=a({name:"User",initialState:{user:{},Auth:!1},reducers:{login(e,t){e.user=t.payload,e.Auth=!0},logout(e,t){e.user={},e.Auth=!1},getUser(e,t){e.user=t.payload,e.Auth=!0}}}),{login:s,logout:c,getUser:o}=n.actions,i=n.reducer},6046:(e,t,r)=>{"use strict";var a=r(6658);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}}),r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var a=r(2115),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),c=["attr","size","title"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var a,n;a=t,n=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,o({attr:l({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,l({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:s,title:i}=e,u=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,c),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==s?a.createElement(s.Consumer,null,e=>t(e)):t(n)}}},e=>{var t=t=>e(e.s=t);e.O(0,[672,139,603,173,391,651,281,441,517,358],()=>t(4201)),_N_E=e.O()}]);