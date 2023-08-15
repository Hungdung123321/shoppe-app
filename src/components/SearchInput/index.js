import React from 'react'
import { StyledImage, StyledTextInput, StyledView } from '../ReactCoreStyled/ReactCore'
import { IC_cart } from '../../assets'

const SearchInput = ({ path, holderText, ...props }) => {

    return (
        <StyledView className='w-full bg-gray flex flex-row p-0.5 items-center rounded-md'>
            <StyledImage source={IC_cart} />
            <StyledTextInput placeholderTextColor={'#5A5A5A'} className='w-18  ml-0.5 h-2.5 text-base placeholder:text-dark-gray' {...props} />
        </StyledView>
    )
}

export default SearchInput