import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addOneItemToCartAC, removeOneItemAC, removeProductFromCart} from "./cartActions";
import {AppStateType} from "../../../../store/store";
import {CardStateType} from "./cartReducers";
import c from './cart.module.css'
import s from '../../../admin/admin.module.css'
import b from '../../../admin/button.module.css'


export const ShoppingCart = () => {
    const productForCard = useSelector<AppStateType, CardStateType>(state => state.cartStore)
    const dispatch = useDispatch()

    const removeOneItem = (id: string, counter: number) => {
        dispatch(removeOneItemAC(id, counter))
    }

    const addOneItemToCart = (id: string, counter: number) => {
        dispatch(addOneItemToCartAC(id, counter))
    }

    const ClearCart = (id: string) => {
        dispatch(removeProductFromCart(id))
    }

    return (
        <>
            {productForCard.newCard.length === 0
                ? <div>Корзина пуста</div>
                : <>{productForCard.newCard.map(pr => (
                    <div key={pr.id} className={s.prod}>
                        <span> {pr.title} </span>
                        <img width={'200px'} alt={'logo'} src={pr.image}/>
                        <ul>{pr.description}</ul>
                        <ul>Price: {pr.price}</ul>
                        <div className={c.add}>
                            <button onClick={() => removeOneItem(pr.id, -1)}>remove</button>
                            <ul>Count: {pr.counter}</ul>
                            <button onClick={() => addOneItemToCart(pr.id, 1)}>add</button>
                        </div>
                        <button className={b.btn} onClick={() => ClearCart(pr.id)}>Delete from cart</button>
                    </div>
                ))}</>
            }
        </>
    )
}