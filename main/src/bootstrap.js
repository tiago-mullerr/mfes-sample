import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createBrowserHistory } from 'history'

const mount = (el) => {
    const history = createBrowserHistory()

    ReactDOM.render(
        <App history={history} />,
        el
    )
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#root')
    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }