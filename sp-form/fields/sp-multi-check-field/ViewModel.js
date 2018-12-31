import SelectField from 'can-bulma/sp-form/fields/sp-select-field/ViewModel';
import DefineList from 'can-define/list/list';


/**
 * The `<sp-multi-check-field />` component viewmodel 
 * @class ViewModel
 * @extends Field
 * @memberof sp-multi-check-field
 */
export default SelectField.extend('CheckboxMulti', {
    /** @lends sp-multi-check-field.ViewModel.prototype */
    
    /**
     * @type {Any}
     * @memberof sp-multi-check-field.ViewModel.prototype
     * @description The current value of this field. Can be a list. 
     */
    value: {
        Type: DefineList,
        Default: DefineList
    },
    /**
     * @type {Array<Any>}
     * @memberof sp-multi-check-field.ViewModel.prototype
     * @description Type of value. Set this to string to coerce the list to a comma separated list. 
     */
    valueType: 'string',
    /**
     * @type {String}
     * @memberof sp-multi-check-field.ViewModel.prototype
     * @description Separator for the value string. List will be joined using this separator. Default is `,`. 
     */
    valueSeparator: {
        type: 'string',
        default: ','
    }
});
