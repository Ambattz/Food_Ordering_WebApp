import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    return <button className={classes.button} onClick={props.onClick}>
        <spam className={classes.icon}>
            <ShoppingCartIcon />
        </spam>
        <spam>
            {props.children}
        </spam>
        <spam className={classes.badge}>
            3
        </spam>
    </button>;
}

export default HeaderCartButton;
