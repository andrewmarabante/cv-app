import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/Form.jsx'
import Top from './components/Top.jsx'
import Bot from './components/Bot.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Top />
    <Form />
    <Bot />
  </React.StrictMode>,
)
