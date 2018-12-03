import Component from 'can-component';
import template from './sp-select-field.stache';
import ViewModel from './ViewModel';
import './sp-select-field.less';

/**
 * A select dropdown
 * <iframe src="https://google.com" style="border: 1px solid #ccc; width:100%;resize:both;"></iframe>
 * @module sp-select-field
 * @example 
 * <sp-select-field /> 
 */
export default Component.extend({
    tag: 'sp-select-field',
    view: template,
    ViewModel: ViewModel
});
