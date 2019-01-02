import SelectField from 'can-bulma/sp-form/fields/sp-select-field/ViewModel';
import DefineList from 'can-define/list/list';


/**
 * The `<sp-multi-check-field />` component viewmodel 
 * @module sp-form/fields/sp-multi-check-field/ViewModel
 * @extends util/field/Field
 * @memberof sp-multi-check-field
 */
export default SelectField.extend('CheckboxMulti', {
    /** @lends sp-form/fields/sp-multi-check-field/ViewModel.prototype */
    
    /**
     * @type {Any}
     * @description The current value of this field. Can be a list. 
     */
    value: {
        Type: DefineList,
        Default: DefineList
    },
    /**
     * @type {Array<Any>}
     * @description Type of value. Set this to string to coerce the list to a comma separated list. 
     */
    valueType: 'string',
    /**
     * @type {String}
     * @description Separator for the value string. List will be joined using this separator. Default is `,`. 
     */
    valueSeparator: {
        type: 'string',
        default: ','
    }
});
