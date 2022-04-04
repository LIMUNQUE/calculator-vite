import './Buttons.css';
import React from 'react';

function Buttons(props){
    return(
        <div className="gridContainer">
                <button
                        type='button' 
                        className='btn1'  
                        onClick={()=>{props.onPressed('C')}}
                        >C
                </button>
                <button 
                        type='button' 
                        className='btn1'
                        onClick={()=>{props.onPressed('%')}}
                        >%
                </button>
                <button 
                    type='button' 
                    className='btn1' 
                    onClick={()=>{props.onPressed('+/-')}}
                    >+/-
                </button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('/')}}>/</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('7')}}>7</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('8')}}>8</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('9')}}>9</button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('*')}}>*</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('4')}}>4</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('5')}}>5</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('6')}}>6</button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('-')}}>-</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('3')}}>3</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('2')}}>2</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('1')}}>1</button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('+')}}>+</button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('.')}}>.</button>
                <button type='button' className='btn2' onClick={()=>{props.onPressed('0')}}>0</button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('<')}}>{"<"}</button>
                <button type='button' className='btn1' onClick={()=>{props.onPressed('=')}}>=</button>
        </div>    
    )
}
export {Buttons};