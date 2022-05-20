import {CardStateType} from "./cartReducers";

export type addProductToCartType = {
    type: "ADD-ITEM-TO-CART"
    data: CardStateType
}

export type removeProductFromCartType = {
    type: "DELETE-ITEM-FROM-CART"
    data: CardStateType
}

export const addProductToCart = (data: CardStateType) => {
    return {
        type: "ADD-ITEM-TO-CART",
        data
    }
}

export const removeProductFromCart = (data: CardStateType, id: string) => {
    return {
        type: "DELETE-ITEM-FROM-CART",
        data, id
    }
}

