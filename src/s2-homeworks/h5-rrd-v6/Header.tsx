import React from 'react'
import s from "../hw05/header/Header.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";

function Header() {
    return (
        <div className={s.header}>
           <NavLink to={PATH.PRE_JUNIOR} className={s.linc}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.linc}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.linc}>pre-junior</NavLink>
            <div className={s.block}/>


        </div>
    )
}

export default Header
