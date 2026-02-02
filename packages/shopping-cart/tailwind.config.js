const preset = require('../shared/tailwind/preset');

module.exports = {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../shared/src/**/*.{js,ts,jsx,tsx}'],
};
