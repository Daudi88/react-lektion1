import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export const NavigationDesktop = () => {
    const history = useHistory()
    return (
        <nav>
            <Link to="/"> Home </Link>
            <Link to="/signin"> Sign in </Link>
            
            <button onClick={() => history.push("/")}> Home </button>
            <button onClick={() => history.push("/signin")}> Sign in </button>
        </nav>
    )
}
