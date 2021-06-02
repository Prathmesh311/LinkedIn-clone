(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],{53:function(n,e,t){},83:function(n,e,t){"use strict";t.r(e);var i=t(3),r=t(31),a=t.n(r),c=(t(53),t(47)),o=t(11),s=t(4),d=t(14),l=t(5),x=t(30),p=t.n(x),b=t(36),g=t(28),j=g.a.initializeApp({apiKey:"AIzaSyBiU2Nu960W_XC3Z1CVPkIJA95WN1T3oXI",authDomain:"linkedin-c9263.firebaseapp.com",projectId:"linkedin-c9263",storageBucket:"linkedin-c9263.appspot.com",messagingSenderId:"545142108364",appId:"1:545142108364:web:b4b9ab0f5ea8f0af945269"}),h=j.firestore(),u=j.auth(),m=new g.a.auth.GoogleAuthProvider,O=j.storage(),f=h,v="SET_USER",w="SET_LOADING",y="GET_ARTICLES",k=function(n){return{type:v,user:n}},z=function(n){return{type:w,state:n}};function S(){return function(n){var e;f.collection("articles").orderBy("actor.date","desc").onSnapshot((function(t){e=t.docs.map((function(n){return n.data()})),console.log(e),n(function(n){return{type:y,payload:n}}(e))}))}}var I,L,U,C,R,A,N,E,_,T,D,M=t(2);var P,W,F,G,B,J,V,H,X,K,Z=l.a.div(I||(I=Object(s.a)(["\n  background-color: white;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n  left: 0;\n  position: fixed;\n  padding: 0px 24px;\n  top: 0;\n  width: 100vw;\n  z-index: 100;\n"]))),q=l.a.div(L||(L=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0px auto;\n  min-height: 100%;\n  max-width: 1128px;\n"]))),Q=l.a.span(U||(U=Object(s.a)(["\n  margin-right: 10px;\n  font-size: 0px;\n"]))),Y=l.a.div(C||(C=Object(s.a)(["\n  opacity: 1;\n  flex-grow: 1;\n  position: relative;\n  & > div {\n    max-width: 280px;\n    input {\n      border: none;\n      box-shadow: none;\n      background-color: #eef3f8;\n      border-radius: 2px;\n      color: rgba(0, 0, 0, 0.9);\n      width: 218px;\n      padding: 0px 8px 0px 40px;\n      line-height: 1.75;\n      font-weight: 400;\n      font-size: 14px;\n      height: 34px;\n      border-color: #dec6f1;\n      vertical-align: text-top;\n    }\n  }\n"]))),$=l.a.div(R||(R=Object(s.a)(["\n  width: 40px;\n  position: absolute;\n  top: 10px;\n  left: 2px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  margin: 0px;\n"]))),nn=l.a.nav(A||(A=Object(s.a)(["\n  margin-left: auto;\n  display: block;\n  @media (max-width: 768px) {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    background-color: white;\n    width: 100%;\n  }\n"]))),en=l.a.ul(N||(N=Object(s.a)(['\n  display: flex;\n  flex-wrap: nowrap;\n  list-style-type: none;\n\n  .active {\n    span:after {\n      content: "";\n      transform: scaleX(1);\n      border-bottom: 2px solid var(--white, #fff);\n      bottom: 0;\n      left: 0;\n      position: absolute;\n      transition: transform 0.2s ease-in-out;\n      width: 100%;\n      border-color: rgba(0, 0, 0, 0.9);\n    }\n  }\n']))),tn=l.a.li(E||(E=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  a {\n    align-items: center;\n    background: transparent;\n    display: flex;\n    flex-direction: column;\n    font-size: 12px;\n    font-weight: 400;\n    justify-content: center;\n    line-height: 1.5;\n    min-height: 52px;\n    min-width: 80px;\n    position: relative;\n    text-decoration: none;\n  }\n  span {\n    color: rgba(0, 0, 0, 0.6);\n    display: flex;\n    align-items: center;\n    font-weight: 400;\n  }\n  @media (max-width: 768px) {\n    min-width: 70px;\n  }\n\n  &:hover,\n  &:active {\n    a {\n      span {\n        color: rgba(0, 0, 0, 0.9);\n      }\n      svg {\n        color: rgba(0, 0, 0, 1);\n      }\n    }\n  }\n"]))),rn=l.a.div(_||(_=Object(s.a)(["\n  position: absolute;\n  top: 45px;\n  background: white;\n  border-radius: 5px;\n  width: 100px;\n  height: 40px;\n  font-size: 16px;\n  transition-duration: 160ms;\n  text-align: center;\n  display: none;\n\n  a{\n    cursor: pointer;\n    &:hover{\n      color: #0a66c2;\n    }\n  }\n"]))),an=Object(l.a)(tn)(T||(T=Object(s.a)(["\n  a > img {\n    width: 24px;\n    height: 24px;\n    border-radius: 50%;\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n  }\n\n  &:hover {\n    "," {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),rn),cn=Object(l.a)(an)(D||(D=Object(s.a)(["\n  border-left: 1px solid rgba(0, 0, 0, 0.08);\n"]))),on=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{signOut:function(){return n((function(n){u.signOut().then((function(){n(k(null))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(M.jsx)(Z,{children:Object(M.jsxs)(q,{children:[Object(M.jsx)(Q,{children:Object(M.jsx)("a",{href:"/home",children:Object(M.jsx)("img",{src:"images/home-logo.svg",alt:""})})}),Object(M.jsxs)(Y,{children:[Object(M.jsx)("div",{children:Object(M.jsx)("input",{type:"text",placeholder:"Search"})}),Object(M.jsx)($,{children:Object(M.jsx)("img",{src:"images/search-icon.svg",alt:""})})]}),Object(M.jsx)(nn,{children:Object(M.jsxs)(en,{children:[Object(M.jsx)(tn,{className:"active",children:Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:"images/nav-home.svg",alt:""}),Object(M.jsx)("span",{children:"Home"})]})}),Object(M.jsx)(tn,{children:Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:"/images/nav-network.svg",alt:""}),Object(M.jsx)("span",{children:"My Network"})]})}),Object(M.jsx)(tn,{children:Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:"/images/nav-jobs.svg",alt:""}),Object(M.jsx)("span",{children:"Jobs"})]})}),Object(M.jsx)(tn,{children:Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:"/images/nav-messaging.svg",alt:""}),Object(M.jsx)("span",{children:"Messaging"})]})}),Object(M.jsx)(tn,{children:Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:"/images/nav-notifications.svg",alt:""}),Object(M.jsx)("span",{children:"Notifications"})]})}),Object(M.jsxs)(an,{children:[Object(M.jsxs)("a",{children:[n.user&&n.user.photoURL?Object(M.jsx)("img",{src:n.user.photoURL}):Object(M.jsx)("img",{src:"/images/user.svg",alt:""}),Object(M.jsxs)("span",{children:["Me ",Object(M.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]}),Object(M.jsx)(rn,{onClick:function(){return n.signOut()},children:Object(M.jsx)("a",{children:"Sign Out"})})]}),Object(M.jsx)(cn,{children:Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:"/images/nav-work.svg",alt:""}),Object(M.jsxs)("span",{children:["Work",Object(M.jsx)("img",{src:"/images/down-icon.svg",alt:""})]})]})})]})})]})})}));var sn,dn,ln,xn,pn,bn,gn,jn,hn,un,mn,On,fn=l.a.div(P||(P=Object(s.a)(["\n    grid-area: LeftSide;\n"]))),vn=l.a.div(W||(W=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  font-weight: 500;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: box-shadow 83ms;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),wn=l.a.div(F||(F=Object(s.a)([" \n    border-bottom: 1px solid rgba(0,0,0,0.15);\n    padding: 12px 12px 16px;\n"]))),yn=l.a.div(G||(G=Object(s.a)(["\n    background: url('images/card-bg.svg');\n    background-size: 462px;\n    height: 54px;\n    background-position: center;\n    margin: -12px -12px 0;\n"]))),kn=l.a.div(B||(B=Object(s.a)(["\n    background-image: url('images/photo.svg');\n    width: 72px;\n    height: 72px;\n    background-color: white;\n    background-position: center;\n    background-size: 60%;\n    background-repeat: no-repeat;\n    margin: -38px auto 12px;\n    border-radius: 50%;\n    border: 2px solid white;\n    box-sizing: border-box;\n    background-clip: content-box;\n"]))),zn=l.a.div(J||(J=Object(s.a)(["\n    font-size: 16px;\n    line-height: 1.5;\n    font-weight: 600;\n    color: rgba(0,0,0,0.9);\n"]))),Sn=l.a.div(V||(V=Object(s.a)(["\n    color: #0a66c2;\n    font-weight: 400;\n    line-height: 1.33;\n    margin-top: 4px;\n    font-size: 12px;\n"]))),In=l.a.div(H||(H=Object(s.a)([" \n    border-bottom: 1px solid rgba(0,0,0,0.15);\n    padding-top: 12px;\n    padding-bottom: 12px;\n\n    & > a{\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 4px 12px;\n\n        &:hover{\n            background-color: rgba(0,0,0,0.08);\n        }\n\n        div{\n            display: flex;\n            flex-direction: column;\n            text-align: left;\n            span {\n                font-size: 12px;\n                line-height: 1.33;\n\n                &:first-child{\n                    color: rgba(0,0,0,0.6);\n                }\n\n                &:nth-child(2){\n                    color: rgba(0,0,0,1);\n                }\n            }\n        }\n    }\n"]))),Ln=l.a.div(X||(X=Object(s.a)([" \n    border-color: rgba(0,0,0,0.8);\n    text-align: center;\n    padding: 12px;\n    font-size: 12px;\n    display: block;\n\n    span{\n        display: flex;\n        align-items: center;\n        color: rgba(0,0,0,1);\n\n        svg{\n            color: rgba(0,0,0,0.6);\n        }\n    }\n\n    &:hover{\n        background-color: rgba(0,0,0,0.08);\n    }\n"]))),Un=Object(l.a)(vn)(K||(K=Object(s.a)(["\n  padding: 8px 0 0;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  a {\n    color: black;\n    padding: 4px 12px 4px 12px;\n    font-size: 12px;\n    &:hover {\n      color: #0a66c2;\n    }\n    span {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      font-weight: 600;\n    }\n    &:last-child {\n      color: rgba(0, 0, 0, 0.6);\n      text-decoration: none;\n      border-top: 1px solid #d6cec2;\n      padding: 12px;\n      &:hover {\n        background-color: rgba(0, 0, 0, 0.08);\n      }\n    }\n  }\n"]))),Cn=Object(d.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(M.jsxs)(fn,{children:[Object(M.jsxs)(vn,{children:[Object(M.jsxs)(wn,{children:[Object(M.jsx)(yn,{}),Object(M.jsxs)("a",{children:[Object(M.jsx)(kn,{}),Object(M.jsxs)(zn,{children:["Welcome, ",n.user?n.user.displayName:"there","!"]})]}),Object(M.jsx)("a",{children:Object(M.jsx)(Sn,{children:"Add a photo"})})]}),Object(M.jsx)(In,{children:Object(M.jsxs)("a",{children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{children:"Connections"}),Object(M.jsx)("span",{children:"Grow your network"})]}),Object(M.jsx)("img",{src:"images/widget-icon.svg"})]})}),Object(M.jsx)(Ln,{children:Object(M.jsxs)("span",{children:[Object(M.jsx)("img",{src:"images/item-icon.svg"}),"My Items"]})})]}),Object(M.jsxs)(Un,{children:[Object(M.jsx)("a",{children:Object(M.jsx)("span",{children:"Groups"})}),Object(M.jsx)("a",{children:Object(M.jsxs)("span",{children:["Events",Object(M.jsx)("img",{src:"images/plus-icon.svg"})]})}),Object(M.jsx)("a",{children:Object(M.jsx)("span",{children:"follow Hashtags"})}),Object(M.jsx)("a",{children:Object(M.jsx)("span",{children:"Discover more"})})]})]})})),Rn=t(26),An=t(32),Nn=t.n(An);var En,_n,Tn,Dn,Mn,Pn,Wn,Fn,Gn,Bn,Jn=l.a.div(sn||(sn=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),Vn=l.a.div(dn||(dn=Object(s.a)(["\n  width: 100%;\n  max-width: 552px;\n  background-color: #fff;\n  max-height: 90%;\n  overflow: initial;\n  border-radius: 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  top: 32px;\n  margin: 0 auto;\n"]))),Hn=l.a.div(ln||(ln=Object(s.a)(["\n  display: block;\n  padding: 16px 28px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  font-size: 16px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 400;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    height: 48px;\n    width: 40px;\n    min-width: auto;\n    color: rgba(0, 0, 0, 0.6);\n    img,\n    svg {\n      pointer-events: none;\n    }\n  }\n"]))),Xn=l.a.div(xn||(xn=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  overflow-y: auto;\n  vertical-align: baseline;\n  background: transparent;\n  padding: 8px 12px;\n"]))),Kn=l.a.div(pn||(pn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  padding: 12px 24px;\n  svg,\n  img {\n    width: 48px;\n    height: 48px;\n    background-clip: content-box;\n    border: 2px solid transparent;\n    border-radius: 50%;\n    margin-right: 5px;\n  }\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 1.5;\n  }\n"]))),Zn=l.a.div(bn||(bn=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px 24px 12px 16px;\n"]))),qn=l.a.button(gn||(gn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  height: 40px;\n  min-width: auto;\n  color: rgba(0, 0, 0, 0.5);\n  border: none;\n  background-color: white;\n"]))),Qn=l.a.div(jn||(jn=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  padding-right: 8px;\n  "," {\n    width: 40px;\n  }\n"])),qn),Yn=l.a.div(hn||(hn=Object(s.a)(["\n  padding-left: 8px;\n  margin-right: auto;\n  border-left: 1px solid rgba(0, 0, 0, 0.15);\n  "," {\n    img {\n      margin-right: 5px;\n    }\n  }\n"])),qn),$n=l.a.button(un||(un=Object(s.a)(["\n  min-width: 60px;\n  border-radius: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n  border: none;\n  background: ",";\n  color: ",";\n  &:hover {\n    cursor: ",";\n    outline: none !important;\n  }\n"])),(function(n){return n.disabled?"rgba(0,0,0,0.15)":"#0a66c2"}),(function(n){return n.disabled?"rgba(0,0,0,0.6)":"#fff"}),(function(n){return n.disabled?"":"pointer"})),ne=l.a.div(mn||(mn=Object(s.a)(["\n  padding: 12px 24px;\n  textarea {\n    width: 100%;\n    min-height: 100px;\n    resize: none;\n    border: none;\n    outline: none;\n  }\n  input {\n    width: 100%;\n    height: 35px;\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),ee=l.a.div(On||(On=Object(s.a)(["\n  text-align: center;\n  img {\n    width: 100%;\n  }\n"]))),te=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{postArticle:function(e){return n(function(n){return function(e){if(e(z(!0)),""!=n.image){var t=O.ref("images/".concat(n.image.name)).put(n.image);t.on("state_changed",(function(n){var e=n.bytesTransferred/n.totalBytes*100;console.log("Progress = ".concat(e,"%")),"RUNNING"===n.state&&console.log("Progress = ".concat(e,"%"))}),(function(n){return console.log(n.code)}),Object(b.a)(p.a.mark((function i(){var r;return p.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,t.snapshot.ref.getDownloadURL();case 2:r=i.sent,f.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timeStamp,image:n.user.photoURL},video:n.video,sharedImg:r,comments:0,description:n.description}),e(z(!1));case 5:case"end":return i.stop()}}),i)}))))}else n.video?(f.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timeStamp,image:n.user.photoURL},video:n.video,sharedImg:"",comments:0,description:n.description}),e(z(!1))):(f.collection("articles").add({actor:{description:n.user.email,title:n.user.displayName,date:n.timeStamp,image:n.user.photoURL},video:"",sharedImg:"",comments:0,description:n.description}),e(z(!1)))}}(e))}}}))((function(n){var e=Object(i.useState)(""),t=Object(Rn.a)(e,2),r=t[0],a=t[1],c=Object(i.useState)(""),o=Object(Rn.a)(c,2),s=o[0],d=o[1],l=Object(i.useState)(""),x=Object(Rn.a)(l,2),p=x[0],b=x[1],j=Object(i.useState)(""),h=Object(Rn.a)(j,2),u=h[0],m=h[1],O=function(n){d(""),b(""),m(n)},f=function(e){a(""),d(""),b(""),m(""),n.handleModal(e)};return Object(M.jsx)(Jn,{children:Object(M.jsxs)(Vn,{children:[Object(M.jsxs)(Hn,{children:[Object(M.jsx)("h2",{children:"Create a post"}),Object(M.jsx)("img",{src:"images/close-icon.svg",onClick:function(n){return f(n)}})," "]}),Object(M.jsxs)(Xn,{children:[Object(M.jsxs)(Kn,{children:[n.user.photoURL?Object(M.jsx)("img",{src:n.user.photoURL}):Object(M.jsx)("img",{src:"/images/user.svg",alt:""}),Object(M.jsx)("span",{children:n.user.displayName})]}),Object(M.jsxs)(ne,{children:[Object(M.jsx)("textarea",{value:r,onChange:function(n){return a(n.target.value)},placeholder:"What do you want to talk about?",autoFocus:!0}),"image"===u?Object(M.jsxs)(ee,{children:[Object(M.jsx)("input",{type:"file",accept:"image/jpeg image/png image/gif image/jpg",name:"image",id:"file",style:{display:"none"},onChange:function(n){var e=n.target.files[0];""!==e&&void 0!==e?d(e):alert("not an image, file type is a ".concat(typeof e))}}),Object(M.jsx)("p",{children:Object(M.jsx)("label",{htmlFor:"file",children:"Select an image to share"})}),s&&Object(M.jsx)("img",{src:URL.createObjectURL(s)})]}):"media"===u&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("input",{type:"text",placeholder:"Please input a video link",value:p,onChange:function(n){return b(n.target.value)}}),p&&Object(M.jsx)(Nn.a,{width:"100%",url:p})]})]})]}),Object(M.jsxs)(Zn,{children:[Object(M.jsxs)(Qn,{children:[Object(M.jsx)(qn,{onClick:function(n){return O("image")},children:Object(M.jsx)("img",{src:"images/share-photo.svg"})}),Object(M.jsx)(qn,{onClick:function(n){return O("media")},children:Object(M.jsx)("img",{src:"images/share-video.svg"})})]}),Object(M.jsx)(Yn,{children:Object(M.jsxs)(qn,{children:[Object(M.jsx)("img",{src:"images/share-comment.svg"}),"Anyone"]})}),Object(M.jsx)($n,{disabled:!r,onClick:function(e){return function(e){if(e.preventDefault(),e.target==e.currentTarget){var t={video:p,image:s,user:n.user,description:r,timeStamp:g.a.firestore.Timestamp.now()};n.postArticle(t),f(e)}}(e)},children:"Post"})]})]})})}));var ie,re,ae,ce,oe,se,de,le=l.a.div(En||(En=Object(s.a)(["\n  grid-area: Main;\n  margin-bottom: 15px;\n"]))),xe=l.a.div(_n||(_n=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n"]))),pe=Object(l.a)(xe)(Tn||(Tn=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #958b7b;\n  margin: 0 0 8px;\n  background: white;\n\n  div {\n    button {\n      outline: none;\n      color: rgba(0, 0, 0, 0.6);\n      font-size: 14px;\n      line-height: 1.5;\n      min-height: 48px;\n      background: transparent;\n      border: none;\n      display: flex;\n      align-items: center;\n      font-weight: 600;\n    }\n\n    &:first-child {\n      display: flex;\n      align-items: center;\n      padding: 8px 16px 0px 16px;\n      img {\n        width: 48px;\n        border-radius: 50%;\n        margin-right: 8px;\n      }\n      button {\n        margin: 4px 0px;\n        flex-grow: 1;\n        padding-left: 16px;\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        border-radius: 35px;\n        background-color: white;\n        text-align: left;\n      }\n    }\n\n    &:nth-child(2) {\n      display: flex;\n      justify-content: space-around;\n      flex-wrap: wrap;\n      padding-bottom: 4px;\n\n      button {\n        img {\n          margin: 0 4px 0 -2px;\n        }\n        span {\n          color: #70b5f9;\n        }\n      }\n    }\n  }\n"]))),be=Object(l.a)(xe)(Dn||(Dn=Object(s.a)(["\n  margin: 0 0 8px;\n  overflow: visible;\n"]))),ge=l.a.div(Mn||(Mn=Object(s.a)(["\n  padding-right: 40px;\n  flex-wrap: nowrap;\n  padding: 12px 16px 0;\n  margin-bottom: 8px;\n  align-items: center;\n  display: flex;\n  a {\n    margin-right: 12px;\n    flex-grow: 1;\n    overflow: hidden;\n    display: flex;\n    text-decoration: none;\n    img {\n      width: 48px;\n      height: 48px;\n    }\n    & > div {\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      flex-basis: 0;\n      margin-left: 8px;\n      overflow: hidden;\n      span {\n        text-align: left;\n        &:first-child {\n          font-size: 14px;\n          font-weight: 700;\n          color: rgba(0, 0, 0, 1);\n        }\n        &:nth-child(n + 1) {\n          font-size: 12px;\n          color: rgba(0, 0, 0, 0.6);\n        }\n      }\n    }\n  }\n  button {\n    position: absolute;\n    right: 12px;\n    outline: none;\n    border: none;\n    top: 0;\n    background: transparent;\n  }\n"]))),je=l.a.div(Pn||(Pn=Object(s.a)(["\n  padding: 0 16px;\n  font-size: 14px;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.9);\n  overflow: hidden;\n"]))),he=l.a.div(Wn||(Wn=Object(s.a)(["\n  margin-top: 8px;\n  width: 100%;\n  position: relative;\n  display: block;\n  background-color: #f9fafb;\n\n  img {\n    object-fit: contain;\n    height: 100%;\n    width: 100%;\n  }\n"]))),ue=l.a.ul(Fn||(Fn=Object(s.a)(["\n  line-height: 100%;\n  display: flex;\n  align-items: flex-start;\n  overflow: auto;\n  list-style: none;\n  margin: 0 16px;\n  padding: 8px 0;\n  border-bottom: 1px solid #e9e5df;\n  li {\n    margin-right: 5px;\n    font-size: 12px;\n    button {\n      display: flex;\n      border: none;\n      background: #fff;\n    }\n  }\n  img {\n    width: 18px;\n  }\n"]))),me=l.a.div(Gn||(Gn=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n  margin: 0;\n  min-height: 40px;\n  padding: 4px 8px;\n  button {\n    display: inline-flex;\n    align-items: center;\n    padding: 8px;\n    color: #0a66c2;\n    border: none;\n    background-color: #fff;\n\n    @media (min-width: 768px) {\n      span {\n        margin-left: 8px;\n      }\n    }\n  }\n"]))),Oe=l.a.div(Bn||(Bn=Object(s.a)(["\n  text-align: center;\n  & > img {\n    width: 30px;\n  }\n"]))),fe=Object(d.b)((function(n){return{user:n.userState.user,articles:n.articleState.articles,loading:n.articleState.loading}}),(function(n){return{getArticles:function(){return n(S())}}}))((function(n){var e=Object(i.useState)(!1),t=Object(Rn.a)(e,2),r=t[0],a=t[1];Object(i.useEffect)((function(){n.getArticles(),console.log(n.articles)}),[]);var c=function(n){n.preventDefault(),a(!r)};return console.log(n.articles),Object(M.jsx)(M.Fragment,{children:0===n.articles.length?Object(M.jsx)("p",{children:"There are no posts"}):Object(M.jsxs)(le,{children:[Object(M.jsxs)(pe,{children:[Object(M.jsxs)("div",{children:[n.user&&n.user.photoURL?Object(M.jsx)("img",{src:n.user.photoURL}):Object(M.jsx)("img",{src:"/images/user.svg",alt:""}),Object(M.jsx)("button",{onClick:c,disabled:!!n.loading,children:"Start a post"})," "]}),Object(M.jsxs)("div",{children:[Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/photo-icon.svg"}),Object(M.jsx)("span",{children:"Photo"})]}),Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/video-icon.svg"}),Object(M.jsx)("span",{children:"Video"})]}),Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/event-icon.svg"}),Object(M.jsx)("span",{children:"Event"})]}),Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/article-icon.svg"}),Object(M.jsx)("span",{children:"Write article"})]})]})]}),Object(M.jsxs)(Oe,{children:[n.loading&&Object(M.jsx)("img",{src:"./images/loading-buffering.gif"}),0!=n.articles.length&&n.articles.map((function(n,e){return Object(M.jsxs)(be,{children:[Object(M.jsxs)(ge,{children:[Object(M.jsxs)("a",{children:[Object(M.jsx)("img",{src:n.actor.image,alt:""}),Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{children:n.actor.title}),Object(M.jsx)("span",{children:n.actor.description}),Object(M.jsx)("span",{children:n.actor.date.toDate().toLocaleDateString()})]})]}),Object(M.jsx)("button",{children:Object(M.jsx)("img",{src:"images/ellipsis.png",alt:""})})]}),Object(M.jsx)(je,{children:n.description}),Object(M.jsx)(he,{children:Object(M.jsx)("a",{children:!n.sharedImg&&n.video?Object(M.jsx)(Nn.a,{width:"100%",url:n.video}):n.sharedImg&&Object(M.jsx)("img",{src:n.sharedImg})})}),Object(M.jsxs)(ue,{children:[Object(M.jsx)("li",{children:Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"}),Object(M.jsx)("img",{src:"https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"}),Object(M.jsx)("span",{children:"75"})]})}),Object(M.jsx)("li",{children:Object(M.jsx)("a",{children:"2 comments"})})]}),Object(M.jsxs)(me,{children:[Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/like-icon.svg"}),Object(M.jsx)("span",{children:"Like"})]}),Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/comments-icon.svg"}),Object(M.jsx)("span",{children:"Comments"})]}),Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/share-icon.svg"}),Object(M.jsx)("span",{children:"hare"})]}),Object(M.jsxs)("button",{children:[Object(M.jsx)("img",{src:"images/send-icon.svg"}),Object(M.jsx)("span",{children:"Like"})]})]})]},e)}))]}),r&&Object(M.jsx)(te,{handleModal:c})," "]})})}));var ve,we,ye,ke,ze=l.a.div(ie||(ie=Object(s.a)(["\n  grid-area: RightSide;\n  @media (max-width: 768px){\n      display: none;\n  }\n"]))),Se=l.a.div(re||(re=Object(s.a)(["\n  text-align: center;\n  overflow: hidden;\n  font-weight: 500;\n  margin-bottom: 8px;\n  background-color: #fff;\n  border-radius: 5px;\n  transition: box-shadow 83ms;\n  position: relative;\n  border: none;\n  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);\n  padding: 12px;\n"]))),Ie=l.a.div(ae||(ae=Object(s.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.6);\n  width: 100%;\n"]))),Le=l.a.ul(ce||(ce=Object(s.a)(["\n  margin-top: 16px;\n\n  li {\n    display: flex;\n    align-items: center;\n    margin: 12px 0;\n    position: relative;\n    font-size: 14px;\n\n    & > div {\n      display: flex;\n      flex-direction: column;\n    }\n\n    button {\n      background-color: transparent;\n      color: rgba(0, 0, 0, 0.6);\n      padding: 16px;\n      border-radius: 15px;\n      border: 1px solid rgba(0, 0, 0, 0.6);\n      font-weight: 600;\n      max-height: 32px;\n      justify-content: center;\n      text-align: center;\n      align-items: center;\n      display: inline-flex;\n    }\n  }\n"]))),Ue=l.a.div(oe||(oe=Object(s.a)(['\n  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 44px;\n  height: 44px;\n  margin-right: 8px;\n']))),Ce=l.a.a(se||(se=Object(s.a)(["\n  color: #0a66c2;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n\n  img{\n      margin-left: 5px;\n  }\n"]))),Re=Object(l.a)(Se)(de||(de=Object(s.a)(["\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),Ae=function(){return Object(M.jsxs)(ze,{children:[Object(M.jsxs)(Se,{children:[Object(M.jsxs)(Ie,{children:[Object(M.jsx)("h2",{children:"Add to your feed"}),Object(M.jsx)("img",{src:"images/feed-icon.svg"})]}),Object(M.jsxs)(Le,{children:[Object(M.jsxs)("li",{children:[Object(M.jsx)("a",{children:Object(M.jsx)(Ue,{})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{children:"#Linkedin"}),Object(M.jsx)("button",{children:"Follow"})]})]}),Object(M.jsxs)("li",{children:[Object(M.jsx)("a",{children:Object(M.jsx)(Ue,{})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{children:"#Video"}),Object(M.jsx)("button",{children:"Follow"})]})]})]}),Object(M.jsxs)(Ce,{children:["View all recommendations",Object(M.jsx)("img",{src:"images/right-icon.svg"})]})]}),Object(M.jsx)(Re,{children:Object(M.jsx)("img",{src:"https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg",alt:""})})]})};var Ne,Ee,_e,Te,De,Me,Pe,We,Fe=l.a.div(ve||(ve=Object(s.a)(["\n    padding-top: 45px;\n    max-width: 100%;\n"]))),Ge=l.a.div(we||(we=Object(s.a)(["\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 1128px;\n"]))),Be=l.a.section(ye||(ye=Object(s.a)(["\n    min-height: 50px;\n    padding-top: 16px;\n    padding-bottom: 8px;\n    box-sizing: content-box;\n    text-align: center;\n    text-decoration: underline;\n    display: flex;\n    justify-content: center;\n\n    h5{\n        color: #0a66c2;\n        font-size: 14px;\n        a{\n            font-weight: 700;\n        }\n    }\n    \n    p{\n        font-size: 14px;\n        color: #434649;\n        font-weight: 600;\n    }\n\n    @media (max-width: 768px){\n        flex-direction: column;\n        padding: 0px 5px;\n    }\n"]))),Je=l.a.div(ke||(ke=Object(s.a)([' \n    display: grid;\n    grid-template-areas: "LeftSide Main RightSide";\n    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(0, 7fr);\n    column-gap: 25px;\n    row-gap: 25px;\n    margin-bottom: 25px;\n\n    @media (max-width: 768px){\n        display: flex;\n        flex-direction: column;\n        padding: 0px 5px;\n    }\n']))),Ve=Object(d.b)((function(n){return{user:n.userState.user}}))((function(n){return Object(M.jsxs)(Fe,{children:[!n.user&&Object(M.jsx)(o.a,{to:"/"}),Object(M.jsxs)(Ge,{children:[Object(M.jsxs)(Be,{children:[Object(M.jsx)("h5",{children:Object(M.jsx)("a",{children:"Hiring in hurry? - "})}),Object(M.jsx)("p",{children:"Find talented pros in record time with Upwork and keep business moving."})]}),Object(M.jsxs)(Je,{children:[Object(M.jsx)(Cn,{}),Object(M.jsx)(fe,{}),Object(M.jsx)(Ae,{})]})]})]})})),He=l.a.div(Ne||(Ne=Object(s.a)(["\n  padding: 0px;\n"]))),Xe=l.a.nav(Ee||(Ee=Object(s.a)(["\n  max-width: 1128px;\n  margin: auto;\n  padding: 12px 0 16px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  & > a {\n    width: 135px;\n    height: 34px;\n    @media (max-width: 768px) {\n      padding: 0 5px;\n    }\n  }\n"]))),Ke=l.a.a(_e||(_e=Object(s.a)(["\n  font-size: 16px;\n  padding: 10px 12px;\n  text-decoration: none;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.6);\n  margin-right: 12px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.08);\n    color: rgba(0, 0, 0, 0.9);\n    text-decoration: none;\n  }\n"]))),Ze=l.a.a(Te||(Te=Object(s.a)(["\n  box-shadow: inset 0 0 0 1px #0a66c2;\n  color: #0a66c2;\n  border-radius: 24px;\n  transition-duration: 167ms;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 40px;\n  padding: 10px 24px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0);\n  &:hover {\n    background-color: rgba(112, 181, 249, 0.15);\n    color: #0a66c2;\n    text-decoration: none;\n  }\n"]))),qe=l.a.section(De||(De=Object(s.a)(["\n  display: flex;\n  align-content: start;\n  min-height: 700px;\n  padding-bottom: 138px;\n  padding-top: 40px;\n  padding: 60px 0;\n  position: relative;\n  flex-wrap: wrap;\n  width: 100%;\n  max-width: 1128px;\n  align-items: center;\n  margin: auto;\n  @media (max-width: 768px) {\n    margin: auto;\n    min-height: 0px;\n  }\n"]))),Qe=l.a.div(Me||(Me=Object(s.a)(["\n  width: 100%;\n  h1 {\n    padding-bottom: 0;\n    width: 55%;\n    font-size: 56px;\n    color: #2977c9;\n    font-weight: 200;\n    line-height: 70px;\n    @media (max-width: 768px) {\n      text-align: center;\n      font-size: 20px;\n      width: 100%;\n      line-height: 2;\n    }\n  }\n  img {\n    /* z-index: -1; */\n    width: 700px;\n    height: 670px;\n    position: absolute;\n    bottom: -2px;\n    right: -150px;\n    @media (max-width: 768px) {\n      top: 230px;\n      width: initial;\n      position: initial;\n      height: initial;\n    }\n  }\n"]))),Ye=l.a.div(Pe||(Pe=Object(s.a)(["\n  margin-top: 100px;\n  width: 408px;\n  @media (max-width: 768px) {\n    margin-top: 20px;\n  }\n"]))),$e=l.a.button(We||(We=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  align-items: center;\n  height: 56px;\n  width: 100%;\n  border-radius: 28px;\n  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),\n    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);\n  vertical-align: middle;\n  z-index: 0;\n  transition-duration: 167ms;\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.6);\n  &:hover {\n    background-color: rgba(207, 207, 207, 0.25);\n    color: rgba(0, 0, 0, 0.75);\n  }\n"]))),nt=Object(d.b)((function(n){return{user:n.userState.user}}),(function(n){return{signIn:function(){return n((function(n){u.signInWithPopup(m).then((function(e){console.log(e),n(k(e.user))})).catch((function(n){return alert(n.message)}))}))}}}))((function(n){return Object(M.jsxs)(He,{children:[n.user&&Object(M.jsx)(o.a,{to:"/home"}),Object(M.jsxs)(Xe,{children:[Object(M.jsx)("a",{href:"/",children:Object(M.jsx)("img",{src:"/images/login-logo.svg",alt:""})}),Object(M.jsxs)("div",{children:[Object(M.jsx)(Ke,{children:"Join now"}),Object(M.jsx)(Ze,{children:"Sign in"})]})]}),Object(M.jsxs)(qe,{children:[Object(M.jsxs)(Qe,{children:[Object(M.jsx)("h1",{children:"Welcome to your professional community"}),Object(M.jsx)("img",{src:"/images/login-hero.svg",alt:""})]}),Object(M.jsx)(Ye,{children:Object(M.jsxs)($e,{onClick:function(){return n.signIn()},children:[Object(M.jsx)("img",{src:"/images/google.svg",alt:""}),"Sign in with Google"]})})]})]})}));var et=Object(d.b)((function(n){return{}}),(function(n){return{getUserAuth:function(){return n((function(n){u.onAuthStateChanged(function(){var e=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&n(k(t));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}))}}}))((function(n){return Object(i.useEffect)((function(){n.getUserAuth()}),[]),Object(M.jsx)("div",{children:Object(M.jsx)(c.a,{children:Object(M.jsxs)(o.d,{children:[Object(M.jsx)(o.b,{exact:!0,path:"/",children:Object(M.jsx)(nt,{})}),Object(M.jsxs)(o.b,{path:"/home",children:[Object(M.jsx)(on,{}),Object(M.jsx)(Ve,{})]})]})})})})),tt=t(29),it=t(48),rt=t(23),at={user:null},ct=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(rt.a)(Object(rt.a)({},n),{},{user:e.user});default:return n}},ot={articles:[],loading:!1},st=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,e=arguments.length>1?arguments[1]:void 0;switch(console.log(e.type),console.log("payload articles = ",e.payload),e.type){case y:return Object(rt.a)(Object(rt.a)({},n),{},{articles:e.payload});case w:return Object(rt.a)(Object(rt.a)({},n),{},{loading:e.state});default:return n}},dt=Object(tt.b)({userState:ct,articleState:st}),lt=Object(tt.c)(dt,Object(tt.a)(it.a));a.a.render(Object(M.jsx)(d.a,{store:lt,children:Object(M.jsx)(et,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.77b0c169.chunk.js.map