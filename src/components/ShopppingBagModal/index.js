import React, { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { StyledView } from '../ReactCoreStyled/ReactCore'
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet'
import { SHOPPING_BAG_DATA } from '../../constants/common'
import { ShoppingCartItem } from '../../components'
import { FooterModalShoppingBag, HeaderModalShoppingBag } from './utils'

const ShoppingBagModal = ({
    Modalref,
    data,
    renderItem,
    onBackButton,
    ...resetModal
}) => {

    const snapPoints = useMemo(() => ["100%"], []);

    return (
        <BottomSheetModal
            ref={Modalref}
            snapPoints={snapPoints}
            enablePanDownToClose={false}
        >
            <StyledView className='flex-1'>
                <HeaderModalShoppingBag onBackButton={onBackButton} />
                <BottomSheetFlatList
                    data={SHOPPING_BAG_DATA}
                    renderItem={() => (
                        <StyledView className='my-1'>
                            <ShoppingCartItem />
                        </StyledView>
                    )}
                    initialNumToRender={5}
                    contentContainerStyle={styles.contentContainerStyle}
                    keyExtractor={item => item.id}
                />
                <FooterModalShoppingBag />
            </StyledView>
        </BottomSheetModal>
    )
}

export default ShoppingBagModal

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: 16,
    }
})