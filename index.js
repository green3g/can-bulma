/**
 * By providing the required attribute to a component, this 
 * value will evaluate to true.
 * See {@link https://canjs.com/doc/can-define.types.html}
 * @example <element active />
 * @typedef {Boolean} HTMLBoolean
 */

/**
 * An observable maplike constructor object
 * See {@link https://canjs.com/doc/can-define/map/map.html}
 * @typedef {Object} DefineMap
 */

 
/**
 * An observable array like list
 * See {@link https://canjs.com/doc/can-define/list/list.html}
 * @typedef {Object} DefineList
 */

// !steal-remove-start
import debug from 'can-debug';
debug();
// !steal-remove-end

import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import './sp-form/sp-form';
import './sp-form/fields/sp-text-field/sp-text-field';
import './sp-form/fields/sp-select-field/sp-select-field';
import './sp-form/fields/sp-check-field/sp-check-field';
import './sp-form/fields/sp-multi-check-field/sp-multi-check-field';
import './sp-form/fields/sp-subform-field/sp-subform-field';
import './sp-form/fields/sp-multi-check-field/sp-multi-check-field';
import './util/field/Field'; 
import './sp-accordion/sp-accordion';
import './sp-confirm/sp-confirm';
import './sp-dropdown/sp-dropdown';
import './sp-file-list/sp-file-list';
import './sp-filter/sp-filter';
import './sp-filter-builder/sp-filter-builder';
import './sp-list-table/sp-list-table';
import './sp-modal/sp-modal';
import './sp-paginate/sp-paginate';
import './sp-property-table/sp-property-table';
import './sp-tab-container/sp-tab-container';
import './sp-tab-page/sp-tab-page';
import './sp-alert/sp-alert';
import './sp-alert-container/sp-alert-container';