import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this._super(...arguments); // Why do we need this._super?
    this.replaceWith('orgs');
  }
});
