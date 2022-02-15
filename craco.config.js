const CracoAlias = require('craco-alias')

module.exports = {
  babel: {
    plugins: [
      [
        '@babel/plugin-transform-react-jsx',
        {
          importSource: '@theme-ui/core',
          runtime: 'automatic',
          throwIfNamespace: false,
        },
      ],
    ]
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "./tsconfig.extend.json",
      }
    }
  ]
}
