import 'can-debug';
import {Connection, TaskMap} from '../../test/data/connection';
import Component from 'can-component';
import view from './demo.stache';
import '../../sp-admin/sp-admin';
import editButton from './editButton.stache';
import detailsButton from './detailsButton.stache';

const ExtendedTaskmap = TaskMap.extend({
    details: {
        details: false,
        edit: false,
        serialize: false,
        displayComponent: detailsButton
    },
    edit: {
        details: false,
        edit: false,
        serialize: false,
        displayComponent: editButton
    }
});

Connection.Map = ExtendedTaskmap;

export default Component.extend({
    tag: 'can-admin-app',
    viewModel: {
        props: {
            model: Connection,
            searchFields: ['description'],
            filterFields: [{
                name: 'name',
                options: [{value: 'Trash'}, {value: 'Cat'}]
            }]
        }
    },
    view
});