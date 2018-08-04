import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import mock from './tests/mocks'

ReactDOM.render(<App data={mock} />, document.getElementById('root'))
registerServiceWorker()
