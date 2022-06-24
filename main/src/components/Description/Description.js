import { mount } from 'description/Description';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Description = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        // const { onParentNavigate } = mount(ref.current)
        // history.listen(onParentNavigate)
        mount()
    }, [history])

    return <div className="left-sidebar-module"><app-root></app-root></div>;
}

export default Description;