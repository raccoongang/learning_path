module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  devServer: (devServerConfig) => {
    devServerConfig.writeToDisk = true;
    return devServerConfig;
  },
}
