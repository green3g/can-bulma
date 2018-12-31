var stealTools = require('steal-tools');
var path = require('path');

stealTools.build({
    main: 'can-bulma/index',
    config: path.join(__dirname, 'package.json!npm'),
    bundle: [
        'can-bulma/sp-accordion/sp-accordion',
        'can-bulma/sp-dropdown/demo/dropdown',
        'can-bulma/sp-filter-builder/demo/filter',
        'can-bulma/sp-form/demo/full/full',
        'can-bulma/sp-form/demo/basic/basic',
        'can-bulma/sp-list-table/demo/listTable',
        'can-bulma/sp-modal/demo/dialog',
        'can-bulma/sp-tab-container/demo/nav',
        'can-bulma/sp-paginate/demo/paginate',
        'can-bulma/sp-property-table/demo/propertyTable',
        'can-bulma/sp-toast-container/demo/toast'
    ]
}, {
    removeDevelopmentCode: false,
    bundleSteal: false,
    bundleAssets: true,
    sourceMaps: true,
    dest: 'docs/spectre'
});
