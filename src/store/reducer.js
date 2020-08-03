const INITIAL_STATE = [ ]
    

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_CAR':
            return [...state, action.car];
        default:
            return state;
    }
}

export const addShoppingProduct = car => {
    return {
        type: 'ADD_CAR',
        car
    }
}
