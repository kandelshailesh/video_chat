(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,n){},118:function(e,n){},120:function(e,n){},132:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(59),c=t.n(o),i=(t(72),t(64)),u=t(1),l=t(134),s=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{onClick:function(){var n=Object(l.a)();e.history.push("/video_chat/room/".concat(n))}},"Create room"),a.a.createElement("p",null,"Hello how ar eyou"))},f=t(65),m=t(66),h=t(29),d=t(60),g=t.n(d),p=t(30),v=t.n(p),w=t(31);function b(){var e=Object(h.a)(["\n    height: 30%;\n    width: 30%;\n    margin-left: 20px;\n"]);return b=function(){return e},e}function E(){var e=Object(h.a)(["\n    padding: 20px;\n    display: flex;\n    height: 100vh;\n    width: 90%;\n    margin: 20;\n    flex-wrap: wrap;\n"]);return E=function(){return e},e}var j=w.a.div(E()),O=w.a.video(b()),I=function(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){n.current.srcObject=e}))}),[]),a.a.createElement(O,{playsInline:!0,autoPlay:!0,ref:n})},y={height:window.innerHeight/2,width:window.innerWidth/2},D=function(e){var n=Object(r.useState)([]),t=Object(m.a)(n,2),o=t[0],c=t[1],i=Object(r.useRef)(),u=Object(r.useRef)(),l=Object(r.useRef)([]),s=e.match.params.roomID;return Object(r.useEffect)((function(){console.log("Connected"),i.current=g.a.connect("wss://safe-cliffs-70260.herokuapp.com/"),console.log(i.current),navigator.mediaDevices.getUserMedia({video:y,audio:!0}).then((function(e){u.current.srcObject=e,i.current.emit("join room",s),i.current.on("all users",(function(n){var t=[];n.forEach((function(n){console.log(n);var r=function(e,n,t){var r=new v.a({initiator:!0,trickle:!1,stream:t});return r.on("signal",(function(t){i.current.emit("sending signal",{userToSignal:e,callerID:n,signal:t})})),r}(n,i.current.id,e);l.current.push({peerID:n,peer:r}),t.push(r)})),c(t)})),i.current.on("user joined",(function(n){var t=function(e,n,t){var r=new v.a({initiator:!1,trickle:!1,stream:t});return r.on("signal",(function(e){i.current.emit("returning signal",{signal:e,callerID:n})})),r.signal(e),r}(n.signal,n.callerID,e);console.log(n),l.current.push({peerID:n.callerID,peer:t}),c((function(e){return[].concat(Object(f.a)(e),[t])}))})),i.current.on("receiving returned signal",(function(e){l.current.find((function(n){return n.peerID===e.id})).peer.signal(e.signal)}))}))}),[]),a.a.createElement(j,null,a.a.createElement(O,{muted:!0,ref:u,autoPlay:!0,playsInline:!0}),o.map((function(e,n){return a.a.createElement(I,{key:n,peer:e})})))};var k=function(){return console.log("Hello world"),a.a.createElement(i.a,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{path:"/video_chat/",exact:!0,component:s}),a.a.createElement(u.a,{path:"/video_chat/room/:roomID",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,n,t){e.exports=t(132)},72:function(e,n,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.27b78981.chunk.js.map