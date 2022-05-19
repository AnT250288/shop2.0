import {ActionsType} from "../../../store/store";
import {v1} from "uuid";

export type UserType = {
    id: string
    name: string
    lastName: string
    card: string
}

export type ProfileStateType = {
    title: string;
    id: string
    newUser: Array<UserType>
    isAuth: boolean
}

const initialState: ProfileStateType = {
    id: v1(),
    newUser: [],
    isAuth: true,
    title: '',
}


export const userReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case "SET-USER":
            return {
                ...state,
                newUser: action.data
            }

        case "CREATE-NEW-USER":
            return {
                ...state,
                newUser: action.state
            }

        default:
            return state

    }
}