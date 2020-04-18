import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Tomato', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Quorn Patty', type: 'meat' },
]

const buildControls = props => {
    return (
        <React.Fragment>
            <div className={classes.BuildControls}>
                {controls.map(item => (
                    <BuildControl
                    key={item.label}
                    label={item.label}
                    added={() => props.ingredientAdded(item.type)}
                    removed={() => props.ingredientRemoved(item.type)}
                    disabled={props.disabled[item.type]} />
                ))}
                <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>Checkout</button>
            </div>

        </React.Fragment>
    )
}

export default buildControls