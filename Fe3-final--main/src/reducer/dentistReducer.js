import { types } from "../components/types/types";

const dentistReducer = (state, action) => {
    switch (action.type) {
        case types.GET_DENTIST:
            return {
                ...state,
                user: action.payload,
                loadingUser: false,
                error: null
            }
        case types.GET_DENTIST_ID:
            return {
                ...state,
                user: action.payload,
            }
        case types.ERROR_DENTIST:
            return {
                ...state,
                user: [],
                loadingUser: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default dentistReducer