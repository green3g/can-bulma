import template from './sp-list-table.stache';
import './sp-list-table.less';
import Component from 'can-component';
import ViewModel from './ViewModel';
import '../sp-form/fields/sp-check-field/sp-check-field';
import 'can-dom-data';


/**
 * A table to hold an array of objects - one object per row
 * @module sp-list-table
 * @example 
 * 
 * <!-- stache template --> 
 * <sp-list-table fields:from="fields" objects:from="objects" /> 
 * 
 * @example
 * /// viewmodel data
 * {
 *  objects: [{
 *      field_name: 'test data',
 *      other_name: 'more data',
 *  }],
 *  fields: ['field_name', {
 *      name: 'other_name',
 *      displayComponent: '<strong>{{object[field.name]}}</strong>
 *  }]
 * }
 */
export default Component.extend({
    tag: 'sp-list-table',
    ViewModel: ViewModel,
    view: template
});
