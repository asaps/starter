/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Process layouts from starter module
    './layouts/**/*.html',
    
    // Process layouts from other modules (when imported)
    '../../**/layouts/**/*.html',
    
    // Process content files
    '../../**/content/**/*.md',
    
    // Process JS files that might contain Tailwind classes
    './assets/js/**/*.js'
  ],
  theme: {
    extend: {
      // Aesthetic Society custom colors
      colors: {
        'aesthetic-blue': '#1a365d',
        'aesthetic-gold': '#c9b037',
        // Add other brand colors as needed
      },
      // Custom font settings
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'ui-serif', 'serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}