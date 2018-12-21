import Component from 'can-component';
import steal from '@loader';
import route from 'can-route';
import 'can-stache-route-helpers';
import pages from './pages';
import view from './index.stache';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import 'bulma-checkradio/dist/css/bulma-checkradio.min.css'

//!steal-remove-start
import debug from 'can-debug';
debug();
//!steal-remove-end

export default Component.extend({
    tag: 'demo-app',
    view,
    ViewModel: {
        init(){
            route.data = this.routeData;
            route.register('{page}');
            route.start();
        },
        routeData: {
            default(){
                return {
                    page: 'home'
                };
            }
        },
        pageData: {
            default(){
                return pages;
            }
        },
        pagePromise: {
            get(){
                if(!this.pageData[this.routeData.page]){
                    return Promise.reject('This page could not be found.');
                }
                const pageData = this.pageData[this.routeData.page];
                return steal.import(pageData.path).then(module => {
                    document.title = pageData.title || 'Demo';
                    return new module.default();
                });
            }
        },
        showNav: 'boolean',
        toggleNav(){
            this.showNav = !this.showNav;
        }
    }
});
