/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}', // Next.js 页面组件
    './components/**/*.{js,jsx,ts,tsx}', // React 组件
    './styles/**/*.{css,scss,sass}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
