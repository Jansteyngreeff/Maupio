module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A2E4C", // Deep navy
          50: "#F0F4F8", // slate-50
          100: "#D9E2EC", // slate-100
          200: "#BCCCDC", // slate-200
          300: "#9FB3C8", // slate-300
          400: "#829AB1", // slate-400
          500: "#627D98", // slate-500
          600: "#486581", // slate-600
          700: "#334E68", // slate-700
          800: "#243B53", // slate-800
          900: "#1A2E4C", // slate-900
        },
        secondary: {
          DEFAULT: "#3366CC", // Royal blue
          50: "#EBF2FF", // blue-50
          100: "#D6E4FF", // blue-100
          200: "#B3CCFF", // blue-200
          300: "#80B3FF", // blue-300
          400: "#4D99FF", // blue-400
          500: "#3366CC", // blue-500
          600: "#2952A3", // blue-600
          700: "#1F3D7A", // blue-700
          800: "#152952", // blue-800
          900: "#0A1429", // blue-900
        },
        accent: {
          DEFAULT: "#D4AF37", // Gold
          50: "#FEFBF0", // yellow-50
          100: "#FDF6E0", // yellow-100
          200: "#FBEDC2", // yellow-200
          300: "#F8E19F", // yellow-300
          400: "#F4D57C", // yellow-400
          500: "#D4AF37", // yellow-500
          600: "#B8962E", // yellow-600
          700: "#9C7D25", // yellow-700
          800: "#80641C", // yellow-800
          900: "#644B13", // yellow-900
        },
        background: "#FAFBFC", // Soft off-white - gray-50
        surface: "#FFFFFF", // Pure white - white
        text: {
          primary: "#1F2937", // Near-black - gray-800
          secondary: "#6B7280", // Medium gray - gray-500
        },
        success: "#10B981", // Professional green - emerald-500
        warning: "#F59E0B", // Amber - amber-500
        error: "#EF4444", // Clear red - red-500
        border: {
          light: "#E5E7EB", // Light gray - gray-200
          medium: "#D1D5DB", // Medium gray - gray-300
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'scale-in': 'scaleIn 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}