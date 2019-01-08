define("can-bulma@0.1.0#demo/home-page/home-page",["exports","can-component@4.4.9#can-component","can-component@4.4.9#control/control","can-control@4.4.1#can-control","can-construct@3.5.3#can-construct","can-reflect@1.17.7#can-reflect","can-reflect@1.17.7#reflections/call/call","can-symbol@1.6.3#can-symbol","can-namespace@1.0.0#can-namespace","can-reflect@1.17.7#reflections/type/type","can-reflect@1.17.7#reflections/helpers","can-reflect@1.17.7#reflections/get-set/get-set","can-reflect@1.17.7#reflections/observe/observe","can-reflect@1.17.7#reflections/shape/shape","can-reflect@1.17.7#reflections/shape/schema/schema","can-reflect@1.17.7#reflections/get-name/get-name","can-reflect@1.17.7#types/map","can-reflect@1.17.7#types/set","can-log@1.0.0#dev/dev","can-log@1.0.0#can-log","can-string@1.0.0#can-string","can-assign@1.3.1#can-assign","can-stache-key@1.4.0#can-stache-key","can-observation-recorder@1.3.0#can-observation-recorder","can-reflect-promise@2.2.0#can-reflect-promise","can-queues@1.2.1#can-queues","can-queues@1.2.1#queue","can-queues@1.2.1#queue-state","can-queues@1.2.1#priority-queue","can-queues@1.2.1#completion-queue","can-key-tree@1.2.0#can-key-tree","can-observation@4.1.1#can-observation","can-event-queue@1.1.3#value/value","can-define-lazy-value@1.1.0#define-lazy-value","can-event-queue@1.1.3#dependency-record/merge","can-observation@4.1.1#recorder-dependency-helpers","can-observation@4.1.1#temporarily-bind","can-event-queue@1.1.3#map/map","can-dom-events@1.3.3#can-dom-events","can-dom-events@1.3.3#helpers/util","can-globals@1.2.0#document/document","can-globals@1.2.0#global/global","can-globals@1.2.0#can-globals-instance","can-globals@1.2.0#can-globals-proto","can-globals@1.2.0#is-browser-window/is-browser-window","can-globals@1.2.0#is-node/is-node","can-dom-events@1.3.3#helpers/make-event-registry","can-dom-events@1.3.3#helpers/-make-delegate-event-tree","can-key@1.2.0#get/get","can-key@1.2.0#utils","can-dom-mutate@1.3.5#can-dom-mutate","can-globals@1.2.0#can-globals","can-globals@1.2.0#location/location","can-globals@1.2.0#mutation-observer/mutation-observer","can-globals@1.2.0#custom-elements/custom-elements","can-dom-mutate@1.3.5#-util","can-bind@1.3.0#can-bind","can-reflect-dependencies@1.1.1#can-reflect-dependencies","can-reflect-dependencies@1.1.1#src/add-mutated-by","can-reflect-dependencies@1.1.1#src/delete-mutated-by","can-reflect-dependencies@1.1.1#src/get-dependency-data-of","can-reflect-dependencies@1.1.1#src/is-function","can-stache@4.15.11#can-stache","can-view-parser@4.1.2#can-view-parser","can-attribute-encoder@1.1.2#can-attribute-encoder","can-view-callbacks@4.3.2#can-view-callbacks","can-dom-mutate@1.3.5#node","can-view-nodelist@4.3.2#can-view-nodelist","can-fragment@1.3.0#can-fragment","can-child-nodes@1.2.0#can-child-nodes","can-stache@4.15.11#src/html_section","can-view-target@4.1.2#can-view-target","can-stache@4.15.11#src/utils","can-view-scope@4.12.1#can-view-scope","can-view-scope@4.12.1#template-context","can-simple-map@4.3.0#can-simple-map","can-view-scope@4.12.1#compute_data","can-view-scope@4.12.1#scope-key-data","can-view-scope@4.12.1#make-compute-like","can-single-reference@1.2.0#can-single-reference","can-cid@1.3.0#can-cid","can-stache-helpers@1.2.0#can-stache-helpers","can-simple-observable@2.4.1#can-simple-observable","can-simple-observable@2.4.1#log","can-stache@4.15.11#src/key-observable","can-simple-observable@2.4.1#settable/settable","can-stache@4.15.11#src/text_section","can-view-live@4.2.7#can-view-live","can-view-live@4.2.7#lib/core","can-view-live@4.2.7#lib/attr","can-attribute-observable@1.2.0#behaviors","can-dom-data-state@1.0.5#can-dom-data-state","can-diff@1.4.2#list/list","can-view-live@4.2.7#lib/attrs","can-view-live@4.2.7#lib/html","can-view-live@4.2.7#lib/list","can-view-live@4.2.7#lib/set-observable","can-diff@1.4.2#patcher/patcher","can-view-live@4.2.7#lib/text","can-stache@4.15.11#src/mustache_core","can-stache@4.15.11#src/expression","can-stache@4.15.11#expressions/arg","can-stache@4.15.11#expressions/literal","can-stache@4.15.11#expressions/hashes","can-stache@4.15.11#src/expression-helpers","can-simple-observable@2.4.1#setter/setter","can-stache@4.15.11#expressions/bracket","can-stache@4.15.11#expressions/call","can-stache@4.15.11#src/set-identifier","can-stache@4.15.11#expressions/helper","can-stache@4.15.11#expressions/lookup","can-stache@4.15.11#helpers/core","can-globals@1.2.0#base-url/base-url","can-join-uris@1.2.0#can-join-uris","can-parse-uri@1.2.0#can-parse-uri","can-stache@4.15.11#helpers/-debugger","can-stache@4.15.11#src/truthy-observable","can-dom-data@1.0.1#can-dom-data","can-stache@4.15.11#helpers/-for-of","can-stache@4.15.11#helpers/-let","can-stache@4.15.11#helpers/converter","can-stache-ast@1.1.0#can-stache-ast","can-stache-ast@1.1.0#controls","can-import-module@1.2.0#can-import-module","can-stache-bindings@4.6.5#can-stache-bindings","can-view-model@4.0.1#can-view-model","can-attribute-observable@1.2.0#can-attribute-observable","can-attribute-observable@1.2.0#event","can-attribute-observable@1.2.0#get-event-name","can-event-dom-radiochange@2.2.0#can-event-dom-radiochange","can-define@2.7.3#map/map","can-define@2.7.3#can-define","can-simple-observable@2.4.1#async/async","can-simple-observable@2.4.1#resolver/resolver","can-event-queue@1.1.3#type/type","can-string-to-any@1.2.0#can-string-to-any","can-data-types@1.2.0#maybe-boolean/maybe-boolean","can-data-types@1.2.0#maybe-date/maybe-date","can-data-types@1.2.0#maybe-number/maybe-number","can-data-types@1.2.0#maybe-string/maybe-string","can-define@2.7.3#define-helpers/define-helpers","can-define@2.7.3#ensure-meta","can-define@2.7.3#list/list"],function(e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=function(e){return e&&e.__esModule?e:{default:e}}(a).default.extend({tag:"home-page",viewModel:{},view:'<h2 class="title is-h2">Welcome to can-bulma!</h2>'});e.default=c});
//# sourceMappingURL=home-page.js.map