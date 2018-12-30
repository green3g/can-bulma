import view from './files.stache';
import Component from 'can-component';
import '../sp-file-list';

export default Component.extend({
    tag: 'sp-file-demo',
    viewModel: {},
    view,
})