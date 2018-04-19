import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('surveys');
  this.route('devices');
  this.route('data');
  this.route('maps');
  this.route('users');
  this.route('messages');
});

export default Router;
