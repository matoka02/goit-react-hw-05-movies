"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(439),a=e(138),c=e(791),u=e(689),i=e(184);n.default=function(){var t=(0,u.UO)().movieId,n=(0,c.useState)([]),e=(0,r.Z)(n,2),o=e[0],s=e[1];return(0,c.useEffect)((function(){a.q5(t).then((function(t){return s(t)}))}),[t]),(0,i.jsxs)("div",{children:[0===(null===o||void 0===o?void 0:o.length)&&(0,i.jsx)("p",{children:"We don't have any reviews for this movies"}),(0,i.jsx)("ul",{children:o.map((function(t){return(0,i.jsxs)("li",{children:[(0,i.jsxs)("p",{children:["Author: ",t.author]}),(0,i.jsx)("p",{children:t.content})]},t.id)}))})]})}},138:function(t,n,e){e.d(n,{Hg:function(){return p},TP:function(){return d},q5:function(){return h},z1:function(){return f},zv:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="b8b4ca8ae31738ae90c3cb58e4b03190",o="false",s="en-US",p=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i,"&include_adult=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&include_adult=").concat(o,"&query=").concat(n,"&language=").concat(s,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=").concat(s,"&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.27bf06d7.chunk.js.map