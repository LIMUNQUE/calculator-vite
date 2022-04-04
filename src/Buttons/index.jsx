import './Buttons.css';
import React from 'react';

function Buttons(props){
    return(
        <div className="gridContainer">
                <div><button type='button' className='btn1 btnC' value='C' onClick={'reset()'}>C</button></div>
                <div><button type='button' className='btn1' value={'%'}>%</button></div>
                <div><button type='button' className='btn1' value={'+/-'}>+/-</button></div>
                <div><button type='button' className='btn1' value={'/'}>/</button></div>
                <div><button type='button' className='btn2' value={'7'}>7</button></div>
                <div><button type='button' className='btn2' value={'8'}>8</button></div>
                <div><button type='button' className='btn2' value={'9'}>9</button></div>
                <div><button type='button' className='btn1' value={'*'}>*</button></div>
                <div><button type='button' className='btn2' value={'4'}>4</button></div>
                <div><button type='button' className='btn2' value={'5'}>5</button></div>
                <div><button type='button' className='btn2' value={'6'}>6</button></div>
                <div><button type='button' className='btn1' value={'-'}>-</button></div>
                <div><button type='button' className='btn2' value={'3'}>3</button></div>
                <div><button type='button' className='btn2' value={'2'}>2</button></div>
                <div><button type='button' className='btn2' value={'1'}>1</button></div>
                <div><button type='button' className='btn1' value={'+'}>+</button></div>
                <div><button type='button' className='btn1' value={'.'}>.</button></div>
                <div><button type='button' className='btn2' value={'0'}>0</button></div>
                <div><button type='button' className='btn1' value={'<'}>{"<"}</button></div>
                <div><button type='button' className='btn1' value={'='}>=</button></div>
        </div>    
    )
}
export {Buttons};