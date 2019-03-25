module.exports = ({ env, options: { map } }) => ({
  map: env === 'production' && map,

  plugins: {
    'postcss-mixins': true,

    precss: true,

    cssnano: env === 'production',

    'postcss-sorting': {
      order: ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],

      'properties-order': 'alphabetical',

      'unspecified-properties-position': 'bottom',
    },
  },
});
