import { types } from '../components/types/types'

const themeReducer = (state,action) => {
    switch (action.type) {
        case types.TOGGLE_THEME:
            return {
                ...state,
                darkMode: !state.darkMode 
            }
        default:
            return state;
    }
}

export default themeReducer