import { useState } from 'react'
import './App.css'
import React from 'react'
import { Buttons } from './Buttons';
import { Display } from './Display';
function App() {

  return (
    <React.Fragment>        
      <div className="BoxOperation">
        <div><Display className="Screen"/></div>
        <div><Buttons className="Keeyboard"/></div>
      </div>
    </React.Fragment>
  )
}

export default App
