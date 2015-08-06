module.exports = {
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
      ],
      filename: 'vendor.css',
      min: 'vendor.min.css'
    }
  },

    js: {
    src: [
      'public/js/**/*.js',
      '!public/js/vendor/**/*.js'
    ],
    watch: [
      'public/js/**/*.js',
      '!public/js/vendor/**/*.js'
    ],
    dest: 'dist/js',
    filename: 'scripts.js',
    vendor: {
      src: [
        'public/js/vendor/jquery.min.js',
        'public/js/vendor/bootstrap-3.3.4.js'
      ],
      dest: 'dist/js',
      filename: 'vendor.js',
      min: 'vendor.min.js'
    }
  },
}