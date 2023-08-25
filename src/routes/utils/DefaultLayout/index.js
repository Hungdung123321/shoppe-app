import React, { useCallback, useRef } from 'react'
import { StyledScrollView, StyledView } from '../../../components/ReactCoreStyled/ReactCore'
import { Footer, Header, ShopppingBagModal } from '../../../components'
import { useFocusEffect } from '@react-navigation/native'



const DefaultLayout = ({ ShowSearchBar = true, children }) => {

    const ShoppingBagRef = useRef(null)

    return (
        <StyledView className='relative px-1 bg-light-gray'>
            <Header onPressCart={() => ShoppingBagRef.current?.present()} hideSearchbar={ShowSearchBar} />
            <StyledScrollView showsVerticalScrollIndicator={false} className='pb-4'>
                {children}
                <Footer />
                <StyledView className='h-18' />
            </StyledScrollView>
            <ShopppingBagModal Modalref={ShoppingBagRef} onBackButton={() => ShoppingBagRef.current?.dismiss()} />
        </StyledView>
    )
}

export default DefaultLayout
