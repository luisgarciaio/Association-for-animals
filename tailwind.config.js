/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans],
        'work': ['work-sans', ...defaultTheme.fontFamily.sans],
      },
      transitionProperty: {
        'height': 'height'
    },
    animation:{
      
        'slide-out': 'slide-out 0.5s ease-out',
      
    },
    keyframes:{
      'slide-out': {
        '0%': {
          transform: 'opacity: 0',
          transform: 'scale(0)'
        },
        '100%': {
          transform: 'opacity: 1',
          transform: 'scale(1)'
        }
      }
    }

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#806065",
        "secondary": "#f8edef",
        "accent": "#d59b6c",
        "neutral": "#836b5d",
        "base-100": "#f2f2f2",
        "info": "#42aebd",
        "success": "#489380",
        "warning": "#eb8014",
        "error": "#e01a2e",
      },
    },
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: false, // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

}