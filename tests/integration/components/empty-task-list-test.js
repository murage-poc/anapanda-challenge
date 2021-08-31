import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | empty-task-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<EmptyTaskList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <EmptyTaskList @message="no content provided">
      </EmptyTaskList>
    `);

    assert.dom(this.element).hasText('no content provided');
  });
});
