import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('breakfast-listing', 'Integration | Component | breakfast listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{breakfast-listing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#breakfast-listing}}
      template block text
    {{/breakfast-listing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
