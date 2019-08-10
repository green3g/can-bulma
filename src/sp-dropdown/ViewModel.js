import DefineMap from 'can-define/map/map';
import canViewModel from 'can-view-model';

/**
 * Dropdown View Model
 * 
 * @module sp-dropdown/ViewModel
 */
export default DefineMap.extend('DropdownMenu', {
    /** @lends sp-dropdown/ViewModel.prototype */
    /**
     * The icon class to display next to the dropdown. <br />
     * The default is a font-awesome caret `fa fa-fw fa-caret-down`
     * @type {string} Icon to display next to the dropdown text
     * @example iconClass:from="'fa fa-fw fa-table'"
     */
    iconClass: {default: 'fas fa-caret-down', type: 'string'},
    /**
     * The text to display in the dropdown button
     * @type {String} 
     */
    label: 'string',
    /**
     * The current state of the dropdown menu
     * @type {Boolean}
     */
    active: {
        type: 'boolean',
        set (active) {
            this.hideAll();
            return active;
        }
    },
    /**
     * The button class to apply to the button dropdown. The default is `btn btn-link`.
     * See the spectre.css styles for details on more button classes available
     * @type {String}
     */
    buttonClass: {
        type: 'string',
        default: 'button'
    },
    /**
     * Whether or not to align this dropdown menu on the right hand side of
     * the button.
     * @type {HTMLBoolean}
     */
    right: 'htmlbool',
    /**
     * Whether or not this dropdown should drop "up" instead.
     * @type {HTMLBoolean}
     */
    up: 'htmlbool',
    /**
     * Queries the dom for other sp-dropdown components and hides them.
     * This is used when a dropdown component is active and another one is
     * clicked, any others will be made invisible
     */
    hideAll () {
        const nodes = document.querySelectorAll('sp-dropdown');
        for (let i = 0; i < nodes.length; i ++) {
            const vm = canViewModel(nodes[i]);
            if (this !== vm && vm.active) {
                vm.active = false;
            }
        }
    },
    /**
     * Stops an event from bubbling
     * @param {DomEvent} event The event to prevent propagating
     */
    stopPropagation (event) {
        event.stopPropagation();
    }
});
