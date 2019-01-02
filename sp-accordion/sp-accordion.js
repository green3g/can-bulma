import NavPageComponent from '../sp-tab-page/sp-tab-page';
import NavComponent from '../sp-tab-container/sp-tab-container';
import page from './sp-accordion-page.stache';
import container from './sp-accordion.stache';
import './sp-accordion.less';

/**
 * An accordion page
 * @module sp-accordion
 * @extends sp-tab-page
 * @example 
 * <sp-accordion-page /> 
 */
export const AccordionPageComponent = NavPageComponent.extend({
    tag: 'sp-accordion-page',
    view: page
});

/**
 * A virtical navigation accordion component
 * @module sp-accordion
 * @extends sp-tab-container
 * @example 
 * <sp-accordion />
 */
export const AccordionComponent = NavComponent.extend({
    tag: 'sp-accordion',
    view: container
}); 
