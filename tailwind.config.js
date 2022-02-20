const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: {
                min: '375px',
                max: '599px'
            },
            md: '600px'
        },
        extend: {
            colors: {
                'primary-blue': 'hsl(193, 38%, 86%)',
                'primary-green': 'hsl(150, 100%, 66%)',
                'neutral-blue': '#313A49',
                'neutral-dark-blue': '#202632',
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.5rem'
            }
        }
    },
    plugins: [
        plugin(({ addComponents }) => {
            addComponents({
                '.container': {
                    '@screen sm': {
                        maxWidth: '100%'
                    }
                }
            });
        })
    ],
};