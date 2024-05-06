import React from 'react'
import CartItem from './CartItem';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
    const dispatch = useDispatch();
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

        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='btn clear-btn' onClick={() => { dispatch(clearCart()) }} >
                    clear cart
                </button>
            </footer>
        </section>


    )
}

export default CartContainer