import '../sp-filter-builder';
import jsonMarkup from 'json-pretty-html';
import '../../sp-form/demo/full/full.less';
import '../../sp-form/fields/sp-check-field/sp-check-field';
import view from './filter.stache';
import Component from 'can-component';
import './filter.less';

export default Component.extend({
    tag: 'demo-filter',
    viewModel: {
        filters: [],
        fields: [{name: 'field_1', type: 'number', textType: 'number'}, 'field_2', {
            name: 'field_3',
            editTag: 'sp-check-field',
            type: 'boolean'
        }, { filter: false, name: 'excluded'}, {
            name: 'field_4',
            editTag: 'sp-select-field',
            options: [{
                value: 'Option 1',
            }, {
                value: 'Option 2'
            }]
        }],
        disableCreate: false,
        stringify (filters) {
            if(filters){
                filters.get('length');
            }
            return jsonMarkup(filters.get());
        },
        toggleAdd () {
            this.disableCreate = !this.disableCreate;
        },
        pin(filters){
          filters.forEach(filter => {
            filter.pinned = !filter.pinned;
          });
        },
        hide(filters){
          filters.forEach(filter => {
            filter.visible = !filter.visible;
          });
        }
    },
    view
})