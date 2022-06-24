import { mount } from 'users/Users';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Users = () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current)
        history.listen(onParentNavigate)
    }, [history])

    return <div ref={ref} />
}

export default Users;