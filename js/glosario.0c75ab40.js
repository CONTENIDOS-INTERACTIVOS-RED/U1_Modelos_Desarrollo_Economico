(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario"],{"13d5":function(t,r,n){"use strict";var e=n("23e7"),a=n("d58f").left,o=n("a640"),i=n("2d00"),s=n("605d"),c=o("reduce"),u=!s&&i>79&&i<83;e({target:"Array",proto:!0,forced:!c||u},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,r,n){var e=n("da84"),a=n("fdbc"),o=n("17c2"),i=n("9112");for(var s in a){var c=e[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,r,n){"use strict";var e=n("b727").forEach,a=n("a640"),o=a("forEach");t.exports=o?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"56e2":function(t,r,n){},7716:function(t,r,n){"use strict";n("56e2")},b64b:function(t,r,n){var e=n("23e7"),a=n("7b0b"),o=n("df75"),i=n("d039"),s=i((function(){o(1)}));e({target:"Object",stat:!0,forced:s},{keys:function(t){return o(a(t))}})},c92c:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"curso-main-container glosario"},[n("BannerInterno",{attrs:{icono:"fas fa-atlas",subTitulo:"GLOSARIO",titulo:"FUNDAMENTACIÓN JURÍDICA - unidad 1"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(r){return n("div",{key:"letra-"+r.letra,staticClass:"glosario__letra-item mb-2"},[n("div",{staticClass:"glosario__letra-item__letra me-4"},[n("div",{staticClass:"glosario__letra-item__letra__icono"},[n("span",[t._v(t._s(r.letra))])])]),n("div",{staticClass:"glosario__letra-item__texto"},t._l(r.terminos,(function(r){return n("p",{staticClass:"mt-3 mb-4"},[t._m(0,!0),n("strong",{domProps:{innerHTML:t._s(r.terminoHtml||r.termino)}}),n("strong",[t._v(": ")]),n("span",{domProps:{innerHTML:t._s(r.significado)}})])})),0)])})),0)],1)},a=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("strong",[n("i",{staticClass:"lista-ul__vineta"})])}],o=n("2909"),i=(n("d3b7"),n("159b"),n("fb6a"),n("13d5"),n("4e82"),n("b64b"),n("d81d"),n("7db0"),n("3cd8")),s=n("ff6a"),c={name:"Glosario",components:{BannerInterno:i["default"]},mixins:[s["a"]],computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=this,r=Object(o["a"])(this.glosarioData);r.forEach((function(t){t.significado=t.significado.charAt(0).toLowerCase()+t.significado.slice(1)}));var n=Object(o["a"])(r).reduce((function(r,n){var e=t.quitarAcentos(n.termino.toLowerCase())[0];return r[e]?r[e].terminos.push(n):r[e]={letra:e,terminos:[n]},r}),{}),e=Object.keys(n).sort(),a=[];return e.forEach((function(r){var e=n[r],o=e.terminos;if(o.length>1){var i=[],s=e.terminos.map((function(t){return t.termino})).sort((function(r,n){var e=t.quitarAcentos(r).toLowerCase(),a=t.quitarAcentos(n).toLowerCase();return e<a?-1:a<e?1:0}));s.forEach((function(t){i.push(o.find((function(r){return r.termino===t})))})),o=i}a.push({letra:e.letra.toUpperCase(),terminos:o})})),a}}},u=c,f=(n("7716"),n("2877")),l=Object(f["a"])(u,e,a,!1,null,null,null);r["default"]=l.exports},d58f:function(t,r,n){var e=n("1c0b"),a=n("7b0b"),o=n("44ad"),i=n("50c4"),s=function(t){return function(r,n,s,c){e(n);var u=a(r),f=o(u),l=i(u.length),d=t?l-1:0,m=t?-1:1;if(s<2)while(1){if(d in f){c=f[d],d+=m;break}if(d+=m,t?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:l>d;d+=m)d in f&&(c=n(c,f[d],d,u));return c}};t.exports={left:s(!1),right:s(!0)}}}]);
//# sourceMappingURL=glosario.0c75ab40.js.map