import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./main";
import s from "./Header.module.css"

function Header() {
    return (
        <div >
            <div className={s.header}>
                <NavLink to={PATH.HOME}
                         className={({isActive}) => isActive ? s.active : s.link}>HOME</NavLink>

                <NavLink to={PATH.PROFILE}
                         className={({isActive}) => isActive ? s.active : s.link}>Profile</NavLink>

                <NavLink to={PATH.SHOP}
                         className={({isActive}) => isActive ? s.active : s.link}>Shop</NavLink>

                <NavLink to={PATH.CART}
                         className={({isActive}) => isActive ? s.active : s.link}>Cart</NavLink>

                <div className={s.block}/>
            </div>
        </div>
    )
}

export default Header