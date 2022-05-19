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
                <NavLink to={PATH.ADMIN}
                         className={({isActive}) => isActive ? s.active : s.link}>Admin</NavLink>
                <NavLink to={PATH.CLIENT}
                         className={({isActive}) => isActive ? s.active : s.link}>Client</NavLink>
                <NavLink to={PATH.PROFILE}
                         className={({isActive}) => isActive ? s.active : s.link}>Profile</NavLink>
                <div className={s.block}/>
            </div>
        </div>
    )
}

export default Header