import '../sp-dropdown';
import view from './dropdown.stache';
import Component from 'can-component';
import './dropdown.less';

export default Component.extend({
    tag: 'demo-dropdown',
    viewModel: {
        pages: [{
            label: 'List'
        }, {
            label: 'Create',
            active: true
        }, {
            label: 'Other Options'
        }],
        primary: [{
          text: 'Important!'
        }]
    },
    view
});