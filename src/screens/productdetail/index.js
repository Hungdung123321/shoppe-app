import React from 'react'
import { ButtonIcon, Heading3, Heading5, StyledFlatList, StyledImage, StyledText, StyledView } from '../../components/ReactCoreStyled/ReactCore'
import { IC_share, IMG_product1 } from '../../assets'
import { AppButton, BoxText, CardProduct, DropDown, Wraper } from '../../components'
import { SIMILIAR_PRODUCT_DATA } from '../../constants/common'

const ProductDetail = () => {

    return (
        <StyledView>
            <StyledView className='w-full h-23.375'>
                <StyledImage className='w-full h-full' source={IMG_product1} />
            </StyledView>
            <StyledView className='mt-2.5 border-b border-gray py-2'>
                <Heading3 className='text-black'>Hal Earrings</Heading3>
                <StyledView className='flex-row items-center justify-between'>
                    <Heading5 className='text-accent'>$ 25,00</Heading5>
                    <ButtonIcon path={IC_share} />
                </StyledView>
                <AppButton
                    className='mt-2.5 mb-1 w-full h-2 border border-black rounded-lg'
                    ClassContent={'text-black m-auto'}
                >
                    ADD TO CART
                </AppButton>
                <BoxText />
            </StyledView>
            <StyledView className='py-1 border-b border-gray mb-1.5'>
                <DropDown />
                <DropDown />
                <DropDown />
            </StyledView>
            <Wraper title={'Similar Items'}>
                <StyledFlatList
                    data={SIMILIAR_PRODUCT_DATA}
                    renderItem={({ item }) => <CardProduct style={'mr-1'} title={item.title} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </Wraper>
        </StyledView>
    )
}

export default ProductDetail