import CONFIG from '../config'

import React, { Component } from 'react'
import Loader from '../components/Loader/Loader'

import './app.styles.scss'

class App extends Component<any, any> {
    render() {
        return (
            <div className='flex items-center justify-center h-screen'>
                <Loader></Loader>
            </div>
        )
    }
}

export default App
