(this.webpackJsonpinshort=this.webpackJsonpinshort||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),i=n.n(s),a=(n(23),n(24),n(25),n(6)),o=n.n(a),u=n(16),j=n(18),l=n(17),b=n.n(l),h=n(0),d=function(e){var t=e.title,n=e.description,c=e.url,r=e.urlToImage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"news_items",children:[Object(h.jsx)("img",{className:"news_img",src:r,alt:"NewsImg"}),Object(h.jsxs)("h3",{children:[Object(h.jsx)("a",{href:c}),t]}),Object(h.jsx)("p",{children:n})]})})},f=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"top",children:Object(h.jsx)("h1",{children:"Inshorts"})})})},p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=27a5f4e8e5cc41c195272be08e4cf1b1");case 2:t=e.sent,r(t.data.articles),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),n.map((function(e){var t=e.title,n=e.description,c=e.url,r=e.urlToImage;return Object(h.jsx)(d,{title:t,description:n,url:c,urlToImage:r})}))]})};var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.af3860d4.chunk.js.map