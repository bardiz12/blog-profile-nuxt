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
        darkSelector: ".dark"
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
        borderColor: ["dark", "dark-focus", "dark-focus-within"],
        textColor: ["dark", "dark-hover", "dark-active"],
    },
    plugins: [require("tailwindcss-dark-mode")()]
}