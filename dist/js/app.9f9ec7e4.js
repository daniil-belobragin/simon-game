(function(e){function t(t){for(var u,a,r=t[0],s=t[1],d=t[2],m=0,l=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(u in s)Object.prototype.hasOwnProperty.call(s,u)&&(e[u]=s[u]);c&&c(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],u=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(u=!1)}u&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var u={},i={app:0},o=[];function a(t){if(u[t])return u[t].exports;var n=u[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=u,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)a.d(n,u,function(t){return e[t]}.bind(null,u));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/simon-game/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0560":function(e,t,n){e.exports=n.p+"media/upSideLeftSound.99e50f7d.mp3"},"1aa9":function(e,t,n){var u={"./downSideLeftSound.mp3":"2f70","./downSideRightSound.mp3":"e268","./upSideLeftSound.mp3":"0560","./upSideRightSound.mp3":"ed32"};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(u,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return u[e]}i.keys=function(){return Object.keys(u)},i.resolve=o,e.exports=i,i.id="1aa9"},"2f70":function(e,t,n){e.exports=n.p+"media/downSideLeftSound.c1c96b44.mp3"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"wrapper"},[n("ul",{staticClass:"buttons-wrapper"},e._l(e.buttons,(function(t,u){return n("li",{key:u,staticClass:"button-wrapper"},[n("custom-button",{ref:"customButton",refInFor:!0,attrs:{"button-id":u,"button-name":t.name,"audio-name":t.soundName,timeout:e.modeTimeout},on:{passId:e.setYourQueue}})],1)})),0),n("div",{staticClass:"menu-wrapper"},[n("span",[e._v("Round: "+e._s(e.gameRound)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.gameLost,expression:"gameLost"}],staticClass:"lost-title-wrapper"},[n("span",[e._v("You lost with "+e._s(e.gameRound-1)+" points.")]),n("span",[e._v("Try again")])]),n("button",{staticClass:"start-button",on:{click:e.startGame}},[e._v(" Start ")]),n("span",[e._v("Game options: ")]),n("ul",e._l(e.modes,(function(t){return n("li",{key:t.id},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.modeTimeout,expression:"modeTimeout"}],attrs:{type:"radio"},domProps:{value:t.value,checked:e._q(e.modeTimeout,t.value)},on:{change:[function(n){e.modeTimeout=t.value},e.startGame]}}),n("label",{staticClass:"radio-label"},[e._v(" "+e._s(t.name)+" ")])])})),0)])])])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"button",class:{upRight:"upSideRight"===e.buttonName,upLeft:"upSideLeft"===e.buttonName,downLeft:"downSideLeft"===e.buttonName,downRight:"downSideRight"===e.buttonName,active:e.isActive},attrs:{disabled:this.isPlaying},on:{click:e.clicked}})},r=[],s={name:"CustomButton",data:function(){return{audio:new Audio(n("1aa9")("./"+this.audioName+".mp3")),isActive:!1,isPlaying:!1}},methods:{clicked:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.audio.play(),this.isActive=!0,setTimeout((function(){e.isActive=!1}),this.timeout),t&&this.$emit("passId",this.buttonId)},playing:function(e){this.isPlaying=e}},props:{buttonName:{required:!0},audioName:{required:!0},timeout:{default:1500},buttonId:{required:!0}}},d=s,c=(n("e66e"),n("2877")),m=Object(c["a"])(d,a,r,!1,null,null,null),l=m.exports,p={name:"App",data:function(){return{buttons:[{name:"upSideLeft",soundName:"upSideLeftSound"},{name:"upSideRight",soundName:"upSideRightSound"},{name:"downSideLeft",soundName:"downSideLeftSound"},{name:"downSideRight",soundName:"downSideRightSound"}],modes:[{name:"easy",value:1500},{name:"medium",value:1e3},{name:"hard",value:400}],modeTimeout:1e3,requiredQueue:[],yourQueue:[],gameStarted:!1,gameLost:!1,gameRound:0}},components:{"custom-button":l},methods:{startGame:function(){this.gameStarted&&this.resetQueue(),this.gameStarted=!0,this.gameLost=!1,this.playQueue()},playQueue:function(){var e=this;this.requiredQueue.push(this.getRandomIndex()),this.playing(!0);var t=function(t){setTimeout((function(){e.$refs.customButton[e.requiredQueue[t]].clicked(!1)}),1.6*t*e.modeTimeout)};for(var n in this.requiredQueue)t(n);setTimeout((function(){e.playing(!1)}),this.requiredQueue.length*this.modeTimeout),this.gameRound=this.requiredQueue.length},getRandomIndex:function(){return Math.floor(Math.random()*this.buttons.length)},resetQueue:function(){this.yourQueue=[],this.requiredQueue=[]},setYourQueue:function(e){var t=this;this.gameStarted&&(this.yourQueue.push(e),this.yourQueue.length===this.requiredQueue.length?this.arrayEquals()?(setTimeout((function(){t.playQueue()}),2*this.modeTimeout),this.yourQueue=[]):(this.resetQueue(),this.gameStarted=!1,this.gameLost=!0):this.arrayEquals()||(this.resetQueue(),this.gameStarted=!1,this.gameLost=!0))},arrayEquals:function(){for(var e in this.yourQueue)if(this.yourQueue[e]!==this.requiredQueue[e])return!1;return!0},playing:function(e){for(var t in this.buttons)this.$refs.customButton[t].playing(e)}}},f=p,h=(n("5c0b"),Object(c["a"])(f,i,o,!1,null,null,null)),v=h.exports;u["a"].config.devtools=!0,u["a"].config.productionTip=!1,new u["a"]({render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var u=n("9c0c"),i=n.n(u);i.a},"9c0c":function(e,t,n){},b2d4:function(e,t,n){},e268:function(e,t,n){e.exports=n.p+"media/downSideRightSound.36d5a722.mp3"},e66e:function(e,t,n){"use strict";var u=n("b2d4"),i=n.n(u);i.a},ed32:function(e,t,n){e.exports=n.p+"media/upSideRightSound.d2c4a2c4.mp3"}});
//# sourceMappingURL=app.9f9ec7e4.js.map