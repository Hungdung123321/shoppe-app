import React, { forwardRef, useRef } from 'react'
import { Modalize } from 'react-native-modalize'

const AppModal = forwardRef((props, ref) => {
    const modalizeRef = useRef(null);

    return <Modalize ref={ref || modalizeRef} {...props} />;
});

export default AppModal