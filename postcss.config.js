module.exports = ({env}) => ({
  plugins: {
    'cssnano': env === 'production',
    'autoprefixer': {},
  }
})