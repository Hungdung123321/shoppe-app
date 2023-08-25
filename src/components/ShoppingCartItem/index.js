import React from 'react'
import { ButtonIcon, StyledButton, StyledImage, StyledView, TextBodySmall } from '../ReactCoreStyled/ReactCore'
import { IC_remove, IMG_product1 } from '../../assets'
import BoxQuantity from '../BoxQuantity'


const ShoppingCartItem = () => {

    return (
        <StyledButton className='relative w-full flex-row items-start'>
            <StyledView className='w-8.5 h-8.5'>
                <StyledImage className='w-full h-full' source={IMG_product1} />
            </StyledView>
            <StyledView className='relative flex-col ml-1 h-full'>
                <TextBodySmall className='text-black'>Lira Earrings</TextBodySmall>
                <TextBodySmall className='text-dark-gray'>Black / Medium</TextBodySmall>
                <TextBodySmall className='text-dark-gray'>$ 20,00</TextBodySmall>
                <BoxQuantity classBoxQuantity={'absolute left-0 bottom-0'} />
            </StyledView>
            <ButtonIcon path={IC_remove} classButtonIcon={'absolute right-0 top-0'} />
        </StyledButton>
    )
}

export default ShoppingCartItem