import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({

  favorites: Ember.inject.service(),

  actions: {
    favoriteClicked(org) {
      this.get('favorites').favoriteItem(org);
    }
  },

  model() {
    return [{
      id: "emberjs"
    }, {
      id: "ember-cli"
    }, {
      id: "microsoft"
    }, {
      id: "yahoo"
    }, {
      id: "netlix"
    }, {
      id: "facebook"
    }];
  }
});
