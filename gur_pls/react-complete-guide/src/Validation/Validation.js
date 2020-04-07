import React from 'react'

const Validation = props => {
    return (
        <div>
            {props.sentText > 5 ? 'Text long enough' : 'Text too short'}
        </div>
    )
}

export default Validation;