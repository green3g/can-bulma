
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';

export const img = new RegExp(/.*\.(?:jpg|jpeg|gif|png)/, 'i');

/**
 * A type used throughout the sp-file-list component to represent
 * File types.
 * @module sp-file-list/ViewModel~FileMap
 * @type {DefineMap}
 * @example `import {FileMap} from 'can-bulma/sp-file-list/ViewModel';
 */
export const FileMap = DefineMap.extend('FileMap', {seal: false}, {
    /** @lends sp-file-list/ViewModel~FileMap.prototype */
    /**
     * A reference to the File object
     * @type {File}
     */
    file: '*',
    /**
     * A string to display for the file name
     * @type {String}
     */
    id: 'string',
    /**
     * A string to use for the file url
     * @type {String}
     */
    uri: 'string',
    /**
     * Whether or not the url is a global object uri
     * @type {Boolean}
     */
    isObjectURL: 'boolean',
    /**
     * A (optional) upload progress bar percentage to display to the user
     * @type {Number}
     */
    progress: 'number',
    /**
     * A user friendly error message to display if something happens 
     * while the file is being uploaded or added to the file list.
     * @type {String}
     */
    error: 'string',
    /**
     * Tests a file objects `id` property for image type extension
     * @return {Boolean} whether or not the `file.id` name is a file
     */
    isImage () {
        return this.id && img.test(this.id);
    }
});

/**
 * A type used throughout the sp-file-list component to represent array of file maps
 * @module sp-file-list/ViewModel~FileList
 * @type {DefineList}
 * @example `import {FileList} from 'can-bulma/sp-file-list/ViewModel';
 */
export const FileList = DefineList.extend('FileList', {
    '#': FileMap
});

/**
 * A `<sp-file-list />` component's ViewModel
 * 
 * @module sp-file-list/ViewModel
 */
export default DefineMap.extend('SPFileList', {
    /** @lends sp-file-list/ViewModel.prototype */
    /**
     * The heading text to display
     * @type {String}
     */
    title: {default: 'Files', type: 'string'},
    /**
     * A list of file objects
     * @type {FileList}
     */
    files: {Default: FileList, Type: FileList},
    /**
     * The current input value
     */
    inputValue: {},
    /**
     * Is currently dragging files over
     * @type {Boolean}
     */
    isDragOver: 'boolean',
    /**
     * Is mouse currently over the widget?
     * @type {Boolean}
     */
    isMouseOver: 'boolean',
    /**
     * Maximum value of progress to display loader
     * @type {Number}
     */
    maxProgressValue: {
        type: 'number',
        default: 100
    },
    /**
     * The file input element
     * @type {Boolean}
     */
    el: '*',
    /**
     * Removes an individual file from the list
     * @param {FileMap} file The file to remove from the list
     */
    remove (file) {
        if (file.isObjectURL) {
            window.URL.revokeObjectURL(file.uri);
        }
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
        this.dispatch('remove', [file]);
    },
    /**
     * Adds an array of files to the list
     * @param {Array<FileMap>} files Array of files to add to the list
     * @param {DomEvent} ev (optional) event to cancel default on
     */
    addFiles (files, ev) {
        if (ev) {
            ev.preventDefault();
        }
        this.isDragOver = false;
        files = Array.from(files).map((file) => {
            const url = window.URL.createObjectURL(file);
            return new FileMap({
                file,
                id: file.name,
                uri: url,
                isObjectURL: true
            });
        });
        files.forEach((file) => {
            this.files.push(file);
            this.dispatch('add', [file]);
        });
        this.inputValue = null;
    },
    /**
     * Sets the `isDragOver` value to something else
     * @param {DomEvent} ev Event to prevent default on 
     * @param {*} isDragOver Whether or not drag over is currently happening
     */
    dragover (ev, isDragOver) {
        ev.preventDefault();
        this.isDragOver = isDragOver;
    },
    /**
     * Sets the `isMouseOver` value to something
     * @param {DomEvent} ev Event to prevent default on
     * @param {Boolean} isMouseOver Whether or not mouse is currently over widget
     */
    mouseover (ev, isMouseOver) {
        ev.preventDefault();
        this.isMouseOver = isMouseOver;
    },
    /**
     * Determines whether or not the progress value bar should be shown
     * @param {Number} progressValue Current progress value of file
     * @returns {Boolean}
     */
    showProgress (progressValue) {
        return typeof progressValue !== 'undefined' && progressValue < this.maxProgressValue;
    },
    /**
     * Called when viewmodel is connected to the dom
     * @param {DomElement} el This components root element
     */
    connectedCallback (el) {
        this.el = el.querySelector('input');
    }
});