module.exports = {
    darkMode: 'class',
    purge: {
        //enable remove unused CSS only in production
        enabled: process.env.NODE_ENV === 'production',
        //any file that may contain the reference of CSS styles by class name.
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js'
        ]
    },
    theme: {
        darkSelector: ".dark",
        extend: {
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.500'),
                            },
                        },

                        h1: {
                            color: theme('colors.gray.300'),
                        },
                        h2: {
                            color: theme('colors.gray.300'),
                        },
                        h3: {
                            color: theme('colors.gray.300'),
                        },
                        h4: {
                            color: theme('colors.gray.300'),
                        },
                        h5: {
                            color: theme('colors.gray.300'),
                        },
                        h6: {
                            color: theme('colors.gray.300'),
                        },

                        strong: {
                            color: theme('colors.gray.300'),
                        },

                        code: {
                            color: theme('colors.gray.300'),
                        },

                        figcaption: {
                            color: theme('colors.gray.500'),
                        },
                    },
                },
            }),
        }
    },
    variants: {
        backgroundColor: [
            "dark",
            "dark-hover",
            "dark-group-hover",
            "dark-even",
            "dark-odd",
            "hover"
        ],
        borderColor: ["dark", "dark-focus", "dark-focus-within", "hover"],
        textColor: ["dark", "dark-hover", "dark-active", "hover"],
        animate: ["dark", "hover"],
        typography: ["responsive", "dark"]
    },
    plugins: [require("tailwindcss-dark-mode")(), require("@tailwindcss/typography")({
        modifiers: [],
    })]
}