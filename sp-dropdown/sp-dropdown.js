import './sp-dropdown.less';
import view from './template.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * Inserts a dropdown toggle button into the page. 
 * 
 * See [Demo](../demo/#!demo-dropdown)
 * @module sp-dropdown
 * @example 
 * <sp-dropdown />
 * 
 */
export default Component.extend({
    tag: 'sp-dropdown',
    view,
    ViewModel,
    events: {
        '{window} click': function () {
            this.viewModel.hideAll();
        }
    }
});
