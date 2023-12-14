import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Education from './Education.jsx'
import Experience from './Experience.jsx'
import Geninfo from './Geninfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Education />
    <Experience />
    <Geninfo />
  </React.StrictMode>,
)
