import React from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const CartContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    if (amount < 1) {
        return <section>
            <header className='cart'>
                <h2>
                    you cart
                </h2>
                <h4 className='empty-cart'>is currently empty</h4>
            </header>
        </section>
    }

    return (
        <div>cartContainer</div>
    )
}

export default CartContainer