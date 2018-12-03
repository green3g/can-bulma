import 'spectre-canjs/sp-property-table/sp-property-table';
import nameTemplate from './templates/name.stache';
import date from './templates/date.stache';
import food from './templates/food.stache';
import Component from 'can-component';
import view from './template.stache';

export default Component.extend({
    tag: 'demo-property-table',
    view,
    viewModel: {
        fields: [{
            //fields can be specified using a detailed object
            name: 'name',
            label: 'User name',
    
            // custom templates can customize the look of the value
            displayComponent: nameTemplate
        }, {
            name: 'birthday',
    
            // increment the month number
            incrementMonth(number){
                return number + 1;
            },
            displayComponent: date
        },
            {name: 'favorite_food', label: 'Personal favorite', displayComponent: food}
        ],
        myData: {
            name: 'James McMannus',
            birthday: new Date,
            favorite_food: 'Pizza'
        }
    }
});