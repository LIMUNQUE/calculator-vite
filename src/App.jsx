import { useState } from 'react'
import './App.css'
import React from 'react'
import { Buttons } from './Buttons';
import { Display } from './Display';
function App() {
  let showNum='';
  let firsTime=true;
  function onPressedNum(number){
    if(firsTime || isNaN(number)){
      firsTime=true;
    }
    else if(!isNaN(number)){
      onReset();
    }
    showNum=showNum+number;
    document.getElementById('data').value=showNum;
  }
  function onReset(){
    showNum='';
    document.getElementById('data').value=showNum;
    console.log('reset');
    firsTime=true;
  }
  function onEqual(){
    showNum=eval(showNum);
    document.getElementById('data').value=showNum;
    console.log('equal');
    firsTime=false;

  }
  function onInvert(){
    showNum=showNum*-1;
    document.getElementById('data').value=showNum;
    console.log('invert');
  }

  return (        
      <div className="BoxOperation">
        <Display 
          id='data'
        />
        
        <div><Buttons
            onPressed={(number)=>{onPressedNum(number)}}
            onReset={()=>{onReset()}}
            onEqual={()=>{onEqual()}}
            onInvert={()=>{onInvert()}}
          />
        </div>
      </div>

      
  )
}

export default App
