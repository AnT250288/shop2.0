import {Navigate} from "react-router-dom";
import {PATH} from "../mainDirectory/main";

export const WithAuthRedirect = ({children}: any) => {
    const isAuth = true

    if (!isAuth) {
        return <Navigate to={PATH.HOME}/>
    }

    return children
}