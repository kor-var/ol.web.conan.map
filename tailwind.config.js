/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ol-themePrimary": "#6813FF",
        "ol-themeLighterAlt": "#f9f6ff",
        "ol-themeLighter": "#e7d9ff",
        "ol-themeLight": "#d2b8ff",
        "ol-themeTertiary": "#a571ff",
        "ol-themeSecondary": "#7b2eff",
        "ol-themeDarkAlt": "#5e10e6",
        "ol-themeDark": "#500ec2",
        "ol-themeDarker": "#3b0a8f",
        "ol-neutralLighterAlt": "#1e2021",
        "ol-neutralLighter": "#27282a",
        "ol-neutralLight": "#353739",
        "ol-neutralQuaternaryAlt": "#3d4042",
        "ol-neutralQuaternary": "#444749",
        "ol-neutralTertiaryAlt": "#636568",
        "ol-neutralTertiary": "#c8c8c8",
        "ol-neutralSecondary": "#d0d0d0",
        "ol-neutralPrimaryAlt": "#dadada",
        "ol-neutralPrimary": "#fff",
        "ol-neutralDark": "#f4f4f4",
        "ol-black": "#f8f8f8",
        "ol-white": "#161718"
      }
    },
  },
  plugins: [],
}

