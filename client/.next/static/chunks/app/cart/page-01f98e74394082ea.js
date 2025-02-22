(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{3014:(e,t,a)=>{Promise.resolve().then(a.bind(a,4504))},4504:(e,t,a)=>{"use strict";a.d(t,{default:()=>p});var r=a(5155),s=a(3391),l=a(8606),n=a(8173),c=a.n(n),i=a(9638),o=a(5565);let d=function(e){let{item:t}=e,{cart:a}=(0,s.d4)(e=>e.cart),l=a.find(e=>(null==e?void 0:e.name)===(null==t?void 0:t.name));return(0,r.jsx)("li",{className:"flex py-4",children:(0,r.jsx)("div",{className:"px-5 pt-4 flex-grow",children:(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsxs)("div",{className:"flex space-x-4 flex-grow",children:[(0,r.jsx)("div",{className:"relative aspect-square",children:(0,r.jsx)(o.default,{fill:!0,src:t.imageUrl,alt:t.name,className:"object-cover rounded-full"})}),(0,r.jsxs)("div",{className:"space-y-4  flex-1",children:[(0,r.jsxs)("h2",{className:"text-base flex items-center gap-2",children:[(0,r.jsxs)("span",{className:"text-xl",children:[null==t?void 0:t.quantity,"x"]}),null==t?void 0:t.name]}),(0,r.jsxs)("p",{className:"text-base capitalize items-center gap-1 flex-1",children:["price ",(0,r.jsxs)("span",{className:"font-bold",children:["$",null==t?void 0:t.unitPrice]})]})]})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,r.jsx)(i.A,{currentCart:l}),(0,r.jsxs)("span",{className:"flex items-center text-xl gap-8",children:[(0,r.jsx)("span",{className:"font-bold text-base",children:"Total: "}),"$",Math.round(null==t?void 0:t.totalPrice)]})]})]})})})};var u=a(6046),x=a(4095),m=a(450),f=a(5356);let p=function(){let e=(0,u.useRouter)(),{cart:t}=(0,s.d4)(e=>e.cart),{user:a,Auth:n}=(0,s.d4)(e=>e.user),i=(0,s.wA)();if(!t.length)return(0,r.jsx)(l.A,{});let o=t.reduce((e,t)=>e+t.totalPrice,0);async function p(a){a.preventDefault();let r=await (0,x._u)({cart:t,orderPrice:o});i((0,f.Oc)(r)),i((0,m.iG)()),e.push("/account/orders")}return(0,r.jsxs)("div",{className:"py-12 space-y-8 px-12",children:[(0,r.jsx)(c(),{href:"/menu",className:"font-semibold tracking-widest capitalize border-b-2 border-black pb-1 duration-150 transition-all hover:border-none",children:"Back to menu"}),n?(0,r.jsxs)("div",{className:"flex items-start  justify-center",children:[(0,r.jsxs)("p",{className:"border-y border-[#FF9900] py-[3px] capitalize pr-3",children:["Your Cart, ",null==a?void 0:a.firstName," – Ready for checkout?"]}),(0,r.jsx)("button",{className:"bg-[#FF9900] text-white px-3 py-1 capitalize",onClick:p,children:"Click Order Now"})]}):(0,r.jsxs)("p",{className:"text-center border-y border-[#FF9900] py-1 place-self-center",children:[(0,r.jsx)(c(),{href:"/login",className:"font-semibold tracking-widest text-base  text-[#FF9900] mr-2",children:"Login"}),"To Let’s Start Your Dinner With Us"]}),(0,r.jsx)("ul",{className:"flex flex-col divide-y divide-slate-300 border-b border-slate-300",children:t.map(e=>(0,r.jsx)(d,{item:e},e.name))})]})}},8606:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(5155),s=a(8173),l=a.n(s);let n=function(){return(0,r.jsxs)("div",{className:"pt-12 space-y-12",children:[(0,r.jsx)(l(),{href:"/menu",className:"font-semibold tracking-widest capitalize border-b-2 border-black pb-1 duration-150 transition-all hover:border-none",children:"Back to menu"}),(0,r.jsx)("p",{className:"text-base",children:"Oops! Your Cart is Looking a Little Empty \uD83D\uDE05.Let’s Start Your Dinner With Us"})]})}},9638:(e,t,a)=>{"use strict";a.d(t,{A:()=>n});var r=a(5155),s=a(3391),l=a(450);let n=function(e){let{currentCart:t}=e,a=(0,s.wA)();return(0,r.jsxs)("div",{className:"space-x-2 flex items-center",children:[(0,r.jsx)("button",{onClick:()=>a((0,l.RU)(null==t?void 0:t.name)),className:"bg-[#FF9900] text-white px-[9px] h-6 text-2xl rounded-full flex items-center",children:"-"}),(0,r.jsx)("span",{className:"text-xl rounded-full",children:null==t?void 0:t.quantity}),(0,r.jsx)("button",{onClick:()=>a((0,l.Tn)(null==t?void 0:t.name)),className:"bg-[#FF9900] text-white px-[6px] h-6 text-2xl rounded-full flex items-center",children:"+"}),(0,r.jsx)("button",{onClick:()=>a((0,l.nr)(null==t?void 0:t.name)),className:"bg-[#FF9900] text-white px-[6px] h-6 text-xs rounded-full flex items-center",children:"Delete"})]})}},4095:(e,t,a)=>{"use strict";a.d(t,{$5:()=>n,CI:()=>l,Jv:()=>s,_u:()=>i,s:()=>o,wB:()=>c});let r=a(2651).A.create({baseURL:"http://localhost:8080/api/v1/",withCredentials:!0});async function s(e){try{return(await r.post("auth/login",e)).data}catch(e){console.log(e)}}async function l(){try{return await r.get("auth/logout")}catch(e){console.log(e)}}async function n(e){try{return(await r.post("auth/signup",e)).data}catch(e){console.log(e)}}async function c(){try{return(await r.get("auth/current")).data}catch(e){console.log(e)}}async function i(e){try{return(await r.post("/orders",e)).data}catch(e){console.log(e)}}async function o(e){try{let t=await r.delete("/orders/".concat(e));return console.log(t),t.data}catch(e){console.log(e)}}},450:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>d,RU:()=>c,TP:()=>l,Tn:()=>n,iG:()=>i,nr:()=>o});let{createSlice:r}=a(4281),s=r({name:"cart",initialState:{cart:[]},reducers:{orderNow(e,t){e.cart.push(t.payload)},Incorder(e,t){let a=e.cart.find(e=>e.name===t.payload);a.quantity++,a.totalPrice=a.quantity*a.unitPrice},Decorder(e,t){let a=e.cart.find(e=>e.name===t.payload);a.quantity--,a.totalPrice=a.quantity*a.unitPrice,a.quantity<=0&&s.caseReducers.DeleteItem(e,t)},DeleteItem(e,t){e.cart=e.cart.filter(e=>e.name!==t.payload)},ClearCart(e){e.cart=[]}}}),{orderNow:l,Incorder:n,Decorder:c,ClearCart:i,DeleteItem:o}=s.actions,d=s.reducer},5356:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>i,Oc:()=>l,_J:()=>n,cU:()=>c});let{createSlice:r}=a(4281),s=r({name:"order",initialState:{orders:[]},reducers:{addOrder(e,t){e.orders.push(t.payload),console.log("Add")},setOrders(e,t){e.orders=t.payload},DeleteOrder(e,t){e.orders=e.orders.filter(e=>e.id!==t.payload)}}}),{addOrder:l,DeleteOrder:n,setOrders:c}=s.actions,i=s.reducer},5565:(e,t,a)=>{"use strict";a.d(t,{default:()=>s.a});var r=a(4146),s=a.n(r)},6046:(e,t,a)=>{"use strict";var r=a(6658);a.o(r,"usePathname")&&a.d(t,{usePathname:function(){return r.usePathname}}),a.o(r,"useRouter")&&a.d(t,{useRouter:function(){return r.useRouter}}),a.o(r,"useSearchParams")&&a.d(t,{useSearchParams:function(){return r.useSearchParams}})},4146:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return i},getImageProps:function(){return c}});let r=a(306),s=a(666),l=a(7970),n=r._(a(5514));function c(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let i=l.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[173,391,651,281,970,441,517,358],()=>t(3014)),_N_E=e.O()}]);