import './sp-dropdown.less';
import view from './template.stache';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * Inserts a dropdown toggle button into the page. Consider using spectre.css css-only dropdowns instead
 * <iframe src="../sp-dropdown/demo/index.html" style="border: 1px solid #ccc; width:100%; height:300px;"></iframe>
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
