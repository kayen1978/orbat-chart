(function(t){function e(e){for(var i,o,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)o=s[u],a[o]&&f.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"b79aebee"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=a[t]=[e,i]});e.push(n[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");o.type=i,o.request=r,n[1](o)}a[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"13be":function(t,e,n){},"3a62":function(t,e,n){},"79eb":function(t,e,n){"use strict";var i=n("83e5"),a=n.n(i);a.a},"83e5":function(t,e,n){},b491:function(t,e,n){"use strict";var i=n("e732"),a=n.n(i);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("ce5b"),r=n.n(a),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"mdrawer",attrs:{width:"400",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-container",[n("h6",{staticClass:"title"},[t._v("ORBAT Chart Builder\n        "),n("v-chip",{attrs:{color:"warning"}},[t._v("alpha")])],1),n("p",{staticClass:"subheading"},[t._v("Work in progress ...")])])],1),n("v-content",[n("v-container",{staticClass:"py-0 px-0 mx-0 my-0",attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{staticClass:"sidebar",staticStyle:{"z-index":"4"}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{class:{"v-btn--active":t.orbatPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle ORBAT panel"},on:{click:function(e){t.orbatPanel=!t.orbatPanel}}},[t._v("\n            ORB\n          ")]),n("v-btn",{class:{"v-btn--active":t.settingsPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle settings panel"},on:{click:function(e){t.settingsPanel=!t.settingsPanel}}},[n("v-icon",[t._v("settings")])],1),n("router-view",{attrs:{name:"toolbar"}})],1),n("v-flex",[n("router-view")],1)],1)],1)],1)],1)},s=[],l=n("d225"),c=n("b0b4"),u=n("308d"),d=n("6bb5"),f=n("4e2b"),h=n("9ab4"),v=n("65d9"),p=n.n(v),b=function(t){function e(){return Object(l["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(c["a"])(e,[{key:"orbatPanel",get:function(){return this.$store.state.orbatPanel},set:function(t){this.$store.commit("setOrbatPanel",t)}},{key:"settingsPanel",get:function(){return this.$store.state.settingsPanel},set:function(t){this.$store.commit("setSettingsPanel",t)}},{key:"settings",get:function(){return this.$store.state.chartOptions}}]),e}(i["default"]);b=h["a"]([p.a],b);var m,g,y,x,O=n("cf68"),w=O,k=i["default"].extend({mixins:[b],components:{},data:function(){return{drawer:null}},created:function(){this.$store.commit("setOrbat",[w])}}),L=k,S=n("2877"),P=Object(S["a"])(L,o,s,!1,null,null,null),C=P.exports,_=n("8c4f"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"3"}},[n("SlidePanel",{attrs:{"header-title":"ORBAT"},on:{onSlide:t.onSlide},model:{value:t.orbatPanel,callback:function(e){t.orbatPanel=e},expression:"orbatPanel"}},[n("OrbatTree",{attrs:{rootUnits:t.orbat},on:{selectunit:t.onSelectUnit}})],1)],1),n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"2"}},[n("SlidePanel",{attrs:{"header-title":"Settings"},model:{value:t.settingsPanel,callback:function(e){t.settingsPanel=e},expression:"settingsPanel"}},[n("SettingsPanel")],1)],1),n("v-flex",{staticClass:"chart-panel"},[n("OrbatChart",t._b({staticClass:"px-0 py-0 home",attrs:{unit:t.currentUnit},on:{unitclick:t.onUnitClick}},"OrbatChart",t.settings,!1))],1)],1)},T=[],j=(n("7f7f"),n("60a3")),A=(n("c5f6"),n("768b")),E=(n("db0a"),n("33b2"),n("0dc2"),n("c7a8"),n("d61f")),B=n.n(E),N=n("4308"),z=n("75fc");function G(t,e){var n=0;function i(t,a){if(e(t,n,a),t.subUnits){n+=1;var r=!0,o=!1,s=void 0;try{for(var l,c=t.subUnits[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var u=l.value;i(u,t)}}catch(d){o=!0,s=d}finally{try{r||null==c.return||c.return()}finally{if(o)throw s}}n-=1}}i(t,null)}function M(t){var e;return(e=[]).concat.apply(e,Object(z["a"])(t))}function D(t){return t.reduce(function(t,e){return t+e},0)}(function(t){t["Top"]="TOP",t["Bottom"]="BOTTOM"})(m||(m={})),function(t){t["Horizontal"]="HORIZONTAL",t["Stacked"]="STACKED",t["TreeLeft"]="TREE_LEFT",t["TreeRight"]="TREE_RIGHT"}(g||(g={})),function(t){t["Fixed"]="FIXED",t["EqualPadding"]="EQUAL_PADDING"}(y||(y={})),function(t){t["Top"]="TOP",t["Middle"]="MIDDLE",t["Bottom"]="BOTTOM"}(x||(x={}));var $={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5,orientation:m.Top,unitLevelDistance:y.Fixed,lastLevelLayout:g.Horizontal,verticalAlignment:x.Top,levelPadding:175},R=600,I=600,V=40,H=50,q=100,X="\n.o-line {\n  stroke: black;\n  stroke-width: 1pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n";function Y(t,e){var n,i={size:e.symbolSize};n=e.symbolGenerator?e.symbolGenerator(t.sidc,i):new E["Symbol"](t.sidc,i);var a=n.getSize(),r=n.getAnchor(),o=n.getOctagonAnchor();return{symbolBoxSize:a,anchor:r,octagonAnchor:o,symb:n,unit:t,x:0,y:0,ly:0,lx:0,rx:0}}function Z(t,e,n,i){arguments.length>4&&void 0!==arguments[4]&&arguments[4];var a=n-e.octagonAnchor.x,r=i-e.octagonAnchor.y;return t.attr("transform","translate(".concat(a,", ").concat(r,")"))}function J(t,e){return t.append("g").attr("class",e)}function W(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ccc";if(t){var n=t.node().getBBox();t.append("rect").lower().classed("dbg-rect",!0).attr("x",n.x).attr("y",n.y).attr("width",n.width).attr("height",n.height).style("fill",e).style("fill-opacity",".4").style("stroke","#666").style("stroke-width","1.5px")}}function F(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"red";t.append("circle").attr("cx",e).attr("cy",n).attr("r",4).attr("fill",i)}function Q(t,e,n){var i=J(t,"o-unit");i.append("g").html(e.symb.asSVG()),i.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.symbolBoxSize.height).attr("class","o-label").text(e.unit.name),n.onClick&&i.on("click",function(t){n.onClick(e)}),n.debug&&W(i);var a=e;return a.groupElement=i,a.boundingBox=i.node().getBBox(),a}function K(t){return t===g.TreeRight||t===g.TreeLeft}function tt(t){var e=t.x,n=t.y;t.ly=n+(t.boundingBox.height-t.octagonAnchor.y),t.lx=e-t.boundingBox.width/2,t.rx=e+t.boundingBox.width/2}function et(t,e){F(t,e.x,e.y),F(t,e.x,e.ly),F(t,e.lx,e.y),F(t,e.rx,e.y)}var nt,it,at,rt,ot=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(l["a"])(this,t),this.rootNode=e,this.groupedLevels=[],this.options=Object.assign({},$,n),e&&this._computeOrbatInfo(e)}return Object(c["a"])(t,[{key:"cleanup",value:function(){if(this.svg){var t=this.svg.selectAll("g.o-unit");t.on("click",null)}}},{key:"toSVG",value:function(t,e){this.width=t.width||R,this.height=t.height||I;var n=this._createSvgElement(e);return n.levels=this._createInitialNodeStructure(this.svg,this.groupedLevels),this._doNodeLayout(n),this._drawConnectors(n),this.svg.node()}},{key:"_createSvgElement",value:function(t){t.innerHTML="";var e=Object(N["a"])(t).append("svg").attr("viewBox","0 0 ".concat(this.width," ").concat(this.height)).attr("class","orbat-chart");return e.append("style").text(X),e.attr("width","100%"),e.attr("height","100%"),this.options.debug&&e.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height),this.svg=e,{groupElement:e,levels:[]}}},{key:"_computeOrbatInfo",value:function(t){var e=this,n=[],i={};function a(){var t=[];return n.forEach(function(e,n){var i=e.reduce(function(t,e,n,i){return 0===n?(t.push([e]),t):i[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);t[n]=i}),t}G(t,function(t,a,r){var o=Y(t,e.options),s=n[a]||[];r&&(o.parent=i[r.id]),i[t.id]=o,s.push(o),n[a]=s}),this.groupedLevels=a()}},{key:"_createInitialNodeStructure",value:function(t,e){var n=this.options,i=[],a=!0,r=!1,o=void 0;try{for(var s,l=function(){var e=Object(A["a"])(s.value,2),a=e[0],r=e[1];if(n.maxLevels&&a>=n.maxLevels)return"break";var o=J(t,"o-level"),l={groupElement:o,unitGroups:[]};i.push(l),r.forEach(function(t,e){var i=J(o,"o-level-group"),a=t.map(function(t){return Q(i,t,n)});l.unitGroups.push({groupElement:i,units:a})})},c=e.entries()[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var u=l();if("break"===u)break}}catch(d){r=!0,o=d}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return i}},{key:"_doNodeLayout",value:function(t){var e=this,n=this.groupedLevels.length,i=this.options.maxLevels||n,a=this.height,r=q;t.levels.forEach(function(t,o){var s;e.options.verticalAlignment===x.Middle?s=a*((o+1)/(n+1)):(s=r,r+=e.options.levelPadding);var l=g.Horizontal;o===i-1&&(l=e.options.lastLevelLayout),e._renderLevel(t,s,l)})}},{key:"_renderLevel",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.Horizontal,i=this.options,a=this.width,r=this.svg,o=t.unitGroups,s=M(o.map(function(t){return t.units})),l=s.length,c=D(s.map(function(t){return t.boundingBox.width})),u=a-c,d=u/l;switch(n){case g.Horizontal:f();break;case g.Stacked:case g.TreeRight:case g.TreeLeft:h(n);break;default:console.warn("Unhandled layout",n)}function f(){var n=0,o=-d/2;t.unitGroups.forEach(function(t,s){var c=!0,u=!1,f=void 0;try{for(var h,v=t.units[Symbol.iterator]();!(c=(h=v.next()).done);c=!0){var p=h.value,b=void 0;b=i.unitLevelDistance==y.EqualPadding?o+p.boundingBox.width/2+d:(n+1)*a/(l+1),p.x=b,p.y=e,tt(p),o=p.x+p.boundingBox.width/2,Z(p.groupElement,p,b,e,i.debug),i.debug&&et(r,p),n+=1}}catch(m){u=!0,f=m}finally{try{c||null==v.return||v.return()}finally{if(u)throw f}}i.debug&&W(t.groupElement,"yellow")})}function h(n){var o=t.unitGroups.length;t.unitGroups.forEach(function(t,s){var l=e,c=!0,u=!1,d=void 0;try{for(var f,h=t.units.entries()[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){var v=Object(A["a"])(f.value,2),p=(v[0],v[1]),b=p.parent?p.parent.x:(s+1)*a/(o+1);n===g.TreeRight?b+=V:n===g.TreeLeft&&(b-=V);var m=l;p.x=b,p.y=m,tt(p),l=p.ly+H,Z(p.groupElement,p,b,m,i.debug),i.debug&&et(r,p)}}catch(y){u=!0,d=y}finally{try{c||null==h.return||h.return()}finally{if(u)throw d}}i.debug&&W(t.groupElement,"yellow")})}i.debug&&W(t.groupElement)}},{key:"_drawConnectors",value:function(t){var e=this,n=this.options.maxLevels||t.levels.length;t.levels.forEach(function(t,i){t.unitGroups.forEach(function(t,a){var r=i===n-1?e.options.lastLevelLayout:g.Horizontal;t.units.forEach(function(t,n){r===g.Stacked&&n>0||K(r)||e._drawUnitLevelGroupConnectorPath(t)}),K(r)?e._drawUnitLevelTreeLeftRightConnectorPath(t.units,r):e._drawUnitLevelConnectorPath(t.units)})})}},{key:"_drawUnitLevelGroupConnectorPath",value:function(t){var e=t.x,n=t.y;if(t.parent){var i=n-(n-t.parent.y)/2,a="M ".concat(e,", ").concat(n-t.octagonAnchor.y-this.options.connectorOffset," V ").concat(i);this.svg.append("path").attr("d",a).classed("o-line",!0)}}},{key:"_drawUnitLevelConnectorPath",value:function(t){var e=t[0],n=this.svg,i=e.parent;if(i){var a=t[t.length-1],r=e.y-(e.y-i.y)/2,o="M ".concat(i.x,", ").concat(i.ly+this.options.connectorOffset," V ").concat(r);n.append("path").attr("d",o).classed("o-line",!0);var s="M ".concat(e.x,", ").concat(r," H ").concat(a.x);n.append("path").attr("d",s).classed("o-line",!0)}}},{key:"_drawUnitLevelTreeLeftRightConnectorPath",value:function(t,e){var n=this.svg,i=t[t.length-1],a=i.parent;if(a){var r="M ".concat(a.x,", ").concat(a.ly+this.options.connectorOffset," V ").concat(i.y);n.append("path").attr("d",r).classed("o-line",!0);var o=!0,s=!1,l=void 0;try{for(var c,u=t[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value,f=void 0;f=e===g.TreeRight?"M ".concat(d.lx-this.options.connectorOffset,", ").concat(d.y,"  H ").concat(a.x):"M ".concat(d.rx+this.options.connectorOffset,", ").concat(d.y,"  H ").concat(a.x),n.append("path").attr("d",f).classed("o-line",!0)}}catch(h){s=!0,l=h}finally{try{o||null==u.return||u.return()}finally{if(s)throw l}}}}}]),t}(),st=ot,lt=i["default"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},maxLevels:{type:Number,default:3},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32},connectorOffset:{type:Number,default:$.connectorOffset},orientation:{type:String,default:$.orientation},unitLevelDistance:{type:String,default:$.unitLevelDistance},lastLevelLayout:{type:String,default:g.Stacked},levelPadding:{type:Number,default:$.levelPadding}},data:function(){return{resizeTimeout:null,width:600,height:600,isMounted:!1}},created:function(){},mounted:function(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed:function(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){},200)},onClick:function(t){this.$emit("unitclick",t)}},render:function(t){this.orbchart&&this.orbchart.cleanup();var e=new st(this.unit,{maxLevels:this.maxLevels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick,connectorOffset:this.connectorOffset,orientation:this.orientation,unitLevelDistance:this.unitLevelDistance,lastLevelLayout:this.lastLevelLayout,levelPadding:this.levelPadding});if(this.orbchart=e,this.isMounted)e.toSVG({width:1920,height:1080},this.$el);return t("div",{attrs:{class:"orbat-chart"}})}}),ct=lt,ut=(n("b491"),Object(S["a"])(ct,nt,it,!1,null,null,null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spanel",class:{large:t.large}},[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"slide"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[t._t("header",[n("v-toolbar-title",[t._v(t._s(t.headerTitle))])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.isActive=!1}}},[n("v-icon",[t._v("chevron_left")])],1)],2),n("div",{staticClass:"slide-content"},[t._t("default")],2)],1)])],1)},ht=[],vt={name:"slide-panel",data:function(){return{isActive:!1}},beforeMount:function(){this.isActive=this.value},props:{value:{required:!1},headerTitle:String,large:Boolean},watch:{isActive:function(t){this.$emit("input",t)},value:function(t){this.isActive=t}},methods:{afterLeave:function(){this.$emit("onSlide")}}},pt=vt,bt=(n("79eb"),Object(S["a"])(pt,ft,ht,!1,null,"295853b8",null)),mt=bt.exports,gt=i["default"].extend({name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},render:function(t){var e=new B.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return t("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:e.asSVG()}})}}),yt=gt,xt=Object(S["a"])(yt,at,rt,!1,null,null,null),Ot=xt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-treeview",{attrs:{items:t.rootUnits,activatable:"","item-children":"subUnits"},on:{"update:active":t.onUnitClick},scopedSlots:t._u([{key:"prepend",fn:function(t){var e=t.item;t.open,t.leaf;return[n("MilSymbol",{attrs:{sidc:e.sidc}})]}},{key:"append",fn:function(e){var i=e.item;return[i.id==t.currentUnitKey?n("v-icon",{staticClass:"pr-3"},[t._v("\n      my_location\n    ")]):t._e()]}}])})},kt=[],Lt=(n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("f400"),function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.currentUnitKey=null,t}return Object(f["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.unitMap=new Map,this.buildUnitMap(this.rootUnits),this.currentUnitKey=this.rootUnits[0].id}},{key:"onUnitClick",value:function(t){t.length&&(this.currentUnitKey=t[0],this.$emit("selectunit",this.unitMap.get(t[0])))}},{key:"buildUnitMap",value:function(t){var e=!0,n=!1,i=void 0;try{for(var a,r=t[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var o=a.value;this.unitMap.set(o.id,o),o.subUnits&&o.subUnits.length&&this.buildUnitMap(o.subUnits)}}catch(s){n=!0,i=s}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}}}]),e}(i["default"]));h["a"]([Object(j["b"])()],Lt.prototype,"rootUnits",void 0),Lt=h["a"]([p()({components:{MilSymbol:Ot}})],Lt);var St=Lt,Pt=St,Ct=Object(S["a"])(Pt,wt,kt,!1,null,"10af6aec",null),_t=Ct.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-text-field",{attrs:{type:"number",label:"Visible levels"},model:{value:t.settings.maxLevels,callback:function(e){t.$set(t.settings,"maxLevels",t._n(e))},expression:"settings.maxLevels"}}),n("v-text-field",{attrs:{label:"Symbol size",type:"number",min:"5"},model:{value:t.settings.symbolSize,callback:function(e){t.$set(t.settings,"symbolSize",t._n(e))},expression:"settings.symbolSize"}}),n("v-text-field",{attrs:{label:"Connector offset",type:"number",min:"0"},model:{value:t.settings.connectorOffset,callback:function(e){t.$set(t.settings,"connectorOffset",t._n(e))},expression:"settings.connectorOffset"}}),n("v-text-field",{attrs:{label:"Level padding",type:"number",min:"0"},model:{value:t.settings.levelPadding,callback:function(e){t.$set(t.settings,"levelPadding",t._n(e))},expression:"settings.levelPadding"}}),n("v-select",{attrs:{label:"Unit spacing",items:t.unitLevelDistance},model:{value:t.settings.unitLevelDistance,callback:function(e){t.$set(t.settings,"unitLevelDistance",e)},expression:"settings.unitLevelDistance"}}),n("v-select",{attrs:{label:"Last level layout",items:t.lastLevelLayout},model:{value:t.settings.lastLevelLayout,callback:function(e){t.$set(t.settings,"lastLevelLayout",e)},expression:"settings.lastLevelLayout"}}),n("v-checkbox",{attrs:{label:"Debug mode"},model:{value:t.settings.debug,callback:function(e){t.$set(t.settings,"debug",e)},expression:"settings.debug"}})],1)},Tt=[];n("ffc1");function jt(t){return Object.entries(t).map(function(t){var e=Object(A["a"])(t,2),n=e[0],i=e[1];return{text:n,value:i}})}var At=i["default"].extend({mixins:[b],name:"SettingsPanel",computed:{orientation:function(){return jt(m)},unitLevelDistance:function(){return jt(y)},lastLevelLayout:function(){return jt(g)}}}),Et=At,Bt=Object(S["a"])(Et,Ut,Tt,!1,null,null,null),Nt=Bt.exports,zt=function(t){function e(){return Object(l["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){this.currentUnit=this.orbat[0]}},{key:"onSlide",value:function(){}},{key:"onUnitClick",value:function(t){console.log("Clicked",t.unit.name)}},{key:"onSelectUnit",value:function(t){this.currentUnit=t}},{key:"orbat",get:function(){return this.$store.state.orbat}},{key:"currentUnit",get:function(){return this.$store.state.currentUnit},set:function(t){this.$store.commit("setCurrentUnit",t)}}]),e}(Object(v["mixins"])(b));zt=h["a"]([Object(j["a"])({components:{SettingsPanel:Nt,OrbatTree:_t,OrbatChart:dt,SlidePanel:mt,MilSymbol:Ot}})],zt);var Gt=zt,Mt=Gt,Dt=(n("d6bf"),Object(S["a"])(Mt,U,T,!1,null,"01c26c37",null)),$t=Dt.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{flat:"",icon:"",dark:"",title:"Download as SVG"},on:{click:t.downloadAsSVG}},[n("v-icon",[t._v("save_alt")])],1)],1)},It=[],Vt=n("21a6"),Ht={name:"MainViewToolbar",methods:{downloadAsSVG:function(){var t=document.getElementsByClassName("orbat-chart")[0];Vt["saveAs"](new Blob([(new XMLSerializer).serializeToString(t)],{type:"image/svg+xml"}),"orbat-chart.svg")}}},qt=Ht,Xt=Object(S["a"])(qt,Rt,It,!1,null,"6b667b64",null),Yt=Xt.exports;i["default"].use(_["a"]);var Zt=new _["a"]({routes:[{path:"/",name:"mainView",components:{default:$t,toolbar:Yt}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Jt=n("cebc"),Wt=n("2f62");i["default"].use(Wt["a"]);var Ft={orbat:[],orbatPanel:!0,settingsPanel:!0,currentUnit:null,chartOptions:Object(Jt["a"])({},$,{maxLevels:4,lastLevelLayout:g.TreeRight})},Qt=new Wt["a"].Store({state:Ft,mutations:{setOrbatPanel:function(t,e){t.orbatPanel=e},setSettingsPanel:function(t,e){t.settingsPanel=e},setCurrentUnit:function(t,e){t.currentUnit=e},setOrbat:function(t,e){t.orbat=e},setChartOptions:function(t,e){t.chartOptions=e}},actions:{}});n("bf40"),n("3a62");i["default"].config.productionTip=!1,i["default"].use(r.a),new i["default"]({router:Zt,store:Qt,render:function(t){return t(C)}}).$mount("#app")},cf68:function(t){t.exports={name:"TG 317.1 LG",sidc:"10031004001211000000",subUnits:[{name:"3 Cdo Bde",sidc:"10031000181211004600",subUnits:[{name:"40 Cdo",sidc:"10031000161211004600",state:[],id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~",state:[]},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c",state:[]},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1",state:[]}]},{name:"42 Cdo",sidc:"10031000161211004600",state:[],id:"xcEG3htG0iZEuisD9IhGY",subUnits:[{name:"J",sidc:"10031000151211004600",id:"Yfj4qs4nUyG3DOLwzG8hY",state:[]},{name:"K",sidc:"10031000151211004600",id:"Od6fwg9FD5upCkXDIBalQ",state:[]},{name:"L",sidc:"10031000151211004600",id:"jdXcqNaLkNJxH97rVmUP_",state:[]}]},{name:"45 Cdo",sidc:"10031000161211004600",state:[],id:"0fm4O5tSvrVwjnv9~6ECy",subUnits:[{name:"X",sidc:"10031000151211004600",id:"7yI8rtwPIXI07Ag1Qyuem",state:[]},{name:"Y",sidc:"10031000151211004600",id:"QrSxdjL5eV~w1mJkRhUzH",state:[]},{name:"Z",sidc:"10031000151211004600",id:"~WAhIuR0DjOs6vxdNmTcn",state:[]}]},{name:"29 Cdo RA",sidc:"10031000161303000000",state:[],id:"qF9mX0pKVgtu7cVHjsXy5"},{name:"2 Para",sidc:"10031000161211000001",subUnits:[{name:"29 FB",sidc:"10031000151303000000",state:[],id:"vydX8pjg7sB1t37a5pBN1"},{name:"43 AD",sidc:"10031000141301020000",state:[],id:"peqkxwOqZXYkpSsx4KRCj"},{name:"A COY",sidc:"10031000151211000001",id:"wbPe8yifmaTgAxT2oD1Ff",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"rVxn2~0XEf8E7WeuPxUe6",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151213000001",id:"vu2TRMUpnGI2klzs19BgZ",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151211000001",id:"~78NfpA426AitI60JeWSa",state:[],shortName:"D"}],state:[],id:"QyZAnvqo5EXsjcNis_GSE"},{name:"3 Para",sidc:"10031000161211000001",subUnits:[{name:"A COY",sidc:"10031000151211000001",id:"INGH8mxuQMnN7LBZhXV_y",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"~8cVJd3hQNPr8exESXML9",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151211000001",id:"bsMEfBAVOxvYu86qvP0Wq",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151213000001",id:"uUlcvH2~mvagZr1QGoZcP",state:[],shortName:"D"}],state:[],id:"UlbrqVz6kysuUCzz7hSTu"}],state:[],id:"yeyNm2QTCh_yivrfpnv0N"},{name:"5 Inf Bde",sidc:"10031000181211000000",state:[],id:"LurqqM75Avg1_t0AjxUgi",subUnits:[{name:"2nd Bn Scots Guards",sidc:"10031000161211000000",id:"ZZhPAmDQzAT6JWhesPzQ2",state:[],shortName:"SG"},{name:"1st Bn Welsh Guards",sidc:"10031000161211000000",id:"gkcIswEB_vLPW_a3NCJzx",state:[],shortName:"WG"},{name:"1st Bn 7th Gurkha Rifles",sidc:"10031000161211000000",id:"ugu_gHIyde1iuwHYC34_k",state:[],shortName:"7 GR"},{name:"36 Engineer Regiment",sidc:"10031000161407000000",id:"kkfnLWpc2cK1uw2qX6XwB",state:[],shortName:"36 Eng"},{name:"63 AD Squadron",sidc:"10031000151301020000",id:"qhZBaHDgQYOvP4fCSqMXZ",state:[],shortName:"63 AD"},{name:"97 Field Battery",sidc:"10031000151303000000",id:"5yU8AvSZGcNDLjGpCZJJC",state:[],shortName:"97 FB"}]}],state:[],id:"Apc~4XNmoJDViPTPdcoJS"}},d6bf:function(t,e,n){"use strict";var i=n("13be"),a=n.n(i);a.a},e732:function(t,e,n){}});
//# sourceMappingURL=app-legacy.3964b290.js.map