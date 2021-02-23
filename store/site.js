const getIsDarkFromLocalStorage = () => {
    if(window === undefined){
        return false
    }

    return window.localStorage.getItem('is_dark') === null
        ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
        : JSON.parse(window.localStorage.getItem('is_dark'))
}
const isDark = getIsDarkFromLocalStorage()

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