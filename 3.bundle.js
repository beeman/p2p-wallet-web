(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{412:function(e,t,a){"use strict";a.r(t)},415:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a(0),l=a.n(n),c=a(9),s=a(405),o=a(21),r=a(88),m=a.n(r),u=a(87),i=a(40),d=a(70),b=a(13),E=a(89);const p=Object(s.a)("div")({name:"Wrapper",class:"w1tifgs8"}),j=Object(s.a)("div")({name:"Header",class:"hyjm7t0"}),v=Object(s.a)("div")({name:"Title",class:"t1ge91kj"}),O=Object(s.a)("div")({name:"CloseWrapper",class:"c19v5yq5"}),h=Object(s.a)(b.d)({name:"CloseIcon",class:"c4q92ii"}),y=Object(s.a)("div")({name:"CircleWrapper",class:"cn2thh8"}),T=Object(s.a)(b.d)({name:"BottomIcon",class:"b1d2ax1y"}),f=Object(s.a)("div")({name:"Content",class:"c14kd5e9"}),k=Object(s.a)("div")({name:"StatusWrapper",class:"s1qeiy73"}),A=Object(s.a)("div")({name:"Value",class:"vwa4296"}),w=Object(s.a)("div")({name:"Status",class:"s11bohjs"}),C=Object(s.a)("div")({name:"FieldsWrapper",class:"fiwc0bt"}),W=Object(s.a)("div")({name:"FieldWrapper",class:"f1n4mogn"}),g=Object(s.a)("div")({name:"FieldTitle",class:"f9aqzce"}),F=Object(s.a)("div")({name:"FieldValue",class:"fuy8m85"}),q=Object(s.a)("div")({name:"AddressWrapper",class:"anug4ak"}),z=Object(s.a)("div")({name:"AddressTitle",class:"az23y8"}),B=Object(s.a)("div")({name:"AddressValue",class:"a1qhcojt"}),L=Object(s.a)("div")({name:"CopyWrapper",class:"cehvxtz"}),x=Object(s.a)(b.d)({name:"CopyIcon",class:"c1ylh4b7"}),I=e=>()=>{try{navigator.clipboard.writeText(e),i.b.info("Copied to buffer!")}catch(e){console.error(e)}},S=({signature:e,close:t})=>{var a;const s=Object(c.c)(),r=Object(c.d)(t=>t.transaction.items[e]&&u.a.from(t.transaction.items[e]));return Object(n.useEffect)(()=>{const t=async()=>{Object(o.d)(await s(Object(E.b)(e)))||setTimeout(t,3e3)};r||t()},[e]),r?l.a.createElement(p,null,l.a.createElement(j,null,l.a.createElement(v,{title:r.slot+" SLOT"},r.timestamp?m.a.unix(r.timestamp).format("LLL"):r.slot+" SLOT"),l.a.createElement(O,{onClick:t},l.a.createElement(h,{name:"close"})),l.a.createElement(y,null,l.a.createElement(T,{name:"bottom"}))),l.a.createElement(f,null,l.a.createElement(k,null,l.a.createElement(A,null,r.short.amount.toNumber()," ",null===(a=r.short.sourceTokenAccount)||void 0===a?void 0:a.mint.symbol),l.a.createElement(w,null,"Completed")),l.a.createElement(C,null,l.a.createElement(W,null,l.a.createElement(g,null,"Transaction ID"),l.a.createElement(F,null,e)),l.a.createElement(W,null,l.a.createElement(g,null,"Amount"),l.a.createElement(F,null,r.short.amount.toNumber())),l.a.createElement(W,null,l.a.createElement(g,null,"Value"),l.a.createElement(F,null,r.short.amount.toNumber())),r.meta?l.a.createElement(W,null,l.a.createElement(g,null,"Fee"),l.a.createElement(F,null,r.meta.fee," lamports")):null,r.short.sourceTokenAccount?l.a.createElement(W,null,l.a.createElement(g,null,"From"),l.a.createElement(F,null,l.a.createElement(d.a,{symbol:void 0,size:40}),l.a.createElement(q,null,l.a.createElement(z,null,r.short.sourceTokenAccount.mint.symbol),l.a.createElement(B,null,r.short.sourceTokenAccount.address.toBase58())),l.a.createElement(L,{onClick:I(r.short.sourceTokenAccount.address.toBase58())},l.a.createElement(x,{name:"copy"})))):void 0,r.short.destinationTokenAccount?l.a.createElement(W,null,l.a.createElement(g,null,"To"),l.a.createElement(F,null,l.a.createElement(d.a,{symbol:void 0,size:40}),l.a.createElement(q,null,l.a.createElement(z,null,r.short.destinationTokenAccount.mint.symbol),l.a.createElement(B,null,r.short.destinationTokenAccount.address.toBase58())),l.a.createElement(L,{onClick:I(r.short.destinationTokenAccount.address.toBase58())},l.a.createElement(x,{name:"copy"})))):void 0))):null};a(412)}}]);
//# sourceMappingURL=3.bundle.js.map