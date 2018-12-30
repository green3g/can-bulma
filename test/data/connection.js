import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import realtimeRestModel from 'can-super-model';
import editButton from './templates/editButton.stache';

// import fake ajax services
import './fixtures';

export const TaskMap = DefineMap.extend('Task', {seal: false}, {
    id: {type: 'number', identity: true, edit: 'false'},
    'name': 'string',
    'description': 'string',
    edit: {
        edit: false,
        serialize: false, 
        displayComponent: editButton
    }
});

export const TaskList = DefineList.extend({
    '#': TaskMap
});

TaskMap.List = TaskList;

const C = realtimeRestModel({
    Map: TaskMap,
    url: '/tasks'
});

C.metadata = {};

export const Connection = C;
