import actionType from "./action-type";
import { CartAction, CartContextType } from "./model";

export default function Reducer(state: CartContextType, action: CartAction): CartContextType {
    const newState: any = { ...state };
    switch (action.type) {
        case actionType.SET_STATUS_FETCHING: {
            newState.statusFetching = action.payload;
            return newState;
        }
        case actionType.SET_DATA_CHANGE_FIELD: {
            if (Array.isArray(action.payload) && action.payload.length > 0) {
                action.payload.forEach(({ field, value }) => {
                    newState[field] = value
                })
            } else {
                const { field, value } = action.payload;
                newState[field] = value
            }
            return newState
        }
        case actionType.SET_CART_STORAGE: {
            const cartStorage = action.payload;
            newState.plan = cartStorage?.plan,
                newState.phone = cartStorage?.phone;
            return newState
        }
        default:
            return newState;
    }
}