
import ViewModel from './ViewModel';

let vm;

beforeEach (() => {
    vm = new ViewModel();
});
afterEach (() => {
    vm = null;
});

test('addAlert(message)', () => {
    const length = vm.alerts.length;
    vm.addAlert({
        body: 'alert!'
    });
    expect(vm.alerts.length).toEqual(length + 1);
});

test('removeAlert(message)', () => {
    const m = {
        message: 'alert!'
    };
    vm.addAlert(m);
    vm.removeAlert(vm.alerts[0]);
    expect(vm.alerts.length).toEqual(0);
});
