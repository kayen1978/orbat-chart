(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)s=o[u],a[s]&&f.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"-legacy."+{about:"9ac7593b"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,i){n=a[t]=[e,i]});e.push(n[2]=i);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+r+")");s.type=i,s.request=r,n[1](s)}a[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3a62":function(t,e,n){},"79eb":function(t,e,n){"use strict";var i=n("83e5"),a=n.n(i);a.a},"83e5":function(t,e,n){},"8e8f":function(t,e,n){},a630:function(t,e,n){"use strict";var i=n("8e8f"),a=n.n(i);a.a},b491:function(t,e,n){"use strict";var i=n("e732"),a=n.n(i);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=n("ce5b"),r=n.n(a),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-navigation-drawer",{staticClass:"mdrawer",attrs:{width:"400",temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-container",[n("h6",{staticClass:"title"},[t._v("ORBAT Chart Builder\n        "),n("v-chip",{attrs:{color:"warning"}},[t._v("alpha")])],1),n("p",{staticClass:"subheading"},[t._v("Work in progress ...")])])],1),n("v-content",[n("v-container",{staticClass:"py-0 px-0 mx-0 my-0",attrs:{fluid:"","fill-height":""}},[n("v-layout",[n("v-flex",{staticClass:"sidebar",staticStyle:{"z-index":"4"}},[n("v-toolbar-side-icon",{attrs:{dark:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-btn",{class:{"v-btn--active":t.orbatPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle ORBAT panel"},on:{click:function(e){t.orbatPanel=!t.orbatPanel}}},[t._v("\n            ORB\n          ")]),n("v-btn",{class:{"v-btn--active":t.settingsPanel},attrs:{flat:"",icon:"",dark:"",title:"Toggle settings panel"},on:{click:function(e){t.settingsPanel=!t.settingsPanel}}},[n("v-icon",[t._v("settings")])],1),n("router-view",{attrs:{name:"toolbar"}})],1),n("v-flex",[n("router-view")],1)],1)],1)],1)],1)},o=[],c=n("d225"),l=n("b0b4"),u=n("308d"),d=n("6bb5"),f=n("4e2b"),v=n("9ab4"),p=n("65d9"),h=n.n(p),b=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(l["a"])(e,[{key:"orbatPanel",get:function(){return this.$store.state.ui.orbatPanel},set:function(t){this.orbatPanel!==t&&this.$store.commit("setOrbatPanel",t)}},{key:"settingsPanel",get:function(){return this.$store.state.ui.settingsPanel},set:function(t){this.settingsPanel!==t&&this.$store.commit("setSettingsPanel",t)}},{key:"settings",get:function(){return this.$store.state.chart.chartOptions}}]),e}(i["default"]);b=v["a"]([h.a],b);var m,g,y,O,x=n("cf68"),k=x,L=i["default"].extend({mixins:[b],components:{},data:function(){return{drawer:null}},created:function(){this.$store.commit("setOrbat",[k])}}),w=L,S=n("2877"),j=Object(S["a"])(w,s,o,!1,null,null,null),C=j.exports,T=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"3"}},[n("SlidePanel",{attrs:{"header-title":"ORBAT"},on:{onSlide:t.onSlide},model:{value:t.orbatPanel,callback:function(e){t.orbatPanel=e},expression:"orbatPanel"}},[n("OrbatTree",{attrs:{rootUnits:t.orbat},on:{selectunit:t.onSelectUnit}})],1)],1),n("v-flex",{staticClass:"panel",staticStyle:{"z-index":"2"}},[n("SlidePanel",{attrs:{"header-title":"Settings"},model:{value:t.settingsPanel,callback:function(e){t.settingsPanel=e},expression:"settingsPanel"}},[n("SettingsPanel")],1)],1),n("v-flex",{staticClass:"chart-panel"},[n("OrbatChart",t._b({staticClass:"px-0 py-0 home",attrs:{unit:t.currentUnit,specificOptions:t.specificOptions},on:{unitclick:t.onUnitClick}},"OrbatChart",t.settings,!1))],1)],1)},P=[],U=(n("7f7f"),n("60a3")),E=(n("c5f6"),n("75fc")),G=n("768b"),N=(n("db0a"),n("33b2"),n("0dc2"),n("c7a8"),n("d61f")),A=n.n(N),B=n("4308");function M(t,e){var n=0;function i(t,a){if(e(t,n,a),t.subUnits){n+=1;var r=!0,s=!1,o=void 0;try{for(var c,l=t.subUnits[Symbol.iterator]();!(r=(c=l.next()).done);r=!0){var u=c.value;i(u,t)}}catch(d){s=!0,o=d}finally{try{r||null==l.return||l.return()}finally{if(s)throw o}}n-=1}}i(t,null)}function z(t){var e;return(e=[]).concat.apply(e,Object(E["a"])(t))}function D(t){return t.reduce(function(t,e){return t+e},0)}(function(t){t["Top"]="TOP",t["Bottom"]="BOTTOM"})(m||(m={})),function(t){t["Horizontal"]="HORIZONTAL",t["Stacked"]="STACKED",t["Tree"]="TREE",t["TreeLeft"]="TREE_LEFT",t["TreeRight"]="TREE_RIGHT"}(g||(g={})),function(t){t["Fixed"]="FIXED",t["EqualPadding"]="EQUAL_PADDING"}(y||(y={})),function(t){t["Top"]="TOP",t["Middle"]="MIDDLE",t["Bottom"]="BOTTOM"}(O||(O={}));var R=600,V=600,$=40,I=50,H=100,q={symbolSize:32,maxLevels:0,debug:!1,connectorOffset:5,orientation:m.Top,unitLevelDistance:y.Fixed,lastLevelLayout:g.Horizontal,verticalAlignment:O.Top,levelPadding:175,treeOffset:$,stackedOffset:I,lineWidth:1};function W(t){return"\n.o-line {\n  stroke: black;\n  stroke-width: ".concat(t.lineWidth,"pt;\n  fill:none;\n}\n\n.o-label {\n  text-anchor: middle;\n}\n\n.o-unit:hover {\n  font-weight: bold;\n}\n")}function X(t,e){var n,i={size:e.symbolSize};n=e.symbolGenerator?e.symbolGenerator(t.unit.sidc,i):new N["Symbol"](t.unit.sidc,i);var a=t;return a.symbolBoxSize=n.getSize(),a.anchor=n.getAnchor(),a.octagonAnchor=n.getOctagonAnchor(),a.symb=n,a.x=0,a.y=0,a.lx=0,a.rx=0,a.ly=0,a}function Y(t,e,n,i){arguments.length>4&&void 0!==arguments[4]&&arguments[4];var a=n-e.octagonAnchor.x,r=i-e.octagonAnchor.y;return t.attr("transform","translate(".concat(a,", ").concat(r,")"))}function Z(t,e){return t.append("g").attr("class",e)}function J(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ccc";if(t){var n=t.node().getBBox();t.append("rect").lower().classed("dbg-rect",!0).attr("x",n.x).attr("y",n.y).attr("width",n.width).attr("height",n.height).style("fill",e).style("fill-opacity",".4").style("stroke","#666").style("stroke-width","1.5px")}}function F(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"red";t.append("circle").attr("cx",e).attr("cy",n).attr("r",4).attr("fill",i)}function Q(t,e,n){var i=Z(t,"o-unit");i.append("g").html(e.symb.asSVG()),i.append("text").attr("x",e.octagonAnchor.x).attr("dy","1.1em").attr("y",e.symbolBoxSize.height).attr("class","o-label").text(e.unit.name),n.onClick&&i.on("click",function(t){n.onClick(e)}),n.debug&&J(i);var a=e;return a.groupElement=i,a.boundingBox=i.node().getBBox(),a}function K(t){return t===g.TreeRight||t===g.TreeLeft}function tt(t){return t===g.TreeRight||t===g.TreeLeft||t===g.Tree}function et(t){return t===g.TreeRight||t===g.TreeLeft||t===g.Tree||t===g.Stacked}function nt(t){var e=t.x,n=t.y;t.ly=n+(t.boundingBox.height-t.octagonAnchor.y),t.lx=e-t.boundingBox.width/2,t.rx=e+t.boundingBox.width/2}function it(t,e){F(t,e.x,e.y),F(t,e.x,e.ly),F(t,e.lx,e.y),F(t,e.rx,e.y)}var at,rt,st,ot,ct=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;Object(c["a"])(this,t),this.rootNode=e,this.specificOptions=i,this.groupedLevels=[],this.options=Object.assign({},q,n),e&&this._computeOrbatInfo(e)}return Object(l["a"])(t,[{key:"cleanup",value:function(){if(this.svg){var t=this.svg.selectAll("g.o-unit");t.on("click",null)}}},{key:"toSVG",value:function(t,e){this.width=t.width||R,this.height=t.height||V;var n=this._createSvgElement(e);return n.levels=this._createInitialNodeStructure(this.svg,this.groupedLevels),this._doNodeLayout(n),this._drawConnectors(n),this.svg.node()}},{key:"_createSvgElement",value:function(t){t.innerHTML="";var e=Object(B["a"])(t).append("svg").attr("viewBox","0 0 ".concat(this.width," ").concat(this.height)).attr("class","orbat-chart");return e.append("style").text(W(this.options)),e.attr("width","100%"),e.attr("height","100%"),this.options.debug&&e.append("rect").attr("fill","none").attr("stroke","red").attr("y","0").attr("x","0").attr("width",this.width).attr("height",this.height),this.svg=e,{groupElement:e,levels:[]}}},{key:"_computeOrbatInfo",value:function(t){var e=[],n={};function i(){var t=[];return e.forEach(function(e,n){var i=e.reduce(function(t,e,n,i){return 0===n?(t.push([e]),t):i[n-1].parent===e.parent?(t[t.length-1].push(e),t):(t.push([e]),t)},[]);t[n]=i}),t}M(t,function(t,i,a){var r={unit:t},s=e[i]||[];a&&(r.parent=n[a.id]),n[t.id]=r,s.push(r),e[i]=s}),this.groupedLevels=i()}},{key:"_createInitialNodeStructure",value:function(t,e){var n=this,i=this.options,a=[],r=!0,s=!1,o=void 0;try{for(var c,l=function(){var e=Object(G["a"])(c.value,2),r=e[0],s=e[1];if(i.maxLevels&&r>=i.maxLevels)return"break";var o={};n.specificOptions.level&&n.specificOptions.level[r]&&(o=n.specificOptions.level[r]||{});var l=Z(t,"o-level"),u={groupElement:l,unitGroups:[],options:o};a.push(u);var d=Object.assign({},i,o);s.forEach(function(t,e){var i=t[0].parent,a={};i&&n.specificOptions&&n.specificOptions.levelGroup&&(a=n.specificOptions.levelGroup[i.unit.id]||{});var r=Object.assign({},d,a),s=Z(l,"o-level-group"),o=t.map(function(t){var e=n.specificOptions&&n.specificOptions.unit&&n.specificOptions.unit[t.unit.id]||{},i=Object.assign({},r,e),a=Q(s,X(t,i),i);return a.options=e,a});u.unitGroups.push({groupElement:s,units:o,options:a})})},u=e.entries()[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var d=l();if("break"===d)break}}catch(f){s=!0,o=f}finally{try{r||null==u.return||u.return()}finally{if(s)throw o}}return a}},{key:"_doNodeLayout",value:function(t){var e=this,n=this.groupedLevels.length,i=this.options.maxLevels||n,a=this.height,r=H;t.levels.forEach(function(t,s){var o;e.options.verticalAlignment===O.Middle?o=a*((s+1)/(n+1)):(o=r,r+=e.options.levelPadding);var c=g.Horizontal;s===i-1&&(c=e.options.lastLevelLayout),e._renderLevel(t,o,c)})}},{key:"_renderLevel",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.Horizontal,i=Object.assign({},this.options,t.options),a=this.width,r=this.svg,s=t.unitGroups,o=z(s.map(function(t){return t.units})),c=o.length,l=D(o.map(function(t){return t.boundingBox.width})),u=a-l,d=u/c;switch(n){case g.Horizontal:f();break;case g.Tree:v();break;case g.Stacked:case g.TreeRight:case g.TreeLeft:p(n);break;default:console.warn("Unhandled layout",n)}function f(){var n=0,s=-d/2;t.unitGroups.forEach(function(t,o){var l=Object.assign({},i,t.options),u=!0,f=!1,v=void 0;try{for(var p,h=t.units[Symbol.iterator]();!(u=(p=h.next()).done);u=!0){var b=p.value,m=void 0,g=Object.assign({},l,b.options);m=g.unitLevelDistance==y.EqualPadding?s+b.boundingBox.width/2+d:(n+1)*a/(c+1),b.x=m,b.y=e,nt(b),s=b.x+b.boundingBox.width/2,Y(b.groupElement,b,m,e,g.debug),g.debug&&it(r,b),n+=1}}catch(O){f=!0,v=O}finally{try{u||null==h.return||h.return()}finally{if(f)throw v}}l.debug&&J(t.groupElement,"yellow")})}function v(){var n=t.unitGroups.length;t.unitGroups.forEach(function(t,s){var o=Object.assign({},i,t.options),c=e,l=!0,u=!1,d=void 0;try{for(var f,v=t.units.entries()[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var p=Object(G["a"])(f.value,2),h=p[0],b=p[1],m=Object.assign({},o,b.options),g=b.parent?b.parent.x:(s+1)*a/(n+1);h%2?g+=m.treeOffset:g-=m.treeOffset;var y=c;b.x=g,b.y=y,nt(b),h%2&&(c=b.ly+m.stackedOffset),Y(b.groupElement,b,g,y,m.debug),m.debug&&it(r,b)}}catch(O){u=!0,d=O}finally{try{l||null==v.return||v.return()}finally{if(u)throw d}}o.debug&&J(t.groupElement,"yellow")})}function p(n){var s=t.unitGroups.length;t.unitGroups.forEach(function(t,o){var c=Object.assign({},i,t.options),l=e,u=!0,d=!1,f=void 0;try{for(var v,p=t.units.entries()[Symbol.iterator]();!(u=(v=p.next()).done);u=!0){var h=Object(G["a"])(v.value,2),b=(h[0],h[1]),m=Object.assign({},c,b.options),y=b.parent?b.parent.x:(o+1)*a/(s+1);n===g.TreeRight?y+=m.treeOffset:n===g.TreeLeft&&(y-=m.treeOffset);var O=l;b.x=y,b.y=O,nt(b),l=b.ly+m.stackedOffset,Y(b.groupElement,b,y,O,m.debug),m.debug&&it(r,b)}}catch(x){d=!0,f=x}finally{try{u||null==p.return||p.return()}finally{if(d)throw f}}c.debug&&J(t.groupElement,"yellow")})}i.debug&&J(t.groupElement)}},{key:"_drawConnectors",value:function(t){var e=this,n=this.options.maxLevels||t.levels.length;t.levels.forEach(function(t,i){var a=Object.assign({},e.options,t.options);t.unitGroups.forEach(function(t,r){var s=i===n-1?e.options.lastLevelLayout:g.Horizontal,o=Object.assign({},a,t.options);switch(t.units.forEach(function(t,n){var i=Object.assign({},o,t.options);s===g.Stacked&&n>0||K(s)||s!==g.Tree&&e._drawUnitLevelGroupConnectorPath(t,i)}),s){case g.TreeRight:case g.TreeLeft:case g.Tree:e._drawUnitLevelGroupTreeLeftRightConnectorPath(t.units,s,o);break;default:e._drawUnitLevelConnectorPath(t.units,o)}})})}},{key:"_drawUnitLevelGroupConnectorPath",value:function(t,e){var n=t.x,i=t.y;if(t.parent){var a=i-(i-t.parent.y)/2,r="M ".concat(n,", ").concat(i-t.octagonAnchor.y-e.connectorOffset," V ").concat(a);this.svg.append("path").attr("d",r).classed("o-line",!0)}}},{key:"_drawUnitLevelConnectorPath",value:function(t,e){var n=t[0],i=this.svg,a=n.parent;if(a){var r=t[t.length-1],s=n.y-(n.y-a.y)/2,o="M ".concat(a.x,", ").concat(a.ly+e.connectorOffset," V ").concat(s);i.append("path").attr("d",o).classed("o-line",!0);var c="M ".concat(n.x,", ").concat(s," H ").concat(r.x);i.append("path").attr("d",c).classed("o-line",!0)}}},{key:"_drawUnitLevelGroupTreeLeftRightConnectorPath",value:function(t,e,n){var i=this.svg,a=t[t.length-1],r=a.parent;if(r){var s="M ".concat(r.x,", ").concat(r.ly+n.connectorOffset," V ").concat(a.y);i.append("path").attr("d",s).classed("o-line",!0);var o=Math.max.apply(Math,Object(E["a"])(t.map(function(t){return t.boundingBox.width}))),c=!0,l=!1,u=void 0;try{for(var d,f=t.entries()[Symbol.iterator]();!(c=(d=f.next()).done);c=!0){var v=Object(G["a"])(d.value,2),p=v[0],h=v[1],b=void 0,m=Math.abs(h.boundingBox.width/2-o/2);b=e===g.TreeRight||e===g.Tree&&p%2?"M ".concat(h.lx-m-n.connectorOffset,", ").concat(h.y,"  H ").concat(r.x):"M ".concat(h.rx+m+n.connectorOffset,", ").concat(h.y,"  H ").concat(r.x),i.append("path").attr("d",b).classed("o-line",!0)}}catch(y){l=!0,u=y}finally{try{c||null==f.return||f.return()}finally{if(l)throw u}}}}}]),t}(),lt=ct,ut=i["default"].extend({name:"OrbatChart",props:{unit:{type:Object,required:!0},maxLevels:{type:Number,default:3},debug:{type:Boolean,default:!1},symbolSize:{type:Number,default:32},connectorOffset:{type:Number,default:q.connectorOffset},orientation:{type:String,default:q.orientation},unitLevelDistance:{type:String,default:q.unitLevelDistance},lastLevelLayout:{type:String,default:g.Stacked},levelPadding:{type:Number,default:q.levelPadding},treeOffset:{type:Number,default:q.treeOffset},stackedOffset:{type:Number,default:q.stackedOffset},lineWidth:{type:Number,default:q.lineWidth},specificOptions:{type:Object}},data:function(){return{resizeTimeout:null,width:600,height:600,isMounted:!1}},created:function(){},mounted:function(){this.isMounted=!0,this.width=this.$el.clientWidth,this.height=this.$el.clientHeight},destroyed:function(){this.orbchart&&this.orbchart.cleanup()},methods:{onResize:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){},200)},onClick:function(t){this.$emit("unitclick",t)}},render:function(t){this.orbchart&&this.orbchart.cleanup();var e=new lt(this.unit,{maxLevels:this.maxLevels,debug:this.debug,symbolSize:this.symbolSize,onClick:this.onClick,connectorOffset:this.connectorOffset,orientation:this.orientation,unitLevelDistance:this.unitLevelDistance,lastLevelLayout:this.lastLevelLayout,levelPadding:this.levelPadding,treeOffset:this.treeOffset,stackedOffset:this.stackedOffset,lineWidth:this.lineWidth},this.specificOptions||{});if(this.orbchart=e,this.isMounted)e.toSVG({width:1920,height:1080},this.$el);return t("div",{attrs:{class:"orbat-chart"}})}}),dt=ut,ft=(n("b491"),Object(S["a"])(dt,at,rt,!1,null,null,null)),vt=ft.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spanel",class:{large:t.large}},[n("transition",{attrs:{name:"slide"},on:{"after-leave":t.afterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"slide"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[t._t("header",[n("v-toolbar-title",[t._v(t._s(t.headerTitle))])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",icon:""},on:{click:function(e){t.isActive=!1}}},[n("v-icon",[t._v("chevron_left")])],1)],2),n("div",{staticClass:"slide-content"},[t._t("default")],2)],1)])],1)},ht=[],bt={name:"slide-panel",data:function(){return{isActive:!1}},beforeMount:function(){this.isActive=this.value},props:{value:{required:!1},headerTitle:String,large:Boolean},watch:{isActive:function(t){this.$emit("input",t)},value:function(t){this.isActive=t}},methods:{afterLeave:function(){this.$emit("onSlide")}}},mt=bt,gt=(n("79eb"),Object(S["a"])(mt,pt,ht,!1,null,"295853b8",null)),yt=gt.exports,Ot=i["default"].extend({name:"MilSymbol",props:{sidc:String,size:{type:Number,default:15},modifiers:{type:Object}},render:function(t){var e=new A.a.Symbol(this.sidc,{size:this.size,simpleStatusModifier:!0},this.modifiers||{});return t("span",{attrs:{class:"milsymbol"},domProps:{innerHTML:e.asSVG()}})}}),xt=Ot,kt=Object(S["a"])(xt,st,ot,!1,null,null,null),Lt=kt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-treeview",{attrs:{items:t.rootUnits,activatable:"","item-children":"subUnits"},on:{"update:active":t.onUnitClick},scopedSlots:t._u([{key:"prepend",fn:function(t){var e=t.item;t.open,t.leaf;return[n("MilSymbol",{attrs:{sidc:e.sidc}})]}},{key:"append",fn:function(e){var i=e.item,a=e.active;return[a?n("v-icon",{staticClass:"pr-3",attrs:{title:"Set as root unit"},on:{click:function(e){return t.setRootUnit(i)}}},[t._v("\n      center_focus_strong\n    ")]):t._e(),i.id==t.currentUnitKey?n("v-icon",{staticClass:"pr-3"},[t._v("\n      my_location\n    ")]):t._e()]}}])})},St=[],jt=(n("ac4d"),n("8a81"),n("ac6a"),n("5df3"),n("f400"),function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.currentUnitKey=null,t}return Object(f["a"])(e,t),Object(l["a"])(e,[{key:"created",value:function(){this.unitMap=new Map,this.buildUnitMap(this.rootUnits),this.currentUnitKey=this.rootUnits[0].id}},{key:"onUnitClick",value:function(t){t.length}},{key:"setRootUnit",value:function(t){this.currentUnitKey=t.id,this.$emit("selectunit",this.unitMap.get(t.id))}},{key:"buildUnitMap",value:function(t){var e=!0,n=!1,i=void 0;try{for(var a,r=t[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var s=a.value;this.unitMap.set(s.id,s),s.subUnits&&s.subUnits.length&&this.buildUnitMap(s.subUnits)}}catch(o){n=!0,i=o}finally{try{e||null==r.return||r.return()}finally{if(n)throw i}}}}]),e}(i["default"]));v["a"]([Object(U["b"])()],jt.prototype,"rootUnits",void 0),jt=v["a"]([h()({components:{MilSymbol:Lt}})],jt);var Ct=jt,Tt=Ct,_t=Object(S["a"])(Tt,wt,St,!1,null,"853872e6",null),Pt=_t.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{centered:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("v-tab",{attrs:{href:"#"}},[t._v("Chart")]),n("v-tab",{attrs:{href:"#"}},[t._v("Level")]),n("v-tab",{attrs:{href:"#"}},[t._v("Group")]),n("v-tab",{attrs:{href:"#"}},[t._v("Unit")]),n("v-tab-item",[n("div",{staticClass:"pa-3"},[n("v-text-field",{attrs:{value:t.settings.maxLevels,type:"number",label:"Visible levels"},on:{input:function(e){return t.updateNum("maxLevels",e)}}}),n("v-text-field",{attrs:{label:"Symbol size",type:"number",min:"5",value:t.settings.symbolSize},on:{input:function(e){return t.updateNum("symbolSize",e)}}}),n("v-text-field",{attrs:{label:"Connector offset",type:"number",min:"0",value:t.settings.connectorOffset},on:{input:function(e){return t.updateNum("connectorOffset",e)}}}),n("v-text-field",{attrs:{label:"Level padding",type:"number",min:"0",value:t.settings.levelPadding},on:{input:function(e){return t.updateNum("levelPadding",e)}}}),n("v-text-field",{attrs:{disabled:t.noTreeOffset,label:"Tree offset",type:"number",min:"0",value:t.settings.treeOffset},on:{input:function(e){return t.updateNum("treeOffset",e)}}}),n("v-text-field",{attrs:{disabled:t.noStackedTreeOffset,label:"Stacked offset",type:"number",min:"0",value:t.settings.stackedOffset},on:{input:function(e){return t.updateNum("stackedOffset",e)}}}),n("v-text-field",{attrs:{label:"Line width",type:"number",min:"0",value:t.settings.lineWidth},on:{input:function(e){return t.updateNum("lineWidth",e)}}}),n("v-select",{attrs:{label:"Unit spacing",items:t.unitLevelDistance,value:t.settings.unitLevelDistance},on:{input:function(e){return t.updateVal("unitLevelDistance",e)}}}),n("v-select",{attrs:{label:"Last level layout",items:t.lastLevelLayout,value:t.settings.lastLevelLayout},on:{input:function(e){return t.updateVal("lastLevelLayout",e)}}}),n("v-checkbox",{attrs:{label:"Debug mode",value:t.settings.debug},on:{change:function(e){return t.updateVal("debug",e)}}})],1)]),n("v-tab-item",[n("div",{staticClass:"pa-3"})]),n("v-tab-item",[n("div",{staticClass:"pa-3"})]),n("v-tab-item",[n("div",{staticClass:"pa-3"},[n("SettingsUnit")],1)])],1)},Et=[],Gt=n("bd86"),Nt=(n("ffc1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Unit secific settings")])}),At=[],Bt=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),e}(U["c"]);Bt=v["a"]([U["a"]],Bt);var Mt=Bt,zt=Mt,Dt=Object(S["a"])(zt,Nt,At,!1,null,null,null),Rt=Dt.exports;function Vt(t){return Object.entries(t).map(function(t){var e=Object(G["a"])(t,2),n=e[0],i=e[1];return{text:n,value:i}})}var $t=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.active=0,t}return Object(f["a"])(e,t),Object(l["a"])(e,[{key:"updateNum",value:function(t,e){this.$store.commit("updateChartOptions",Object(Gt["a"])({},t,+e))}},{key:"updateVal",value:function(t,e){this.$store.commit("updateChartOptions",Object(Gt["a"])({},t,e))}},{key:"orientation",get:function(){return Vt(m)}},{key:"unitLevelDistance",get:function(){return Vt(y)}},{key:"lastLevelLayout",get:function(){return Vt(g)}},{key:"noTreeOffset",get:function(){return!tt(this.settings.lastLevelLayout)}},{key:"noStackedTreeOffset",get:function(){return!et(this.settings.lastLevelLayout)}}]),e}(Object(p["mixins"])(b));$t=v["a"]([Object(U["a"])({components:{SettingsUnit:Rt}})],$t);var It=$t,Ht=It,qt=Object(S["a"])(Ht,Ut,Et,!1,null,null,null),Wt=qt.exports,Xt=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(d["a"])(e).apply(this,arguments))}return Object(f["a"])(e,t),Object(l["a"])(e,[{key:"created",value:function(){this.currentUnit=this.orbat[0]}},{key:"onSlide",value:function(){}},{key:"onUnitClick",value:function(t){console.log("Clicked",t.unit.name)}},{key:"onSelectUnit",value:function(t){this.currentUnit=t}},{key:"orbat",get:function(){return this.$store.state.orbat.rootUnits}},{key:"currentUnit",get:function(){return this.$store.getters.currentUnit},set:function(t){this.$store.commit("setCurrentUnit",t)}},{key:"specificOptions",get:function(){return this.$store.getters.specificOptions}}]),e}(Object(p["mixins"])(b));Xt=v["a"]([Object(U["a"])({components:{SettingsPanel:Wt,OrbatTree:Pt,OrbatChart:vt,SlidePanel:yt,MilSymbol:Lt}})],Xt);var Yt=Xt,Zt=Yt,Jt=(n("a630"),Object(S["a"])(Zt,_,P,!1,null,"92da0536",null)),Ft=Jt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{flat:"",icon:"",dark:"",title:"Download as SVG"},on:{click:t.downloadAsSVG}},[n("v-icon",[t._v("save_alt")])],1)],1)},Kt=[],te=n("21a6"),ee={name:"MainViewToolbar",methods:{downloadAsSVG:function(){var t=document.getElementsByClassName("orbat-chart")[0];te["saveAs"](new Blob([(new XMLSerializer).serializeToString(t)],{type:"image/svg+xml"}),"orbat-chart.svg")}}},ne=ee,ie=Object(S["a"])(ne,Qt,Kt,!1,null,"6b667b64",null),ae=ie.exports;i["default"].use(T["a"]);var re=new T["a"]({routes:[{path:"/",name:"mainView",components:{default:Ft,toolbar:ae}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),se=n("2f62"),oe={orbatPanel:!0,settingsPanel:!0},ce={setOrbatPanel:function(t,e){t.orbatPanel=e},setSettingsPanel:function(t,e){t.settingsPanel=e}},le={state:oe,mutations:ce},ue={rootUnits:[],currentUnit:null},de={setCurrentUnit:function(t,e){t.currentUnit=e},setOrbat:function(t,e){t.rootUnits=e}},fe={currentUnit:function(t){return t.currentUnit}},ve={state:ue,mutations:de,getters:fe},pe=n("cebc"),he={chartOptions:Object(pe["a"])({},q,{maxLevels:4,lastLevelLayout:g.TreeRight}),levelGroupOptions:{},levelOptions:{},unitOptions:{}};function be(t,e,n){var a=t[e]||{},r=Object.assign({},a,n);i["default"].set(t,e,r)}var me={setChartOptions:function(t,e){t.chartOptions=e},updateChartOptions:function(t,e){t.chartOptions=Object.assign({},t.chartOptions,e)},setLevelOptions:function(t,e){t.levelOptions=e},setLevelGroupOptions:function(t,e){t.levelGroupOptions=e},setUnitOptions:function(t,e){t.unitOptions=e},updateLevelOptions:function(t,e){var n=e.id,i=e.value;be(t.levelOptions,n,i)},updateLevelGroupOptions:function(t,e){var n=e.id,i=e.value;be(t.levelGroupOptions,n,i)},updateUnitOptions:function(t,e){var n=e.id,i=e.value;be(t.unitOptions,n,i)}},ge={specificOptions:function(t){return{level:t.levelOptions,levelGroup:t.levelGroupOptions,unit:t.unitOptions}}},ye={state:he,mutations:me,getters:ge};i["default"].use(se["a"]);var Oe=new se["a"].Store({modules:{ui:le,orbat:ve,chart:ye}});n("bf40"),n("3a62");i["default"].config.productionTip=!1,i["default"].use(r.a),new i["default"]({router:re,store:Oe,render:function(t){return t(C)}}).$mount("#app")},cf68:function(t){t.exports={name:"TG 317.1 LG",sidc:"10031004001211000000",subUnits:[{name:"3 Cdo Bde",sidc:"10031000181211004600",subUnits:[{name:"40 Cdo",sidc:"10031000161211004600",state:[],id:"u0xGEGuOLzIcIirsioK0h",subUnits:[{name:"A",sidc:"10031000151211004600",id:"IZI2tUkYvhmVxShmC8~n~",state:[]},{name:"B",sidc:"10031000151211004600",id:"bJewqRWgkcxt3Lt53sz_c",state:[]},{name:"C",sidc:"10031000151211004600",id:"1ytAWaNFpcrYFLuGetut1",state:[]}]},{name:"42 Cdo",sidc:"10031000161211004600",state:[],id:"xcEG3htG0iZEuisD9IhGY",subUnits:[{name:"J",sidc:"10031000151211004600",id:"Yfj4qs4nUyG3DOLwzG8hY",state:[]},{name:"K",sidc:"10031000151211004600",id:"Od6fwg9FD5upCkXDIBalQ",state:[]},{name:"L",sidc:"10031000151211004600",id:"jdXcqNaLkNJxH97rVmUP_",state:[]}]},{name:"45 Cdo",sidc:"10031000161211004600",state:[],id:"0fm4O5tSvrVwjnv9~6ECy",subUnits:[{name:"X",sidc:"10031000151211004600",id:"7yI8rtwPIXI07Ag1Qyuem",state:[]},{name:"Y",sidc:"10031000151211004600",id:"QrSxdjL5eV~w1mJkRhUzH",state:[]},{name:"Z",sidc:"10031000151211004600",id:"~WAhIuR0DjOs6vxdNmTcn",state:[]}]},{name:"29 Cdo RA",sidc:"10031000161303000000",state:[],id:"qF9mX0pKVgtu7cVHjsXy5"},{name:"2 Para",sidc:"10031000161211000001",subUnits:[{name:"29 FB",sidc:"10031000151303000000",state:[],id:"vydX8pjg7sB1t37a5pBN1"},{name:"43 AD",sidc:"10031000141301020000",state:[],id:"peqkxwOqZXYkpSsx4KRCj"},{name:"A COY",sidc:"10031000151211000001",id:"wbPe8yifmaTgAxT2oD1Ff",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"rVxn2~0XEf8E7WeuPxUe6",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151213000001",id:"vu2TRMUpnGI2klzs19BgZ",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151211000001",id:"~78NfpA426AitI60JeWSa",state:[],shortName:"D"}],state:[],id:"QyZAnvqo5EXsjcNis_GSE"},{name:"3 Para",sidc:"10031000161211000001",subUnits:[{name:"A COY",sidc:"10031000151211000001",id:"INGH8mxuQMnN7LBZhXV_y",state:[],shortName:"A"},{name:"B COY",sidc:"10031000151211000001",id:"~8cVJd3hQNPr8exESXML9",state:[],shortName:"B"},{name:"C COY",sidc:"10031000151211000001",id:"bsMEfBAVOxvYu86qvP0Wq",state:[],shortName:"C"},{name:"D COY",sidc:"10031000151213000001",id:"uUlcvH2~mvagZr1QGoZcP",state:[],shortName:"D"}],state:[],id:"UlbrqVz6kysuUCzz7hSTu"}],state:[],id:"yeyNm2QTCh_yivrfpnv0N"},{name:"5 Inf Bde",sidc:"10031000181211000000",state:[],id:"LurqqM75Avg1_t0AjxUgi",subUnits:[{name:"2nd Bn Scots Guards",sidc:"10031000161211000000",id:"ZZhPAmDQzAT6JWhesPzQ2",state:[],shortName:"SG"},{name:"1st Bn Welsh Guards",sidc:"10031000161211000000",id:"gkcIswEB_vLPW_a3NCJzx",state:[],shortName:"WG"},{name:"1st Bn 7th Gurkha Rifles",sidc:"10031000161211000000",id:"ugu_gHIyde1iuwHYC34_k",state:[],shortName:"7 GR"},{name:"36 Engineer Regiment",sidc:"10031000161407000000",id:"kkfnLWpc2cK1uw2qX6XwB",state:[],shortName:"36 Eng"},{name:"63 AD Squadron",sidc:"10031000151301020000",id:"qhZBaHDgQYOvP4fCSqMXZ",state:[],shortName:"63 AD"},{name:"97 Field Battery",sidc:"10031000151303000000",id:"5yU8AvSZGcNDLjGpCZJJC",state:[],shortName:"97 FB"}]}],state:[],id:"Apc~4XNmoJDViPTPdcoJS"}},e732:function(t,e,n){}});
//# sourceMappingURL=app-legacy.cfcaf888.js.map