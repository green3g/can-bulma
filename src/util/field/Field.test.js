import Field from './Field';

let fields;

afterEach (() => {
    fields = null;
});

test('Field.label', () => {

    fields = [{
        name: 'test',
        expected: 'Test'
    }, {
        name: 'other',
        label: 'Hey',
        expected: 'Hey'
    }];


    fields.forEach((f) => {
        f = new Field(f);
        expect(f.label).toEqual(f.expected);
    });
});