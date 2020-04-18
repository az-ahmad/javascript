import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients).map(singleIngredient => {
        return [...Array(props.ingredients[singleIngredient])].map((_, i) => {
           return <BurgerIngredient key={singleIngredient + i} type ={singleIngredient} />
        })
    }).reduce((arr,el) => {
        return arr.concat(el)
    }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients to your burger!</p>
    }
    return (
        <React.Fragment>
            <div className={classes.Burger}>
                <BurgerIngredient type='bread-top'/>
                {transformedIngredients}
                <BurgerIngredient type='bread-bottom'/>
            </div>
        </React.Fragment>
    )
}

export default burger;