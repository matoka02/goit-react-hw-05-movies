"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{602:function(t,e,n){n.r(e);var r=n(439),a=n(138),c=n(791),i=n(689),u=n(87),o=n(184);e.default=function(){var t,e,n=(0,i.UO)().movieId,s=(0,c.useState)([]),l=(0,r.Z)(s,2),p=l[0],d=l[1];(0,c.useEffect)((function(){a.TP(n).then((function(t){return d(t)}))}),[n]);var f=(0,i.TH)();console.log(f);var h=null!==(t=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies/".concat(n);return(0,o.jsxs)("div",{children:[(0,o.jsxs)(u.rU,{to:h,relative:"path",children:[" ",(0,o.jsx)("button",{type:"button",children:"Go back"})]}),(0,o.jsxs)("h2",{children:[p.title,"(",p.release_date?p.release_date.substring(0,4):"",")"]}),(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(p.poster_path),alt:p.original_title}),(0,o.jsxs)("p",{children:["User Score:"," ",p.vote_average?Math.fround(10*p.vote_average).toFixed(0):""]}),(null===p||void 0===p?void 0:p.length)>0&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h4",{children:"Genres"}),(0,o.jsx)("p",{children:p.genres?p.genres.map((function(t){return t.name})).join("/"):""})]}),(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,o.jsx)(i.j3,{})]})}},138:function(t,e,n){n.d(e,{Hg:function(){return l},TP:function(){return d},q5:function(){return h},z1:function(){return p},zv:function(){return f}});var r=n(531),a=n(757),c=n.n(a),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="b8b4ca8ae31738ae90c3cb58e4b03190",o="false",s="en-US",l=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u,"&include_adult=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&include_adult=").concat(o,"&query=").concat(e,"&language=").concat(s,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(u,"&language=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(u,"&language=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(u,"&language=").concat(s,"&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=602.212642ae.chunk.js.map