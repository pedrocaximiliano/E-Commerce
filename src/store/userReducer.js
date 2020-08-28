
const INITIAL_STATE = []

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USER':
            return [...state, action.user];
        case 'LOGOUT':
            return state.filter(x => x.name !== action.name);
        default:
            return state;
    }
}

export const user = (user) => {
    return {
        type: 'USER',
        user,
    }
}
export const userLogout = (user, name) => {
    return {
        type: 'LOGOUT',
        user,
        name
    }
}