(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{671:function(e,a,t){"use strict";t.r(a)},674:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var c=t(0),n=t.n(c),l=t(9),s=t(664),o=t(10),r=t(31),i=t(53);const u=Object(s.a)("div")({name:"Wrapper",class:"wofbasl"}),b=Object(s.a)("div")({name:"IconWrapper",class:"i1q3oids"}),d=Object(s.a)(o.c)({name:"CloseAccountIcon",class:"c1opvhd7"}),m=Object(s.a)("div")({name:"Header",class:"hvcrr09"}),p=Object(s.a)("div")({name:"Description",class:"d9p370t"}),j=Object(s.a)("div")({name:"Buttons",class:"b1j4ecmy"}),w=Object(s.a)(o.b)({name:"ButtonStyled",class:"b1pokvas"}),O=({publicKey:e,tokenName:a,history:t,close:s})=>{const O=Object(l.c)(),[v,y]=Object(c.useState)(!1);return n.a.createElement(u,null,n.a.createElement(b,null,n.a.createElement(d,{name:"bucket"})),n.a.createElement(m,null,`Close ${a} account?`),n.a.createElement(p,null,`Your balance will be converted and transferred to your main SOL wallet and all your ${a}\n        addresses will be disabled. This action can not be undone.`),n.a.createElement(j,null,n.a.createElement(w,{disabled:v,onClick:async()=>{try{y(!0),await O(Object(r.d)({publicKey:e})),Object(i.e)(e.toBase58())}catch(e){console.log(e)}finally{y(!1)}setTimeout(()=>{t.push("/wallets")},100),s()}},"Close token account"),n.a.createElement(o.b,{light:!0,disabled:v,onClick:()=>{s()}},"Cancel")))};t(671)}}]);
//# sourceMappingURL=2.bundle.js.map