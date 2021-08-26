import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomeView } from '../views/homeview/HomeView'
import { SignInView } from '../views/signinview/SignInView'

export const Routes = ({children}) => {
    return (
        <BrowserRouter basename="/react-lektion1">
            {children}
            <Switch>
                <Route exact path={'/signin'} component={SignInView} />
                <Route path={'/'} component={HomeView} />
            </Switch>
        </BrowserRouter>
    )
}