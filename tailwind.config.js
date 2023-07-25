// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        // Add custom colors or override existing ones
        primary: '#007BFF',
        secondary: '#6C757D',
        success: '#28A745',
        error: '#DC3545'
      },
      fontFamily: {
        // Add custom fonts or override existing ones
        sans: ['Roboto', 'Arial', 'sans-serif']
      },
      fontSize: {
        // Customize font sizes for headings and paragraphs
        '4xl': '2.5rem',
        '5xl': '3rem'
      },
      spacing: {
        // Customize spacing for margins, paddings, etc.
        '1/2': '0.125rem',
        2.5: '0.625rem'
      },
      borderRadius: {
        // Customize border radius for elements
        xl: '1rem'
      },
      boxShadow: {
        // Customize box shadows for elements
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
