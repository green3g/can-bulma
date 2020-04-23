import DefineList from 'can-define/list/list';

// search functionality for the admin component
export default {
    // required
    searchFields: {
        default () {
            return [];
        }
    },
    filterFields: {
        default () {
            return [];
        }
    },

    // internal
    searchFieldProps: {
        default () {
            return {
                showClear: true,
                name: 'search',
                inline: true,
                placeholder: 'Search',
                alias: ''
            };
        }
    },
    _originalFilters: {},
    searchValue: 'string',

    // logic to add and restore search props
    search ([searchVal]) {
        let filters = this.params.filter.$or ? this.params.filter.$or.get() : [];
        if (searchVal) {
            if (!this._originalFilters) {
                this._originalFilters = new DefineList(filters);
            }
            filters = this.searchFields.map((field) => {
                return {[field]: searchVal}; 
            });
        } else {
            filters = this._originalFilters && this._originalFilters.length 
                ? this._originalFilters.get() 
                : null;
        }

        if (filters) {
            this.params.filter.assign({$or: filters});
        } else {
            this.params.filter.assign({$or: undefined});
        }
    }
};