(function(){"use strict";var e={347:function(e,t,n){var r={};n.r(r),n.d(r,{Document:function(){return w}});var i=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"app"}},[e._m(0),e._m(1),n("section",[n("h2",[e._v("Example")]),n("Document",{attrs:{document:e.doc}})],1)])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("Keystone6VueRenderer")]),n("a",{attrs:{href:"https://github.com/talentedunicorn/keystone6-vue-renderer",title:"GitHub repository"}},[e._v("GitHub")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("p",[e._v("This is a VueJs port of "),n("a",{attrs:{href:"https://github.com/keystonejs/keystone/tree/main/packages/document-renderer"}},[e._v("@keystone-6/document-renderer package")]),e._v(".")]),n("p",[e._v("It renderers the "),n("code",[e._v("document")]),e._v(" field data of "),n("a",{attrs:{href:"https://keystonejs.com"}},[e._v("KeystoneJS")]),e._v(" CMS data to html and lets you handle the styling.")])])}],c=JSON.parse('[{"type":"heading","level":3,"children":[{"text":"Supported formats"}]},{"type":"paragraph","children":[{"text":"Keystone6VueRenderer has support for; "},{"text":"underlines","underline":true},{"text":", "},{"text":"strikethrough","strikethrough":true},{"text":", "},{"code":true,"text":"code"},{"text":", "},{"text":"italics","italic":true},{"text":", "},{"bold":true,"text":"bold"},{"text":", "},{"href":"https://talentedunicorn.com","type":"link","children":[{"text":"links"}]},{"text":" as well as..."}]},{"type":"blockquote","children":[{"type":"paragraph","children":[{"text":"Blockquotes support"}]}]},{"type":"heading","level":4,"children":[{"text":"Lists"}]},{"type":"heading","level":5,"children":[{"text":"Unordered list"}]},{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"One"}]}]},{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Two"}]}]},{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Three"}]}]}]},{"type":"heading","level":5,"children":[{"text":"Ordered list"}]},{"type":"ordered-list","children":[{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Satu"}]}]},{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Dua"}]}]},{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Tiga"}]}]},{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Empat"}]}]},{"type":"list-item","children":[{"type":"list-item-content","children":[{"text":"Lima"}]}]}]},{"type":"code","children":[{"text":"Support for code blocks\\n\\nfunction hello() {\\n  return world\\n}"}]}]'),u=i.Z.extend({name:"ServeDev",data:function(){return{doc:c}}}),a=u,s=n(1),d=(0,s.Z)(a,o,l,!1,null,"659bdb15",null),h=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.document,(function(t,r){return n("fragment",{key:r},["paragraph"===t.type?[n("Paragraph",{attrs:{block:t}})]:e._e(),"blockquote"===t.type?[n("blockquote",e._l(t.children,(function(e,t){return n("fragment",{key:t},[n("Paragraph",{attrs:{block:e}})],1)})),1)]:e._e(),"code"===t.type?[n("pre",[n("code",[e._v(e._s(t.children[0].text))])])]:e._e(),"heading"===t.type?[1===t.level?[n("h1",[e._v(e._s(t.children[0].text))])]:e._e(),2===t.level?[n("h2",[e._v(e._s(t.children[0].text))])]:e._e(),3===t.level?[n("h3",[e._v(e._s(t.children[0].text))])]:e._e(),4===t.level?[n("h4",[e._v(e._s(t.children[0].text))])]:e._e(),5===t.level?[n("h5",[e._v(e._s(t.children[0].text))])]:e._e()]:e._e(),"unordered-list"===t.type?[n("ul",e._l(t.children,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t.children[0].children[0].text)+" ")])})),0)]:e._e(),"ordered-list"===t.type?[n("ol",e._l(t.children,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t.children[0].children[0].text)+" ")])})),0)]:e._e()],2)})),1)},f=[],y=n(266),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",e._l(e.block.children,(function(t,r){return n("fragment",{key:r},[t.bold?[n("strong",[e._v(e._s(t.text))])]:t.strikethrough?[n("s",[e._v(e._s(t.text))])]:t.underline?[n("u",[e._v(e._s(t.text))])]:t.code?[n("code",[e._v(e._s(t.text))])]:t.italic?[n("em",[e._v(e._s(t.text))])]:"link"===t.type?[n("a",{attrs:{href:t.href}},[e._v(e._s(t.children[0].text))])]:[e._v(e._s(t.text))]],2)})),1)},_=[],m=i.Z.extend({name:"Paragraph",props:{block:{type:Object,required:!0}},components:{Fragment:y.HY}}),x=m,b=(0,s.Z)(x,v,_,!1,null,null,null),g=b.exports,k=i.Z.extend({name:"Document",components:{Fragment:y.HY,Paragraph:g},props:{document:{type:Array,required:!0}}}),O=k,S=(0,s.Z)(O,p,f,!1,null,null,null),w=S.exports;function j(e,t){return A(e)||P(e,t)||T(e,t)||E()}function E(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e,t){if(e){if("string"===typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(r=n.next()).done);l=!0)if(o.push(r.value),t&&o.length===t)break}catch(u){c=!0,i=u}finally{try{l||null==n["return"]||n["return"]()}finally{if(c)throw i}}return o}}function A(e){if(Array.isArray(e))return e}var $=function(e){Object.entries(r).forEach((function(t){var n=j(t,2),r=n[0],i=n[1];e.component(r,i)}))},q=$;i.Z.use(q),i.Z.config.productionTip=!1,new i.Z({render:function(e){return e(h)}}).$mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,o){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],i=e[s][1],o=e[s][2];for(var c=!0,u=0;u<r.length;u++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,o<l&&(l=o));if(c){e.splice(s--,1);var a=i();void 0!==a&&(t=a)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,i,o]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,l=r[0],c=r[1],u=r[2],a=0;if(l.some((function(t){return 0!==e[t]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(u)var s=u(n)}for(t&&t(r);a<l.length;a++)o=l[a],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkkeystone6_vue_renderer"]=self["webpackChunkkeystone6_vue_renderer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(347)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.acef373a.js.map