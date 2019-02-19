
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import view from './basic.stache';
import Component from 'can-component';
import 'can-bulma/sp-form/sp-form';
import 'can-bulma/sp-form/fields/sp-text-field/';
import 'can-bulma/sp-list-table/sp-list-table';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// validator function
function required (props) {
    if (!props.value) {
        return 'This value is required';
    }
}

// our task model defines our fields
const Task = DefineMap.extend('Task', {
    name: {
        type: 'string',
        validate: required
    },
    hours: {
        type: 'number',
        textType: 'number',
        validate: required
    },
    dateCompleted: {
        onInsert (element) {
            flatpickr(element);
        },
        label: 'Date Completed',
        validate: required,

        // register $.datepicker on text element
        ui: 'datepicker',
        type: 'date'
    }
});

// task list for holding our stored tasks
const TaskList = DefineList.extend({
    '#': Task,
    hours: {
        get () {
            return this.reduce((current, item) => {
                return item.hours + current;
            }, 0);
        }
    }
});
const currentTasks = new TaskList(localStorage.tasks ? JSON.parse(localStorage.tasks) : []);


export default Component.extend({
    tag: 'demo-form-basic',
    viewModel: {
        current: new Task(),
        tasks: currentTasks,
        isSaving: false,
        onSubmit (args) {
            const [task] = args;
            this.tasks.push(task);

            // set form to use new task
            this.set('current', new Task());
            this.isSaving = false;
        },
        persist () {
            localStorage.tasks = JSON.stringify(this.tasks.serialize());
            alert('Tasks Saved!');
        },
        clear () {
            this.tasks.replace([]);
            this.persist();
        }
    },
    view
})