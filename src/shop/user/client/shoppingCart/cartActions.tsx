import {ItemShopType} from "../../../admin/admin_reducers";

export type addProductToCartType = {
    type: "ADD-ITEM-TO-CART"
    data: ItemShopType
    counter: number
}

export type removeProductFromCartType = {
    id: string;
    type: "DELETE-ITEM-FROM-CART"
}

export type addOneItemToCartType = {
    type: "ADD-ONE-ITEM-TO-CART"
    data: ItemShopType
    counter: number
}

export type removeOneItemACType = {
    type: "REMOVE-ONE-ITEM-TO-CART"
    data: ItemShopType
    counter: number
}

export const addProductToCart = (data: ItemShopType, counter: number) => {
    return {
        type: "ADD-ITEM-TO-CART",
        data, counter
    }
}

export const removeProductFromCart = (id: string) => {
    return {
        type: "DELETE-ITEM-FROM-CART",
        id
    }
}

export const removeOneItemAC = (data: ItemShopType, counter: number) => {
    return {
        type: "REMOVE-ONE-ITEM-TO-CART",
        data, counter
    }
}


export const addOneItemToCart = (data: ItemShopType, counter: number) => {
    return {
        type: "ADD-ONE-ITEM-TO-CART",
        data, counter
    }
}

