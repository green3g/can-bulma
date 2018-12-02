import DefineMap from 'can-define/map/map';

/**
 * @class ViewModel
 * @memberof sp-paginate
 *
 * @description A `<sp-paginate />` component's ViewModel
 */
const ViewModel = DefineMap.extend('PaginateWidget', {
    /** @lends sp-paginate.ViewModel.prototype*/
    /**
     * The number of pages to show in the widget
     * @type {Number}
     * @memberof sp-paginate.ViewModel.prototype
     */
    pages: {
        type: 'number',
        default: 10
    },
    /**
     * Render a compact style page switcher with just a forward and back button.
     * @type {Boolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    compact: 'boolean',
    /**
     * The active page index
     * @type {Number}
     * @memberof sp-paginate.ViewModel.prototype
     */
    activePageIndex: {
        default: 0,
        type: 'number'
    },
    /**
     * The number of pages to show on either side of the currently selected page. The default is 3. For example, if the selected page is 5, the visible pages should be 2,3,4,5,6,7,8.
     * @type {Number}
     * @memberof sp-paginate.ViewModel.prototype
     */
    activeOffset: {
        default: 2,
        type: 'number'
    },
    /**
     * The first page number.
     * @type {Number}
     * @memberof sp-paginate.ViewModel.prototype
     */
    firstPage: {
        get () {
            return this.pageArray[0];
        }
    },
    /**
     * The first page number.
     * @type {Number}
     * @memberof sp-paginate.ViewModel.prototype
     */
    lastPage: {
        get () {
            return this.pageArray[this.pageArray.length - 1];
        }
    },
    /**
     * 
     * @type {Boolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hasFirstMore: {
        get () {
            return this.activePageIndex - this.activeOffset > 1;
        }
    },
    /**
     * 
     * @type {Boolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hasLastMore: {
        get () {
            return this.activePageIndex + this.activeOffset < this.pages - 2;
        }
    },
    /**
     * A virtual property used by the template to indicate whether or not there is a next page
     * @type {Boolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hasNext: {
        get () {
            return this.activePageIndex < this.pages - 1;
        }
    },
    /**
     * A virtual property used by the template to indicate whether or not there is a previous page
     * @type {Boolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hasPrevious: {
        get () {
            return this.activePageIndex > 0;
        }
    },
    /**
     * The array of currently shown pages in the widget
     * @type {Array<Number>}
     * @memberof sp-paginate.ViewModel.prototype
     */
    visiblePages: {
        get () {
            const active = this.activePageIndex;
            let min = active - this.activeOffset;
            let max = active + this.activeOffset + 1;
            if (min < 1) {
                min = 1;
            }
            if (max > this.pages - 1) {
                max = this.pages - 1;
            }
            return this.pageArray.slice(min, max);
        }
    },
    /**
     * The array of numbers 0 through number of pages. This is a helper for the visiblePages getter
     * @type {Array<Number>}
     * @memberof sp-paginate.ViewModel.prototype
     */
    pageArray: {
        get () {
            var arr = [];
            for (var i = 1; i <= this.pages; i++) {
                arr.push(i);
            }
            return arr;
        }
    },
    /**
     * Hides the first button
     * @signature `<sp-paginate hide-first />`
     * @type {HTMLBoolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hideFirst: {
        type: 'htmlbool',
        default: false
    },
    /**
     * Hides the last button
     * @signature `<sp-paginate hide-last />`
     * @type {HTMLBoolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hideLast: {
        type: 'htmlbool',
        default: false
    },
    /**
     * Hides the previous button
     * @signature `<sp-paginate hide-previous />`
     * @type {HTMLBoolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hidePrevious: {
        type: 'htmlbool',
        default: false
    },
    /**
     * Hides the next button
     * @signature `<sp-paginate hide-next />`
     * @type {HTMLBoolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hideNext: {
        type: 'htmlbool',
        default: false
    },
    /**
     * Hides the list of pages
     * @signature `<sp-paginate hide-pages />`
     * @type {HTMLBoolean}
     * @memberof sp-paginate.ViewModel.prototype
     */
    hidePages: {
        type: 'htmlbool',
        default: false
    },
    /**
     * Navigates to the next page
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoNext () {
        if (this.hasNext) {
            this.activePageIndex++;
        }
        return false;
    },
    /**
     * Navigates to the previous page
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoPrevious () {
        if (this.hasPrevious) {
            this.activePageIndex--;
        }
        return false;
    },
    /**
     * Navigates to the first page
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoFirst () {
        this.activePageIndex = 0;
        return false;
    },
    /**
     * Navigates to the last page
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoLast () {
        this.activePageIndex = this.pages - 1;
        return false;
    },
    /**
     * Navigates to the page
     * @param {Number} p The page index to navigate to
     * @return {Boolean} returns false to prevent the link from navigating to the next page
     */
    gotoPage (p) {
        if (p > 0 && p <= this.pages) {
            this.activePageIndex = p - 1;
        }
        return false;
    },
    /**
     * Checks to see if the passed page is the active page index
     * @param {Number} p The page to check
     * @return {Boolean} Returns a boolean value that tells the template whether or not the passed page is the active page
     */
    isActive (p) {
        return this.activePageIndex === p - 1;
    }
});

export default ViewModel;
