import {ActionsType} from "../../store/store";

export type ItemShopType = {
    id: string
    description: string
    title: string
    price: number
    image: string
    counter: number
}

export type ShopStateType = {
    newShop: Array<ItemShopType>
    isLoading: boolean
    isAuth: boolean
    isVisible: boolean
}


const initialState: ShopStateType = {
    newShop: [],
    isLoading: false,
    isAuth: true,
    isVisible: true,
}

export const adminReducer = (state: ShopStateType = initialState, action: ActionsType) => {
    switch (action.type) {

        case "IS-LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }

        case "SET-PRODUCTS":
            return {
                ...state,
                newShop: action.data,
            }

        case "CREATE-NEW-PRODUCT":
            return {
                newShop: [...state.newShop, action.state]
            }

        case "REMOVE-PRODUCT":
            return {
                newShop:
                    state.newShop.filter(p => p.id !== action.id)
            }

        case "CHANGE-PRODUCT-TITLE":
            return {
                newShop: state.newShop
                    .map(pr => pr.id === action.id
                        ? {...pr, title: action.title}
                        : pr)
            }

        case "SEARCH-PRODUCT":
            const searchingElement = action.event.target.value
            const filteredProducts = state.newShop
                .filter((val) => {
                    return val.title.toLowerCase().includes(searchingElement.toLowerCase())
                })
            if (searchingElement === '') {
                return [...state.newShop]
            } else {
                return {newShop: filteredProducts}
            }

        default:
            return state
    }
}




