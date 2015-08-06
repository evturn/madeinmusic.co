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
      filename: 'vendor.css'
    }
  }
}