import React from 'react'

function alert(props) {
    const capitalise = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{height: '50px'}}>
       { props.Alert && <div className={`alert alert-${props.Alert.Type} alert-dismissible fade show`} role="alert">
            <strong>{capitalise(props.Alert.Type)}</strong>:{props.Alert.Message}

        </div>}
        </div>
    )
}

export default alert
