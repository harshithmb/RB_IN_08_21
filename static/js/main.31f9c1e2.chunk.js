(this["webpackJsonpmy-app-routing"]=this["webpackJsonpmy-app-routing"]||[]).push([[0],{35:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(29),i=n.n(r),s=(n(35),n(10)),o=n(2),j=n(1),d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{children:"Home Component"})})},u=function(){return Object(j.jsx)("header",{className:"d-flex justify-content-center py-3",children:Object(j.jsxs)("ul",{className:"nav nav-pills",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{className:"nav-link active",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{className:"nav-link",to:"/contact",children:"Contact"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"/about",className:"nav-link",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{href:"/products",className:"nav-link",children:"Products"})})]})})},h=function(){return Object(j.jsx)("h1",{children:"About"})},l=function(){return Object(j.jsx)("h1",{children:"Contact"})},b=n(11),p=n(12),O=n(15),m=n(14),x=n(13),v=n.n(x),f=function(t){Object(O.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(b.a)(this,n),(c=e.call(this,t)).state={products:[]},c}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this;v()("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then((function(e){return t.setState({products:e.data})}))}},{key:"render",value:function(){var t=this.state.products;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Products"}),Object(j.jsx)("div",{children:t.length&&t.map((function(t,e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:t.preview,width:"300"}),Object(j.jsx)("h5",{children:t.name})]})}))})]})}}]),n}(c.Component),k=function(t){Object(O.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(b.a)(this,n),(c=e.call(this,t)).state={product:{}},c}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.productid;v()("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+e).then((function(e){return t.setState({product:e.data})}))}},{key:"render",value:function(){var t=this.state.product,e=(t.brand,t.description),n=void 0===e?"":e,c=(t.id,t.name),a=void 0===c?"":c;t.photos,t.preview;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:a}),Object(j.jsx)("h2",{children:n})]})}}]),n}(c.Component),g=function(){return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(u,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,component:d}),Object(j.jsx)(o.a,{path:"/about",component:h}),Object(j.jsx)(o.a,{path:"/products",component:f}),Object(j.jsx)(o.a,{path:"/product/:productid",component:k}),Object(j.jsx)(o.a,{path:"/contact",component:l})]})]})},N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.31f9c1e2.chunk.js.map