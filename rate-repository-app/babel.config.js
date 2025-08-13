const moduleResolverConfig = [
  'module-resolver',
  {
    root: ['./'],
    alias: {
      '@': './src',
    },
  },
];

module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
    ],
    plugins: [
      moduleResolverConfig
    ]
  };
};
