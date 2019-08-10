import DefineMap from 'can-define/map/map';
import {Filter} from '../sp-filter-builder/Filter';

/**
 * A `<sp-filter />` component's ViewModel
 * 
 * @module sp-filter/ViewModel
 */
export default DefineMap.extend('SPFilter', {
    /** @lends sp-filter/ViewModel.prototype */
    /**
     * The filter object to modify 
     * @type {FilterObject} 
     */
    filter: Filter,
    /**
     * A no operation function 
     * @param {Event} event the event to preventDefault on
     * @return {False} return false to prevent page navigation from occuring
     */
    noOp (event) {
        event.preventDefault();
        return false;
    },
    /**
     * Dispatches an event with the filter object
     * @param {String} event The event name to dispatch 
     */
    dispatchEvent (event) {
        this.dispatch(event, [this.filter]);
    }
});