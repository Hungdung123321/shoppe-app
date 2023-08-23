import React from 'react'
import { StyledView, TextBodySmall } from '../ReactCoreStyled/ReactCore'
import AppButton from '../AppButton'
import { useState } from 'react'


const BoxQuantity = ({ classBoxQuantity }) => {

    const [quantity, setQuantity] = useState(1)

    return (
        <StyledView className={`flex-row items-center ${classBoxQuantity}`}>
            <TextBodySmall className='text-dark-gray mr-1'>QTY:</TextBodySmall>
            <AppButton onPress={() => setQuantity(quantity - 1)} ClassContent={'text-dark-gray'}>-</AppButton>
            <TextBodySmall className='text-dark-gray mx-1'>{quantity}</TextBodySmall>
            <AppButton onPress={() => setQuantity(quantity + 1)} ClassContent={'text-dark-gray'}>+</AppButton>
        </StyledView>
    )
}

export default BoxQuantity