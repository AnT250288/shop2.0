import {ActionsType} from "../../../../store/store";
import {ItemShopType} from "../../../admin/admin_reducers";

export type CardStateType = {
    newCard: Array<ItemShopType>
    counter: number
}

const InitialStateForCard: CardStateType = {
    newCard: [],
    counter: 0,
}

export const cartReducer = (state: CardStateType = InitialStateForCard, action: ActionsType) => {
    switch (action.type) {

        case "ADD-ITEM-TO-CART":
            console.log(state.newCard)
            let newProd = null;
            const itemIndex = state.newCard.findIndex(value => value.id === action.data.id);
            if (itemIndex < 0) {
                const newItem = {
                    ...action.data,
                    counter: action.counter
                };
                newProd = [...state.newCard, newItem];
            } else {
                const newItem = {
                    ...state.newCard[itemIndex],
                    counter: state.newCard[itemIndex].counter + action.counter
                };
                newProd = [...state.newCard];
                newProd.splice(itemIndex, 1, newItem);
            }
            return {
                ...state,
                newCard: newProd,
            }

        case "ADD-ONE-ITEM-TO-CART":
            const Index = state.newCard.findIndex(value => value.id === action.id);
            const newItem = {
                ...state.newCard[Index],
                counter: state.newCard[Index].counter + action.counter
            }
            let newProdAdded = [...state.newCard];
            newProdAdded.splice(Index, 1, newItem);
            return {
                ...state,
                newCard: newProdAdded
            }

        case "REMOVE-ONE-ITEM-TO-CART":
            const IndexVal = state.newCard.findIndex(value => value.id === action.id);
            const newItemForRemove = {
                ...state.newCard[IndexVal],
                counter: state.newCard[IndexVal].counter + action.counter
            }
            let newProdRemoved = [...state.newCard];
            newProdRemoved.splice(IndexVal, 1, newItemForRemove);
            if (state.newCard[IndexVal].counter === 0) {
                return {
                    ...state,
                    newCard: state.newCard.filter(item => item.id !== action.id)
                }
            } else {
                return {
                    ...state,
                    newCard: newProdRemoved
                }
            }

        case "DELETE-ITEM-FROM-CART":
            return {
                ...state,
                newCard: state.newCard.filter(item => item.id !== action.id)
            }

        default:
            return state
    }
}