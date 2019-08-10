import ViewModel from './ViewModel';

// eslint-disable-next-line
let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('1=1', () => {
    expect(1).toEqual(1);
});

