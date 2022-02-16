import React, {useState} from 'react';

export const Switch: React.FC = () => {
    const [checked, setChecked] = useState(true)
    const onCheckChangeHandler = () => {
        setChecked(prev => !prev)
    }
    return (
        <div className="flex justify-center">
            <div className="form-check form-switch">
                <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-black focus:outline-none cursor-pointer shadow-sm"
                    type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={onCheckChangeHandler} checked={checked} />
            </div>
        </div>
    );
};
