import React from 'react'
import Header from '../../../components/Header'
import { StyledScrollView, StyledView } from '../../../components/ReactCoreStyled/ReactCore'
import Footer from '../../../components/footer'

const DefaultLayout = ({ children }) => {
    return (
        <StyledView className='relative px-1'>
            <Header />
            <StyledScrollView showsVerticalScrollIndicator={false} className='pb-4'>
                {children}
                <Footer />
                <StyledView className='h-18' />
            </StyledScrollView>
        </StyledView>
    )
}

export default DefaultLayout
