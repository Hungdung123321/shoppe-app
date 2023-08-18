import React from 'react'
import { StyledButton, StyledImage, StyledText, StyledView } from '../ReactCoreStyled/ReactCore'
import { IMG_product1 } from '../../assets'


const CardProduct = ({ title, style, ...props }) => {
    return (
        <StyledButton className={`w-11 border border-gray rounded-lg ${style}`} {...props}>
            <StyledView className='w-full h-12'>
                <StyledImage source={IMG_product1} className={`w-full h-full rounded-lg`} />
            </StyledView>
            <StyledText className='text-sm font-normal text-black'>{title}</StyledText>
            <StyledText className='text-sm font-normal text-accent'>$ 20,00</StyledText>
        </StyledButton>
    )
}

export default CardProduct