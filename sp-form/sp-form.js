import Component from 'can-component';
import template from './template.stache';
import ViewModel from './ViewModel';
import './widget.less';

/**
 * A form component useful for validation, data updating, and dirty checking
 * @module sp-form
 * @example 
 * <sp-form />
 */
export default Component.extend({
    tag: 'sp-form',
    ViewModel: ViewModel,
    view: template
});
