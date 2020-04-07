import React from 'react'
import Char from './Char.css'

const ShowLetter = ({ sentText }) => {
        const letterList = [...sentText].map((letter, index) =>{
            return (
                <div className='Char'>
                    {letter}
                </div>
            )
        })
    // const lettersList = sentText.map(letter =>{
    //     return (
    //         <div className='Char'>
    //             {letter}
    //         </div>
    //     )
    // })
    return (
        <div>
            {letterList}
        </div>
    )
}

export default ShowLetter;