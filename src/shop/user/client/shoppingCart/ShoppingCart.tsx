import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import {CardStateType} from "./cartReducers";
import React, {useState} from "react";
import {addOneItemToCart, removeOneItemAC, removeProductFromCart} from "./cartActions";
import {ItemShopType} from "../../../admin/admin_reducers";


export const ShoppingCart = () => {
    const productForCard = useSelector<AppStateType, CardStateType>(state => state.cartStore)
    const dispatch = useDispatch()
    console.log(productForCard.newCard)

    const removeOneItem = (product: ItemShopType,counter: number) => {
        dispatch(removeOneItemAC(product, counter))
    }

    const ClearCart = (id: string) => {
        dispatch(removeProductFromCart(id))
    }

    console.log(productForCard.newCard)
    return (
        <>
            <div>Корзина пуста</div>
            {productForCard.newCard.map(pr => (
                <div key={pr.id}>
                    <span> {pr.title} </span>
                    <img width={'200px'} alt={'logo'} src={pr.image}/>
                    <ul>{pr.description}</ul>
                    <ul>{pr.price}</ul>
                    <button onClick={(e) => removeOneItem(pr,-1)}>remove</button>
                    <ul>Count: {pr.counter}</ul>
                    <button onClick={(e)=> addOneItemToCart(pr,1)}>add</button>
                    <button onClick={(e) => ClearCart(pr.id)}>Delete</button>
                </div>
            ))}
        </>

    )
}