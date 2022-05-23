import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from "../home/home";
import {Admin} from "../admin/admin";
import {Client} from "../user/client/client";
import {Profile} from "../user/profile/profile";
import {WithAuthRedirect} from "../hok/withAuthRedirect";
import {Switcher} from "../switcer/Switcher";
import {ShoppingCart} from "../user/client/shoppingCart/ShoppingCart";


export const PATH = {
    HOME: '/home',
    ADMIN: '/admin',
    CLIENT: '/client',
    PROFILE: '/profile',
    SHOP: '/shop',
    CART: '/cart'
}

function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.ADMIN} element={<Admin/>}/>
                <Route path={PATH.CLIENT} element={<Client/>}/>
                <Route path={PATH.SHOP} element={<Switcher/>}/>
                <Route path={PATH.CART} element={<ShoppingCart/>}/>
                {/* <Route path={PATH.PROFILE} element={<Profile/>}/>*/}
                <Route path={PATH.PROFILE} element={
                    <WithAuthRedirect>
                        <Profile/>
                    </WithAuthRedirect>
                }/>


            </Routes>
        </div>
    )
}

export default AppRoutes