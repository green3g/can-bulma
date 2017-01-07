/*can-fixture@1.0.12#helpers/getid*/
define("can-fixture@1.0.12#helpers/getid",function(e,t,a){a.exports=function(e,t){var a=e.data.id;return void 0===a&&"number"==typeof e.data&&(a=e.data),void 0===a&&e.url.replace(/\/(\d+)(\/|$|\.)/g,function(e,t){a=t}),void 0===a&&(a=e.url.replace(/\/(\w+)(\/|$|\.)/g,function(e,t){"update"!==t&&(a=t)})),void 0===a&&(a=Math.round(1e3*Math.random())),a}});
/*can-fixture@1.0.12#helpers/legacyStore*/
define("can-fixture@1.0.12#helpers/legacyStore",function(t,e,a){var n=t("./getid"),r=t("can-set"),i=t("can-util/js/is-array-like/is-array-like"),o=t("can-util/js/each/each"),d=t("can-util/js/assign/assign");a.exports=function(t,e,a){var f,u,s,c=0,l=function(t){for(var e=0;e<f.length;e++)if(t==f[e].id)return f[e]},p={};if(i(t)&&"string"==typeof t[0]?(u=t,t=e,e=a,a=arguments[3]):"string"==typeof t&&(u=[t+"s",t],t=e,e=a,a=arguments[3]),"number"==typeof t)f=[],s=function(){f=[];for(var a=0;t>a;a++){var n=e(a,f);n.id||(n.id=a),c=Math.max(n.id+1,c+1)||f.length,f.push(n)}};else{a=e;var g=t;s=function(){f=g.slice(0)}}return d(p,{getListData:function(t){t=t||{};var e=f.slice(0);t.data=t.data||{},o((t.data.order||[]).slice(0).reverse(),function(t){var a=t.split(" ");e=e.sort(function(t,e){return"ASC"!==a[1].toUpperCase()?t[a[0]]<e[a[0]]?1:t[a[0]]===e[a[0]]?0:-1:t[a[0]]<e[a[0]]?-1:t[a[0]]===e[a[0]]?0:1})}),o((t.data.group||[]).slice(0).reverse(),function(t){var a=t.split(" ");e=e.sort(function(t,e){return t[a[0]]>e[a[0]]})});var n=parseInt(t.data.offset,10)||0,i=parseInt(t.data.limit,10)||f.length-n,d=0;for(var u in t.data)if(d=0,void 0!==t.data[u]&&(-1!==u.indexOf("Id")||-1!==u.indexOf("_id")))for(;d<e.length;)t.data[u]!=e[d][u]?e.splice(d,1):d++;if("function"==typeof a)for(d=0;d<e.length;)a(e[d],t)?d++:e.splice(d,1);else if("object"==typeof a)for(d=0;d<e.length;){var s=r.subset(e[d],t.data,a);s?d++:e.splice(d,1)}var c={count:e.length,data:e.slice(n,n+i)};return o(["limit","offset"],function(e){e in t.data&&(c[e]=t.data[e])}),c},getData:function(t,e){var a=l(n(t));return"undefined"==typeof a?e(404,"Requested resource not found"):void e(a)},updateData:function(t,e){var a=n(t),r=l(a);return"undefined"==typeof r?e(404,"Requested resource not found"):(d(r,t.data),void e({id:a},{location:t.url||"/"+n(t)}))},destroyData:function(t,e){var a=n(t),r=l(a);if("undefined"==typeof r)return e(404,"Requested resource not found");for(var i=0;i<f.length;i++)if(f[i].id==a){f.splice(i,1);break}return{}},createData:function(t,a){var n="function"==typeof e?e(f.length,f):{};d(n,t.data),n.id||(n.id=c++),f.push(n),a({id:n.id},{location:t.url+"/"+n.id})}}),s(),d({findAll:p.getListData,findOne:p.getData,create:p.createData,update:p.updateData,destroy:p.destroyData,getId:n,find:function(t){return l(n(t))},reset:s},p)}});
/*can-connect@1.1.1#helpers/clone-data*/
define("can-connect@1.1.1#helpers/clone-data",function(n,e,a){var s=n("can-util/js/is-array/is-array"),i=n("can-util/js/deep-assign/deep-assign");a.exports=function(n){return s(n)?n.slice(0):i({},n)}});
/*can-connect@1.1.1#data/memory-cache/memory-cache*/
define("can-connect@1.1.1#data/memory-cache/memory-cache",function(t,e,a){var s=t("can-connect/helpers/get-items"),n=t("can-connect"),i=t("can-connect/helpers/sorted-set-json"),r=t("can-set"),c=t("can-connect/helpers/overwrite"),o=t("can-connect/helpers/set-add"),u=t("can-connect/helpers/get-index-by-id"),h=t("can-util/js/assign/assign"),v=t("can-connect/helpers/clone-data");a.exports=n.behavior("data/memory-cache",function(t){var e={_sets:{},getSetData:function(){return this._sets},__getListData:function(t){var e=this.getSetData(),a=e[i(t)];return a?a.items:void 0},_instances:{},getInstance:function(t){return this._instances[t]},removeSet:function(t,e){var a=this.getSetData();delete a[t],e!==!0&&this.updateSets()},updateSets:function(){},updateInstance:function(t){var e=this.id(t);return e in this._instances?c(this._instances[e],t,this.idProp):this._instances[e]=t,this._instances[e]},updateSet:function(t,e,a){var s=a?i(a):t.setKey;if(a&&s!==t.setKey){var n=this.getSetData(),r=t.setKey;n[s]=t,t.setKey=s,t.set=h({},a),this.removeSet(r)}t.items=e;var c=this;e.forEach(function(t){c.updateInstance(t)})},addSet:function(t,e){var a=s(e),n=this.getSetData(),r=i(t);n[r]={setKey:r,items:a,set:h({},t)};var c=this;a.forEach(function(t){c.updateInstance(t)}),this.updateSets()},_eachSet:function(t){var e=this.getSetData(),a=this,s=function(e,s){return t.call(a,e,s,function(){return e.items})};for(var n in e){var i=e[n],r=s(i,n);if(void 0!==r)return r}},_getSets:function(){var t=[],e=this.getSetData();for(var a in e)t.push(e[a].set);return t},getSets:function(){return Promise.resolve(this._getSets())},clear:function(){this._instances={},this._sets={}},getListData:function(t){t=t||{};var e=this.getListDataSync(t);return e?Promise.resolve(e):Promise.reject({message:"no data",error:404})},getListDataSync:function(t){for(var e=this._getSets(),a=0;a<e.length;a++){var s=e[a];if(r.subset(t,s,this.algebra)){var n=this.__getListData(s),i=r.getSubset(t,s,n,this.algebra);return{data:i,count:n.length}}}},_getListData:function(t){return this.getListDataSync(t)},updateListData:function(t,e){e=e||{};var a=v(t),n=s(a),i=this.getSetData(),c=this;for(var o in i){var u=i[o],d=r.union(u.set,e,this.algebra);if(d){var f=h({},u.set);return this.getListData(f).then(function(t){c.updateSet(u,r.getUnion(f,e,s(t),n,c.algebra),d)})}}return this.addSet(e,a),Promise.resolve()},getData:function(t){var e=this.id(t),a=this.getInstance(e);return a?Promise.resolve(a):Promise.reject({message:"no data",error:404})},createData:function(t){var e=this,a=this.updateInstance(t);return this._eachSet(function(t,s,n){r.has(t.set,a,this.algebra)&&e.updateSet(t,o(e,t.set,n(),a,e.algebra),t.set)}),Promise.resolve(h({},a))},updateData:function(t){var e=this,a=this.updateInstance(t);return this._eachSet(function(t,s,n){var i=n(),c=u(e,a,i);r.subset(a,t.set,this.algebra)?-1===c?e.updateSet(t,o(e,t.set,n(),a,e.algebra)):(i.splice(c,1,a),e.updateSet(t,i)):-1!==c&&(i.splice(c,1),e.updateSet(t,i))}),Promise.resolve(h({},a))},destroyData:function(t){var e=this;this._eachSet(function(a,s,n){var i=n(),r=u(e,t,i);-1!==r&&(i.splice(r,1),e.updateSet(a,i))});var a=this.id(t);return delete this._instances[a],Promise.resolve(h({},t))}};return e})});
/*can-fixture@1.0.12#store*/
define("can-fixture@1.0.12#store",function(t,a,n){var e=t("can-set"),i=t("can-connect"),r=t("./helpers/legacyStore"),s=t("can-util/js/each/each"),c=t("can-util/js/assign/assign"),o=t("can-util/js/is-array-like/is-array-like"),u=t("can-connect/data/memory-cache/memory-cache"),h=function(t){for(var a in t)return a},d=function(t){return function(a,n){this.connection[t](a.data).then(function(t){n(t)},function(t){n(403,t)})}},f=function(t,a){return function(){var n=[],e=0;return s(t,function(t){n.push(JSON.parse(JSON.stringify(t))),e=Math.max(t[a]+1,e+1)||n.length}),{maxId:e,items:n}}},m=function(t,a,n){this.connection=t,this.makeItems=a,this.idProp=n,this.reset();for(var e in m.prototype)this[e]=this[e].bind(this)};c(m.prototype,{getListData:d("getListData"),getData:d("getData"),createData:function(t,a){var n=this.idProp;t.data[n]=++this.maxId,this.connection.createData(t.data).then(function(e){var i={};i[n]=t.data[n],a(i)},function(t){a(403,t)})},updateData:d("updateData"),destroyData:d("destroyData"),reset:function(t){t&&(this.makeItems=f(t,this.idProp));var a=this.makeItems();this.maxId=a.maxId,this.connection.addSet({},{data:a.items})},get:function(t){var a=this.connection.id(t);return this.connection.getInstance(a)},getList:function(t){return this.connection._getListData(t)}}),s({findAll:"getListData",findOne:"getData",create:"createData",update:"updateData",destroy:"destroyData"},function(t,a){m.prototype[a]=function(){return this[t].apply(this,arguments)}}),m.make=function(t,a,n){var s=!1;if((t instanceof e.Algebra||a instanceof e.Algebra||n instanceof e.Algebra)&&(s=!0),!s)return r.apply(this,arguments);var c,d;"number"==typeof t?(d=h(n.clauses.id||{})||"id",c=function(){for(var n=[],e=0,i=0;t>i;i++){var r=a(i,n);r[d]||(r[d]=i),e=Math.max(r[d]+1,e+1)||n.length,n.push(r)}return{maxId:e,items:n}}):o(t)&&(n=a,d=h(n.clauses.id||{})||"id",c=f(t,d));var p=i([u],{algebra:n,idProp:d});return new m(p,c,d)},n.exports=m});
/*can-fixture@1.0.12#core*/
define("can-fixture@1.0.12#core",function(t,e,r){var n=t("can-set"),a=t("can-util/js/string/string").sub,u=t("can-util/js/each/each"),i=t("can-util/js/assign/assign"),o=t("can-util/js/is-empty-object/is-empty-object");t("./store");var f=[];e.fixtures=f,e.add=function(t,r){if(r&&(r.getData||r.getListData)){var n=t,a=r,i=a.idProp,o=new RegExp("\\/\\{"+i+"\\}.*"),s=o.test(n),c=s?n.replace(o,""):n,l=s?n:n.trim()+"/{"+i+"}";r=void 0,t={},t["GET "+l]=a.getData,t["DELETE "+l]=a.destroyData,t["PUT "+l]=a.updateData,t["GET "+c]=a.getListData,t["POST "+c]=a.createData}if(void 0!==r){if("string"==typeof t){var d=t.match(/(GET|POST|PUT|DELETE|PATCH) (.+)/i);t=d?{url:d[2],type:d[1]}:{url:t}}var p=e.index(t,!0);if(p>-1&&f.splice(p,1),null==r)return;if("object"==typeof r){var v=r;r=function(){return v}}t.fixture=r,f.unshift(t)}else u(t,function(t,r){e.add(r,t)})};var s=e.add;s.on=!0,s.delay=10,e.callDynamicFixture=function(t,r,n){t.data=r.data;var a=function(){var r=e.extractResponse.apply(t,arguments);return n.apply(this,r)},u=function(){var e=r.fixture(t,a,t.headers,r);void 0!==e&&a(200,e)};return t.async?setTimeout(u,s.delay):(u(),null)},e.index=function(t,r){for(var n=0;n<f.length;n++)if(e.matches(t,f[n],r))return n;return-1},e.get=function(t){if(s.on){var r=e.index(t,!0);-1===r&&(r=e.index(t,!1));var n=r>=0?i({},f[r]):void 0;if(n){var u=n.fixture,o=e.dataFromUrl(n.url,t.url);if("string"==typeof n.fixture)o&&(u=a(u,o)),n.url=u,n.data=null,n.type="GET",n.error||(n.error=function(t,e,r){throw"fixtures.js Error "+e+" "+r});else{var c=i({},t.data||{});n.data=i(c,o)}}return n}},e.matches=function(t,r,a){return a?n.equal(t,r,{fixture:function(){return!0}}):n.subset(t,r,e.defaultCompare)};var c=function(t,e){return null==t&&o(e)?!0:null==e&&o(t)?!0:n.equal(t,e)},l=function(t,e){return null==t&&o(e)?!0:null==e&&o(t)?!0:n.subset(t,e)};e.defaultCompare={url:function(t,r){return!!e.dataFromUrl(r,t)},fixture:function(){return!0},xhr:function(){return!0},type:function(t,e){return e&&t?t.toLowerCase()===e.toLowerCase():e===t},method:function(t,e){return e&&t?t.toLowerCase()===e.toLowerCase():e===t},helpers:function(){return!0},headers:c,data:l};var d=/\{([^\}]+)\}/g;e.dataFromUrl=function(t,e){if(!t)return{};var r=[],n=t.replace(".","\\.").replace("?","\\?"),a=new RegExp(n.replace(d,function(t,e){return r.push(e),"([^/]+)"})+"$").exec(e),i={};return a?(a.shift(),u(r,function(t){i[t]=a.shift()}),i):null},e.extractResponse=function(t,e,r,n){return"number"!=typeof t&&(r=e,e=t,t=200),"string"==typeof r&&(n=r,r={}),[t,e,r,n]},e.log=function(){}});
/*can-fixture@1.0.12#helpers/deparam*/
define("can-fixture@1.0.12#helpers/deparam",function(e,t,n){var r=e("can-util/js/each/each"),a=/^\d+$/,i=/([^\[\]]+)|(\[\])/g,c=/([^?#]*)(#.*)?$/,o=function(e){return decodeURIComponent(e.replace(/\+/g," "))};n.exports=function(e){var t,n,p={};return e&&c.test(e)&&(t=e.split("&"),r(t,function(e){var t=e.split("="),r=o(t.shift()),c=o(t.join("=")),f=p;if(r){t=r.match(i);for(var s=0,u=t.length-1;u>s;s++)f[t[s]]||(f[t[s]]=a.test(t[s+1])||"[]"===t[s+1]?[]:{}),f=f[t[s]];n=t.pop(),"[]"===n?f.push(c):f[n]=c}})),p}});
/*can-fixture@1.0.12#xhr*/
define("can-fixture@1.0.12#xhr",function(e,t,n){!function(t){function n(e,t){for(var n,s=e.__events[t]||[],r=0,o=s.length;o>r;r++)n=s[r],n.call(e)}var s=e("./core"),r=e("./helpers/deparam"),o=e("can-util/js/assign/assign"),a=e("can-util/js/each/each"),i=XMLHttpRequest,u="undefined"!=typeof t?t:window,d=["type","url","async","response","responseText","responseType","responseXML","responseURL","status","statusText","readyState"],h=["abort","error","load","loadend","loadstart","progress","readystatechange"];!function(){var e=new i;for(var t in e)0===t.indexOf("on")?-1===h.indexOf(t.substr(2))&&h.push(t.substr(2)):-1===d.indexOf(t)&&"function"!=typeof e[t]&&d.push(t)}(),u.XMLHttpRequest=function(){var e=this,t=new i;this._xhr=t,this._requestHeaders={},this.__events={},a(h,function(s){t["on"+s]=function(){return n(e,s),e["on"+s]?e["on"+s].apply(e,arguments):void 0}}),this.onload=null},u.XMLHttpRequest._XHR=i,o(XMLHttpRequest.prototype,{setRequestHeader:function(e,t){this._requestHeaders[e]=t},open:function(e,t,n){this.type=e,this.url=t,this.async=n===!1?!1:!0},getAllResponseHeaders:function(){return this._xhr.getAllResponseHeaders.apply(this._xhr,arguments)},addEventListener:function(e,t){var n=this.__events[e]=this.__events[e]||[];n.push(t)},removeEventListener:function(e,t){var n=this.__events[e]=this.__events[e]||[],s=n.indexOf(t);s>=0&&n.splice(s,1)},setDisableHeaderCheck:function(e){this._disableHeaderCheck=!!e},getResponseHeader:function(e){return this._xhr.getResponseHeader(e)},abort:function(){var e=this._xhr;return void 0!==this.timeoutId&&(clearTimeout(this.timeoutId),e.open(this.type,this.url,this.async===!1?!1:!0),e.send()),e.abort()},send:function(e){var t=this.type.toLowerCase()||"get",i={url:this.url,data:e,headers:this._requestHeaders,type:t,method:t,async:this.async,xhr:this};if((!i.data&&"get"===i.type||"delete"===i.type)&&(i.data=r(i.url.split("?")[1]),i.url=i.url.split("?")[0]),"string"==typeof i.data)try{i.data=JSON.parse(i.data)}catch(u){i.data=r(i.data)}var d=s.get(i),h=this;if(d&&"function"==typeof d.fixture)return void(this.timeoutId=s.callDynamicFixture(i,d,function(e,t,s,r){t="string"==typeof t?t:JSON.stringify(t),h._xhr={open:function(){},send:function(){},abort:function(){},getResponseHeader:function(){}},o(h,{readyState:4,status:e});var i=e>=200&&300>e||304===e;i?o(h,{statusText:r||"OK",responseText:t}):o(h,{statusText:r||"error",responseText:t}),h.getAllResponseHeaders=function(){var e=[];return a(s||{},function(t,n){Array.prototype.push.apply(e,[n,": ",t,"\r\n"])}),e.join("")},h.onreadystatechange&&h.onreadystatechange({target:h}),n(h,"progress"),h.onprogress&&h.onprogress(),n(h,"load"),h.onload&&h.onload(),n(h,"loadend"),h.onloadend&&h.onloadend()}));var p=function(){return h._xhr.open(h._xhr.type,h._xhr.url,h._xhr.async),h._requestHeaders&&Object.keys(h._requestHeaders).forEach(function(e){h._xhr.setRequestHeader(e,h._requestHeaders[e])}),h._xhr.send(e)};return d&&"number"==typeof d.fixture?void(this.timeoutId=setTimeout(p,d.fixture)):(d&&o(h,d),p())}}),a(d,function(e){Object.defineProperty(XMLHttpRequest.prototype,e,{get:function(){return this._xhr[e]},set:function(t){try{this._xhr[e]=t}catch(n){}}})})}(function(){return this}())});
/*can-fixture@1.0.12#fixture*/
define("can-fixture@1.0.12#fixture",function(e,r,t){var n=e("./core"),o=n.add,s=e("./store");e("./xhr");var a=e("can-util/js/assign/assign"),u=e("can-namespace"),i=function(){};a(o,{rand:function f(e,r,t){if("number"==typeof e)return"number"==typeof r?e+Math.floor(Math.random()*(r-e+1)):Math.floor(Math.random()*(e+1));var n=e.slice(0);void 0===r?(r=1,t=n.length):void 0===t&&(t=r);for(var o=[],s=r+Math.round(f(t-r)),a=0;s>a;a++){var u=f(n.length-1),i=n.splice(u,1)[0];o.push(i)}return o},xhr:function(e){return a({},{abort:i,getAllResponseHeaders:function(){return""},getResponseHeader:function(){return""},open:i,overrideMimeType:i,readyState:4,responseText:"",responseXML:null,send:i,setRequestHeader:i,status:200,statusText:"OK"},e)},store:s.make,fixtures:n.fixtures}),"undefined"!=typeof window&&"function"!=typeof e.resolve&&(window.fixture=o),t.exports=u.fixture=o});
//# sourceMappingURL=fixture.js.map