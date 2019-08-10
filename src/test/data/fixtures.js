import jsonData from './tasks.json';
import fixture from 'can-fixture';
import DefineList from 'can-define/list/list';

let index = 1000;

// a mock ajax service
fixture.delay = 200;
fixture({
    'GET /tasks' ({data}) {
        const page = data.page || {start: 0, end: 10};
        // eslint-disable-next-line
        console.log('fixtures: Query REST Params: ',data);
        const start = parseInt(page.start, 10) || 0;
        const end = parseInt(page.end, 10) || 10;
        const sortInfo = data.sort;
        let tempData = new DefineList(jsonData);

        let total = jsonData.length;

        // filter it
        if (data.filter) {
            const filters = Object.keys(data.filter);
            tempData = tempData.filter((d) => {
                for (const filter of filters) {
                    if (filter === '$or') {
                        // NOT IMPLEMENTED
                        // eslint-disable-next-line
                        console.warn('fixtures: $or is not yet implemented');
                        return true;
                    }
                    const searchValue = data.filter[filter].toUpperCase();
                    const dataValue = (String(d[filter])).toUpperCase();
                    if (dataValue.indexOf(searchValue) < 0) {
                        return false;
                    }
                }
                return true;
            });
            total = tempData.length;
            // eslint-disable-next-line
                console.warn('fixtures: found ' + tempData.length + ' items after filtering');
        }


        // sort it
        if (sortInfo && sortInfo.field) {
            const field = sortInfo.field;
            tempData = tempData.sort((a, b) => {
                return sortInfo.type === 'asc' ? (a[field] === b[field] ? 0 : a[field] > b[field] ? 1 : -1) : (a[field] === b[field] ? 0 : a[field] > b[field] ? -1 : 1);
            });
        }

        // pageinate it
        tempData = tempData.slice(start, end);

        // return the serialized version
        return {
            data: tempData.serialize(),
            total
        };
    },
    'POST /tasks' (params, response) {
        const newId = index++;
        const newObj = Object.assign({
            id: newId
        }, params.data);
        jsonData.push(newObj);
        response(jsonData[jsonData.length - 1]);
    },
    'GET /tasks/{id}' (params, response) {
        const items = jsonData.filter((item) => {
            // eslint-disable-next-line eqeqeq
            return item.id == params.data.id;
        });
        if (!items.length) {
            response(404, 'Not Found');
            return null;
        }
        return items[0];
    },
    'PUT /tasks/{id}' (params, response) {
        let item = jsonData.filter((i) => {
            // eslint-disable-next-line eqeqeq
            return i.id == params.data.id;
        });
        if (!item.length) {
            response(404, 'Not Found');
            return;
        }
        item = item[0];
        const idx = jsonData.indexOf(item);
        if (idx !== -1) {
            jsonData[idx] = Object.assign(item, params.data);
            response(jsonData);
        } else {
            response(404, 'Not Found');
        }
    },
    'DELETE /tasks/{id}' (params, response) {
        let item = jsonData.filter((i) => {
            // eslint-disable-next-line eqeqeq
            return i.id == params.data.id;
        });
        if (!item.length) {
            response(404, 'Not Found');
            return;
        }
        item = item[0];
        const idx = jsonData.indexOf(item);
        if (idx !== -1) {
            jsonData.splice(jsonData.indexOf(item), 1);
            response(jsonData);
        } else {
            response(404, 'Not Found');
        }
    }
});
