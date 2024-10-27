import React from 'react';

function LoadingSpinner() {
    return (
        <div className="absolute inset-0 flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    );
}

export default LoadingSpinner;