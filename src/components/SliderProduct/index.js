import React from 'react'
import { Heading4, StyledImage, StyledView, TextBodySmall } from '../ReactCoreStyled/ReactCore'
import { IMG_slder_product } from '../../assets'
import { AppButton } from '../../components'

const SliderProduct = ({ className }) => {
    return (
        <StyledView className={`relative w-full h-full ${className}`}>
            <StyledImage source={IMG_slder_product} className='w-full h-full rounded-lg' />
            <StyledView className='absolute  bottom-4 left-2 '>
                <Heading4 className='text-white'>Gold big hoops</Heading4>
                <TextBodySmall className='text-white'>$ 68,00</TextBodySmall>
                <AppButton ClassContent={'font-normal text-xs text-white m-auto'} className='w-6 h-2 border border-white rounded-md mt-1'>View Product</AppButton>
            </StyledView>
        </StyledView>
    )
}

export default SliderProduct