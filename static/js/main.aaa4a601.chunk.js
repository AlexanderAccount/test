(this.webpackJsonptable=this.webpackJsonptable||[]).push([[0],{134:function(e,t,n){},135:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(43),r=n.n(i),c=n(42),o=(n(134),n(14)),d=(n(135),n(12)),l=n(237),j=n(240),b=n(241),g=n(233),h=n(239),u=n(231),m=n(223),x=n(232),O=n(227),w=n(235),p=n(236),f=n(238),v=n(234),S=n(221),A=n(242),k=n(226),I=n(107),C=n.n(I),y=n(106),N=n.n(y),P=n(105),D=n.n(P),R=n(103),B=n.n(R);function J(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){B.a.get("https://yesno.wtf/api").then((function(e){var t=e.data;s(t.answer)}))}),[]),null===n?"...":"yes"===n?"Active":"-"}var M=n(1);function T(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function E(e,t){return"desc"===e?function(e,n){return T(e,n,t)}:function(e,n){return-T(e,n,t)}}function q(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}var U=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"age",numeric:!0,disablePadding:!1,label:"Age"}];function z(e){var t=e.onAddClick,n=e.order,a=e.orderBy,s=e.onRequestSort;return Object(M.jsx)(u.a,{children:Object(M.jsxs)(x.a,{children:[Object(M.jsx)(g.a,{id:"index",align:"right",padding:"normal",children:"\u2116"}),Object(M.jsx)(g.a,{id:"avatar",align:"right",padding:"normal"}),U.map((function(e){return Object(M.jsx)(g.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&n,children:Object(M.jsx)(O.a,{active:a===e.id,direction:a===e.id?n:"asc",onClick:(t=e.id,function(e){s(e,t)}),children:e.label})},e.id);var t})),Object(M.jsx)(g.a,{id:"state",align:"right",padding:"normal",children:"State"}),Object(M.jsx)(g.a,{align:"right",children:Object(M.jsx)(S.a,{title:"Add",children:Object(M.jsx)(v.a,{onClick:t,children:Object(M.jsx)(D.a,{})})})})]})})}var F=function(e){return Object(M.jsx)(w.a,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:Object(M.jsx)(p.a,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Users"})})},V=function(){for(var e,t,n=[],a=0;a<window.sessionStorage.length;a++)n[a]=(e=window.sessionStorage.key(a),t=window.sessionStorage.getItem(window.sessionStorage.key(a)),{name:e,age:t});return n};function W(){var e=a.useState("asc"),t=Object(d.a)(e,2),n=t[0],s=t[1],i=a.useState("name"),r=Object(d.a)(i,2),c=r[0],u=r[1],O=a.useState(0),w=Object(d.a)(O,2),p=w[0],I=w[1],y=a.useState(!1),P=Object(d.a)(y,2),D=P[0],R=P[1],B=a.useState(5),T=Object(d.a)(B,2),U=T[0],W=T[1],G=a.useState(V),H=Object(d.a)(G,2),K=H[0],L=H[1],Q=Object(o.f)(),X=p>0?Math.max(0,(1+p)*U-K.length):0;return Object(M.jsxs)(l.a,{sx:{width:"80%",margin:"auto",marginTop:2},children:[Object(M.jsxs)(f.a,{sx:{width:"100%",mb:2},children:[Object(M.jsx)(F,{}),Object(M.jsx)(h.a,{children:Object(M.jsxs)(j.a,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:D?"small":"medium",children:[Object(M.jsx)(z,{order:n,orderBy:c,onAddClick:function(e){Q("/edit")},onRequestSort:function(e,t){s(c===t&&"asc"===n?"desc":"asc"),u(t)}}),Object(M.jsxs)(b.a,{children:[q(K,E(n,c)).slice(p*U,p*U+U).map((function(e,t){var n="enhanced-table-checkbox-".concat(t);return Object(M.jsxs)(x.a,{tabIndex:-1,children:[Object(M.jsx)(g.a,{align:"right",children:t+U*p+1}),Object(M.jsx)(g.a,{align:"right",children:Object(M.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(e.name+e.age,".svg"),alt:"--",width:"30"})}),Object(M.jsx)(g.a,{component:"th",id:n,scope:"row",padding:"none",children:e.name}),Object(M.jsx)(g.a,{align:"right",children:e.age}),Object(M.jsx)(g.a,{align:"right",children:Object(M.jsx)(J,{})}),Object(M.jsx)(g.a,{align:"right",children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(S.a,{title:"Edit",children:Object(M.jsx)(v.a,{onClick:function(t){return function(e,t){Q("/edit/".concat(t.name,"/").concat(t.age))}(0,e)},children:Object(M.jsx)(N.a,{color:"info"})})}),Object(M.jsx)(S.a,{title:"Delete",children:Object(M.jsx)(v.a,{onClick:function(t){return n=e.name,window.sessionStorage.removeItem(n),void L(V);var n},children:Object(M.jsx)(C.a,{color:"info"})})})]})})]},e.name)})),X>0&&Object(M.jsx)(x.a,{style:{height:(D?33:53)*X},children:Object(M.jsx)(g.a,{colSpan:6})})]})]})}),Object(M.jsx)(m.a,{rowsPerPageOptions:[5,10,25],component:"div",count:K.length,rowsPerPage:U,page:p,onPageChange:function(e,t){I(t)},onRowsPerPageChange:function(e){W(parseInt(e.target.value,10)),I(0)}})]}),Object(M.jsx)(A.a,{control:Object(M.jsx)(k.a,{checked:D,onChange:function(e){R(e.target.checked)}}),label:"Dense padding"})]})}var G=n(87),H=n(74),K=n(75),L=n(111),Q=n(109),X=n(224),Y=n(243),Z=n(229),$=n(228),_=function(e){Object(L.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(H.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={userName:e.props.params.name,userAge:e.props.params.age},e.handleChangeName=function(t){var n=t.target.value;e.setState({userName:n})},e.handleChangeAge=function(t){var n=t.target.value;e.setState({userAge:n})},e.handleSubmitClick=function(){var t=e.props.navigate;window.sessionStorage.setItem(e.state.userName,e.state.userAge),t("/")},e}return Object(K.a)(n,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.userAge;return Object(M.jsxs)(Y.a,{sx:{marginTop:2,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(M.jsx)($.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(M.jsx)("img",{src:"https://avatars.dicebear.com/api/bottts/".concat(t+n,".svg"),alt:"Avatar",width:"60"})}),Object(M.jsx)(X.a,{id:"userNameID",name:"userName",label:"User Name",variant:"standard",value:t,onChange:this.handleChangeName,error:this.state.errorName}),Object(M.jsx)(X.a,{id:"userAgeID",type:"text",name:"userAge",label:"Age",variant:"standard",value:n,onChange:this.handleChangeAge}),Object(M.jsx)(Z.a,{type:"submit",variant:"contained",sx:{mt:3,mb:2},onClick:this.handleSubmitClick,children:"Save"})]})}}]),n}(s.a.Component);function ee(e){var t=Object(o.f)(),n=Object(o.g)();return Object(M.jsx)(_,Object(G.a)(Object(G.a)({},e),{},{navigate:t,params:n}))}function te(){for(var e=0;e<window.sessionStorage.length;e++)window.sessionStorage.removeItem(window.sessionStorage.key(e))}function ne(){for(;window.sessionStorage.length>0;)te();window.location.reload()}function ae(){ne(),window.sessionStorage.setItem("Alexander",41),window.sessionStorage.setItem("Alexey",7),window.sessionStorage.setItem("Anna",39),window.sessionStorage.setItem("Misha",10),window.sessionStorage.setItem("Dmitriy",47),window.sessionStorage.setItem("Jason",22),window.sessionStorage.setItem("Piter",21),window.sessionStorage.setItem("Bill",60),window.sessionStorage.setItem("Robert",30),window.sessionStorage.setItem("Muhamed",33),window.sessionStorage.setItem("Jenifer",29),window.sessionStorage.setItem("Alexander2",40),window.sessionStorage.setItem("Anna2",44),window.location.reload()}var se=function(){return Object(M.jsxs)("div",{className:"App",children:[Object(M.jsxs)("header",{children:[Object(M.jsx)(c.b,{className:"App-link",to:"/",onClick:ne,children:"Clear"}),Object(M.jsx)("span",{children:" | "}),Object(M.jsx)(c.b,{className:"App-link",to:"/",onClick:ae,children:"Refill"}),Object(M.jsx)("span",{children:" | "}),Object(M.jsx)(c.b,{className:"App-link",to:"/",children:"View"})]}),Object(M.jsxs)(o.c,{children:[Object(M.jsx)(o.a,{path:"/",element:Object(M.jsx)(W,{})}),Object(M.jsx)(o.a,{path:"/edit/:name/:age",element:Object(M.jsx)(ee,{})}),Object(M.jsx)(o.a,{path:"/edit/",element:Object(M.jsx)(ee,{})})]})]})};r.a.render(Object(M.jsx)(s.a.StrictMode,{children:Object(M.jsx)(c.a,{basename:"/test",children:Object(M.jsx)(se,{})})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.aaa4a601.chunk.js.map