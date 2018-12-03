import 'spectre-canjs/sp-paginate/sp-paginate';
import Component from 'can-component';

const view =    `
<h3 class="title is-3">Default Paginate</h3>
<p>Index: {{page1}}
<sp-paginate pages="300" vm:activePageIndex:to="page1" />

<h3 class="title is-3">Compact Style</h3>
<p>Index: {{page2}}</p>
<div style="width: 90px;">
<sp-paginate pages="300" compact:raw="true" activePageIndex:to="page2" />
</div>

<h3 class="title is-3">Code:</h3>

<pre>
    {{code}}
</pre>
  `;

export default Component.extend({
    tag: 'paginate-demo',
    viewModel: {
        page1: 0,
        page2: 0,
        code: view
    },
    view
})
