import React, { Component } from 'react'
import 'normalize.css'
import './App.css'

import Calendar from "./components/calendar/Calendar"
import Form from "./components/form/Form"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Show Calendar</h1>
                </header>
                <Form />
                <Calendar />
            </div>
        )
    }
}

export default App
