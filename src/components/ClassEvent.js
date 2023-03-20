import { Component } from "react";

class ClassEvent extends Component {
    handleClick() {
        alert('class based event handling')
    }
    render() {
        return (
        <>
            <hr/>
            <div>This is class component</div>
            <button onClick={this.handleClick}>Click</button>
        </>
        )
    }
}

export default ClassEvent