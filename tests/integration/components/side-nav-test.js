import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | side-nav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SideNav />`);

    assert.notStrictEqual(
      this.element.textContent.trim(),
      'My Tasks Projects Calendar'
    );

    // Template block usage:
    await render(hbs`
      <SideNav>
      </SideNav>
    `);

    assert.notStrictEqual(
      this.element.textContent.trim(),
      'My Tasks Projects Calendar'
    );
  });
});
