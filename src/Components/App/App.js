import React from "react"

// Not actually being used, just adding it in for mockup purposes.
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom"

import Page from "../Page/Page"

import "./App.scss"
import logo from "./logdnalogo.png"

export default function App() {
    return (
        <>
            <Router>
                <div className = "body">
                    <nav className = "sideNav">
                        <span className = "logo">
                            <img src = {logo} alt = "logDNA logo" />
                        </span>
                        <span className = "log active"></span>
                        <span className = "log"></span>
                        <span className = "log"></span>
                        <span className = "log"></span>
                        <span className = "log"></span>
                    </nav>
                    <Switch>
                        <Route path = "/:id" component = { Page } />
                        <Route path = "/" component = { Page } />
                    </Switch>
                </div>
            </Router>
        </>
    )
}
