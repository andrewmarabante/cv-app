import React from 'react'
import ReactDOM from 'react-dom/client'
import Bot from './Components/PageRender.jsx'
import Top from './Components/Top.jsx'
import Form from './Components/Form.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Top />
    <Form />
  </React.StrictMode>,
)
