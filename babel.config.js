module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        'react-native-reanimated/plugin',
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@components': './src/components',
              '@screens': './src/screens',
              '@assets': './src/assets',
              '@utils': './src/utils',
            },
          },
        ],
      ],
    },
  }
};
