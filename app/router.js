import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
// I'm a comment
// I-m in the branch
Router.map(function() {
});

export default Router;
