
const INITIAL_STATE = []

export default function AddShoppingProductsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_SHOPPING_PRODUCT':
            return [...state, action.product];
        case 'UPDATE_SHOPPING_PRODUCT':
            return [...state, action.product.addCount];
        case 'DELETE_SHOPPING_PRODUCT':
            return state.filter(x => x.name !== action.name);
        default:
            return state;
    }
}

export const addShoppingProduct = (product, index) => {
    return {
        type: 'ADD_SHOPPING_PRODUCT',
        product,
    }
}

export const updateShoppingProduct = (product, index) => {
    return {
        type: 'UPDATE_SHOPPING_PRODUCT',
        product,
    }
}
export const DeleteShoppingProduct = (product, name) => {
    return {
        type: 'DELETE_SHOPPING_PRODUCT',
        product,
        name,
    }
}