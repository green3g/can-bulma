import {makeSentenceCase} from '../string/string';
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import {getEditComponent} from './fieldComponents';

let id = 0;

/**
 * @typedef util/field/Field~ValidationObject
 * @property {Object} object the form object that was set on the form
 * @property {Object} dirty the updated object currently set by the user in the form
 * @property {*} value the current field's value (dirty). Same as `dirty[field.name]` but provided for easy access
 */

/**
 * @module util/field/Field~Field
 * Constructs a new field. Used throughout can-bulma to 
 * define displays of properties, aka fields. 
 */
export const Field = DefineMap.extend('Field', {

    // allow extra properties on this type
    seal: false
}, {
    /** @lends util/field/Field~Field.prototype */
    /**
     * A unique field id. Useful for using id elements in templates
     * @type {Number} 
     */
    id: {
        default () {
            return id ++;
        }
    },
    /**
     * The name of the type on the object, this field's name
     * @type {String} 
     */
    name: {
        type: 'string',
        set (name) {
            if (!this.label && name) {
                this.label = makeSentenceCase(name);
            }
            if (!this.classes && name) {
                this.classes = 'cell-' + name;
            }
            return name;
        }
    },
    /**
     * A friendly name for the field used to display to the user
     * The default is to capitalize the name and remove underscores
     * @type {String}
     */
    label: {
        type: 'string'
    },
    /**
     * A virtual property that is used as a shorthand for setting all
     * properties on this field. This value doesn't actually get set 
     * and will never return anything.
     * @type {Object}
     */
    properties: {
        set (props) {
            this.assign(props);
            return;
        }
    },
    /**
     * The field error string
     * @type {String}
     */
    error: 'string',
    /**
     * The form object. Passed to fields so they can use it in cascading dropdowns...etc 
     * @type {Object}
     */
    object: DefineMap,
    /**
     * The current field value
     * @type {Object}
     */
    value: {
        default: '',
        type: '*',
        set (val) {
            if (this.value !== val) {
                this.dispatch('fieldchange', [this]);
            }
            return val;
        }
    },
    /**
     * Includes this field in the list view in the data-admin
     * @type {Boolean} Field.prototype.list list
     */
    list: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the details view in the data-admin
     * @type {Boolean} Field.prototype.detail detail
     */
    detail: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the edit view in the data-admin
     * @type {Boolean} Field.prototype.edit edit
     */
    edit: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the filter widget's fields.
     * @type {Boolean} Field.prototype.filter filter
     */
    filter: {
        type: 'boolean',
        default: true
    },
    /**
     * Includes this field in the sorting capability
     * @type {Boolean} Field.prototype.sort sort
     */
    sort: {
        type: 'boolean',
        default: true
    },
    /**
     * A boolean flag to display form field inline with others and hide labels
     * @type {Boolean} Field.prototype.inline inline
     */
    inline: 'boolean',
    /**
     * Text to display when the field is empty (like a textbox). Doesn't apply to
     * some fields, like select or date fields.
     * @type {String} Field.prototype.placeholder placeholder
     */
    placeholder: 'string',
    /**
     * Adds css classes to the table cells and headings. Selectors should use
     * `th.classname` and `td.classname`
     * @type {String} Field.prototype.classes classes
     */
    classes: 'string',

    // placeholder props to overwrite the display template of edit or table components
    editTag: {
        default: 'sp-text-field', 
        type: 'string'
    },
    editComponent: {
        get (comp) {
            
            if (typeof comp === 'function') {
                return comp;
            }
            return getEditComponent(this);
        }
    },
    displayComponent: {},
    /**
     * If field component implements this method, it will be called 
     * when the component is inserted, with the input element
     * It can be used to customize the input, like adding a date picker
     * 
     */
    onInsert: {}, // (element) {flatpicker(element);}
    /**
     * Validates a type and returns a string if the field is invalid
     * @param {ValidationObject} props A special object consisting of information about the current value and dirty state of the form object
     * @return {String|falsey} a string error message if the value is not valid or undefined if there is no error message
     */
    validate: { }
});


export const FieldList = DefineList.extend('FieldList', {
    '#': Field
});

export default Field;
