import {getProducts} from "../services/shopApi.service";
import {ChangeEvent} from "react";
import {ShopStateType} from "../admin/admin_reducers";

export type setProductsType = {
    type: "SET-PRODUCTS"
    data: ShopStateType
}

export type removeProductACType = {
    type: "REMOVE-PRODUCT"
    id: string
}

export type changeTitleACType = {
    type: "CHANGE-PRODUCT-TITLE"
    id: string,
    title: string
}

export type searchProductACType = {
    type: "SEARCH-PRODUCT"
    title: string
    event: ChangeEvent<HTMLInputElement>
}

export type setIsLoadingType = {
    type: "IS-LOADING"
    isLoading: boolean
}

export type createNewProductType = {
    type: "CREATE-NEW-PRODUCT"
    state: ShopStateType
}

export type setErrorType = {
    type: "SET-ERROR-MESSAGE",
    error: string
}


export const setProducts = (data: ShopStateType) => {
    return {
        type: "SET-PRODUCTS",
        data
    }
}

export const removeProductAC = (id: string) => {
    return {
        type: "REMOVE-PRODUCT",
        id
    }
}

export const changeTitleAC = (id: string, newTitle: string) => {
    return {
        type: "CHANGE-PRODUCT-TITLE",
        id, title: newTitle
    }
}

export const searchProductAC = (event: ChangeEvent<HTMLInputElement>) => {
    return {
        type: "SEARCH-PRODUCT",
        event,
    }
}

export const setIsLoading = (isLoading: boolean) => {
    return {
        type: "IS-LOADING",
        isLoading
    }
}

export const setError = (error: string) => {
    return {
        type: "SET-ERROR-MESSAGE",
        error
    }
}

export const createNewProduct = (state: ShopStateType) => {
    return {
        type: "CREATE-NEW-PRODUCT",
        state
    }
}

export const getAllProducts = () => (dispatch: any) => {
    dispatch(setIsLoading(true))
    getProducts()
        .then((response) => response.json())
        .then((data) => {
            dispatch(setProducts(data))
            console.log(data)
        })
        .then(dispatch(setIsLoading(false)))
        .catch((err: any) => {
            dispatch(setError(err.statusText))
        })
}
