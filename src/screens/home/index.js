import React from 'react'
import Swiper from 'react-native-swiper'
import { useDispatch, useSelector } from 'react-redux'
import { StyledFlatList, StyledView } from '../../components/ReactCoreStyled/ReactCore'
import { PRODUCT_DATA, TAG_DATA } from '../../constants/common'
import { CardTag, Wraper, CardProduct, SliderProduct } from '../../components'
import { useNavigation } from '@react-navigation/native'
import { SCREEN_NAME } from '../../routes/router'



const Home = () => {

    const navigation = useNavigation()

    return (
        <StyledView className='mt-1'>
            <StyledFlatList
                className='mb-2'
                data={TAG_DATA}
                renderItem={({ item }) => <CardTag style={'mr-0.5'} title={item.title} />}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
            <StyledView className='w-full h-22.5 mx-auto'>
                <Swiper showsButtons={false}>
                    <SliderProduct />
                    <SliderProduct />
                    <SliderProduct />
                    <SliderProduct />
                    <SliderProduct />
                </Swiper>
            </StyledView>
            <Wraper onViewAll={() => navigation.navigate(SCREEN_NAME.DETAIL)} classWarper={'mt-1'}>
                <StyledFlatList
                    className='w-full'
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
            </Wraper>
        </StyledView>
    )
}

export default Home
