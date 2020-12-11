// https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
    '@fullhuman/postcss-purgecss': {
      content: [
        './stories/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
        './public/index.html',
        './.storybook/**/*.{js,ts,jsx,tsx}',
      ],
    },
  },
};
