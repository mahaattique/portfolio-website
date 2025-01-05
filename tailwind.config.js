/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': 'var(--primary-light)',
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'accent': 'var(--accent)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
      },
      fontFamily: {
        sans: ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
        typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

