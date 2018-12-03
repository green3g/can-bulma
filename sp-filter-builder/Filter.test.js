import {Filter, FilterOptions} from './Filter';

let filter;

beforeEach(() => {
    filter = new Filter({
        name: 'test',
        operator: 'equals',
        value: 'test'
    });
});
afterEach(() => {
    filter = null;
});

test('name get()', () => {
    expect(filter.name).toEqual('test');

    filter.field = {
        name: 'hello'
    };
    expect(filter.name).toEqual('hello');
});

test('operatorField get() no field type', () => {
    expect(filter.operatorField.options.length).toEqual(FilterOptions.length);
});

test('operatorField get() with field type', () => {
    filter.field = {
        name: 'test',
        type: 'date'
    };

    expect(filter.operatorField.options.length < FilterOptions.length).toBeTruthy();
});

test('valueField get() no field set', () => {
    expect(filter.valueField.editTag).toEqual('sp-text-field');
});

test('valueField get() field is set', () => {
    filter.field = {
        name: 'test',
        editTag: 'sp-date-field'
    };

    expect(filter.valueField.editTag).toEqual('sp-date-field');
});

test('label get()', () => {
    expect(filter.label).toEqual('Test');
    filter.field = {
        label: 'Test label'
    };

    expect(filter.label).toEqual('Test label');
});

test('object get()', () => {
    expect(filter.object.test).toEqual('test');
});

test('setField(field, dom, scope, val)', () => {
    filter.setField(null, null, null, {value: 'hello'});
    expect(filter.value).toEqual('hello');
});
