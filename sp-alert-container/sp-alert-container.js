import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './sp-alert-container.stache';

/**
 * A controller that adds and removes alerts from the dom
 * @see sp-alert
 * @module sp-alert-container
 * @example
 * <sp-alert-container />
 */
export default Component.extend({
    tag: 'sp-alert-container',
    ViewModel: ViewModel,
    view: template
});
