import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);
    const context = useContext(CartContext);
    const { items } = context;
    const numberOfCartItems = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${
        btnIsHightLighted ? classes.bump : ''
    }`;
    useEffect(() => {
        if (items.lenght === 0) return;
        setBtnIsHightLighted(true);
        const timer = setTimeout(() => {
            setBtnIsHightLighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
