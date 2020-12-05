// https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
          'autoprefixer',
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
              features: {
                'custom-properties': false,
              },
            },
          ],
        ]
      : [
          tailwindcss(),
          // require('autoprefixer'),
          require('@fullhuman/postcss-purgecss')({
            content: [
              './stories/**/*.{js,ts,jsx,tsx}',
              './components/**/*.{js,ts,jsx,tsx}',
              './pages/**/*.{js,ts,jsx,tsx}',
              './src/**/*.{js,ts,jsx,tsx}',
              './public/index.html',
              './.storybook/**/*.{js,ts,jsx,tsx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }),
        ],
};
