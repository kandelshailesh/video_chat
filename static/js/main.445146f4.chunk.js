(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,n){},118:function(e,n){},120:function(e,n){},132:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(59),c=t.n(a),i=(t(72),t(64)),u=t(1),l=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){e.history.push("/video_chat/room/".concat("hello"))}},"Create room"),o.a.createElement("p",null,"Hello how ar evv you"))},s=t(65),f=t(66),m=t(29),h=t(60),g=t.n(h),d=t(30),p=t.n(d),v=t(31);function w(){var e=Object(m.a)(["\n    height: 30%;\n    width: 30%;\n    margin-left: 20px;\n"]);return w=function(){return e},e}function E(){var e=Object(m.a)(["\n    padding: 20px;\n    display: flex;\n    height: 100vh;\n    width: 90%;\n    margin: 20;\n    flex-wrap: wrap;\n"]);return E=function(){return e},e}var b=v.a.div(E()),j=v.a.video(w()),O=function(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){e.peer.on("stream",(function(e){n.current.srcObject=e}))}),[]),o.a.createElement(j,{playsInline:!0,autoPlay:!0,ref:n})},I={height:window.innerHeight/2,width:window.innerWidth/2},y=function(e){var n=Object(r.useState)([]),t=Object(f.a)(n,2),a=t[0],c=t[1],i=Object(r.useRef)(),u=Object(r.useRef)(),l=Object(r.useRef)([]),m=e.match.params.roomID;return Object(r.useEffect)((function(){console.log("Connected"),i.current=g.a.connect("wss://safe-cliffs-70260.herokuapp.com/"),console.log(i.current),navigator.mediaDevices.getUserMedia({video:I,audio:!0}).then((function(e){u.current.srcObject=e,i.current.emit("join room",m),i.current.on("all users",(function(n){console.log(n);var t=[];n.forEach((function(n){console.log(n);var r=function(e,n,t){var r=new p.a({initiator:!0,trickle:!1,stream:t});return r.on("signal",(function(t){i.current.emit("sending signal",{userToSignal:e,callerID:n,signal:t})})),r}(n,i.current.id,e);l.current.push({peerID:n,peer:r}),t.push(r)})),c(t)})),i.current.on("user joined",(function(n){var t=function(e,n,t){var r=new p.a({initiator:!1,trickle:!1,stream:t});return r.on("signal",(function(e){i.current.emit("returning signal",{signal:e,callerID:n})})),r.signal(e),r}(n.signal,n.callerID,e);console.log(n),l.current.push({peerID:n.callerID,peer:t}),c((function(e){return[].concat(Object(s.a)(e),[t])}))})),i.current.on("receiving returned signal",(function(e){l.current.find((function(n){return n.peerID===e.id})).peer.signal(e.signal)}))}))}),[]),o.a.createElement(b,null,o.a.createElement(j,{muted:!0,ref:u,autoPlay:!0,playsInline:!0}),a.map((function(e,n){return o.a.createElement(O,{key:n,peer:e})})))};var D=function(){return console.log("Hello world"),o.a.createElement(i.a,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/video_chat/room/:roomID",component:y}),o.a.createElement(u.a,{path:"/video_chat/",exact:!0,component:l})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,n,t){e.exports=t(132)},72:function(e,n,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.445146f4.chunk.js.map