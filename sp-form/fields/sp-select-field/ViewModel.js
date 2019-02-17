import Field from '../../../util/field/Field';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

/**
 * the select option type - used to display <option> tags values/labels
 * @module sp-form/fields/sp-select-field/ViewModel~SelectOption
 */
export const SelectOption = DefineMap.extend('SelectOption', {
    /** @lends sp-form/fields/sp-select-field/ViewModel~SelectOption.prototype */
    /**
     * The value to set when option is selected
     * @type {Any} 
     */
    value: 'string',
    /**
     * The label to display to the user. If not provided, `value` is used
     * @type {String} 
     */
    label: {
        type: 'string',
        get (label) {
            if (label) {
                return label;
            }
            return this.value;
        }
    }
});

export const SelectOptionList = DefineList.extend('SelectOptionList', {
    '#': SelectOption
});


/**
 * A `<sp-select-field />` component's ViewModel
 * @module sp-form/fields/sp-select-field/ViewModel
 */
export default Field.extend('SelectField', {
    /** @lends sp-form/fields/sp-select-field/ViewModel.prototype */
    /**
     * The default label when no items are selected
     * @type {String}
     */
    defaultLabel: {type: 'string', default: 'Choose a value...'},
    /**
     * The array of options to display in the dropdown
     * @type {sp-form/fields/sp-select-field/ViewModel~SelectOption[]}
     */
    options: {        
        Type: SelectOptionList,
        Default: SelectOptionList,  
        get (list) {
            if (this.optionsPromise) {
                this.optionsPromise.then((options) => list.replace(options));
            }

            return list;
        }  
    },
    /**
     * A promise that resolves to the array of options
     * @type {Promise<sp-form/fields/sp-select-field/ViewModel~SelectOption[]>}
     */
    optionsPromise: {
        get () {
            if (typeof this.getOptions === 'function') {
                const data = this.object ? this.object.get() : {};
                return Promise.resolve(this.getOptions(data));
            }
            return null;
        }
    },
    /**
     * Determines whether a value is the currently selected value
     * @param {String} value The value to check
     * @return {Boolean} whether or not it is selected
     */
    isSelected (value) {
        // coerce check into this value type
        // eslint-disable-next-line eqeqeq
        return value == this.value;
    },
    /**
     * An optional function to return options from a form object...ie cascading dropdowns 
     * @param {Object} formObject the form object
     * @returns {SelectOption[]|Promise<sp-form/fields/sp-select-field/ViewModel~SelectOption[]>} the filtered array of select options
     */
    getOptions: {}
});
