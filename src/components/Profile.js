function Profile(props) {

    // destructing props
    const {name} = props

    return (
        <>
            <h1>Name: {name}</h1>
            {props.children}
        </>
    )
}

export default Profile