import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './sp-alert-container.stache';

/**
 * A controller that adds and removes alerts from the dom
 * <iframe src="../sp-alert-container/demo/index.html" style="border: 1px solid #ccc; width:100%; height:300px;"></iframe>
 * @see sp-alert
 * @module sp-alert-container
 * @example
 * <sp-alert-container />
 */
Component.extend({
    tag: 'sp-alert-container',
    ViewModel: ViewModel,
    view: template
});
