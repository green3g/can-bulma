
import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import view from './basic.stache';
import Component from 'can-component';
import 'can-bulma/sp-form/sp-form';
import 'can-bulma/sp-form/fields/sp-text-field/';
import 'can-bulma/sp-list-table/sp-list-table';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import date from './templates/date.stache';
import debug from 'can-debug'
debug();

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
            flatpickr(element, {
                defaultDate: new Date,
                enableTime: true,
            });
        },
        label: 'Date Completed',
        validate: required,

        // register $.datepicker on text element
        ui: 'datepicker',
        type: 'date',
        displayComponent: date
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
    view,
    helpers: {
        date(date){
            if(!date){
                return 'None';
            }
            // Make a fuzzy time
            var delta = Math.round((+new Date - date) / 1000);

            var minute = 60,
                hour = minute * 60,
                day = hour * 24,
                week = day * 7;

            var fuzzy;

            if (delta < 30) {
                fuzzy = 'just then.';
            } else if (delta < minute) {
                fuzzy = delta + ' seconds ago.';
            } else if (delta < 2 * minute) {
                fuzzy = 'a minute ago.'
            } else if (delta < hour) {
                fuzzy = Math.floor(delta / minute) + ' minutes ago.';
            } else if (Math.floor(delta / hour) == 1) {
                fuzzy = '1 hour ago.'
            } else if (delta < day) {
                fuzzy = Math.floor(delta / hour) + ' hours ago.';
            } else if (delta < day * 2) {
                fuzzy = 'yesterday';
            }

            return fuzzy;
        }
    }
})