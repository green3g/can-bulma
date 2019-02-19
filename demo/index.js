import Component from 'can-component';
import steal from '@loader';
import route from 'can-route';
import 'can-stache-route-helpers';
import pages from './pages';
import view from './index.stache';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import 'bulma-checkradio/dist/css/bulma-checkradio.min.css'
import './index.less';

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
        demos: {
            get(){
                return this.pageData.filter(p => p.demo);
            }
        },
        pagePromise: {
            get(){
                const pageData = this.pageData.filter(p => p.route === this.routeData.page)[0];
                if(!pageData){
                    return Promise.reject('This page could not be found.');
                }
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
