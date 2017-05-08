/*spectre-canjs@0.28.4#property-table/demo/propertyTable*/
define("spectre-canjs@0.28.4#property-table/demo/propertyTable",["can-stache","spectre-canjs/property-table/property-table"],function(e){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}}(e),t=r.default.from("demo-html"),o={fields:[{name:"prop_1",alias:"Property 1",formatter:function(e,r){return"This is a formatted property: <strong>"+e+"</strong><br />\n            We can also utilize other properties on the object: <mark>"+r.etc_or_misc+"</mark>"}},"another_property_value","etc_or_misc"],data:{prop_1:"This is a property",another_property_value:"Value here",etc_or_misc:"This is a value"}};document.body.appendChild(t(o)),window.DEMO_SOURCE="\nimport 'spectre-canjs/property-table/property-table';\nimport stache from 'can-stache';\n\nvar render = stache.from('demo-html');\n\nvar viewModel = {\n    fields: [{\n        //fields can be specified using a detailed object\n        name: 'prop_1',\n        alias: 'Property 1',\n        // formatters can customize the look of the value\n        formatter (prop, obj) {\n            return `This is a formatted property: <strong>${prop}</strong><br />\n            We can also utilize other properties on the object: <mark>${obj.etc_or_misc}</mark>`;\n        }\n    },\n        //or a simple field name\n        'another_property_value', 'etc_or_misc'\n    ],\n    data: {\n        prop_1: 'This is a property',\n        another_property_value: 'Value here',\n        etc_or_misc: 'This is a value'\n    }\n};\n\ndocument.body.appendChild(render(viewModel));\n"});
//# sourceMappingURL=propertyTable.js.map