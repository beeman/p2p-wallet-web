(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{632:function(e,a,t){"use strict";t.r(a)},633:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var n=t(0),c=t.n(n),l=t(630),s=t(9);const o=Object(l.a)("div")({name:"Wrapper",class:"wrdya2m"}),r=Object(l.a)("div")({name:"Header",class:"h1vh307k"}),i=Object(l.a)("div")({name:"Title",class:"t1qfjroh"}),m=Object(l.a)("div")({name:"Description",class:"d8b2mdb"}),d=Object(l.a)("div")({name:"CloseWrapper",class:"c135gzia"}),u=Object(l.a)(s.c)({name:"CloseIcon",class:"c1whuod3"}),b=Object(l.a)("div")({name:"Content",class:"c12kmdhp"}),v=({title:e,description:a,close:t,children:n,className:l})=>c.a.createElement(o,{className:l},c.a.createElement(r,null,e?c.a.createElement(i,null,e):void 0,a?c.a.createElement(m,null,a):void 0,t?c.a.createElement(d,{onClick:t},c.a.createElement(u,{name:"close"})):void 0),n?c.a.createElement(b,null,n):void 0);t(632)},634:function(e,a,t){"use strict";t.r(a)},635:function(e,a,t){"use strict";t.r(a)},636:function(e,a,t){"use strict";t.r(a)},639:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return Y}));var n=t(0),c=t.n(n),l=t(10),s=t(630),o=t(47),r=t(18),i=t(633),m=t(24),d=t(22),u=t.n(d),b=t(9),v=t(308),j=t(41),O=t(26),p=t.n(O),E=t(110),f=t(37),h=t(76);const k=Object(s.a)("div")({name:"Wrapper",class:"w2hsup5"}),w=Object(s.a)(b.c)({name:"ChevronIcon",class:"cjk37vx"}),y=Object(s.a)("div")({name:"ChevronWrapper",class:"c1aewuyh"}),g=Object(s.a)("div")({name:"Main",class:"m1x0i73s"}),C=Object(s.a)("div")({name:"Content",class:"c1lrr91s"}),S=Object(s.a)("div")({name:"InfoWrapper",class:"ifuaxgh"}),B=Object(s.a)("div")({name:"Info",class:"isx2g64"}),I=Object(s.a)("div")({name:"Top",class:"t10180ct"}),x=Object(s.a)("div")({name:"Bottom",class:"b1idmxl7"}),N=Object(s.a)("div")({name:"Additional",class:"a5vkidx"}),M=Object(s.a)("div")({name:"TokenInfo",class:"tjtzobz"}),A=Object(s.a)(b.b)({name:"AddButton",class:"ar7kpio"}),T=Object(s.a)("div")({name:"TokenName",class:"t1n4pegg"}),W=Object(s.a)("div")({name:"TokenAddress",class:"t1p1n0ee"}),z=Object(s.a)("div")({name:"PlusIconWrapper",class:"p1sgvivf"}),L=Object(s.a)(b.c)({name:"PlusIcon",class:"p1jvde4q"}),q=Object(s.a)("div")({name:"BottomInfo",class:"b13pkjo5"}),D=Object(s.a)("div")({name:"LeftInfo",class:"l1tqxv0s"}),F=Object(s.a)("div")({name:"RightInfo",class:"ryjcfxl"}),P=Object(s.a)("div")({name:"Error",class:"ezozms8"}),J=Object(s.a)(E.a)({name:"LoaderBlockStyled",class:"ldjkvyd"}),H=({token:e,fee:a,isInfluencedFunds:t,closeModal:s})=>{const o=Object(l.c)(),[r,i]=Object(n.useState)(!1),[m,d]=Object(n.useState)(!1),[u,b]=Object(n.useState)(!1),[v,O]=Object(n.useState)(!1),E=()=>{i(!r)};return c.a.createElement(k,null,c.a.createElement(g,{className:p()({isOpen:r})},c.a.createElement(C,{className:p()({isOpen:r})},c.a.createElement(S,{onClick:E},c.a.createElement(h.a,{symbol:e.symbol,size:45}),c.a.createElement(B,null,c.a.createElement(I,null,c.a.createElement("div",null,e.symbol)," ",c.a.createElement("div",null)),c.a.createElement(x,null,c.a.createElement("div",null,e.name)," ",c.a.createElement("div",null)))),c.a.createElement(y,{onClick:E,className:p()({isOpen:r})},c.a.createElement(w,{name:"chevron"}))),c.a.createElement(N,{className:p()({isOpen:r})},c.a.createElement(M,{onClick:()=>{try{navigator.clipboard.writeText(e.address.toBase58()),O(!0),f.b.info(e.address.toBase58()+" Address Copied!"),setTimeout(()=>{O(!1)},2e3)}catch(e){console.error(e)}}},c.a.createElement(T,{className:p()({isMintCopied:v})},v?"Mint Address Copied!":e.symbol+" Mint Address"),c.a.createElement(W,null,e.address.toBase58())),c.a.createElement(A,{primary:!0,disabled:m,onClick:async()=>{try{d(!0),await o(Object(j.c)({token:e}))}catch(e){b(!0),console.log(e)}finally{d(!1)}s()},className:p()({isExecuting:m})},m?c.a.createElement(J,null):c.a.createElement(z,null,c.a.createElement(L,{name:"plus"})),m?"Adding":"Add token")),c.a.createElement(q,{className:p()({isOpen:r,isError:u})},u?c.a.createElement(P,null,"Something went wrong. We couldn’t add a token to your list."):c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null,"View in Solana explorer"),c.a.createElement(F,{className:p()({isError:t})},`will cost ${a} SOL`,t?" (Influenced funds)":"")))))};t(634);const K=Object(s.a)("div")({name:"Wrapper",class:"w1wf7dhi"}),R=Object(s.a)(v.a)({name:"SearchInputStyled",class:"szvbwf7"}),V=Object(s.a)("div")({name:"EmptyBlock",class:"eu7x5pj"}),$=Object(s.a)("div")({name:"EmptyBlockText",class:"e1n4mhdv"}),G=Object(s.a)("div")({name:"EmptyBlockDesc",class:"e15fuiu9"}),Q=({items:e,closeModal:a})=>{const t=Object(l.c)(),[s,o]=Object(n.useState)(0),[i,d]=Object(n.useState)(0),[v,O]=Object(n.useState)(""),p=Object(l.d)(e=>e.wallet.publicKey),E=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>r.a.from(e))),f=Object(n.useMemo)(()=>E.find(e=>e.address.toBase58()===p),[E,p]);Object(n.useEffect)(()=>{(async()=>{try{const e=Object(m.d)(await t(Object(j.f)(0)));d(e),o(new u.a(e).div(10**9).toDecimalPlaces(9).toNumber())}catch(e){console.log(e)}})()},[]);const h=Object(n.useMemo)(()=>{if(!e)return;const a=v.toLowerCase();return a.length>0?e.filter(e=>{var t,n;return(null===(t=e.symbol)||void 0===t?void 0:t.toLowerCase().includes(a))||(null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(a))}):e},[v,e]);if(!e)return null;const k=Boolean(null==f?void 0:f.balance.lt(i));return c.a.createElement(K,null,c.a.createElement(R,{placeholder:"Search token",value:v,onChange:e=>{const a=e.trim();O(a)}}),(null==h?void 0:h.length)?h.map(e=>c.a.createElement(H,{key:e.address.toBase58(),token:e,fee:s,isInfluencedFunds:k,closeModal:a})):c.a.createElement(V,null,c.a.createElement(b.c,{name:"search",width:"100",height:"100"}),c.a.createElement($,null,"Nothing found"),c.a.createElement(G,null,"Change your search phrase and try again")))};t(635);const U=Object(s.a)(i.a)({name:"WrapperModal",class:"wiqml5"}),X=Object(s.a)("div")({name:"ScrollableContainer",class:"s17ynaak"}),Y=({close:e})=>{const a=Object(l.d)(e=>e.wallet.tokenAccounts.map(e=>r.a.from(e))),t=Object(l.d)(e=>e.global.availableTokens.map(e=>o.a.from(e))),s=Object(n.useMemo)(()=>{if(!t)return;const e=new Set(a.map(e=>e.mint.address.toBase58()));return t.filter(a=>!e.has(a.address.toBase58()))},[t]);return c.a.createElement(U,{title:"Add coins",close:e},(null==s?void 0:s.length)?c.a.createElement(X,null,c.a.createElement(Q,{items:s,closeModal:()=>{e()}})):void 0)};t(636)}}]);
//# sourceMappingURL=1.bundle.js.map