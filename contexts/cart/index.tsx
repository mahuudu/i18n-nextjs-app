import eventNameEmitter from "@/constants/event-name-emitter";
import keyLocalstorage from "@/constants/key-localstorage"
import eventEmitter from "@/helper/eventEmitter";

import { Dispatch, createContext, useContext, useEffect, useReducer } from "react";
import actionType from "./action-type";
import { CartAction, CartContextProps, CartContextType } from "./model";
import Reducer from "./reducer";

export const CartContext = createContext<{
    state: CartContextType;
    dispatch: Dispatch<CartAction>;
    handleAddCart: any;
    getCountCart: any;
    isHasPlan: any;
} | undefined>(undefined);

export default function CartProviderPrepaid({ children }: CartContextProps) {
    const initialState: CartContextType = {
        plan: null,
        phone: null
    }
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleSetCartCache = (data: any) => {
        try {
            let newDataCacheCart: any = localStorage.getItem(keyLocalstorage.PrepaidCart) || {};
            if (newDataCacheCart && newDataCacheCart.length > 0) {
                newDataCacheCart = JSON.parse(newDataCacheCart) || {}
            }
            if (newDataCacheCart) {
                if (Array.isArray(data) && data.length > 0) {
                    data.forEach(({ field, value }) => {
                        newDataCacheCart[field] = value
                    })
                } else {
                    const { field, value } = data;
                    newDataCacheCart[field] = value
                }
            }
            localStorage.setItem(keyLocalstorage.PrepaidCart, JSON.stringify(newDataCacheCart))
        } catch (error) {
            console.warn('handle set cart cache error >>>', error)
        }
    }

    useEffect(() => {
        const cartCache = localStorage.getItem(keyLocalstorage.PrepaidCart);
        try {
            if (cartCache && cartCache.length > 0) {
                dispatch({
                    type: actionType.SET_CART_STORAGE,
                    payload: JSON.parse(cartCache)
                })
            }
        } catch (error) {

        }
    }, []);

    const handleAddCart = ({ infoCartAdd, actionText, elementTarget, isShowNoti = true }: any) => {
       try {
            dispatch({
                type: actionType.SET_DATA_CHANGE_FIELD,
                payload: infoCartAdd
            })
            handleSetCartCache(infoCartAdd);

            if (actionText && actionText.length > 0) {
                eventEmitter.dispatch(eventNameEmitter.Show_Notify, {
                    elementTarget,
                    isShowNoti
                })
            }
            
       } catch (error) {
            console.log('handleAddCart',error)
       }
    }

    const getCountCart = () => {
        let count = 0;
        if (state.plan) {
            count += 1;
        }
        if (state.phone) {
            count += 1;
        }
        return count
    }

    const isHasPlan = state && state.plan

    return (
        <CartContext.Provider
            value={{
                state,
                dispatch,
                handleAddCart,
                getCountCart,
                isHasPlan
            }}
        >
            {children}
        </CartContext.Provider>
    );
}


export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};

export const useCartState = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context.state;
}

export const useAddCartPrepaid = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useAddCartPrepaid must be used within a CartProvider');
    }
    return context.handleAddCart;
}