// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

  'name': 'Made In Music',
  'brand': 'Made In Music',

  'less': 'public',
  'static': 'dist',
  'favicon': 'public/favicon.ico',
  'views': 'templates/views',
  'view engine': 'hbs',

  'custom engine': handlebars.create({
    layoutsDir: 'templates/views/layouts',
    partialsDir: 'templates/views/partials',
    defaultLayout: 'default',
    helpers: new require('./templates/views/helpers')(),
    extname: '.hbs'
  }).engine,

  'auto update': true,
  'mongo': 'mongodb://localhost/made-in-music',
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'b3w3q>1NgA1RQl90Qr[ayX&_P67LCvtIVwLkUt*g?6-kpT#h<e"`Cl3FkT;$W,xg',

  'wysiwyg importcss': '../../css/less.css',
  'wysiwyg additional plugins': 'importcss',
  'wysiwyg additional options': {
    importcss_append: true,
    forced_root_block_attrs: {
      'class': 'meta'
    }
  },
  'wysiwyg images': true,
  'wysiwyg cloudinary images': true

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
  _: require('underscore'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
  'posts': ['posts', 'post-categories'],
  'galleries': 'galleries',
  'enquiries': 'enquiries',
  'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start(function() {
  console.log('yes');
});
