import React from 'react'
import { ButtonIcon, Heading3, StyledFlatList, StyledView, TextBodySmall } from '../../components/ReactCoreStyled/ReactCore'
import { IC_Filter } from '../../assets'
import { PRODUCT_DATA } from '../../constants/common'
import { CardProduct } from '../../components'


const Detail = () => {
    return (
        <StyledView>
            <Heading3 className='text-black mb-1.25'>SHOP</Heading3>
            <ButtonIcon path={IC_Filter}>
                <TextBodySmall className='text-accent ml-0.5'>Filters</TextBodySmall>
            </ButtonIcon>
            <StyledFlatList
                className='w-full mt-2'
                data={PRODUCT_DATA}
                scrollEnabled={false}
                renderItem={({ item, index }) => {
                    return (
                        <StyledView className='w-1/2'>
                            <CardProduct style={`${index % 2 === 0 ? 'self-start' : 'self-end'} mb-2`} title={item.title} />
                        </StyledView>

                    )
                }}
                keyExtractor={item => item.id}
                numColumns={2}
                horizontal={false}
            />
        </StyledView>
    )
}

export default Detail