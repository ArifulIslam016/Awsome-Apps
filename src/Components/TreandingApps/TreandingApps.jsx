import React from 'react';
import useApps from '../../CustomHooks/CustomHook';

const TreandingApps = () => {
    const {Apps}=useApps()
    return (
        <div>
            <h1>{Apps.length}</h1>
        </div>
    );
};

export default TreandingApps;