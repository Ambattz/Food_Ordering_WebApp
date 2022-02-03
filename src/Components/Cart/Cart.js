import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    return <Modal onClick={props.onHideCart}>
        <CartItem />
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>Total Amount</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>;
}

export default Cart;
