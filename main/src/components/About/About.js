import { mount } from 'about/About';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current)
        history.listen(onParentNavigate)
    }, [history])

    return <div ref={ref} />
}

export default About;