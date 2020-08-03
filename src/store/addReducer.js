

const INITIAL_STATE = []

export default function AddShoppingProductsReducer(state = INITIAL_STATE, action, index) {
    switch (action.type) {
        case 'ADD_SHOPPING_PRODUCT':
            return [...state, action.product]
        default:
            return state;
    }
}

export const addShoppingProduct = (product, index) => {
    return {
        type: 'ADD_SHOPPING_PRODUCT',
        product,
        index
    }
}
