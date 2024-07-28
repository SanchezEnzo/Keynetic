/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-keys': 'repeat(auto-fill, minmax(100px, 1fr))',
        'auto-fill-actions': 'repeat(auto-fill, minmax(150px, 1fr))'
      }
    }
  },
  plugins: []
}
