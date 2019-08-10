import ConfirmDialog from '../sp-confirm';

/**
 * Display a confirm dialog that resolves with the viewmodel of the confirm dialog.
 * To check whether the user confirmed, or rejected, use the `viewModel.outcome` property.
 * @module can-bulma/sp-confirm/util/sp-confirm
 *
 * @example
 * confirm('Do this?').then((viewModel) => {
 *      if(viewModel.outcome === 'rejected'){
 *          return;
 *      } else {
 *          // do stuff
 *      }
 * })
 *
 * @param {String} content Content to display to user (html is accepted)
 * @param {Object} viewModel Viewmodel properties to pass to the confirm dialog component
 * @param {Object} scope Template scope properties to pass to the template
 * @return {Promise<can-bulma/sp-confirm/ViewModel>} The confirm viewmodel
 */

export default function confirm (content, viewModel = {}, scope = {}) {
    viewModel.active = true;
    const confirmDialog = new ConfirmDialog({
        content,
        viewModel,
        scope
    });
    document.body.appendChild(confirmDialog.element);
    return confirmDialog.viewModel.promise.then(() => {
        document.body.removeChild(confirmDialog.element);
        return confirmDialog.viewModel;
    });
}
