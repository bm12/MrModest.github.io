(this.webpackJsonpcontacts=this.webpackJsonpcontacts||[]).push([[0],{28:function(e,t,a){e.exports={"lang-switcher":"LanguageSwitcher_lang-switcher__Vmanb","lang-switch":"LanguageSwitcher_lang-switch__25b-D",en:"LanguageSwitcher_en__2KJXD",ru:"LanguageSwitcher_ru__2HJlv"}},31:function(e,t,a){e.exports={card:"CardView_card__FIu_P","card-title":"CardView_card-title__1OwXB","card-logo":"CardView_card-logo__285-d","card-activity":"CardView_card-activity__X7iYb","card-comment":"CardView_card-comment__1Dkc2"}},32:function(e,t,a){e.exports={"card-edit":"CardEdit_card-edit__1-3oz","input-edit":"CardEdit_input-edit__3oVC2"}},33:function(e,t,a){e.exports={block:"Block_block__Gscjm","block-container":"Block_block-container__3_NDH"}},34:function(e,t,a){e.exports={copiright:"Footer_copiright__3D_Ga"}},35:function(e,t,a){e.exports={container:"App_container__1MQN3"}},36:function(e,t,a){e.exports=a(69)},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(6);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(9),u=a(27),s=a.n(u),d=a(8),p=a(1),m=a.n(p),f=a(4),g=a(10),E=a.n(g);function h(){return b.apply(this,arguments)}function b(){return(b=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("/data","/cards.json"));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Can't load cards");case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return _.apply(this,arguments)}function _(){return(_=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("/data","/blocks.json"));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Can't load blocks");case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat("/data","/profiles.json"));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Can't load profile");case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h().then((function(e){return{type:"FETCH_CARDS",payload:e}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v().then((function(e){return{type:"FETCH_BLOCKS",payload:e}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w().then((function(e){return{type:"FETCH_PROFILES",payload:e}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return N(null===(navigator.language||navigator.userLanguage).toLowerCase().match("ru")?"en":"ru")}function N(e){return{type:"SET_LANGUAGE",payload:e}}var x=Object(l.c)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CARDS":return t.payload;case"ADD_CARD":return[].concat(Object(d.a)(e),[t.payload]);case"EDIT_CARD":return[].concat(Object(d.a)(e.filter((function(e){return e.id!==t.payload.id}))),[t.payload]);case"DELETE_CARD":return e.filter((function(e){return e.id!==t.payload}));default:return e}},blocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BLOCKS":return t.payload;case"ADD_BLOCK":return[].concat(Object(d.a)(e),[t.payload]);case"EDIT_BLOCK":return[].concat(Object(d.a)(e.filter((function(e){return e.id!==t.payload.id}))),[t.payload]);case"DELETE_BLOCK":return e.filter((function(e){return e.id!==t.payload}));default:return e}},profiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PROFILES":return t.payload;case"EDIT_PROFILE":return[].concat(Object(d.a)(e.filter((function(e){return e.language!==t.payload.language}))),[t.payload]);default:return e}},language:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LANGUAGE":return t.payload;default:return e}},localisation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOCALISATION":return t.payload;default:return e}}}),L=Object(l.d)(x,Object(l.a)(s.a)),D=a(12),T=a(28),A=a.n(T),F=a(5),S=a.n(F),I=S.a.bind(A.a),V=function(){var e=Object(o.b)(),t="en"===Object(o.c)((function(e){return e.language}))?"Language":"\u042f\u0437\u044b\u043a";return r.a.createElement("div",{className:I("lang-switcher")},r.a.createElement("h2",null,t),r.a.createElement("button",{className:I("lang-switch","en"),onClick:function(){return e(N("en"))}},"English"),r.a.createElement("button",{className:I("lang-switch","ru"),onClick:function(){return e(N("ru"))}},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"))},B=a(71);function H(){return r.a.createElement("div",{style:{paddingLeft:"50em",marginTop:"10em",backgroundColor:"grey"}},r.a.createElement(B.a,{animation:"grow",variant:"primary"}),r.a.createElement(B.a,{animation:"grow",variant:"secondary"}),r.a.createElement(B.a,{animation:"grow",variant:"success"}),r.a.createElement(B.a,{animation:"grow",variant:"danger"}),r.a.createElement(B.a,{animation:"grow",variant:"warning"}),r.a.createElement(B.a,{animation:"grow",variant:"info"}),r.a.createElement(B.a,{animation:"grow",variant:"light"}),r.a.createElement(B.a,{animation:"grow",variant:"dark"}))}var R=a(31),G=a.n(R),K=S.a.bind(G.a),J=function(e){var t,a=e.label,n=e.logo,c=e.fullname,i=e.responseTime,o=e.link,l=e.description;return r.a.createElement("a",{className:K("card"),href:o,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h4",{className:K("card-title")},a),r.a.createElement("div",{className:K("card-body")},r.a.createElement("img",{className:K("card-logo"),src:(t=n,"".concat("/data/logos","/").concat(t)),alt:a}),r.a.createElement("div",{className:K("card-content")},r.a.createElement("div",{className:K("card-label")},c),r.a.createElement("div",{className:K("card-activity")},i),r.a.createElement("div",{className:K("card-comment")},l))))},M=a(32),P=a.n(M),X=S.a.bind(P.a),U=function(e){var t=e.label,a=(e.logo,e.fullname),n=e.responseTime,c=e.link,i=e.description;return r.a.createElement("div",{className:X("card-edit")},r.a.createElement("div",{className:"card-edit__logo"},r.a.createElement("img",{className:"card-edit__logo-preview",alt:"logo preview"}),r.a.createElement("input",{type:"file",name:"logoFile"})),r.a.createElement("input",{className:X("input-edit"),type:"text",defaultValue:t}),r.a.createElement("input",{className:X("input-edit"),type:"text",defaultValue:c}),r.a.createElement("input",{className:X("input-edit"),type:"text",defaultValue:a}),r.a.createElement("input",{className:X("input-edit"),type:"text",defaultValue:n}),r.a.createElement("textarea",{defaultValue:i}))},W=function(e){return"en"===Object(o.c)((function(e){return e.language}))?r.a.createElement(J,e):r.a.createElement(U,e)},z=a(33),Q=a.n(z),Y=S.a.bind(Q.a),$=function(e){var t=e.id,a=e.title,c=Object(o.c)(Object(n.useMemo)((function(){return e=t,Object(D.a)((function(e){return e.cards}),(function(e){return e.language}),(function(t,a){return t.filter((function(t){return t.language===a&&t.blockId===e}))}));var e}),[t]));return r.a.createElement("div",{className:Y("block")},r.a.createElement("h3",null,a),r.a.createElement("div",{className:Y("block-container")},c.map((function(e){return r.a.createElement(W,Object.assign({key:e.id},e))}))))},q=a(34),Z=a.n(q),ee=S.a.bind(Z.a);function te(){return r.a.createElement("footer",null,r.a.createElement("div",{className:ee("copiright")},"Inspired by: \xa0",r.a.createElement("a",{href:"https://github.com/Gjmrd/gjmrd.github.io",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("u",null,"gjmrd.github.io")),r.a.createElement("br",null),"But rewritten with only functional components and hooks."))}var ae=a(35),ne=a.n(ae),re=S.a.bind(ne.a),ce=Object(D.a)((function(e){return e.blocks}),(function(e){return e.language}),(function(e,t){return e.filter((function(e){return e.language===t}))}));var ie=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(function(){return O.apply(this,arguments)}()),e(function(){return k.apply(this,arguments)}()),e(function(){return C.apply(this,arguments)}()),e(j()),document.title="MrModest | Contacts"}),[]);var t=Object(o.c)(ce);return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(V,null)),r.a.createElement("hr",null),r.a.createElement("div",{className:re("container")},t.map((function(e){return r.a.createElement($,Object.assign({key:e.id},e))}))),r.a.createElement("hr",null),r.a.createElement(te,null)):r.a.createElement(H,null)};a(68);i.a.render(r.a.createElement(o.a,{store:L},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a52c2d15.chunk.js.map