// an editing mixin for the admin component
import confirm from '../../sp-confirm/util/confirm';

/**
 * @module sp-admin/mixins/edit
 * An editing mixin to provide creating, deleting, and editing of objects
 * Uses model properties:
 *  - `ObjectType` - A constructor for creating new objects
 *  - `save(object)` - Save an updated object
 *  - `destroy(object)` - Destroy/delete an object
 * 
 */
export default {
    // internal
    editActive: {
        default: false,
        type: 'boolean'
    },
    saveCount: {default: 0, type: 'number'},
    error: 'string',
    editId: {type: 'number'},
    editPromise: '*',
    isSaving: {},
    editObject: {},
    isDeleting: {},
    addNew () {
        this.assign({
            editActive: true,
            editObject: new this.model.ObjectType()
        });
    },
    showEdit (object) {
        this.assign({
            editActive: true,
            editObject: object
        });
        this.resetScroll();
    },
    hideEdit () {
        this.assign({
            editActive: false,
            editObject: null
        });
    },
    showEditFromEvent (args) {
        const [, object] = args;
        this.showEdit(object);
    },
    resetScroll () {
        setTimeout(() => {
            const modal = document.querySelector('.modal-body');
            if (modal) {
                modal.scrollTop = 0; 
            }
        }, 200);
    },
    save (object) {
        this.error = null;
        return this.model.save(object).then((result) => {
            this.assign({
                editObject: null,
                saveCount: this.saveCount + 1,
                requestCount: this.requestCount + 1,
                isSaving: false,
                editActive: false,
                editId: null
            });

            if (process.env.NODE_ENV !== 'production') {
            // TODO implement feedback
            // eslint-disable-next-line
            console.info('edit: Item saved');
                
            }
            // swal({
            //     toast: true,
            //     timer: 2000,
            //     type: 'success',
            //     title: 'Success!',
            //     text: 'Item was created/updated'
            // });

            return result;
        }).catch((e) => {
            if (typeof e.message === 'string') {
                // TODO implement feedback
                // eslint-disable-next-line
                console.warn('edit: Item error', e);
                // swal({
                //     type: 'error',
                //     title: 'Error!',
                //     text: e.message,
                //     toast: true,
                //     timer: 10000
                // });
            }
            this.resetScroll();
            this.isSaving = false;
        });
    },
    delete (selected) {
        return confirm(`Are you sure you want to delete ${selected.length} ${this.title}(s)?`, {
        }).then((args) => {
            if (args && args.dismiss) {
                return args.dismiss;
            }
            const pending = [];
            selected.forEach((item) => {
                pending.push(this.model.destroy(item));
            });

            if (selected.replace) {
                selected.replace([]);
            }
            this.isDeleting = Promise.all(pending).then(() => {
                this.requestCount++;
            });

            this.isDeleting.then(() => {
                // TODO implement feedback
                // eslint-disable-next-line
                console.info('edit: Item deleted');
                // swal({
                //     toast: true,
                //     timer: 5000,
                //     type: 'success',
                //     text: 'Item(s) were deleted'
                // });
            }).catch((e) => {
                // TODO implement feedback
                // eslint-disable-next-line
                console.warn('edit: Item error', e);
                // swal({
                //     toast: true,
                //     timer: 10000,
                //     type: 'error',
                //     text: e.message || 'Error deleting item(s)'
                // });
            });

            return this.isDeleting;
        });
    },
    // edit mixin required
    deleteSingle (object) {
        this.delete([object]).then((args) => {
            if (!args || !args.dismiss) {
                this.clearDetails();
            }
        });
    }
};
