module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "main-green": {
          "50": "#80ffde",
          "100": "#76fdd4",
          "200": "#6cf3ca",
          "300": "#62e9c0",
          "400": "#58dfb6",
          "500": "#4ed5ac",
          "600": "#44cba2",
          "700": "#3ac198",
          "800": "#30b78e",
          "900": "#26ad84",
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    
  ],
}
