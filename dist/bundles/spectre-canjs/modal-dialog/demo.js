/*modal-dialog/modal-dialog.stache!steal-stache@3.0.4#steal-stache*/
define("modal-dialog/modal-dialog.stache!steal-stache@3.0.4#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(e,t,a){var s=t([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal"]},{tokenType:"special",args:["#active"]},{tokenType:"attrValue",args:[" active"]},{tokenType:"special",args:["/active"]},{tokenType:"special",args:["#small"]},{tokenType:"attrValue",args:[" modal-sm"]},{tokenType:"special",args:["/small"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-overlay"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n    "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-container"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["#if customBody"]},{tokenType:"chars",args:["\n            "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["        "]},{tokenType:"special",args:["else"]},{tokenType:"chars",args:["\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-header"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n                "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-clear float-right"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n                "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-title"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["title"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-body"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n                "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["content"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n                    "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["\n                "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n            "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n\n            "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-footer"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n                "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["hide"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-link"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"chars",args:["Close"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n            "]},{tokenType:"close",args:["div"]},{tokenType:"special",args:["/if"]},{tokenType:"chars",args:["\n    "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n"]},{tokenType:"done",args:[]}]);return function(t,r,n){var o={module:e};return r instanceof a.Options||(r=new a.Options(r||{})),s(t,r.add(o),n)}});
/*modal-dialog/modal-dialog*/
define("modal-dialog/modal-dialog",["exports","can-component","can-define/map/map","./modal-dialog.stache!"],function(e,t,o,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var i=l(t),d=l(o),n=l(a),u=e.ViewModel=d["default"].extend("ModalDialog",{active:{value:!1,type:"htmlbool"},customBody:{value:!1,type:"htmlbool"},small:{value:!1,type:"htmlbool"},show:function(){this.active=!0},hide:function(){this.active=!1},toggle:function(e){"undefined"!=typeof e?this.active=Boolean(e):this.active=!this.active}});i["default"].extend({viewModel:u,view:n["default"],tag:"modal-dialog"})});
/*modal-dialog/confirm-dialog.stache!steal-stache@3.0.4#steal-stache*/
define("modal-dialog/confirm-dialog.stache!steal-stache@3.0.4#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.4#can-view-import","can-stache-bindings@3.0.6#can-stache-bindings"],function(t,e,a){var r=e([{tokenType:"start",args:["modal-dialog",!1]},{tokenType:"attrStart",args:["custom-body"]},{tokenType:"attrEnd",args:["custom-body"]},{tokenType:"attrStart",args:["{(active)}"]},{tokenType:"attrValue",args:["active"]},{tokenType:"attrEnd",args:["{(active)}"]},{tokenType:"special",args:["#small"]},{tokenType:"attrStart",args:["small"]},{tokenType:"attrEnd",args:["small"]},{tokenType:"special",args:["/small"]},{tokenType:"end",args:["modal-dialog",!1]},{tokenType:"chars",args:["\n  "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-header"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["onReject()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-clear float-right"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-title"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"special",args:["title"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n  "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-body"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["content"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n          "]},{tokenType:"start",args:["content",!0]},{tokenType:"end",args:["content",!0]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n\n  "]},{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["modal-footer"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["onAccept()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-primary"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"special",args:["acceptText"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["button",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["onReject()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["btn btn-link"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["button",!1]},{tokenType:"special",args:["rejectText"]},{tokenType:"close",args:["button"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["modal-dialog"]},{tokenType:"chars",args:["\n"]},{tokenType:"done",args:[]}]);return function(e,s,n){var o={module:t};return s instanceof a.Options||(s=new a.Options(s||{})),r(e,s.add(o),n)}});
/*modal-dialog/confirm-dialog*/
define("modal-dialog/confirm-dialog",["exports","./modal-dialog","./confirm-dialog.stache!","can-component","can-event","object-assign"],function(e,t,i,o,c,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.ViewModel=void 0;var l=a(i),s=a(o),d=a(c),r=a(n),u=e.ViewModel=t.ViewModel.extend("ConfirmDialog",{acceptText:{value:"Ok"},rejectText:{value:"Cancel"},actionPromise:{get:function(){var e=this;return new Promise(function(t,i){e._resolveAction=t,e._rejectAction=i})}},onAccept:function(){this._resolveAction&&this._resolveAction(!0),this.dispatch("accept",[this]),this.active=!1},onReject:function(){this._resolveAction&&this._resolveAction(!1),this.dispatch("reject",[this]),this.active=!1}});r["default"](u,d["default"]),e["default"]=s["default"].extend({tag:"confirm-dialog",viewModel:u,view:l["default"],leakScope:!0})});
/*spectre-canjs@0.18.2#modal-dialog/demo*/
define("spectre-canjs@0.18.2#modal-dialog/demo",["can-stache","can-define/map/map","font-awesome/css/font-awesome.css","spectre.css/dist/spectre.css","modal-dialog/","modal-dialog/confirm-dialog"],function(e,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var t=n(e),d=n(o),a=t["default"](document.getElementById("demo-html").innerHTML),c=new d["default"]({modal1:!1,modal2:!1,modal3:!1,confirm1:!1,onAccept:function(){console.log(arguments)},onReject:function(){console.log(arguments)},showModal:function(e){this[e]=!0},hideModal:function(e){this[e]=!1}});document.body.appendChild(a(c))});
//# sourceMappingURL=demo.js.map