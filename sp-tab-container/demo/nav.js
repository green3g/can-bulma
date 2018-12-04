import 'spectre-canjs/sp-tab-container/sp-tab-container';
import 'spectre-canjs/sp-tab-page/sp-tab-page';
import ajax from 'axios';
import view from './demo.stache';

import Component from 'can-component';

export default Component.extend({
    view,
    viewModel: {
        people: ajax.get( 'http://jsonplaceholder.typicode.com/users').then(result => {
                return result.data;
        }),
        pages: [{
            label: 'List'
        }, {
            label: 'Create',
            active: true
        }, {
            label: 'Other Options'
        }]
    },
    tag: 'demo-sp-tab'
});