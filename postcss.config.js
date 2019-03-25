module.exports = ({ env, options: { map } }) => ({
  parser: 'postcss-scss',

  map: env === 'production' && map,

  plugins: {
    'postcss-mixins': true,
    'precss': true,
    'cssnano': env === 'production',
  },
});
