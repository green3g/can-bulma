
import Field from 'can-bulma/util/field/Field';

/**
 * A `<sp-check-field />` component's ViewModel
 * 
 * @module sp-form/fields/sp-check-field/ViewModel
 * @extends util/field/Field
 */
export default Field.extend('CheckboxField', {
    /** @lends sp-form/fields/sp-check-field/ViewModel.prototype */
    /**
     * The current value of the checkbox field
     * @type {Boolean}
     */
    value: 'boolean',
    dispatchChange () {
        this.dispatch('fieldchange', [this]); 
    }
});