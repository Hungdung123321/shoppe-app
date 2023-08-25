import React from 'react'
import { SHOPPING_BAG_DATA } from '../../../../constants/common'
import { StyledView, TextBodyMedium } from '../../../ReactCoreStyled/ReactCore'
import { AppButton } from '../../../../components'


const FooterModalShoppingBag = () => {
    return (
        <StyledView className='w-full p-1 py-1.5'>
            <StyledView className='flex-row items-center justify-between mb-1'>
                <TextBodyMedium className='text-black'>{`Subtotal (${SHOPPING_BAG_DATA.length} items)`}</TextBodyMedium>
                <TextBodyMedium className='text-black'>{`$ 65,00`}</TextBodyMedium>
            </StyledView>
            <AppButton ClassContent={'text-black text-center'} className='border border-black bg-white py-0.5 rounded-lg'>View Cart</AppButton>
        </StyledView>
    )
}

export default FooterModalShoppingBag