import React from 'react'
import { ButtonIcon, StyledButton, StyledText, StyledView } from '../ReactCoreStyled/ReactCore'
import FooterInput from '../FooterInput'
import { Text } from 'react-native'
import { IC_facebook, IC_instargram, IC_twiter } from '../../assets'
import { AppButton } from '../../components'


const Footer = () => {
    return (
        <StyledView className='w-full py-2'>
            <FooterInput style={'mb-2.512'} />
            <StyledView className='mt-5.125 mb-2'>
                <AppButton ClassContent={`text-sm text-dark-gray py-0.5`}>TERMS OF SERVICES</AppButton>
                <AppButton ClassContent={`text-sm text-dark-gray py-0.5`}>CONTACT</AppButton>
                <AppButton ClassContent={`text-sm text-dark-gray py-0.5`}>TERMS OF SERVICES</AppButton>
            </StyledView>
            <StyledView className='flex-row mb-2'>
                <StyledText className={`text-sm text-black`}>Follow us   ----------------  </StyledText>
                <StyledView className='w-1/3 flex-row justify-around items-center'>
                    <ButtonIcon path={IC_facebook} />
                    <ButtonIcon path={IC_instargram} />
                    <ButtonIcon path={IC_twiter} />
                </StyledView>
            </StyledView>
            <StyledText className='text-sm text-black'>© 2020 Shelly. Terms of use and privacy policy.</StyledText>
        </StyledView>
    )
}

export default Footer