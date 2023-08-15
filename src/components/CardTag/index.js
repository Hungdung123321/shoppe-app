import React from 'react'
import { StyledButton, StyledText } from '../ReactCoreStyled/ReactCore'


const CardTag = ({ title, style }) => {
    return (
        <StyledButton className={`w-8.75 h-2.5  rounded-lg border-2 border-gray ${style}`} >
            <StyledText className='m-auto text-black'>{title}</StyledText>
        </StyledButton>
    )
}

export default CardTag