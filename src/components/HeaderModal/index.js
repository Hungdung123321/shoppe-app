import React from 'react'
import { Heading5, StyledView } from '../ReactCoreStyled/ReactCore'
import { IC_Arrow_left } from '../../assets'
import { BUTTON_TYPE } from '../../constants/common'
import AppButton from '../AppButton'
import { FlatList } from 'react-native-gesture-handler'

const HeaderModal = () => {
    return (
        <StyledView className='w-full h-6 pt-1 px-1'>
            <StyledView className='relative my-auto'>
                <AppButton className={'absolute left-0 top-0 bottom-0'} type={BUTTON_TYPE.ICON} path={IC_Arrow_left} />
                <Heading5 className='text-black text-center'>Shopping bag</Heading5>
            </StyledView>
        </StyledView>
    )
}

export default HeaderModal