const path = require('path');

module.exports = function override(config, env) {
  // Path aliases 설정
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/Component'),
    '@pages': path.resolve(__dirname, 'src/Pages'),
    '@styles': path.resolve(__dirname, 'src/Styles'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@constants': path.resolve(__dirname, 'src/constants')
  };
  if (env === 'production') {
    // output 경로 및 파일 이름 설정
    config.output = {
      ...config.output,
      path: path.resolve(__dirname, 'build'),
      filename: 'js/[name].[contenthash:8].js',
      publicPath: '/',
    };

    // css 파일의 위치를 수정
    const miniCssPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );

    if (miniCssPlugin) {
      miniCssPlugin.options.filename = 'css/[name].[contenthash:8].css';
    }

    // 정적 파일 경로 설정
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((one) => {
          if (one.type === 'asset/resource') {
            one.generator = {
              filename: 'assets/[name].[contenthash:8][ext]',
            };
          }
        });
      }
    });
  }
  return config;
};
