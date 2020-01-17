(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){e.exports=n(45)},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),c=n.n(o),i=(n(36),n(3)),l=n(4),u=n(6),s=n(5),p=n(7),m=n(1),d={color:{bg:"#eee",primary:"#48ea99",secondary:"#aaa",success:"",danger:"crimson",warning:""}},h=n(12),b=n(13),f=n(2);function g(){var e=Object(f.a)(["\n    font-size: 50px;\n    color: black;\n    font-weight:bold;\n    text-decoration: none;\n    &:hover{\n        color:grey;\n    }\n"]);return g=function(){return e},e}var y=Object(m.b)(h.b)(g()),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{style:{textAlign:"center"}},"Strona G\u0142\xf3wna"),a.a.createElement("hr",null),a.a.createElement("div",{style:{width:"100%",textAlign:"center"}},a.a.createElement(y,{className:"return",to:"/login"},"LOGIN")))}}]),t}(a.a.Component),j=n(17),k=(n(43),"http://localhost:7000"),x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={inputLogin:"",inputPassword:"",token:"",player:{error:""}},n.login=n.login.bind(Object(j.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"login",value:function(e){var t=this;fetch(k+"/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:'{"login":"'+this.state.inputLogin+'","password":"'+this.state.inputPassword+'"}'}).then(function(e){return e.json()}).then(function(e){return t.setState({token:e})}).then(function(){return t.parseJwt(t.state.token)}).then(function(e){return t.setState({player:e})}).then(function(){return localStorage.setItem("token",t.state.token)}).then(function(){t.state.player.success&&t.props.history.push("/panel")})}},{key:"setInputPassword",value:function(e){this.setState({inputPassword:e.target.value})}},{key:"setInputLogin",value:function(e){this.setState({inputLogin:e.target.value})}},{key:"parseJwt",value:function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(n)}},{key:"render",value:function(){var e,t=this;return""===this.state.player.error&&(e=""),"Bad password"===this.state.player.error&&(e="Z\u0142e has\u0142o!"),"Bad login"===this.state.player.error&&(e="Z\u0142e has\u0142o!"),"Login is null"===this.state.player.error&&(e="Prosz\u0119 wype\u0142ni\u0107 wszystkie pola!"),"db error"===this.state.player.error&&(e="B\u0142\u0105d bazy danych! Skontaktuj si\u0119 z administratorem"),a.a.createElement(a.a.Fragment,null,a.a.createElement("article",null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"grid-container"},a.a.createElement("h2",null,"Logowanie"),a.a.createElement("form",null,a.a.createElement("input",{onChange:function(e){return t.setInputLogin(e)},name:"login",placeholder:"Nazwa u\u017cytkownika",className:"text"}),a.a.createElement("input",{onChange:function(e){return t.setInputPassword(e)},name:"password",value:this.state.inputPassword,type:"password",placeholder:"Has\u0142o",className:"text"}),a.a.createElement("button",{onClick:function(){return t.login()},type:"button",className:"submit"},"Zaloguj")),a.a.createElement("span",{className:"error",style:{color:"red"}},e)))))}}]),t}(r.Component);function E(){var e=Object(f.a)(["\n    display:flex;\n    align-items:center;\n    justify-content:center;\n"]);return E=function(){return e},e}function O(){var e=Object(f.a)(["\n    font-size:30px;\n    text-decoration:none;\n    color:black;\n    font-weight:bold;\n    position:absolute;\n    bottom:20px;\n    &:hover{\n        color:grey;\n    }\n\n"]);return O=function(){return e},e}var w=Object(m.b)(h.b)(O()),S=m.b.div(E()),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(S,null,a.a.createElement(x,{history:this.props.history}),a.a.createElement(w,{className:"return",to:"/"},"WR\xd3\u0106"))}}]),t}(a.a.Component);var z=function(e){if(null===e)return"";var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(n)};function N(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    padding:15px;\n    border-radius:50px;\n    background-color: ",";\n    border:none;\n    outline:none;\n    font-size:20px;\n    color:white;\n    position:relative;\n    margin-bottom:20px;\n"]);return N=function(){return e},e}function I(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    outline:none;\n    border:none;\n    border-radius: 50px;\n    padding:15px;\n    color:white;\n    font-size:20px;\n    margin-top:20px;\n    background-color: ",";\n    &:nth-of-type(2) {\n        margin-top:100px;\n        background-color:  ",";}\n    &:last-of-type {background-color:  ",";}\n"]);return I=function(){return e},e}function A(){var e=Object(f.a)(["\n   display:grid;\n   text-align:center;\n   grid-template-columns:1fr minmax(200px,1fr) 1fr;\n"]);return A=function(){return e},e}function P(){var e=Object(f.a)(["\n    grid-column-start: 2;\n    margin-bottom: 20px;\n    border-bottom: 1px solid black;\n    padding: 15px;\n    display:flex;\n    input{\n        margin-right:15px;\n        appearance: none;\n        border: 1px solid black;\n        border-radius: 500px;\n        outline: none;\n        transition: border-width 0.2s ease-in-out;\n        width:20px;\n        height:20px;\n        &:checked{\n            border: 5px solid black; \n        }\n        &:hover{\n            border: 3px solid black; \n            &:checked{\n                border: 5px solid black; \n            }\n        }\n    }\n"]);return P=function(){return e},e}var T=m.b.div(P()),L=m.b.div(A()),W=m.b.button(I(),function(e){return e.theme.color.secondary},function(e){return e.theme.color.primary},function(e){return e.theme.color.danger}),B=m.b.button(N(),function(e){return e.theme.color.secondary}),F=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={characters:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;null===localStorage.getItem("token")&&this.props.history.push("/login");var t=k+"/character/"+z(localStorage.getItem("token")).id;fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(t){if(403!==t.status)return t.json();e.props.history.push("/login")}).then(function(t){return e.setState({characters:t})}).then(function(){return e.forceUpdate()})}},{key:"logout",value:function(){localStorage.clear(),window.location.reload()}},{key:"render",value:function(){var e=this,t=z(localStorage.getItem("token")).login;return"object"==typeof this.state.characters?a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"Witaj ",t,"!"),a.a.createElement(L,null,this.state.characters.error?a.a.createElement(T,{style:{textAlign:"center",fontSize:"20px",fontWeight:"bold",display:"block"}},"BRAK POSTACI"):this.state.characters.map(function(e,t){return a.a.createElement(T,{key:t},a.a.createElement("input",{type:"radio",name:"char",id:"",value:e.id}),e.nickname)}),a.a.createElement("br",null),a.a.createElement(B,{onClick:function(){return e.props.history.push("new-character")}},"Nowa posta\u0107"),a.a.createElement("br",null),a.a.createElement(W,{onClick:function(){window.location="gra"}},"Graj"),a.a.createElement(W,{onClick:function(){document.querySelector("input[name=char]:checked")?window.location.href="/character?id="+document.querySelector("input[name=char]:checked").value:e.setState({err:"Wybierz posta\u0107!"})}},"Zobacz"),a.a.createElement(W,{onClick:function(){return e.logout()}},"Wyloguj"),a.a.createElement("span",{style:{color:"red",gridColumnStart:"2",marginTop:"20px"}},this.state.err))):a.a.createElement(a.a.Fragment,null)}}]),t}(r.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(F,{history:this.props.history,userObject:{success:!1}}))}}]),t}(a.a.Component);function q(){var e=Object(f.a)(["\n    text-align:center;\n"]);return q=function(){return e},e}function J(){var e=Object(f.a)(["\n    grid-column: 1/2;\n    position:relative;\n    &:last-child{\n        grid-column: 2/3;\n    }\n"]);return J=function(){return e},e}function D(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    position:relative;\n    &:nth-child(-n+3){\n        grid-column: 1/2;\n        &:nth-child(1){grid-row: 1/2;}\n        &:nth-child(2){grid-row: 2/3;}\n        &:nth-child(3){grid-row: 3/4;}\n    }\n"]);return D=function(){return e},e}function G(){var e=Object(f.a)(["\n    display:inline-block;\n    position:absolute;\n    top: 2px;\n"]);return G=function(){return e},e}function U(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    font-size:20px;\n    border:none;\n    background-color: ",";\n    border-radius:50px;\n    padding:15px;\n    color:white;\n    margin-top:20px;\n    &:first-of-type{\n        background-color:",";\n    }\n"]);return U=function(){return e},e}function M(){var e=Object(f.a)(["\n    display: inline-block;\n    appearance: none;\n    border-radius:50px;\n    border: 1px solid black;\n    width:20px;\n    margin-right:15px;\n    height:20px;\n    outline:none;\n    transition: border-width 0.2s ease-in-out;\n    &:checked{\n        border:5px solid black;\n    }\n    &:hover{\n        border:3px solid black;\n        &:checked{\n            border:5px solid black;\n        }\n    }\n"]);return M=function(){return e},e}function R(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    padding:15px;\n    font-size:20px;\n    outline:none;\n    background-color: ",";\n    text-align:center;\n    border:none;\n    border-bottom:1px solid black;\n    "]);return R=function(){return e},e}function Z(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    border-bottom: 1px solid black;\n    padding:15px;\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto auto;\n"]);return Z=function(){return e},e}function $(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    border-bottom: 1px solid black;\n    padding:15px;\n    display:grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto auto;\n"]);return $=function(){return e},e}function _(){var e=Object(f.a)(["\n    display:grid;\n    grid-template-columns:1fr minmax(200px,1fr) 1fr;\n"]);return _=function(){return e},e}var H=m.b.form(_()),Q=m.b.div($()),V=m.b.div(Z()),X=m.b.input(R(),function(e){return e.theme.color.bg}),Y=m.b.input(M()),ee=m.b.button(U(),function(e){return e.theme.color.danger},function(e){return e.theme.color.primary}),te=m.b.div(G()),ne=m.b.div(D()),re=m.b.div(J()),ae=m.b.h1(q()),oe=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={error:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;null===localStorage.getItem("token")&&this.props.history.push("/login"),document.querySelector(".form").addEventListener("submit",function(t){t.preventDefault(),fetch(k+"/character",{method:"post",body:JSON.stringify({name:document.querySelector(".name").value,class:null!==document.querySelector("input[name=class]:checked")?document.querySelector("input[name=class]:checked").value:"",sex:null!==document.querySelector("input[name=sex]:checked")?document.querySelector("input[name=sex]:checked").value:""}),headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(t){if(403!==t.status)return t.json();e.props.history.push("/login")}).then(function(e){return z(e)}).then(function(t){return e.setState({error:t.error,success:t.success})}).then(function(){return e.forceUpdate()}).then(function(){e.state.success&&e.props.history.push("/panel")})})}},{key:"render",value:function(){var e=this,t="";return""==this.state.error?t="":"Some fields are empty"==this.state.error?t="Wype\u0142nij wszystkie pola":"This character already exist"==this.state.error?t="Posta\u0107 o takiej nazwie ju\u017c istnieje :/":"Form values are invalid"==this.state.error&&(t="Kto\u015b zhackowa\u0142 htmela :D"),a.a.createElement(a.a.Fragment,null,a.a.createElement(ae,null,"Tworzenie postaci:"),a.a.createElement(H,{className:"form"},a.a.createElement(X,{className:"name",name:"name",placeholder:"Wpisz nazw\u0119 postaci"}),a.a.createElement(V,null,a.a.createElement(ne,null,a.a.createElement(Y,{type:"radio",className:"class",name:"class",value:"1"}),a.a.createElement(te,null,"Klasa1")),a.a.createElement(ne,null,a.a.createElement(Y,{type:"radio",className:"class",name:"class",value:"2"}),a.a.createElement(te,null,"Klasa2")),a.a.createElement(ne,null,a.a.createElement(Y,{type:"radio",className:"class",name:"class",value:"3"}),a.a.createElement(te,null,"Klasa3")),a.a.createElement(ne,null,a.a.createElement(Y,{type:"radio",className:"class",name:"class",value:"4"}),a.a.createElement(te,null,"Klasa4")),a.a.createElement(ne,null,a.a.createElement(Y,{type:"radio",className:"class",name:"class",value:"5"}),a.a.createElement(te,null,"Klasa5")),a.a.createElement(ne,null,a.a.createElement(Y,{type:"radio",className:"class",name:"class",value:"6"}),a.a.createElement(te,null,"Klasa6"))),a.a.createElement(Q,null,a.a.createElement(re,null,a.a.createElement(Y,{type:"radio",className:"sex",name:"sex",value:"m"}),a.a.createElement(te,null,"M\u0119\u017cczyzna")),a.a.createElement(re,null,a.a.createElement(Y,{type:"radio",className:"sex",name:"sex",value:"f"}),a.a.createElement(te,null,"Kobieta"))),a.a.createElement(ee,{className:"submit",type:"submit"},"Stw\xf3rz"),a.a.createElement(ee,{onClick:function(){e.props.history.push("/panel")}},"Wr\xf3\u0107"),a.a.createElement("span",{style:{color:"red",textAlign:"center",gridColumnStart:"2",marginTop:"20px"}},t)))}}]),t}(a.a.Component),ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(oe,{history:this.props.history}))}}]),t}(a.a.Component);var ie=function(e){var t=e?e.split("?")[1]:window.location.search.slice(1),n={};if(t)for(var r=(t=t.split("#")[0]).split("&"),a=0;a<r.length;a++){var o=r[a].split("="),c=o[0],i="undefined"===typeof o[1]||o[1];if(c=c.toLowerCase(),"string"===typeof i&&(i=i.toLowerCase()),c.match(/\[(\d+)?\]$/)){var l=c.replace(/\[(\d+)?\]/,"");if(n[l]||(n[l]=[]),c.match(/\[\d+\]$/)){var u=/\[(\d+)\]/.exec(c)[1];n[l][u]=i}else n[l].push(i)}else n[c]?n[c]&&"string"===typeof n[c]?(n[c]=[n[c]],n[c].push(i)):n[c].push(i):n[c]=i}return n};function le(){var e=Object(f.a)(["\n    grid-column: 2/3;\n    padding:15px;\n    border-bottom: 1px solid black;\n    &:last-of-type{\n        margin-bottom:30px;\n    }\n"]);return le=function(){return e},e}function ue(){var e=Object(f.a)(["\n    display:grid;\n    grid-template-columns:1fr minmax(200px, 1fr) 1fr;\n    /* text-align:center; */\n"]);return ue=function(){return e},e}function se(){var e=Object(f.a)(["\n    font-size:20px;\n    padding:15px;\n    grid-column: 2/3;\n    background-color: crimson;\n    color:white;\n    text-decoration:none;\n    border-radius:50px;  \n    text-align:center;\n"]);return se=function(){return e},e}var pe=Object(m.b)(h.b)(se()),me=m.b.div(ue()),de=m.b.div(le()),he=[],be=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;null===localStorage.getItem("token")&&this.props.history.push("/login");var t=k+"/character/"+z(localStorage.getItem("token")).id;fetch(t,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")}}).then(function(t){if(403!==t.status)return t.json();e.props.history.push("/login")}).then(function(e){return he=e}).then(function(){}).then(function(){return e.forceUpdate()})}},{key:"render",value:function(){var e=[];return"Bad Id"==he.error?e[0]="Posta\u0107 nie istnieje":(he.map(function(t){t.id==ie().id&&(e=t)}),void 0!==e.length&&(e[0]="Posta\u0107 nie istnieje")),a.a.createElement(me,null,Object.values(e).map(function(t,n){return a.a.createElement(de,{key:n},Object.keys(e)[n]," : ",t)}),a.a.createElement(pe,{to:"/panel"},"Wr\xf3\u0107"))}}]),t}(a.a.Component),fe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(be,{history:this.props.history}))}}]),t}(a.a.Component),ge=(n(44),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,{theme:d},a.a.createElement(h.a,null,a.a.createElement(b.a,{exact:!0,path:"/",component:v}),a.a.createElement(b.a,{exact:!0,path:"/login",component:C}),a.a.createElement(b.a,{exact:!0,path:"/panel",component:K}),a.a.createElement(b.a,{exact:!0,path:"/character",component:fe}),a.a.createElement(b.a,{exact:!0,path:"/new-character",component:ce})))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.e909f645.chunk.js.map