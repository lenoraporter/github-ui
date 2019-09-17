import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // LIST OF ORGS
  this.route("orgs", {}); // /orgs

  //INDIVIDUAL ORG
  this.route("org", { path: "org/:id" }, function() { //org/emberjs
    
    // LIST OF REPOS
    this.route("repos", {});

    // INDIVIDUAL REPO
    this.route("repo", { path: ":repoid" }, function() {
      this.route("contributors", {});
      this.route("issues", {});
    }); // org/jquery/jquery-ui
  });
  this.route("notfound", {path: "*path"}); // Making a 404 page
});

export default Router;
