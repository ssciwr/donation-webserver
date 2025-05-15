import colors from 'tailwindcss/colors'

const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.stone,
        secondary: colors.blue,
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'selector',
};
module.exports = config;