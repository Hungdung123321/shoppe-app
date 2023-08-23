import React, { useRef } from 'react'
import { StyledScrollView, StyledView } from '../../../components/ReactCoreStyled/ReactCore'
import { Footer, Header, ShoppingCartItem, ShopppingBagModal } from '../../../components'
import { SHOPPING_BAG_DATA } from '../../../constants/common'



const DefaultLayout = ({ ShowSearchBar = true, children }) => {

    const ShoppingBagRef = useRef(null)

    return (
        <StyledView className='relative px-1 bg-light-gray'>
            <Header onPressCart={() => ShoppingBagRef.current.open()} hideSearchbar={ShowSearchBar} />
            <StyledScrollView showsVerticalScrollIndicator={false} className='pb-4'>
                {children}
                <Footer />
                <StyledView className='h-18' />
            </StyledScrollView>
            <ShopppingBagModal
                Modalref={ShoppingBagRef}
                data={SHOPPING_BAG_DATA}
                renderItem={({ item }) => <StyledView className='my-1'>
                    <ShoppingCartItem />
                </StyledView>
                }
            />
        </StyledView>
    )
}

export default DefaultLayout
