import React from 'react';
import { StyledButton, StyledText, TextBodySmall } from '../ReactCoreStyled/ReactCore';
import { BUTTON_TYPE } from '../../constants/common';

const AppButton = ({ type = BUTTON_TYPE.DEFAULT, children, ClassContent, ...rest }) => {

    switch (type) {
        case BUTTON_TYPE.DEFAULT:
            return <StyledButton {...rest}>
                <TextBodySmall className={ClassContent}>{children}</TextBodySmall>
            </StyledButton>;
    }

};

export default AppButton;