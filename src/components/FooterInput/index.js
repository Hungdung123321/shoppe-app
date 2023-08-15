import React from 'react'
import { StyledImage, StyledTextInput, StyledView } from '../ReactCoreStyled/ReactCore'
import { IC_arrow_right } from '../../assets'


const FooterInput = ({ style, ...props }) => {
    return (
        <StyledView className={`flex flex-row pr-0.5 items-center justify-between  rounded-md border-b border-black ${style}`}>
            <StyledTextInput placeholderTextColor={'#5A5A5A'} placeholder='Give an email, get the newsletter.' className='w-18  ml-0.5 text-base placeholder:text-dark-gray' {...props} />
            <StyledImage source={IC_arrow_right} />
        </StyledView>
    )
}

export default FooterInput