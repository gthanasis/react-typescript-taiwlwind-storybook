import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app'
import './index.scss'
import CONFIG from './config'

if (CONFIG.development) console.table(CONFIG)

ReactDOM.render(<App/>, document.getElementById('root'))
