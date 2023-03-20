function FunctionEvent() {
    // function handleClick() {
    //     alert(1)
    // }
    const handleClick = () => {
        alert(1)
    }
    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default FunctionEvent