
export type CardType = {
    id: string
    description: string
    title: string
    price: number
    image: string
}

export type CardStateType = {
    newCard: Array<CardType>
    counter: number
}

const InitialStateForCard: CardStateType = {
    newCard: [],
    counter: 0,
}

export const cartReducer = (state: CardStateType= InitialStateForCard, action: any):any => {
    switch (action.type) {
        case "ADD-ITEM-TO-CART":
            return {
                ...state,
                newCard: action.data

            }
        case "DELETE-ITEM-FROM-CART":
            return {
                ...state,
                newCard: state.newCard.filter(item => item.id !== action.id)

            }
    }
}