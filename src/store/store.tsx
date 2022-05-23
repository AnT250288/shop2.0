import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "../shop/user/profile/profileReducer";
import {adminReducer} from "../shop/admin/admin_reducers";
import {createNewUserType, setUserErrorType, setUserType} from "../shop/user/profile/profileActions";
import {
    changeTitleACType, createNewProductType,
    removeProductACType,
    searchProductACType,
    setErrorType,
    setIsLoadingType,
    setProductsType
} from "../shop/actions/shop-actions";
import {
    addOneItemToCartType,
    addProductToCartType, removeOneItemACType,
    removeProductFromCartType
} from "../shop/user/client/shoppingCart/cartActions";
import {cartReducer} from "../shop/user/client/shoppingCart/cartReducers";

export type ActionsType =
    setUserType
    | setUserErrorType
    | setProductsType
    | removeProductACType
    | changeTitleACType
    | searchProductACType
    | setIsLoadingType
    | setErrorType
    | createNewProductType
    | createNewUserType
    | addProductToCartType
    | removeProductFromCartType
    | addOneItemToCartType
    | removeOneItemACType

export const rootReducer = combineReducers({
    adminStore: adminReducer,
    userStore: userReducer,
    cartStore: cartReducer
})
export type AppStateType = ReturnType<typeof rootReducer>

class AppStoreType {
}

export const store: Store & AppStoreType = createStore(rootReducer, applyMiddleware(thunk))