import "./Button.css"
function Button(props){
    return(
        <div>
            <button type="submit" id="input" className="button" onClick={props.onClick} >
                {props.text}
            </button>
        </div>
    );

}
export default Button;