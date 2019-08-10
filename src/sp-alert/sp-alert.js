import template from './sp-alert.stache';
import './sp-alert.less';
import Component from 'can-component';
import ViewModel from './ViewModel';

/**
 * A hideable notification component
 * @see sp-alert-container
 * @module sp-alert
 */
export default Component.extend({
    tag: 'sp-alert',
    view: template,
    ViewModel: ViewModel
});
