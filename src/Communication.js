import React, { useState } from 'react';
import Text from './Banner-Text'; // Adjust the import based on your file structure

const Communication = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    return (
        <div>
            <Text 
                currentBannerIndex={currentBannerIndex} 
                setCurrentBannerIndex={setCurrentBannerIndex} 
            />
        </div>
    );
};

export default Communication;