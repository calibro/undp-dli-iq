import{S as r,i as a,s,e as t,t as e,c as n,a as c,g as o,d as u,f,F as l,h as m,k as p,l as d,n as i,G as h}from"./chunks/vendor-5a128f4a.js";function E(r){let a,s,p=r[1].frame+"";return{c(){a=t("pre"),s=e(p)},l(r){a=n(r,"PRE",{});var t=c(a);s=o(t,p),t.forEach(u)},m(r,t){f(r,a,t),l(a,s)},p(r,a){2&a&&p!==(p=r[1].frame+"")&&m(s,p)},d(r){r&&u(a)}}}function k(r){let a,s,p=r[1].stack+"";return{c(){a=t("pre"),s=e(p)},l(r){a=n(r,"PRE",{});var t=c(a);s=o(t,p),t.forEach(u)},m(r,t){f(r,a,t),l(a,s)},p(r,a){2&a&&p!==(p=r[1].stack+"")&&m(s,p)},d(r){r&&u(a)}}}function v(r){let a,s,v,g,P,R,x,N,$=r[1].message+"",j=r[1].frame&&E(r),F=r[1].stack&&k(r);return{c(){a=t("h1"),s=e(r[0]),v=p(),g=t("pre"),P=e($),R=p(),j&&j.c(),x=p(),F&&F.c(),N=d()},l(t){a=n(t,"H1",{});var e=c(a);s=o(e,r[0]),e.forEach(u),v=i(t),g=n(t,"PRE",{});var f=c(g);P=o(f,$),f.forEach(u),R=i(t),j&&j.l(t),x=i(t),F&&F.l(t),N=d()},m(r,t){f(r,a,t),l(a,s),f(r,v,t),f(r,g,t),l(g,P),f(r,R,t),j&&j.m(r,t),f(r,x,t),F&&F.m(r,t),f(r,N,t)},p(r,[a]){1&a&&m(s,r[0]),2&a&&$!==($=r[1].message+"")&&m(P,$),r[1].frame?j?j.p(r,a):(j=E(r),j.c(),j.m(x.parentNode,x)):j&&(j.d(1),j=null),r[1].stack?F?F.p(r,a):(F=k(r),F.c(),F.m(N.parentNode,N)):F&&(F.d(1),F=null)},i:h,o:h,d(r){r&&u(a),r&&u(v),r&&u(g),r&&u(R),j&&j.d(r),r&&u(x),F&&F.d(r),r&&u(N)}}}function g({error:r,status:a}){return{props:{error:r,status:a}}}function P(r,a,s){let{status:t}=a,{error:e}=a;return r.$$set=r=>{"status"in r&&s(0,t=r.status),"error"in r&&s(1,e=r.error)},[t,e]}class R extends r{constructor(r){super(),a(this,r,P,v,s,{status:0,error:1})}}export{R as default,g as load};
