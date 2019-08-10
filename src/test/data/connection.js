import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import restModel from '../../sp-admin/util/behaviors/base';
import totalResourceCount from '../../sp-admin/util/behaviors/totalResourceCount';

// import fake ajax services
import './fixtures';

export const TaskMap = DefineMap.extend('Task', {seal: false}, {
    id: {type: 'number', identity: true, edit: 'false'},
    'name': 'string',
    'description': 'string'
});

export const TaskList = DefineList.extend({
    '#': TaskMap
});

TaskMap.List = TaskList;

export const Connection = restModel({
    name: 'Task',
    Map: TaskMap,
    url: '/tasks',
    behaviors: [totalResourceCount]
});

export default Connection;