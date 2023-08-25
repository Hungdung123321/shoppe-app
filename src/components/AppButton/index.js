import React from 'react';
import { StyledButton, StyledImage, TextBodySmall } from '../ReactCoreStyled/ReactCore';
import { BUTTON_TYPE } from '../../constants/common';

const AppButton = ({ type = BUTTON_TYPE.DEFAULT, children, ClassContent, path, ...rest }) => {

    switch (type) {
        case BUTTON_TYPE.DEFAULT:
            return <StyledButton hitSlop={2} {...rest}>
                <TextBodySmall className={ClassContent}>{children}</TextBodySmall>
            </StyledButton>;
        case BUTTON_TYPE.ICON:
            return <StyledButton hitSlop={2} {...rest}>
                <StyledImage source={path} />
            </StyledButton>;

    }

};

export default AppButton;