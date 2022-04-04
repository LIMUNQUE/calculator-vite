import { useState } from 'react'
import './App.css'
import React from 'react'
import { Buttons } from './Buttons';
import { Display } from './Display';
function App() {

  function onPressed(){
    console.log('pressed')
  }
  return (        
      <div className="BoxOperation">
        <div><Display className="Screen"/></div>
        <div>
          <Buttons
            onPressed={()=>{onPressed()}}
          />
            

        </div>
      </div>
  )
}

export default App
