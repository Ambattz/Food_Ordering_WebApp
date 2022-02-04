import { useContext, useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/CartContext';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartctx = useContext(CartContext);
    const { items } = cartctx;
    const numberofcartctx = cartctx.items.reduce(
        (curNumber, item) => {
            return curNumber + item.amount;
        }, 0);
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    return <button className={btnClasses} onClick={props.onClick}>
        <spam className={classes.icon}>
            <ShoppingCartIcon />
        </spam>
        <spam>
            {props.children}
        </spam>
        <spam className={classes.badge}>
            {numberofcartctx}
        </spam>
    </button>;
}

export default HeaderCartButton;
