import React from 'react'
import { StyledButton, StyledImage, StyledText, StyledView } from '../ReactCoreStyled/ReactCore'
import { IMG_product1 } from '../../assets'


const CardProduct = ({ title, style }) => {
    return (
        <StyledButton className={`w-11 h-14 ${style}`}>
            <StyledView className='w-full mb-0.375'>
                <StyledImage source={IMG_product1} className={`w-full`} />
            </StyledView>
            <StyledText className='text-sm font-normal text-black'>{title}</StyledText>
            <StyledText className='text-sm font-normal text-accent'>$ 20,00</StyledText>
        </StyledButton>
    )
}

export default CardProduct