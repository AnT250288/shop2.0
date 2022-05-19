import {UserType} from "./profileReducer";

export type setUserType = {
    type: "SET-USER",
    data: Array<UserType>
}

export type setUserErrorType = {
    type: "SET-ERROR-MESSAGE"
    err: string
}

export type createNewUserType = {
    type: "CREATE-NEW-USER",
    state: Array<UserType>
}

export const setUser = (data: Array<UserType>): setUserType => {
    return {
        type: "SET-USER",
        data
    }
}

export const createNewUser = (state: Array<UserType>): createNewUserType => {
    return {
        type: "CREATE-NEW-USER",
        state
    }
}


/*
export const getAllUser = () => (dispatch: any) => {
    getUser()
        .then((response) => response.json())
        .then((data) => {
            dispatch(setUser(data.shift()))
        })
        .catch((err: string | null) => {
            dispatch(setUserError(err.statusText))
        })
}*/
