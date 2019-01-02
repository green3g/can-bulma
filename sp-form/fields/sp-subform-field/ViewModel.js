import DefineMap from 'can-define/map/map';
import Base from 'can-bulma/util/field/Field';
import parseFieldArray from 'can-bulma/util/field/parseFieldArray/parseFieldArray';
import mapToFields from 'can-bulma/util/field/mapToFields/mapToFields';

/** 
 * A <sp-subform-field /> component's ViewModel
 * @module sp-form/fields/sp-subform-field/ViewModel
 * @extends util/field/Field
 *
 */
export default Base.extend('SubformField', {
    /** @lends sp-form/fields/sp-subform-field/ViewModel.prototype */
    /**
     * The current value of the field. This is a json serialized value
     * paths.
     * @type {String}
     */
    value: {
        Default: DefineMap,
        Type: DefineMap,
        set (val) {
            if (this.value !== val) {
                this.dispatch('fieldchange', [{
                    value: val,
                    name: this.name
                }]);
            }
            return val;
        }
    },
    /**
     * The type of object to use for this form object. If you'd like
     * to use a different type, than the Type defined in define map,
     * you can provide a `subType` instead. This will override the Type.
     * @type {Constructor} 
     */
    Type: '*',
    /**
     * An alternative property to using Type. Since Type is a DefineMap keyword, 
     * subType is provided to allow for customizability between the field and
     * the map
     * @type {Constructor} 
     */
    subType: '*',
    /**
     * The field properties to set up the form fields functionality, this is
     * set up automatically from the `fields` property or the `subobject`
     * if `fields` is not provided.
     * @type {Array<Field>}
     */
    formFields: {
        get () {
            if (this.fields && this.fields.length) {
                return parseFieldArray(this.fields);
            }

            const type = this.subType || this.Type;
            return mapToFields(type);
        }
    },
    /**
     * Called whenever a field changes its value to update this form's json
     * string value. Dispatches the `fieldchange` event with the serialized form object
     * @param  {Array} args the arguments dispatched from the event
     */
    saveField (args) {
        const [props] = args;
        this.value.assign(props.dirty.get());
        this.dispatch('fieldchange', [this]);
    }
});