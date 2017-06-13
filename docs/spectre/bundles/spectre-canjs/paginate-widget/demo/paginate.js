define("spectre-canjs@0.29.2#paginate-widget/template.stache!steal-stache@3.0.7#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@3.0.7#can-view-import","can-stache-bindings@3.1.5#can-stache-bindings"],function(e,a,t){var r=a([{tokenType:"start",args:["div",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["paginate-widget"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["div",!1]},{tokenType:"chars",args:["\n  "]},{tokenType:"start",args:["ul",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"attrValue",args:["pagination"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["ul",!1]},{tokenType:"special",args:["^hideFirst"]},{tokenType:"chars",args:["\n    "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"special",args:["^hasPrevious"]},{tokenType:"attrValue",args:["disabled"]},{tokenType:"special",args:["/hasPrevious"]},{tokenType:"attrValue",args:[" page-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["aria-label"]},{tokenType:"attrValue",args:["First"]},{tokenType:"attrEnd",args:["aria-label"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["gotoFirst()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["aria-hidden"]},{tokenType:"attrValue",args:["true"]},{tokenType:"attrEnd",args:["aria-hidden"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["&laquo;&laquo;"]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\n    "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/hideFirst"]},{tokenType:"chars",args:["\n    "]},{tokenType:"special",args:["^hidePrevious"]},{tokenType:"chars",args:["\n    "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"special",args:["^hasPrevious"]},{tokenType:"attrValue",args:["disabled"]},{tokenType:"special",args:["/hasPrevious"]},{tokenType:"attrValue",args:[" page-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["aria-label"]},{tokenType:"attrValue",args:["Previous"]},{tokenType:"attrEnd",args:["aria-label"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["gotoPrevious()"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["aria-hidden"]},{tokenType:"attrValue",args:["true"]},{tokenType:"attrEnd",args:["aria-hidden"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["&laquo;"]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\n    "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/hidePrevious"]},{tokenType:"chars",args:["\n    "]},{tokenType:"special",args:["^hidePages"]},{tokenType:"special",args:["#each visiblePages"]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"special",args:["#if isActive(.)"]},{tokenType:"attrValue",args:["active"]},{tokenType:"special",args:["/if"]},{tokenType:"attrValue",args:[" page-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["gotoPage(.)"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["a",!1]},{tokenType:"special",args:["."]},{tokenType:"close",args:["a"]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/each"]},{tokenType:"chars",args:["\n    "]},{tokenType:"special",args:["/hidePages"]},{tokenType:"special",args:["^hideNext"]},{tokenType:"chars",args:["\n    "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"special",args:["^hasNext"]},{tokenType:"attrValue",args:["disabled"]},{tokenType:"special",args:["/hasNext"]},{tokenType:"attrValue",args:[" page-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["aria-label"]},{tokenType:"attrValue",args:["Next"]},{tokenType:"attrEnd",args:["aria-label"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["gotoNext"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["aria-hidden"]},{tokenType:"attrValue",args:["true"]},{tokenType:"attrEnd",args:["aria-hidden"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["&raquo;"]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\n    "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/hideNext"]},{tokenType:"chars",args:["\n    "]},{tokenType:"special",args:["^hideLast"]},{tokenType:"chars",args:["\n    "]},{tokenType:"start",args:["li",!1]},{tokenType:"attrStart",args:["class"]},{tokenType:"special",args:["^hasNext"]},{tokenType:"attrValue",args:["disabled"]},{tokenType:"special",args:["/hasNext"]},{tokenType:"attrValue",args:[" page-item"]},{tokenType:"attrEnd",args:["class"]},{tokenType:"end",args:["li",!1]},{tokenType:"chars",args:["\n      "]},{tokenType:"start",args:["a",!1]},{tokenType:"attrStart",args:["aria-label"]},{tokenType:"attrValue",args:["Last"]},{tokenType:"attrEnd",args:["aria-label"]},{tokenType:"attrStart",args:["($click)"]},{tokenType:"attrValue",args:["gotoLast"]},{tokenType:"attrEnd",args:["($click)"]},{tokenType:"end",args:["a",!1]},{tokenType:"chars",args:["\n        "]},{tokenType:"start",args:["span",!1]},{tokenType:"attrStart",args:["aria-hidden"]},{tokenType:"attrValue",args:["true"]},{tokenType:"attrEnd",args:["aria-hidden"]},{tokenType:"end",args:["span",!1]},{tokenType:"chars",args:["&raquo;&raquo;"]},{tokenType:"close",args:["span"]},{tokenType:"chars",args:["\n      "]},{tokenType:"close",args:["a"]},{tokenType:"chars",args:["\n    "]},{tokenType:"close",args:["li"]},{tokenType:"special",args:["/hideLast"]},{tokenType:"chars",args:["\n  "]},{tokenType:"close",args:["ul"]},{tokenType:"chars",args:["\n"]},{tokenType:"close",args:["div"]},{tokenType:"chars",args:["\n"]},{tokenType:"done",args:[]}]);return function(a,s,n){var o={module:e};return s instanceof t.Options||(s=new t.Options(s||{})),r(a,s.add(o),n)}}),define("spectre-canjs@0.29.2#paginate-widget/ViewModel",["exports","can-define/map/map"],function(e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e){return e&&e.__esModule?e:{default:e}}(a),r=t.default.extend("PaginateWidget",{pages:{type:"number",value:10},activePageIndex:{value:0,type:"number"},activeOffset:{value:3,type:"number"},hasNext:{get:function(){return this.activePageIndex<this.pages-1}},hasPrevious:{get:function(){return this.activePageIndex>0}},visiblePages:{get:function(){var e=this.pages,a=this.activePageIndex+1;return this.pageArray.filter(function(t){return t<=a+3&&t>=a-3&&t>0&&t<=e})}},pageArray:{get:function(){for(var e=[],a=1;a<=this.pages;a++)e.push(a);return e}},hideFirst:{type:"htmlbool",value:!1},hideLast:{type:"htmlbool",value:!1},hidePrevious:{type:"htmlbool",value:!1},hideNext:{type:"htmlbool",value:!1},hidePages:{type:"htmlbool",value:!1},gotoNext:function(){return this.hasNext&&this.activePageIndex++,!1},gotoPrevious:function(){return this.hasPrevious&&this.activePageIndex--,!1},gotoFirst:function(){return this.activePageIndex=0,!1},gotoLast:function(){return this.activePageIndex=this.pages-1,!1},gotoPage:function(e){return e>0&&e<=this.pages&&(this.activePageIndex=e-1),!1},isActive:function(e){return this.activePageIndex===e-1}});e.default=r}),define("spectre-canjs@0.29.2#paginate-widget/paginate-widget",["exports","can-component","./template.stache!","./ViewModel","./paginate-widget.less!"],function(e,a,t,r){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(a),o=s(t),p=s(r);e.default=n.default.extend({tag:"paginate-widget",ViewModel:p.default,view:o.default})}),define("spectre-canjs@0.29.2#paginate-widget/demo/paginate",["can-define/map/map","can-stache","spectre-canjs/paginate-widget/paginate-widget"],function(e,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=t(e),s=t(a),n=(0,s.default)(document.getElementById("demo-html").innerHTML)(new r.default({page1:0,page2:0}));document.body.appendChild(n),window.DEMO_SOURCE="\nimport 'spectre-canjs/paginate-widget/paginate-widget';\nimport DefineMap from 'can-define/map/map';\nimport stache from 'can-stache';\n\nvar frag = stache(document.getElementById('demo-html').innerHTML)(new DefineMap({\n    page1: 0,\n    page2: 0\n}));\n\ndocument.body.appendChild(frag);\n\n"});
//# sourceMappingURL=../../../../../../paginate-widget/template.stache
//# sourceMappingURL=paginate.js.map