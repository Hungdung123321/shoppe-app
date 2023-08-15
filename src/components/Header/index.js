import React from 'react'
import { IC_cart, IC_sidebar, LOGO } from '../../assets'
import { ButtonIcon, StyledImage, StyledView } from '../ReactCoreStyled/ReactCore'
import SearchInput from '../SearchInput'

const Header = () => {
    return (
        <StyledView className='fixed top-0 left-0 right-0 pt-2'>
            <StyledView className='mb-1 flex-row items-center justify-between'>
                <StyledImage source={LOGO} />
                <StyledView className='flex-row'>
                    <ButtonIcon classButtonIcon=' mr-2' path={IC_cart} />
                    <ButtonIcon path={IC_sidebar} />
                </StyledView>
            </StyledView>
            <SearchInput placeholder={'Search'} />
        </StyledView>
    )
}

export default Header
