import "./InputBox.css";
function InputBox(props){

    return(
        <div>
            <input type="text" id="input" autocomplete="off" className="form__input" placeholder={props.placeholder} onChange={props.onChange} style={props.style}></input>
        </div>
        
    );
}
export default InputBox;