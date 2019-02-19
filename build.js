
var stealTools = require('steal-tools');

stealTools.export({
    steal: {
        config: __dirname + '/package.json!npm'
    },
    outputs: {
        '+amd': {
            ignore: false
        },
        '+cjs': {
            ignore: false
        },
        '+global-js': {
            modules: ['can-bulma/index'],
            ignore: false
        },
        '+global-css': {}
    }
}).catch(function (e) {

    setTimeout(function () {
        throw e;
    }, 1);

});
