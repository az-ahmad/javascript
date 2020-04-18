import React from 'react'
import classes from './BuildControl.module.css'

const buildControl = props => {
    return (
        <React.Fragment>
            <div className={classes.BuildControl}>
                <div className={classes.Label}>{props.label}</div>
                <button className={classes.Less} onClick={props.removed} disabled={props.disabled}><i className='material-icons center small'>remove_circle_outline</i></button>
                <button className={classes.More} onClick={props.added}><i className='material-icons center small'>add_circle_outline</i></button>
            </div>

        </React.Fragment>
    )
}

export default buildControl