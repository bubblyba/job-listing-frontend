import "./Error.css"

function Error(props){
    return(
        <div className="error">
            {props.message}
        </div>
    );
}
export default Error;