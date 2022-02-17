import React, {useState} from 'react';

export const Switch: React.FC = () => {
    const [checked, setChecked] = useState(true)
    const onCheckChangeHandler = () => {
        setChecked(prev => !prev)
    }
    return (
        <div className="flex justify-center">
            <div className="form-check form-switch p-0">
                <input
                    className="
                    form-check-input
                    appearance-none
                    w-9
                    rounded-full
                    float-left
                    h-5
                    align-top
                    bg-gray-500
                    bg-no-repeat
                    bg-contain
                    bg-black
                    focus:outline-none
                    checked:bg-black
                    cursor-pointer
                    shadow-sm
                    md:hover:scale-105
                    transform
                    transition
                    ease-out
                    duration-200
                    "
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onChange={onCheckChangeHandler}
                    checked={checked} />
            </div>
        </div>
    );
};
