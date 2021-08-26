import React from 'react'
// import style from './ErrorButton.css'
import style from './ErrorButton.module.css'

export const ErrorButton = () => {
    return (
        <div>
            {/* <button className="error"> Error </button> */}
            <button className={style.error}> Error </button>
        </div>
    )
}
