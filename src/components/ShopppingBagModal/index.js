import React, { useRef } from 'react'
import { StyleSheet } from 'react-native'
import AppModal from '../AppModal'
import HeaderModal from '../HeaderModal'

const ShoppingBagModal = ({
    Modalref,
    data,
    renderItem,
    ...resetModal
}) => {

    const ShoppingBagContentRef = useRef(null)

    return (
        <AppModal
            ref={Modalref}
            contentRef={ShoppingBagContentRef}
            modalStyle={{ minHeight: '100%' }}
            adjustToContentHeight={true}
            disableScrollIfPossible={false}
            flatListProps={{
                data: data,
                renderItem: renderItem,
                contentContainerStyle: styles.contentContainerStyle,
                keyExtractor: item => item.id,
                showsVerticalScrollIndicator: false,
                initialNumToRender: 10,
                maxToRenderPerBatch: 10,
                scrollEnabled: true,
            }}
            HeaderComponent={() => (
                <HeaderModal />
            )}
            {...resetModal}
        />
    )
}

export default ShoppingBagModal

const styles = StyleSheet.create({
    contentContainerStyle: {
        height: '100%',
        paddingHorizontal: 16
    }
})