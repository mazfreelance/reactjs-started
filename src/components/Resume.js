import { Component } from "react";

class Resume extends Component {
    render() {
        // destructing props
        const {name} = this.props
        
        return (
            <>
            <h2>Class component {name}</h2>
            </>
        )
    }
}

export default Resume