(this.webpackJsonpmy_trip=this.webpackJsonpmy_trip||[]).push([[0],{45:function(e,t,n){e.exports=n.p+"static/media/idea.d4ed3d26.svg"},46:function(e,t,n){e.exports=n.p+"static/media/logout.2252c0c5.svg"},47:function(e,t,n){e.exports=n.p+"static/media/pen.76706925.svg"},48:function(e,t,n){e.exports=n.p+"static/media/twitter.fe9e349f.svg"},49:function(e,t,n){e.exports=n.p+"static/media/logo.9ab12772.svg"},52:function(e,t,n){e.exports=n.p+"static/media/plus.1e71bac7.svg"},53:function(e,t,n){e.exports=n.p+"static/media/chain.b76bfe5b.svg"},54:function(e,t,n){e.exports=n.p+"static/media/rubbish.bf60e5e3.svg"},56:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(26),o=n.n(i),c=n(15),l=n(11),u=n(8),s=n(55),d=n(18),p=n(19),f=n(21),m=n(20),h=n(1),b=n(2);function g(){var e=Object(b.a)(["\nnpm run deploy\n\n*, *::before, *::after{\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n  \n  html {\n    font-size: 62.5%; \n  }\n\nbody {\n  padding-left: 120px;\n  font-family:  sans-serif;\n  font-size: 1.6rem;\n\n}"]);return g=function(){return e},e}var v=Object(h.b)(g()),x=a.a.createContext("notes"),y={notes:"#E5E3E1",twitters:"#CEDBDA",articles:"#D5C3BF",sidebar:"#A2ABB5",listColor:"#F8D2CE",lightGray:"#F0F0F0",darkGray:"#EBF0EC",light:500,bold:700,fontSize:{xxs:"1rem",xs:"1.2rem",s:"1.6rem",m:"2.1rem",l:"2.4rem",xl:"4rem"}},w=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={pageType:"notes"},e.setCurrentPage=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=["twitters","articles","notes"],r=e.props.location.pathname,a=n.filter((function(e){return r.includes(e)})),i=Object(s.a)(a,1),o=i[0];t.pageType!==o&&e.setState({pageType:o})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setCurrentPage()}},{key:"componentDidUpdate",value:function(e,t){this.setCurrentPage(t)}},{key:"render",value:function(){var e=this.props.children,t=this.state.pageType;return a.a.createElement("div",null,a.a.createElement(x.Provider,{value:t},a.a.createElement(v,null),a.a.createElement(h.a,{theme:y},e)))}}]),n}(r.Component),E=Object(l.g)(w),O=n(27),k=n(23),j=n(37),C=n(24),T={twitters:[{id:1,title:"Temporary changes",content:"We\u2019re experiencing high call volume. If you\u2019re not scheduled to travel in the next several days, please wait to call our Reservations team so they can better help those needing immediate assistance. If you want to cancel your trip, you can do it so. ",twitterName:"americanair"},{id:2,title:"Special chartered flight",content:"The embassy is working to arrange a special chartered flight for US citizens and their families departing Dhaka. The flight is not yet authorized or confirmed, but they are targeting April 21",twitterName:"TravelGov"},{id:3,title:"Working hours of Embassy",content:"The U.S. Embassy will maintain normal working hours March 29 to April 2, 2020 and thereafter, including American Citizen Services appointments and emergency services. ",twitterName:"usembassydhaka"},{id:4,title:"MileagePlus Premier",content:"We are extending current MileagePlus Premier status levels to January 31, 2022 and lowering thresholds for status to help you reach an even higher tier. Learn more about the other steps we\u2019re taking, like extending PlusPoints, to thank you for your loyalty",twitterName:"@united"}],articles:[{id:1,title:"The 29 Best Travel Apps in 2020",content:"Whether you are heading off on a gap year, packing light for a couple of weeks summer break or getting stuck into the culture of a country for the foreseeable, there is one thing we all have in common: the smartphone.",articleUrl:"https://www.danflyingsolo.com/best-apps-for-travel/"},{id:2,title:"Essential Travel Items",content:"Wondering what to pack for your first big trip abroad? It\u2019s not always easy to pack the essential travel items only! Especially if you\u2019re a beginner in the backpacking world. Welcome!",articleUrl:"https://abrokenbackpack.com/2018/07/19/essential-travel-items/"},{id:3,title:"The World\u2019s Best Islands Awards",content:"Some of the world\u2019s best islands got chosen for their unique nature or cultural significance. And others for their mouthwatering luxury and photo-worthiness.",articleUrl:"https://mylifesamovie.com/worlds-best-islands-awards/"},{id:4,title:"Iran is NOT What You Think!",content:"When we (Americans) think about Iran, we tend to only think of negative things such as terrorism.  But what about the 80 million innocent locals who live across this fascinating country?",articleUrl:"https://youtube.com/helloroman"}],notes:[{id:1,title:"Immigration prep",content:"US Citizens can research visa rules at travel.state.gov, plus required documents, current warnings, vax needed, and local embassy details."},{id:2,title:"Submit a debit card travel notice",content:"Submit a travel notice to my bank with the country or countries of travel so that they are aware of the travel plans, all my bank cards will work when I arrive, and my transactions won't be tagged fraud."},{id:3,title:"Download stuff",content:"Download fun movies or interesting documentaries for offline viewing during travel. Download books!"},{id:4,title:"Passport",content:"Check the expiration date of the passport now, and if I need to renew, check the U.S. Department of State\u2019s website to find the nearest passport facility."}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return Object(C.a)({},e,Object(k.a)({},t.payload.itemType,[].concat(Object(j.a)(e[t.payload.itemType]),[t.payload.item])));case"REMOVE_ITEM":return Object(C.a)({},e,Object(k.a)({},t.payload.itemType,Object(j.a)(e[t.payload.itemType].filter((function(e){return e.id!==t.payload.id})))));default:return e}},z=Object(O.b)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function N(){var e=Object(b.a)(["\n      width: 40px;\n      height: 40px;\n    "]);return N=function(){return e},e}function S(){var e=Object(b.a)(["\n  display: block;\n  width: 60px;\n  height: 60px;\n  border-radius: 20px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 60%;\n  border: none;\n  &.active {\n    background-color: white;\n  }\n\n  ","\n"]);return S=function(){return e},e}var B=h.d.button(S(),(function(e){return e.icon}),(function(e){return e.card&&Object(h.c)(N())})),D=n(45),_=n.n(D),P=n(46),U=n.n(P),A=n(47),M=n.n(A),V=n(48),W=n.n(V),F=n(49),G=n.n(F),R=function(e){return function(t){return a.a.createElement(x.Consumer,null,(function(n){return a.a.createElement(e,Object.assign({},t,{pageContext:n}))}))}};function X(){var e=Object(b.a)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]);return X=function(){return e},e}function J(){var e=Object(b.a)(["\n  margin-top: auto;\n"]);return J=function(){return e},e}function L(){var e=Object(b.a)(["\n  display: block;\n  width: 120px;\n  height: 100px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 100%;\n  border: none;\n  margin-bottom: 8vh;\n"]);return L=function(){return e},e}function Y(){var e=Object(b.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  padding: 25px 0;\n  width: 120px;\n  height: 120vh;\n  background-color: ",";\n  /* background-color: ","; */\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);return Y=function(){return e},e}var q=h.d.nav(Y(),(function(e){return e.theme.sidebar}),(function(e){var t=e.activeColor,n=e.theme;return t?n[t]:n.note})),H=Object(h.d)(c.b)(L(),G.a),K=Object(h.d)(B)(J()),Q=h.d.ul(X()),Z=function(e){var t=e.pageContext;return a.a.createElement(q,{activeColor:t},a.a.createElement(H,{to:"/"}),a.a.createElement(Q,null,a.a.createElement("li",null,a.a.createElement(B,{as:c.b,to:"/notes",icon:M.a,activeclass:"active"})),a.a.createElement("li",null,a.a.createElement(B,{as:c.b,to:"/twitters",icon:W.a,activeclass:"active"})),a.a.createElement("li",null,a.a.createElement(B,{as:c.b,to:"/articles",icon:_.a,activeclass:"active"}))),a.a.createElement(K,{as:c.b,to:"/login",icon:U.a}))};Z.defaultProps={pageContext:"notes"};var $=R(Z),ee=function(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement($,null),t)};function te(){var e=Object(b.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return te=function(){return e},e}var ne=h.d.h1(te(),(function(e){var t=e.theme;return e.big?t.fontSize.xl:t.fontSize.l}),(function(e){return e.theme.bold}));function re(){var e=Object(b.a)(["\n  padding: 15px 30px;\n  font-size: ",";\n  font-weight: ",";\n  background-color: ",";\n  border: none;\n  border-radius: 50px;\n\n  ::placeholder {\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    color: ",";\n  }\n"]);return re=function(){return e},e}var ae=h.d.input(re(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.regular}),(function(e){return e.theme.lightGray}),(function(e){return e.theme.darkGrey}));function ie(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  text-decoration: none;\n  padding: 0;\n  background-color:",";\n  /* background-color: ","; */\n  width: 105px;\n  height: 30px;\n  border: none;\n  border-radius: 50px;\n  font-family: 'Muli', sans-serif;\n  font-size: 10px;\n  text-transform: uppercase;\n"]);return ie=function(){return e},e}var oe=h.d.button(ie(),(function(e){var t=e.activeColor,n=e.theme;return t?n[t]:n.note}),(function(e){var t=e.activeColor;return e.theme[t]})),ce=n(36);function le(){var e=Object(b.a)(["\n  font-family: 'Muli', sans-serif;\n  margin-top: 30px;\n"]);return le=function(){return e},e}function ue(){var e=Object(b.a)(["\n  font-family: 'Muli', sans-serif;\n  margin: 30px 0 100px;\n  border-radius: 20px;\n  height: 30vh;\n"]);return ue=function(){return e},e}function se(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return se=function(){return e},e}function de(){var e=Object(b.a)(["\n  border-left: 10px solid ",";\n  z-index: 9999;\n  position: fixed;\n  display: flex;\n  padding: 100px 90px;\n  flex-direction: column;\n  right: 0;\n  top: 0;\n  height: 100vh;\n  width: 680px;\n  background-color: white;\n  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);\n  transform: translate(",");\n  transition: transform 0.25s ease-in-out;\n"]);return de=function(){return e},e}var pe=h.d.div(de(),(function(e){return e.theme[e.activecolor]}),(function(e){return e.isVisible?"0":"100%"})),fe=Object(h.d)(ce.a)(se()),me=Object(h.d)(ae)(ue()),he=Object(h.d)(ae)(le()),be=function(e){var t=e.pageContext,n=e.isVisible,r=e.addItem,i=e.handleClose;return a.a.createElement(pe,{isVisible:n,activecolor:t},a.a.createElement(ne,{big:!0},"Create new ",t),a.a.createElement(ce.b,{initialValues:{title:"",content:"",articleUrl:"",twitterName:"",created:""},onSubmit:function(e){r(t,e),i()}},(function(e){var n=e.values,r=e.handleChange,i=e.handleBlur;return a.a.createElement(fe,null,a.a.createElement(he,{type:"text",name:"title",placeholder:"title",onChange:r,onBlur:i,value:n.title}),"twitters"===t&&a.a.createElement(he,{placeholder:"twitter name ",type:"text",name:"twitterName",onChange:r,onBlur:i,value:n.twitterName}),"articles"===t&&a.a.createElement(he,{placeholder:"link",type:"text",name:"articleUrl",onChange:r,onBlur:i,value:n.articleUrl}),a.a.createElement(me,{name:"content",as:"textarea",onChange:r,onBlur:i,value:n.content}),a.a.createElement(oe,{type:"submit",activecolor:t},"Add Note"))})))};be.defaultProps={pageContext:"notes",isVisible:!1};var ge=Object(u.b)(null,(function(e){return{addItem:function(t,n){return e(function(e,t){return{type:"ADD_ITEM",payload:{itemType:e,item:Object(C.a)({id:"_".concat(Math.random().toString(36).substr(2,9))},t)}}}(t,n))}}}))(R(be)),ve=n(52),xe=n.n(ve);function ye(){var e=Object(b.a)(["\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  background-color: ",";\n  background-size: 35%;\n  border-radius: 50px;\n  z-index: 10000;\n"]);return ye=function(){return e},e}function we(){var e=Object(b.a)(["\n  margin: 25px 0 0 0;\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return we=function(){return e},e}function Ee(){var e=Object(b.a)(["\n  margin: 25px 0 50px 0;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 85px;\n\n  @media (max-width: 1500px) {\n    grid-gap: 45px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (max-width: 1100px) {\n    grid-template-columns: 1fr;\n  }\n"]);return Oe=function(){return e},e}function ke(){var e=Object(b.a)(["\n  position: relative;\n  padding: 25px 150px 25px 70px;\n"]);return ke=function(){return e},e}var je=h.d.div(ke()),Ce=h.d.div(Oe()),Te=h.d.div(Ee()),Ie=Object(h.d)(ne)(we()),ze=Object(h.d)(B)(ye(),(function(e){var t=e.activecolor;return e.theme[t]})),Ne=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isNewItemBarVisible:!1},e.toggleNewItemBar=function(){e.setState((function(e){return{isNewItemBarVisible:!e.isNewItemBarVisible}}))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.pageContext,r=this.state.isNewItemBarVisible;return a.a.createElement(ee,null,a.a.createElement(je,null,a.a.createElement(Te,null,a.a.createElement(Ie,{big:!0,as:"h1"},n)),a.a.createElement(Ce,null,t),a.a.createElement(ze,{onClick:this.toggleNewItemBar,icon:xe.a,activecolor:n}),a.a.createElement(ge,{handleClose:this.toggleNewItemBar,isVisible:r})))}}]),n}(r.Component);Ne.defaultProps={pageContext:"notes"};var Se=R(Ne);function Be(){var e=Object(b.a)(["\n  font-size: ",";\n  font-weight: ",";\n"]);return Be=function(){return e},e}var De=h.d.p(Be(),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.regular})),_e=n(53),Pe=n.n(_e),Ue=n(54),Ae=n.n(Ue);function Me(){var e=Object(b.a)(["\n  display: block;\n  width: 35px;\n  height: 35px;\n  border-radius: 50px;\n  background: white url(",") no-repeat;\n  background-size: 60%;\n  background-position: 50%;\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return Me=function(){return e},e}function Ve(){var e=Object(b.a)(["\n  width: 70px;\n  height: 70px;\n  border-radius: 50px;\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return Ve=function(){return e},e}function We(){var e=Object(b.a)(["\n  margin: 5px 0 0;\n  padding-right: ",";\n"]);return We=function(){return e},e}function Fe(){var e=Object(b.a)(["\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n    "]);return Fe=function(){return e},e}function Ge(){var e=Object(b.a)(["\n  position: relative;\n  padding: 17px 30px;\n  background-color: ",";\n\n  :first-of-type {\n    z-index: 9999;\n  }\n\n  ","\n"]);return Ge=function(){return e},e}function Re(){var e=Object(b.a)(["\n  min-height: 380px;\n  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n  display: grid;\n  grid-template-rows: 0.25fr 1fr;\n"]);return Re=function(){return e},e}var Xe=h.d.div(Re()),Je=h.d.div(Ge(),(function(e){var t=e.activeColor,n=e.theme;return t?n[t]:"white"}),(function(e){return e.flex&&Object(h.c)(Fe())})),Le=Object(h.d)(ne)(We(),(function(e){return e.pageContext===e.twitters?"50px":"20px"})),Ye=h.d.img(Ve()),qe=h.d.a(Me(),Pe.a),He=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.pageContext,r=e.title,i=e.twitterName,o=e.articleUrl,c=e.content,l=e.removeItem;return a.a.createElement(Xe,{onClick:this.handleCardClick},a.a.createElement(Je,{activeColor:n},a.a.createElement(Le,null,r),"twitters"===n&&a.a.createElement(Ye,{src:"https://avatars.io/twitter/".concat(i)}),"articles"===n&&a.a.createElement(qe,{href:o})),a.a.createElement(Je,{flex:!0},a.a.createElement(De,null,c),a.a.createElement(B,{card:!0,icon:Ae.a,onClick:function(){return l(n,t)}})))}}]),n}(r.Component);He.defaultProps={pageContext:"notes",twitterName:null,articleUrl:null};var Ke=Object(u.b)(null,(function(e){return{removeItem:function(t,n){return e(function(e,t){return{type:"REMOVE_ITEM",payload:{itemType:e,id:t}}}(t,n))}}}))(R(He)),Qe=function(e){var t=e.notes;return a.a.createElement(Se,{pageType:"notes"},t.map((function(e){var t=e.title,n=e.content,r=e.created,i=e.id;return a.a.createElement(Ke,{id:i,cardType:"notes",title:t,content:n,created:r,key:i})})))};Qe.defaultProps={notes:[]};var Ze=Object(u.b)((function(e){return{notes:e.notes}}))(Qe),$e=function(e){var t=e.articles;return a.a.createElement(Se,{pageType:"articles"},t.map((function(e){var t=e.title,n=e.content,r=e.articleUrl,i=e.created,o=e.id;return a.a.createElement(Ke,{id:o,cardType:"articles",title:t,content:n,articleUrl:r,created:i,key:o})})))};$e.defaultProps={articles:[]};var et=Object(u.b)((function(e){return{articles:e.articles}}))($e),tt=function(e){var t=e.twitters;return a.a.createElement(Se,{pageType:"twitters"},t.map((function(e){var t=e.title,n=e.content,r=e.twitterName,i=e.created,o=e.id;return a.a.createElement(Ke,{id:o,cardType:"twitters",title:t,content:n,twitterName:r,created:i,key:o})})))};tt.defaultProps={twitters:[]};var nt=Object(u.b)((function(e){return{twitters:e.twitters}}))(tt),rt="/",at="/notes",it="/twitters",ot="/articles",ct=function(){return a.a.createElement(u.a,{store:z},a.a.createElement(c.a,{basename:"/MyTrip"},a.a.createElement(E,null,a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:rt,render:function(){return a.a.createElement(l.a,{to:"/notes"})}}),a.a.createElement(l.b,{exact:!0,path:at,component:Ze}),a.a.createElement(l.b,{exact:!0,path:ot,component:et}),a.a.createElement(l.b,{exact:!0,path:it,component:nt})))))};o.a.render(a.a.createElement(ct,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.54d4ab3b.chunk.js.map