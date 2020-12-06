import React from 'react';
import AdSense from 'react-adsense';

const Adsense = () => (
    <div>
        <AdSense.Google
            client='ca-pub-7271504359480847'
            slot=''
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
        />
    </div>
);

export default Adsense;
