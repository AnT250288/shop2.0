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

export const rootReducer = combineReducers({
    adminStore: adminReducer,
    userStore: userReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

class AppStoreType {
}

export const store: Store & AppStoreType = createStore(rootReducer, applyMiddleware(thunk))