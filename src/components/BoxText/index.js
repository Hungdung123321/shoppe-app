import React, { useState } from 'react'
import { ButtonIcon, StyledView, TextBodySmall } from '../ReactCoreStyled/ReactCore'
import { BOX_TEXT, POSITION_IC } from '../../constants/common'
import { IC_Filter } from '../../assets'


const BoxText = () => {

    const [changeclassname, setChangeclassname] = useState(BOX_TEXT.MINIMIZE)

    return (
        <StyledView className={`w-full ${changeclassname}`}>
            <StyledView className='w-full'>
                <TextBodySmall className='text-dark-gray'>
                    Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat sadasdsasadasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                </TextBodySmall>
            </StyledView>
            <ButtonIcon onPress={() => changeclassname === BOX_TEXT.MINIMIZE ? setChangeclassname(BOX_TEXT.MAXIMUM) : setChangeclassname(BOX_TEXT.MINIMIZE)} positionIC={POSITION_IC.RIGHT} path={IC_Filter}>
                <TextBodySmall className='text-accent'>View more</TextBodySmall>
            </ButtonIcon>
        </StyledView>
    )
}

export default BoxText