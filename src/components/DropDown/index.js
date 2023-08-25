import React from 'react'
import { StyledButton, StyledImage, TextBodySmall } from '../ReactCoreStyled/ReactCore'
import { IC_arrow_down } from '../../assets'


const DropDown = () => {
    return (
        <StyledButton className='py-0.625 flex-row items-center justify-between'>
            <TextBodySmall className='text-black'>Description</TextBodySmall>
            <StyledImage source={IC_arrow_down} />
        </StyledButton>
    )
}

export default DropDown