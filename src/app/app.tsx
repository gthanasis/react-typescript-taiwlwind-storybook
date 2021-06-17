import CONFIG from '../config'

import React, { Component } from 'react'

import './app.styles.scss'

class App extends Component {
    private production = !CONFIG.development
    render (): React.ReactNode {
        return (
            <div className='flex items-center justify-center h-screen' data-testid="App"/>
        )
    }
}

export default App
