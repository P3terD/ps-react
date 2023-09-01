import React from "react";
import style from './Navbar.module.css'

export default function navItems(props) {
    if (props.children) {
        return(
            <li className={style.nav_item}>
                <button onClick={props.action} className={style.icon_button}>
                    {props.icon}
                </button>
                <div className={style.drop_div}>
                    {props.children}
                </div>
            </li>
        )
    } else {
        return (
            <li className={style.nav_item}>
                <button onClick={props.action} className={style.icon_button}>
                    {props.icon}
                </button>
            </li>
        )
    }
}