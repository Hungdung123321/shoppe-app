import React from 'react'
import Header from '../../../components/Header'
import { StyledScrollView, StyledView } from '../../../components/ReactCoreStyled/ReactCore'
import Footer from '../../../components/footer'

const DefaultLayout = ({ ShowSearchBar = true, children }) => {
    return (
        <StyledView className='relative px-1 bg-light-gray'>
            <Header hideSearchbar={ShowSearchBar} />
            <StyledScrollView showsVerticalScrollIndicator={false} className='pb-4'>
                {children}
                <Footer />
                <StyledView className='h-18' />
            </StyledScrollView>
        </StyledView>
    )
}

export default DefaultLayout
