(function(t){function e(e){for(var o,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);h&&h(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={app:0},i=[];function a(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d4a2497d"}[t]+".js"}function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=o);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t),i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(e)},s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"677d":function(t,e,n){"use strict";(function(t){var o=n("a541"),r=n("79a6");(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=" .orbat-chart { width: 100%; height: 80%; padding: 0; margin: 0; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}})();var i=o["a"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},levels:{type:Number,default:0},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32}},data:function(){return{resizeTimeout:null,width:600,height:600,isMounted:!1}},created:function(){},mounted:function(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed:function(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){},200)},onClick:function(t){this.$emit("unitclick",t)}},render:function(t){this.orbchart&&this.orbchart.cleanup();var e=new r["a"](this.unit,{maxLevels:this.levels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick});if(this.orbchart=e,this.isMounted)e.toSVG({width:1920,height:1080},this.$el);return t("div",{attrs:{class:"orbat-chart"}})}});function a(t){a.installed||(a.installed=!0,t.component("OrbatChart",i))}var s={install:a},c=null;"undefined"!==typeof window?c=window.Vue:"undefined"!==typeof t&&(c=t.Vue),c&&c.use(s),e["a"]=i}).call(this,n("c8ba"))},"79a6":function(t,e,n){"use strict";n("0dc2");var o=n("5a26"),r=n("4308");function i(t,e){let n=0;function o(t,r){if(e(t,n,r),t.subUnits){n+=1;for(const e of t.subUnits)o(e,t);n-=1}}o(t,null)}const a="\n.o-line {\n  stroke: black;\n  stroke-width: 1pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n",s={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5};function c(t,e){const n=new o["Symbol"](t.sidc,{size:e.symbolSize}),r=n.getSize(),i=n.getAnchor(),a=n.getOctagonAnchor();return{size:r,anchor:i,octagonAnchor:a,symb:n,x:null,y:null,parent:null,node:t}}function l(t,e,n,o){const r=n-e.octagonAnchor.x,i=o-e.octagonAnchor.y;return t.attr("transform",`translate(${r}, ${i})`)}function u(t,e,n){const o=t.append("g").attr("class","o-unit");let r=o.append("rect").classed("o-rect",!0);o.append("g").html(e.symb.asSVG());o.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.size.height).attr("class","o-label").text(e.node.name);const i=o.node().getBBox();return n.debug&&(r=r.attr("x",i.x).attr("y",i.y).attr("width",i.width).attr("height",i.height).style("fill","#ccc").style("fill-opacity",".3").style("stroke","#666").style("stroke-width","1.5px")),o}class h{constructor(t,e={}){this.rootNode=t,this.levels=[],this.options=Object.assign({},s,e),t&&this._computeOrbatInfo(t)}cleanup(){if(this.svg){let t=this.svg.selectAll("g.o-unit");t.on("click",null)}}toSVG(t,e){this.width=t.width||600,this.height=t.height||600,e.innerHTML="";const n=Object(r["a"])(e),o=n.append("svg");this.svg=o;let i=this.options;o.attr("viewBox",`0 0 ${this.width} ${this.height}`),o.append("style").text(a),o.attr("width","100%"),o.attr("height","100%");o.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height);const s=this.levels.length;return this.levels.forEach((t,e)=>{if(i.maxLevels&&e>=i.maxLevels)return;let n=t.reduce((t,e)=>t.concat(e),[]);const r=n.length;let a=0;t.forEach((t,n)=>{t.forEach(t=>{const n=(a+1)*this.width/(r+1),c=this.height*((e+1)/(s+1));t.x=n,t.y=c;const h=u(o,t,this.options);i.onClick&&h.on("click",e=>{i.onClick(t)});const d=h.node().getBBox();if(t.ly=c+(d.height-t.octagonAnchor.y),l(h,t,n,c),t.parent){t.parent.x;const e=c-(c-t.parent.y)/2,r=`M ${n}, ${c-t.octagonAnchor.y-i.connectorOffset} V ${e}`;o.append("path").attr("d",r).classed("o-line",!0)}a+=1});let c=t[0];if(!c.parent)return;let h=c.parent,d=t[t.length-1];const p=c.y-(c.y-h.y)/2,f=`M ${h.x}, ${h.ly+i.connectorOffset} V ${p}`;o.append("path").attr("d",f).classed("o-line",!0);const m=`M ${c.x}, ${p} H ${d.x}`;o.append("path").attr("d",m).classed("o-line",!0)})}),o.node()}_computeOrbatInfo(t){let e=[];const n={};i(t,(t,o,r)=>{const i=c(t,this.options),a=e[o]||[];r&&(i.parent=n[r.id]),n[t.id]=i,a.push(i),e[o]=a}),e.forEach((t,n)=>{let o=t.reduce((t,e,n,o)=>{return 0===n?(t.push([e]),t):o[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);e[n]=o}),this.levels=e}}e["a"]=h},c21b:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a=(n("034f"),n("2877")),s={},c=Object(a["a"])(s,r,i,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,u=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("orbat-chart",{attrs:{unit:t.orbat}})],1)},d=[],p=n("9ab4"),f=n("60a3"),m=n("677d");const b={name:"A Bde",sidc:"10031000181211004600",id:"sdsdfsdfsdf",subUnits:[{name:"Btn",sidc:"10031000161211004600",id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~"},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c"},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1"}]}]};let g=class extends f["b"]{constructor(){super(...arguments),this.orbat=b}};g=p["a"]([Object(f["a"])({components:{OrbatChart:m["a"]}})],g);var y=g,v=y,w=Object(a["a"])(v,h,d,!1,null,null,null);w.options.__file="Home.vue";var x=w.exports;o["default"].use(u["a"]);var O=new u["a"]({routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:()=>n.e("about").then(n.bind(null,"f820"))}]}),k=n("2f62");o["default"].use(k["a"]);var $=new k["a"].Store({state:{},mutations:{},actions:{}});o["default"].config.productionTip=!1,new o["default"]({router:O,store:$,render:t=>t(l)}).$mount("#app")}});
//# sourceMappingURL=app.5b478259.js.map