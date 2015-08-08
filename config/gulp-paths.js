module.exports = {
  views: {
    src: '*.hbs'
  },
  less: {
    src: 'public/less/*.less',
    watch: 'public/less/**/*.less',
    dest: 'dist/css',
    filename: 'less.css',
    min: 'less.min.css'
  },

  css: {
    src: [
      'public/css/reset.css'
    ],
    watch: [
      'public/css/**/*.css',
      '!public/css/vendor**/*.css'
    ],
    dest: 'dist/css',
    filename: 'style.css',
    min: 'style.min.css',
    vendor: {
      src: [
        'public/css/vendor/animate.css',
        'public/css/vendor/et-line.css'
      ],
      filename: 'vendor.css',
      min: 'vendor.min.css'
    }
  },

  js: {
    src: [
      'public/js/**/*.js',
      '!public/js/vendor/**/*.js',
      '!public/js/bootstrap/**/*.js',
      '!public/js/jquery/**/*.js'
    ],
    watch: [
      'public/js/**/*.js',
      '!public/js/vendor/**/*.js'
    ],
    dest: 'dist/js',
    filename: 'scripts.js',
    min: 'scripts.min.js',
    vendor: {
      src: [
        'public/js/vendor/jquery.min.js',
        'public/js/vendor/bootstrap/bootstrap-3.3.4.js'
      ],
      dest: 'dist/js',
      filename: 'vendor.js',
      min: 'vendor.min.js'
    }
  },

  jshint: {
    src: [
      'config/**/*.js',
      'routes/**/*.js',
      'gulpfile.js',
      'server.js'
    ],
    watch: [
      'config/**/*.js',
      'routes/**/*.js',
      'gulpfile.js',
      'keystone.js'
    ]
  },
  img: {
    src: 'public/img/**/*',
    dest: 'dist/img'
  },
};