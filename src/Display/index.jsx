import './Display.css';
function Display(props){
    return(
        <div>
            <input disabled="disabled" type="text" id={props.id} class="css-input" />
        </div>   
    )
}
export {Display};