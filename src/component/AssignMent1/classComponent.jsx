import React, {Component} from "react"

class ClassComponent extends Component {
    render(){
        return(
            <>
            <div className="class">
            <h4>This is using class component</h4>
            <p className="externalCss">This is done using external CSS</p>
            <p style={{color: "#FFEDBC"}}>This is done using internal  CSS</p>
            </div>
            </>
        )
    }
}

export default ClassComponent

