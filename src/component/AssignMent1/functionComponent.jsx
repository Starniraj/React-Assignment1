import "./style.css"

const FunctionComponent = ()=> {
    return (
        <div className="class">
            <h4>This is using functional component</h4>
            <p className="externalCss">This is done using external CSS</p>
            <p style={{color: "#ED4264"}}>This is done using internal  CSS</p>
        </div>
    )
}

export default FunctionComponent