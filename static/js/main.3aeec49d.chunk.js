(this["webpackJsonprobo-friends-app"]=this["webpackJsonprobo-friends-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),i=(n(13),n(5)),o=n(6),a=n(8),h=n(7),l=(n(14),n(3),n(0)),b=function(e){return Object(l.jsxs)("div",{className:" bg-light-pink dib br3 pa1 ma2 grow bw2 shadow-3",children:[Object(l.jsx)("img",{alt:"robot",src:"https://robohash.org/ ".concat(e.id," ?200x200")}),Object(l.jsx)("h4",{children:e.name}),Object(l.jsx)("p",{children:e.email})]})},d=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(b,{id:e.id,email:e.email,name:e.name},e.id)}))})};var j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"search",placeholder:"search robots",className:"pa2 ma3 b--white bg-lightest-blue",onChange:t})})},u=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",height:"600px",borderTop:"1px solid grey"},children:e.children})},f=(n(16),function(){return Object(l.jsx)("div",{className:"bg-white pa1 ",id:"cont",children:Object(l.jsx)("h4",{children:"By Ur Designer"})})}),p=function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearch=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(l.jsx)("h1",{className:"tc",children:"loading..."}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f2",children:"Robofriends"}),Object(l.jsx)(j,{searchChange:this.onSearch}),Object(l.jsx)(u,{children:Object(l.jsx)(d,{robots:t})}),Object(l.jsx)(f,{})]})}}]),n}(c.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};s.a.render(Object(l.jsx)("div",{children:Object(l.jsx)(p,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.3aeec49d.chunk.js.map