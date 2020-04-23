
/**
 * @module sp-admin/mixins/paginate
 * Pagination requires a total property to be updated after filtered queries are applied. This can be updated
 * in several ways:
 * 
 * Use model parameters `model.metadata.total`:
 *  - `metadata` - An object with a total property. This should get updated, whenever a query is made. 
 * 
 * Return a total property on the resolved object array:
 * getList(){
 *  const result = [];
 *  result.total = 12;
 *  return result
 * }
 */
export default {
    total: {
        value ({resolve, listenTo}) {
            listenTo('objectsPromise', ((ev, promise) => {
                if (!promise) {
                    return;
                }
                promise.then((objects) => {
                    if (typeof objects.total !== 'undefined') {
                        resolve(objects.total);
                    }
                });
            }));

            listenTo('model.metadata.total', resolve);
        }
    },
    pageIndex: {
        set (index) {
            const count = this.perPage;
            this.params.page.assign({
                start: this.getStart(index, count),
                end: this.getEnd(index, count)
            });
            return index;
        }
    },
    perPage: {
        set (count) {
            const index = this.pageIndex;
            this.params.page.assign({
                start: this.getStart(index, count),
                end: this.getEnd(index, count)
            });
            return count;
        }
    },
    getStart (index, perPage) {
        return index * perPage;
    },
    getEnd (index, perPage) {
        return (index + 1) * perPage - 1;
    }
};
