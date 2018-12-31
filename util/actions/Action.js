import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

/**
 * @module util/actions/Action
 */
export const Action = DefineMap.extend('Action', {
    /** @lends sp-modal/ViewModel~Action.prototype */
    /**
     * Classes to apply to icon in button.
     * @type {String}
     */
    iconClass: 'string',
    /**
     * Classes to apply to button
     * @type {String}
     */
    buttonClass: {type: 'string', default: 'button'},
    /**
     * A click handler function to call when the button is clicked
     */
    onlclick: {}
});

export const ActionList = DefineList.extend('ActionList', {
    '#': Action
});

export default Action;