// class componet
import { Component } from "react";

class Counter extends Component {
    // state
    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    render() {
        return (
            <>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={() => this.increment()}>Increment</button>
            </>
        )
    }
}

export default Counter