import React, { Fragment } from 'react';
import Meals from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>FoodFlix</h1>
            <HeaderCartButton onClick={props.onShowCart}>My Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={Meals} alt='Meals' />
        </div>
    </Fragment>;
}

export default Header;
