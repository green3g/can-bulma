import 'can-bulma/sp-alert-container/sp-alert-container';
import 'can-bulma/sp-alert/sp-alert';
import 'can-bulma/sp-form/fields/sp-text-field/sp-text-field';
import 'can-bulma/sp-form/fields/sp-select-field/sp-select-field';
import DefineMap from 'can-define/map/map';
import view from './alert.stache';
import Component from 'can-component';
import canViewModel from 'can-view-model';
import './styles.less'

const AppViewModel = new DefineMap({
    details: 'Details',
    autoHide: 5000,
    severity: 'info',
    dismissable: true,
    severityOptions: [{value: 'primary'}, {value: 'info'},{value: 'success'},{value: 'warning'},{value: 'danger'}],
    dismissOptions: [{label: 'Yes', value: true}, {label: 'No', value: false}],
    add () {
        canViewModel('sp-alert-container').addAlert({
            body: this.body,
            severity: this.severity,
            autoHide: this.autoHide,
            dismissable: this.dismissable
        });
    }
});

export default Component.extend({
    tag: 'demo-alert',
    viewModel: AppViewModel,
    view,
})
