import React from 'react';

function ErrorMessage({ message }) {
    return (
        <div className="flex justify-center items-center py-4 text-red-600 bg-red-100">
            <p>"Something went wrong. Please try again later!</p>
        </div>
    );
}

export default ErrorMessage;