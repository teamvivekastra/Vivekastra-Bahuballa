// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         richblack: "#050A30",      // Primary background
//         neonblue: "#00FFFF",       // Accent 1
//         magenta: "#FF00FF",        // Accent 2
//         electricpurple: "#7A00FF", // Highlight
//         metricwhite: "#F5F5F5",    // Text color
//       },
//       fontFamily: {
//         orbitron: ["Orbitron", "sans-serif"], // Futuristic font (optional)
//       },
//       boxShadow: {
//         neon: "0 0 25px #00FFFF, 0 0 50px #7A00FF",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Color Palette - More Professional Names
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Your existing colors with better organization
        richblack: {
          DEFAULT: "#050A30",
          50: "#0f1a5e",
          100: "#0a1452",
          200: "#080f46",
          300: "#060b3a",
          400: "#050A30",
          500: "#040924",
          600: "#030818",
          700: "#02060c",
          800: "#010408",
          900: "#000204",
        },
        accent: {
          neonblue: "#00FFFF",
          magenta: "#FF00FF", 
          electricpurple: "#7A00FF",
          cyberlime: "#00FF00", // Added for balance
          amber: "#FF6B00",     // Added for warnings/important data
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#E5E5E5", 
          muted: "#A3A3A3",
        }
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        poppins: ["Poppins", "sans-serif"], // More readable for body text
        inter: ["Inter", "sans-serif"],     // Professional alternative
      },
      boxShadow: {
        // Enhanced shadow system
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 25px rgba(0, 255, 255, 0.6), 0 0 50px rgba(122, 0, 255, 0.4)',
        'neon-sm': '0 0 10px rgba(0, 255, 255, 0.4), 0 0 20px rgba(122, 0, 255, 0.3)',
        'neon-lg': '0 0 40px rgba(0, 255, 255, 0.8), 0 0 80px rgba(122, 0, 255, 0.6)',
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        // Professional animations
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #050A30 0%, #7A00FF 50%, #050A30 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00FFFF 0%, #FF00FF 50%, #7A00FF 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
