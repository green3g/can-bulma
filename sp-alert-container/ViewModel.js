import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import Alert from '../sp-alert/ViewModel';
import renderAlert from 'can-bulma/sp-alert/sp-alert.stache';

/**
 * A `<sp-alert-container />` component's ViewModel
 * @class sp-alert-container.ViewModel ViewModel
 * @memberof sp-alert-container
 */
export default DefineMap.extend('AlertContainer', {
    /** @lends sp-alert-container.ViewModel.prototype */
    /**
     * An array of alert alerts
     * @type {Array<sp-alert.ViewModel>}
     * @memberof sp-alert-container.ViewModel.prototype
     */
    alerts: {
        Default: DefineList.extend('AlertList', {
            '#': Alert
        })
    },
    
    renderAlert: {
        default () {
            return renderAlert; 
        }
    },
    /**
   * adds a new alert
   * @param {sp-alert.ViewModel} alertProps the alert options or alert object to add
   */
    addAlert (alertProps) {
        this.alerts.push(alertProps);
        const newAlert = this.alerts[this.alerts.length - 1];
        newAlert.on('hide', (event, alertItem) => {
            this.removeAlert(alertItem);
        });
    },
    /**
     * Removes a alert
     * @param  {sp-alert.ViewModel} alert the alert object to remove
     */
    removeAlert: function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
});
