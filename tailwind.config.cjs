
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}', './content/**/*.json'],
  theme: { extend: { colors: { brand: { DEFAULT: 'hsl(var(--brand))', fg: 'hsl(var(--brand-fg))' } } } },
  plugins: [require('@tailwindcss/typography')],
}
