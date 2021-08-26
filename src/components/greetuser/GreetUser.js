import React from 'react'
// import style from './GreetUser.css'
import style from './GreetUser.module.css'

export const GreetUser = (props) => {
    const showAlert = () => {
        alert("You have clicked me!")
    }

    return(
        <div className="greetuser">
            <h1 className="user__header" onClick = {() => showAlert()}>
                Welcome to my page, {props.name}!
            </h1>
            <p className={style.error}>I am {props.age} years old. </p>
            {/* <p className="error">I am {props.age} years old. </p> */}
        </div>
    )
}