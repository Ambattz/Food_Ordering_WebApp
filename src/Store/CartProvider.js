import React, { useReducer } from "react";
import CartContext from './CartContext';

const defaultCartState = {
    items: [],
    totalamount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalamount + action.item.price * action.item.amount;

        const existingIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingcartItem = state.items[existingIndex];
        let updatedItems;
        if (existingcartItem) {
            let updateditem;
            updateditem = {
                ...existingcartItem,
                amount: existingcartItem.amount + action.item.amount
            }
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updateditem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalamount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingcartItem = state.items[existingIndex];
        const updatedTotalAmount = state.totalamount - existingcartItem.price;
        let updatedItems;
        if (existingcartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingcartItem, amount: existingcartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalamount: updatedTotalAmount
        };

    }
    return defaultCartState
};

const CartProvider = (props) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = item => {
        dispatchCart({ type: 'ADD', item: item });
    };

    const removeItemHandler = id => {
        dispatchCart({ type: 'REMOVE', id: id });

    };

    const cartContext = {
        items: cartState.items,
        totalamount: cartState.totalamount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;