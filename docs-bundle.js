var stealTools = require('steal-tools');
var path = require('path');

stealTools.build({
    main: 'can-bulma/demo/index',
    config: path.join(__dirname, 'package.json!npm'),
    bundle: [
        'can-bulma/src/sp-admin/demo/demo',
        'can-bulma/src/sp-accordion/sp-accordion',
        'can-bulma/src/sp-dropdown/demo/dropdown',
        'can-bulma/src/sp-filter-builder/demo/filter',
        'can-bulma/src/sp-form/demo/full/full',
        'can-bulma/src/sp-form/demo/basic/basic',
        'can-bulma/src/sp-list-table/demo/listTable',
        'can-bulma/src/sp-file-list/demo/files',
        'can-bulma/src/sp-modal/demo/dialog',
        'can-bulma/src/sp-tab-container/demo/nav',
        'can-bulma/src/sp-paginate/demo/paginate',
        'can-bulma/src/sp-property-table/demo/propertyTable',
        'can-bulma/src/sp-alert-container/demo/alert',
        'can-bulma/demo/home-page/home-page'
    ]
}, {
    removeDevelopmentCode: false,
    bundleSteal: false,
    bundleAssets: true,
    sourceMaps: true,
    dest: 'docs/can-bulma'
});
