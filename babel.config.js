module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        whitelist: ['TMDB_API_KEY', 'TMDB_READ_ACCESS_TOKEN'],
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
