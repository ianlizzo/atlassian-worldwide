(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/BANGALORE.f94c6a7c.png"},101:function(e,t,a){e.exports=a.p+"static/media/MANILA.9017af52.png"},102:function(e,t,a){e.exports=a.p+"static/media/MTV.ec96459f.png"},103:function(e,t,a){e.exports=a.p+"static/media/NYC.41c024ef.png"},104:function(e,t,a){e.exports=a.p+"static/media/SF.74e665a6.png"},105:function(e,t,a){e.exports=a.p+"static/media/Sydney.4d8da4e5.png"},106:function(e,t,a){e.exports=a.p+"static/media/YOKOHAMA.2962b5e3.png"},113:function(e,t,a){e.exports=a(265)},118:function(e,t,a){},119:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},120:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(35),o=a.n(i),s=(a(118),a(119),a(120),a(87)),l=a(88),c=a(89),m=a(110),d=a(90),f=a(15),u=a(111),h=a(17),p=a(24),g=a(3),y=a(91),E=a.n(y),k=a(108),x=a.n(k),w=a(10),O=a.n(w),R=a(97),C=a.n(R),A=a(98),v=a.n(A),b=a(99),N=a.n(b),S=a(100),M=a.n(S),Y=a(101),F=a.n(Y),W=a(102),z=a.n(W),j=a(103),B=a.n(j),I=a(104),X=a.n(I),T=a(105),D=a.n(T),G=a(106),Z=a.n(G),H=a(107),L=a.n(H),U=[{markerOffsetY:-25,markerOffsetX:-70,name:"San Francisco",coordinates:[-122.4033,37.7911]},{markerOffsetY:25,markerOffsetX:-55,name:"Mountain View",coordinates:[-122.0609,37.3874]},{markerOffsetY:-25,markerOffsetX:-20,name:"Austin",coordinates:[-97.7446,30.2657]},{markerOffsetY:20,markerOffsetX:45,name:"New York City",coordinates:[-72.842792,40.811081]},{markerOffsetY:-10,markerOffsetX:40,name:"Manila",coordinates:[121.070309,14.515135]},{markerOffsetY:-10,markerOffsetX:40,name:"Sydney",coordinates:[151.206961,-33.867332]},{markerOffsetY:-10,markerOffsetX:-1,name:"Bengaluru",coordinates:[77.579626,13.047294]},{markerOffsetY:-40,markerOffsetX:-1,name:"Amsterdam",coordinates:[4.888533,52.373533]},{markerOffsetY:0,markerOffsetX:50,name:"Yokohama",coordinates:[139.620858,35.452742]}],V=(a(246),{offset:-20,align:"top",duration:1500}),K={margin:5,cursor:"pointer"},J={fontSize:25,textOrientation:"mixed",writingMode:"vertical-rl",alignSelf:"flex-start"},$={fill:"#ECEFF1",stroke:"#607D8B",strokeWidth:.75,outline:"none"},q={fill:"#CFD8DC",stroke:"#607D8B",strokeWidth:.75,outline:"none"},P={fill:"#FF5722",stroke:"#607D8B",strokeWidth:.75,outline:"none"},Q={marginTop:25,width:"95%",height:"100%"},_={cursor:"pointer",position:"relative",bottom:5,right:40,fontFamily:"monospace",height:30,width:30,color:"gray"},ee={width:"100%",margin:"0 auto"},te=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={center:[0,20],zoom:1,modal:!1},e.handleZoomIn=e.handleZoomIn.bind(Object(f.a)(e)),e.handleZoomOut=e.handleZoomOut.bind(Object(f.a)(e)),e.handleCityClick=e.handleCityClick.bind(Object(f.a)(e)),e.handleReset=e.handleReset.bind(Object(f.a)(e)),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleZoomIn",value:function(){this.setState({zoom:2*this.state.zoom})}},{key:"handleZoomOut",value:function(){this.setState({zoom:this.state.zoom/2})}},{key:"handleCityClick",value:function(e){this.setState({zoom:5,center:e.coordinates})}},{key:"handleReset",value:function(){this.setState({center:[0,20],zoom:1})}},{key:"renderSideBar",value:function(){var e=this;return r.a.createElement(g.Col,{xs:2,style:{fontFamily:"monospace"}},r.a.createElement(E.a,null,r.a.createElement("img",{src:C.a,style:{marginTop:20,maxHeight:100,maxWidth:150,cursor:"pointer"},onClick:function(){return O()(e.Home,V)}}),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Sf,V)}},"San Francisco")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Mv,V)}},"Mountain View")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.At,V)}},"Austin")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Ny,V)}},"New York City")),r.a.createElement(g.Row,{middle:"xs",style:{cursor:"pointer"}},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Mn,V)}},"Manila")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Sy,V)}},"Sydney")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Bg,V)}},"Bengaluru")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Am,V)}},"Amsterdam")),r.a.createElement(g.Row,{middle:"xs"},r.a.createElement("p",{style:K,onClick:function(){return O()(e.Yk,V)}},"Yokohama"))))}},{key:"renderImages",value:function(){var e=this;return r.a.createElement(g.Grid,{fluid:!0},r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{src:X.a,style:{width:"76%",resize:"horizontal",height:"100%",maxHeight:"100%",marginRight:20},className:"sf",ref:function(t){e.Sf=t}}),r.a.createElement("p",{style:J},"SAN FRANCISCO")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",Object(s.a)({style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20},className:"mv",ref:function(t){e.Mv=t},src:z.a},"style",{width:"76%",maxWidth:"100%",height:"auto",marginRight:20})),r.a.createElement("p",{style:J},"MOUNTAIN VIEW")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"at",ref:function(t){e.At=t},src:N.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"AUSTIN")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"ny",ref:function(t){e.Ny=t},src:B.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"NEW YORK CITY")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"mn",ref:function(t){e.Mn=t},src:F.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"MANILA")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"sy",ref:function(t){e.Sy=t},src:D.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"SYDNEY")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"bg",ref:function(t){e.Bg=t},src:M.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"BENGALURU")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"am",ref:function(t){e.Am=t},src:v.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"AMSTERDAM")),r.a.createElement(g.Row,{xs:!0,end:"xs"},r.a.createElement("img",{className:"yk",ref:function(t){e.Yk=t},src:Z.a,style:{width:"76%",maxWidth:"100%",height:"auto",marginRight:20}}),r.a.createElement("p",{style:J},"YOKOHAMA")))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home",ref:function(t){e.Home=t},style:ee},r.a.createElement(g.Grid,{fluid:!0,style:{marginBottom:100}},r.a.createElement(g.Row,{xs:!0},this.renderSideBar(),r.a.createElement(g.Col,{xs:!0},r.a.createElement(L.a,{isOpen:this.state.modal,contentLabel:"Examplemodal"}),r.a.createElement(p.Motion,{defaultStyle:{zoom:1,x:0,y:20},style:{zoom:Object(p.spring)(this.state.zoom,{stiffness:50,damping:20}),x:Object(p.spring)(this.state.center[0],{stiffness:210,damping:20}),y:Object(p.spring)(this.state.center[1],{stiffness:210,damping:20})}},function(t){var a=t.zoom,n=t.x,i=t.y;return r.a.createElement(h.ComposableMap,{projectionConfig:{scale:215},width:980,height:450,style:Q},r.a.createElement(h.ZoomableGroup,{center:[n,i],zoom:a},r.a.createElement(h.Geographies,{geography:"https://raw.githubusercontent.com/ianlizzo/atlassian-worldwide/master/public/static/world-110m.json"},function(e,t){return e.map(function(e,a){return"010"!==e.id&&r.a.createElement(h.Geography,{key:a,geography:e,projection:t,style:{default:$,hover:q,pressed:P}})})}),r.a.createElement(h.Markers,null,U.map(function(t,a){return r.a.createElement(h.Marker,{onClick:e.handleCityClick,key:a,marker:t,style:{default:{fill:"#FF5722"},hover:{fill:"#FFFFFF",cursor:"pointer"},pressed:{fill:"#FF5722"}}},r.a.createElement("circle",{cx:0,cy:0,r:5,style:{stroke:"#0052CC",strokeWidth:3,opacity:.9}}),r.a.createElement("text",{textAnchor:"middle",y:t.markerOffsetY,x:t.markerOffsetX,style:{fontFamily:"monospace",fill:"black"}},t.name))}))))}),r.a.createElement(x.a,{style:_,onClick:this.handleReset})))),this.renderImages(),r.a.createElement("div",{style:{margin:50},ref:this.myRef}))}}]),t}(n.Component);var ae=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){e.exports=a.p+"static/media/atlassian-supreme.5961730d.png"},98:function(e,t,a){e.exports=a.p+"static/media/AMSTERDAM.3e88f790.png"},99:function(e,t,a){e.exports=a.p+"static/media/AUSTIN.3ce8205d.png"}},[[113,1,2]]]);
//# sourceMappingURL=main.91d066e8.chunk.js.map