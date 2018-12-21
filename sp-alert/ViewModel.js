import DefineMap from 'can-define/map/map';

/**
 * A `<sp-alert />` component's ViewModel
 * @class ViewModel
 * @memberof sp-alert
 */
export default DefineMap.extend('AlertItem', {
    /** @lends sp-alert.ViewModel.prototype */
    /**
   * whether or not to fade the sp-alert out using animate.css
   * @type {Boolean}
   * @memberof sp-alert.ViewModel.prototype
   *
   */
    fade: {
        type: 'boolean',
        default: true
    },
    timer: {},
    /**
     * the time to autohide this sp-alert. Set to 0 to disable auto hide
     * @type {Number}
     * @memberof sp-alert.ViewModel.prototype
     */
    autoHide: {
        type: 'number',
        default: 5000,
        set (autohide) {
            if (autohide) {
                if (this.timer) {
                    window.clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    this.hide();
                }, autohide);
            }
            return autohide;
        }
    },
    /**
     * Whether or not to use the content tag, that will display whatever
     * is inside the `<sp-alert></sp-alert>` tags. This overrides the
     * body property of this sp-alert
     * @type {Boolean}
     * @memberof sp-alert.ViewModel.prototype
     */
    custom: {
        type: 'boolean',
        default: false
    },
    /**
     * @type {string}
     * @memberof sp-alert.ViewModel.prototype
     * @description The class that gives the sp-alert context. Must be either
     * info, success, warning, or danger.
     * @option {string} Defaults to `info`.
     */
    severity: {
        default: 'info',
        type: function (val) {
            var allowed = ['primary', 'info', 'success', 'warning', 'danger'],
                isValid = allowed.indexOf(val) > -1;

            return isValid ? val : allowed[0];
        }
    },

    /**
     * @type {boolean}
     * @memberof sp-alert.ViewModel.prototype
     * @description Marks the sp-alert as dismissable, which adds a "close" icon to the sp-alert.
     * The default is true
     */
    dismissable: {
        default: true,
        type: 'boolean'
    },

    /**
     * @type {boolean}
     * @memberof sp-alert.ViewModel.prototype
     * @description Toggles visiblity of the sp-alert. The default is false.
     */
    visible: {
        default: true,
        type: 'boolean'
    },

    /**
     * @type {string}
     * @memberof sp-alert.ViewModel.prototype
     * @description The content displayed in the alert. The default is an empty string.
     */
    body: {
        default: '',
        type: 'string'
    },
    /**
     * Time in miliseconds to fade out this sp-alert
     * @memberof sp-alert.ViewModel.prototype
     * @type {Number}
     */
    fadeTime: {
        type: 'number',
        default: 1000
    },
    element: '*',
    /**
     * Hide this sp-alert
     */
    hide () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.fade) {
            setTimeout(() => {
                this.dispatch('hide', [this]);
            }, this.fadeTime);
        } else {
            this.dispatch('hide', [this]);
        }
    }
});