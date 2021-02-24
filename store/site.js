export const state = () => ({
    isDark: false
})

export const mutations = {
    toggle(state) {
        state.isDark = !state.isDark;
        if(process.client){
            localStorage.setItem('is_dark', state.isDark);
        }
    },
    changeThemeSetting(state, {isDark}){
        state.isDark = isDark
        if(process.client){
            localStorage.setItem('is_dark', state.isDark)
        }
    }
}