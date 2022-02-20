import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {darkmodeActions} from "../store/action-creators/darkmode/darkmode.action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const Switch: React.FC = React.memo(() => {
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    const [checked, setChecked] = useState(isDarkMode)

    const dispatch = useDispatch()

    const onCheckChangeHandler = () => {
        setChecked(prev => !prev)
    }

    useEffect(() => {
        dispatch(darkmodeActions.darkModeChanged(checked))
    }, [checked])

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
})
