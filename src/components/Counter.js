// class componet
import { Component } from "react";

class Counter extends Component {
    // state
    constructor() {
        super()
        this.state = {
            counter: 0,
        }
        this.incrementEventBinding = this.incrementEventBinding.bind(this)
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    incrementEventBinding = () => {
        console.log(this)
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    render() {
        return (
            <>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={() => this.increment()}>Increment</button>
                <br/>
                <button onClick={this.incrementEventBinding}>Increment Event Binding</button>
            </>
        )
    }
}

export default Counter