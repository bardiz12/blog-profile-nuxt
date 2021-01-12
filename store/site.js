const isDark = localStorage.getItem('is_dark') === null
    ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
    : JSON.parse(localStorage.getItem('is_dark'))

export const state = () => ({
    isDark
})

export const mutations = {
    toggle(state) {
        state.isDark = !state.isDark;
        localStorage.setItem('is_dark', state.isDark);
    },
    changeThemeSetting(state, {isDark}){
        state.isDark = isDark
        localStorage.setItem('is_dark', state.isDark)
    }
}