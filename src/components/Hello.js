const name = "James"

const displayMessage = () => {
    return "I need help!"
}

// functional component
function Hello() {
    return <h1>Hello world, {name}. The message is {displayMessage()}</h1>
}

// const Hello = () => <h1>Hello there</h1>

export default Hello;