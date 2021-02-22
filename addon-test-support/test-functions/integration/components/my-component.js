import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
// import hbs from 'htmlbars-inline-precompile';

export default [
  {
  title: 'General', 
  testFunction: async function(assert) {
    await render(hbs`<MyComponent />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <MyComponent>
        template block text
      </MyComponent>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  }
}
];
