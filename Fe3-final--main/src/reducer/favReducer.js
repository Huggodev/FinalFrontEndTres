import { types } from '../components/types/types'

const favReducer = (state, action) => {
    switch (action.type) {
        case types.SET_FAVORITE:
            return {
                ...state,
                fav: [...state.fav, action.payload]
            }
        case types.REMOVE_FAVORITE:
            return {
                ...state,
                fav: state.fav.filter((fav) => fav.id !== action.payload.id),
            }
        case types.REMOVE_ALL_FAVORITES:
            return {
                ...state,
                fav: [],
            }
        default:
            return state;
    }
}

export default favReducer