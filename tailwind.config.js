module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  './node_modules/tw-elements/dist/js/**/*.{js,jsx,ts,tsx}'
],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
};
