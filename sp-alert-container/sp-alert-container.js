import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './sp-alert-container.stache';
import renderAlert from '../sp-alert/sp-alert.stache';

// keep stache templates in component file
const TemplatedViewModel = ViewModel.extend({
    renderAlert: {
        default () {
            return renderAlert; 
        }
    }
});

/**
 * A controller that adds and removes alerts from the dom
 * @see sp-alert
 * @module sp-alert-container
 * @example
 * <sp-alert-container />
 */
export default Component.extend({
    tag: 'sp-alert-container',
    ViewModel: TemplatedViewModel,
    view: template
});
