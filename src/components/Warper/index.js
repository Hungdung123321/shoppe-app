import React from 'react'
import { Heading5, StyledButton, StyledText, StyledView, TextBodyMedium } from '../ReactCoreStyled/ReactCore'


const Wraper = ({ children, classWarper, onViewAll, title }) => {
    return (
        <StyledView>
            <StyledView className={`flex flex-row justify-between mb-1 ${classWarper}`}>
                <Heading5 className='text-black'>{title || null}</Heading5>
                <StyledButton onPress={onViewAll}><TextBodyMedium className='text-accent'>View all</TextBodyMedium></StyledButton>
            </StyledView>
            {children}
        </StyledView>
    )
}

export default Wraper