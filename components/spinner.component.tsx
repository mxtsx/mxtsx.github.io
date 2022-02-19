import React from 'react';

export const Spinner = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};