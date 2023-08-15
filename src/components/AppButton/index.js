import React from 'react';
import { StyledButton, StyledText } from '../ReactCoreStyled/ReactCore';
import { BUTTON_TYPE } from '../../constants/common';

const AppButton = ({ type = BUTTON_TYPE.DEFAULT, children, ClassContent, ...rest }) => {

    switch (type) {
        case BUTTON_TYPE.DEFAULT:
            return <StyledButton {...rest}>
                <StyledText className={ClassContent}>{children}</StyledText>
            </StyledButton>;
    }

};

export default AppButton;