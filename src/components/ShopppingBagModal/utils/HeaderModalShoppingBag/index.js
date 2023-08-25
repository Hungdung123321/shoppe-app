import React from 'react'
import { Heading5, StyledView } from '../../../ReactCoreStyled/ReactCore'
import { IC_Arrow_left } from '../../../../assets'
import { BUTTON_TYPE } from '../../../../constants/common'
import { AppButton } from '../../../../components'


const HeaderModalShoppingBag = ({ onBackButton }) => {
    return (
        <StyledView className='w-full p-1 flex-row items-center'>
            <AppButton onPress={onBackButton} className={'float-left'} type={BUTTON_TYPE.ICON} path={IC_Arrow_left} />
            <Heading5 className='text-black mx-auto'>Shopping bag</Heading5>
        </StyledView>
    )
}

export default HeaderModalShoppingBag